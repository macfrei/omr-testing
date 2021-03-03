import styled from 'styled-components/macro'
import Button from './Button'

export default function AppForm({ onCreateWizards }) {
  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Favourite Wizards:
        <input
          name="namesOfWizards"
          placeholder="Write here separated by comma..."
        />
      </label>
      <Button>Create!</Button>
    </Form>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.namesOfWizards

    onCreateWizards(input.value.split(',').map((wizard) => wizard.trim()))
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
