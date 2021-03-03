import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AppForm from './AppForm'

describe('AppForm', () => {
  it('renders a form with an input and a button', () => {
    render(<AppForm />)
    expect(screen.getByLabelText('Favourite Wizards:')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Create!' })).toBeInTheDocument()
  })

  it('applies the list of names to the submit callback', () => {
    const callback = jest.fn()
    render(<AppForm onCreateWizards={callback} />)
    userEvent.type(screen.getByLabelText('Favourite Wizards:'), 'Jane, John')
    userEvent.click(screen.getByRole('button'))
    expect(callback).toHaveBeenCalledWith(['Jane', 'John'])
  })
})
