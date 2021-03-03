import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from './Button'

export default function AppNavigation() {
  return (
    <Navigation>
      <Button as={NavLink} exact to="/">
        Home
      </Button>
      <Button as={NavLink} to="/create">
        Create
      </Button>
    </Navigation>
  )
}

const Navigation = styled.nav`
  display: flex;
  justify-content: space-evenly;
`
