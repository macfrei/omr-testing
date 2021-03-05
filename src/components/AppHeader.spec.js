import { render, screen } from '@testing-library/react'
import AppHeader from './AppHeader'

describe('AppHeader', () => {
  it('should render a component from props', () => {
    render(<AppHeader title="Wizard World" />)

    expect(screen.getByText('Wizard World')).toBeInTheDocument()
  })
})
