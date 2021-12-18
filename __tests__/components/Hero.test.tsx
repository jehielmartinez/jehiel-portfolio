import { render, screen } from '@testing-library/react'
import Hero from '../../components/Hero/Hero'

const social = [
  {
    url: 'Test1',
    alt: 'test1',
    src: '/test',
  },
  {
    url: 'Test2',
    alt: 'test2',
    src: '/test2',
  },
]

describe('<Hero />', () => {
  it('renders the hero', () => {
    render(<Hero social={social} />)
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('hero-title')).toBeInTheDocument();
    expect(screen.getByTestId('hero-subtitle')).toBeInTheDocument();
  })

  it('renders the passsed hero social', () => {
    render(<Hero social={social} />)
    expect(screen.getAllByTestId('hero-social-element')).toHaveLength(social.length);
  })
})