import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import AppHeader from './components/AppHeader'
import AppNavigation from './components/AppNavigation'
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <AppLayout>
      <Switch>
        <Route exact path="/">
          <AppHeader title="Favourite Wizard" />
          <HomePage />
        </Route>
        <Route path="/create">
          <AppHeader title="Create!" />
          <CreatePage />
        </Route>
      </Switch>
      <AppNavigation />
    </AppLayout>
  )
}

export default App

const AppLayout = styled.div`
  display: grid;
  grid-template-rows: 50px auto 50px;
  height: 100%;
`
