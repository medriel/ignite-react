import axios, { AxiosError } from 'axios'
import { parseCookies, setCookie } from 'nookies'
import { signOut } from '../contexts/AuthContext'

let isRefreshing = false
let failedRequestQueue = []

export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
      Authorization: `Bearer ${cookies['nextauth.token']}`
    }
  })

  api.interceptors.response.use(response => {
    return response
  }, (error: AxiosError) => {
    if (error.response.status === 401) {
      if (error.response.data?.code === 'token.expired') {
        //renovar o token
        cookies = parseCookies(ctx);

        const { 'nextauth.refreshToken': refreshToken } = cookies
        const originalConfig = error.config

        if (!isRefreshing) {
          isRefreshing = true

          api.post('/refresh', {
            refreshToken,
          }).then(response => {
            const { token } = response.data

            //salvando informações atualizadas nos cookies
            setCookie(ctx, 'nextauth.token', token, {
              maxAge: 60 * 60 * 24 * 30, //30 dias
              path: '/'
            })
            setCookie(ctx, 'nextauth.refreshToken', response.data.refreshToken, {
              maxAge: 60 * 60 * 24 * 30, //30 dias
              path: '/'
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            failedRequestQueue.forEach(request => request.resolve(token))
            failedRequestQueue = []
          }).catch(err => {
            failedRequestQueue.forEach(request => request.reject(err))
            failedRequestQueue = []

            if (process.browser) {
              signOut()
            }
          }).finally(() => {
            isRefreshing = false
          })
        }

        return new Promise((resolve, reject) => {
          failedRequestQueue.push({
            resolve: (token: string) => {
              originalConfig.headers['Authorization'] = `Bearer ${token}`

              resolve(api(originalConfig))
            },
            reject: (err: AxiosError) => {
              reject(err)
            }
          })
        })
      } else {
        //deslogar o usuario
        if (process.browser) {
          signOut()
        }
      }
    }
    return Promise.reject(error)
  })

  return api
}