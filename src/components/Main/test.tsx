import { render } from '@testing-library/react'
import Main from '.'

describe('Main', () => {
  it('should render snapshop', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
