import { render, screen } from '@testing-library/react'
import AppNavigation from './AppNavigation'
import { MemoryRouter } from 'react-router-dom'

describe('AppNavigation', () => {
  it('should render a navigation with two links', () => {
    render(
      <MemoryRouter>
        <AppNavigation />
      </MemoryRouter>
    )
    expect(screen.getAllByRole('link')).toHaveLength(2)
  })
})
