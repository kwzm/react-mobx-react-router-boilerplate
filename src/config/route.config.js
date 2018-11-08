import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getLoadableComponent } from 'utils/common'

const LoadedHome = getLoadableComponent(() => import('routes/home'))

const routes = [
  <Route path="/" render={() => <Redirect to="/home" />} exact key="first" />,
  <Route path="/home" component={LoadedHome} key="home" />,
]

export default routes
