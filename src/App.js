import { useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import AppHeader from './components/AppHeader'
import AppNavigation from './components/AppNavigation'
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'

function App() {
  const [wizards, setWizards] = useState([])
  const { push } = useHistory()

  return (
    <AppLayout>
      <Switch>
        <Route exact path="/">
          <AppHeader title="Favourite Wizard" />
          <HomePage favouriteWizards={wizards} />
        </Route>
        <Route path="/create">
          <AppHeader title="Create!" />
          <CreatePage onCreateWizards={handleWizards} />
        </Route>
      </Switch>
      <AppNavigation />
    </AppLayout>
  )

  function handleWizards(wizards) {
    setWizards(wizards)
    push('/')
  }
}

export default App

const AppLayout = styled.div`
  display: grid;
  grid-template-rows: 50px auto 50px;
  height: 100%;
`
