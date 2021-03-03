import styled from 'styled-components/macro'

export default function AppHeader({ title }) {
  return (
    <Header>
      <h1>{title}</h1>
    </Header>
  )
}

const Header = styled.header`
  padding: 12px;
  background-color: #740001;
  color: white;
  text-align: center;

  h1 {
    margin: 0;
  }
`
