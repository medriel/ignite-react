import { render } from '@testing-library/react'
import { ActiveLink } from '.'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe('ActiveLink component', () => {

  it('renders correctly', () => {
    const { debug, getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )
    //debug() // visualizar no terminal o html resultante
    expect(getByText('Home')).toHaveClass('active')
  })

  it('adds active class if the link as currently active', () => {
    const { debug, getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )
    //debug() // visualizar no terminal o html resultante
    expect(getByText('Home')).toBeInTheDocument()
  })
})