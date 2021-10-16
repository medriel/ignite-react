import { render, screen } from '@testing-library/react'
import { getPrismicClient } from '../../services/prismic'
import { mocked } from 'ts-jest/utils'
import Post, { getServerSideProps } from '../../pages/posts/[slug]'
import { getSession } from 'next-auth/client'

const post = {
  slug: 'my-new-post',
  title: 'my-new-post',
  content: '<p>Post excerpt</p>',
  updatedAt: '16 de Outubro'
}

jest.mock('next-auth/client')
jest.mock('../../services/prismic')

const renderPost = () => {
  render(<Post post={post} />)
}

describe('Post page', () => {
  it('should render correctly', () => {
    renderPost()
    expect(screen.getByText('my-new-post')).toBeInTheDocument()
    expect(screen.getByText('Post excerpt')).toBeInTheDocument()
  })

  it('redirects user if no subscription is found', async () => {
    const getSessionMocked = mocked(getSession)
    getSessionMocked.mockResolvedValueOnce(null)

    const response = await getServerSideProps({
      params: {
        slug: 'my-new-post'
      }
    } as any)

    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          destination: '/'
        })
      })
    )
  })

  it('loads initial data', async () => {
    const getPrismicClientMocked = mocked(getPrismicClient)
    const getSessionMocked = mocked(getSession)

    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [
            { type: 'heading', text: 'My new post' }
          ],
          content: [
            { type: 'paragraph', text: 'Post excerpt' }
          ]
        },
        last_publication_date: '04-01-2021'
      })
    } as any)

    getSessionMocked.mockResolvedValueOnce({
      activeSubscription: 'fake_subscription'
    } as any)

    const response = await getServerSideProps({
      params: {
        slug: 'my-new-post'
      }
    } as any)


    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: 'my-new-post',
            title: 'My new post',
            content: '<p>Post excerpt</p>',
            updatedAt: '01 de abril de 2021'
          }
        }
      })
    )
  })
})