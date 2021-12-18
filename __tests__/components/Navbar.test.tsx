import { render, screen } from '@testing-library/react'
import Navbar from '../../components/Navbar/Navbar'

describe('<Navbar />', () => {
  it('renders a heading', () => {
    render(<Navbar />)
    expect(screen.getByText('Navbar')).toBeInTheDocument();
  })
})