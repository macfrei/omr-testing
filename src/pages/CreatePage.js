import styled from 'styled-components'
import Button from '../components/Button'

export default function CreatePage({ onCreateWizards }) {
  return (
    <Form onSubmit={handleSubmit}>
      <label>
        List your favourite wizards, separated by comma:
        <input name="namesOfWizards" placeholder="Write here ..." />
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
  }

  input {
  }
`
