import { render, screen } from "@testing-library/react"
import Main from "."

describe(('Main'), () => {
  it('should be able to render an heading', () => {
    // renderiza o componente
    // busca o elemento e verifica se ele existe
    const { container } = render(<Main />)
    expect(screen.getByRole('heading', { name: /main/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
