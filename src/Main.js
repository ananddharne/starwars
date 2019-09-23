import React from 'react'
import { Switch, Route } from 'react-router-dom'
import People from './People'
import Home from "./Home"
import Roster from "./Roster"

const Main = () => (
  <main>
    <Switch>
    <Route exact path='/' component={Home}/>
      <Route path='/character' component={Roster}/>
    </Switch>
  </main>
)

export default Main
