import styled from 'styled-components'
import Button from '../components/Button'

export default function CreatePage() {
  return (
    <Form>
      <label>
        List your favourite wizards, separated by comma:
        <input type="text" placeholder="Write here ..." />
      </label>
      <Button>Create!</Button>
    </Form>
  )
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
