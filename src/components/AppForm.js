import styled from 'styled-components/macro'
import commaSeparatedToArray from '../lib/commaSeparatedToArray'
import Button from './Button'

export default function AppForm({ onCreateWizards }) {
  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Favourite Wizards:
<<<<<<< HEAD
        <input name="namesOfWizards" placeholder="Write here ..." />
=======
        <input
          name="namesOfWizards"
          placeholder="Write here separated by comma..."
        />
>>>>>>> main
      </label>
      <Button>Create!</Button>
    </Form>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.namesOfWizards

    onCreateWizards(commaSeparatedToArray(input.value))
    form.reset()
    input.focus()
  }
}

const Form = styled.form`
  display: grid;
  gap: 20px;
  place-items: center;
  padding: 8px;

  label {
    display: grid;
    gap: 20px;
    width: 100%;
  }
`
