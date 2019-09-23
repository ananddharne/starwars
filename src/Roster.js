import React from 'react'
import { Switch, Route } from 'react-router-dom'
import People from './People'
import Profile from './Profile'

const Roster = () => (
  <Switch>
    <Route exact path='/character' component={People}/>
    <Route path='/character/:id' component={Profile}/>
  </Switch>
)


export default Roster
