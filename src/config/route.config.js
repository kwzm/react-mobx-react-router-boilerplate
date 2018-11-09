import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getLoadableComponent } from 'utils/common'

const LoadedHome = getLoadableComponent(() => import('routes/home'))
const Loaded404 = getLoadableComponent(() => import('routes/404'))

const routes = [
  <Route path="/" exact render={() => <Redirect to="/home" />} key="first" />,
  <Route path="/home" component={LoadedHome} key="home" />,
  <Route component={Loaded404} key="404" />,
]

export default routes
