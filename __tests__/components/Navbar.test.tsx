import { render, screen } from '@testing-library/react'
import Navbar from '../../components/Navbar/Navbar'

const elements = [
  {
    content: 'Test1',
    linkTo: '/test1'
  },
  {
    content: 'Test2',
    linkTo: '/test2'
  }
]

describe('<Navbar />', () => {
  it('renders the navbar', () => {
    render(<Navbar elements={elements} />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  })

  it('renders the passsed navbar elements', () => {
    render(<Navbar elements={elements} />)
    expect(screen.getAllByTestId('navbar-element')).toHaveLength(elements.length);
  })
})