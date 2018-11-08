import React from 'react'
import { hot } from 'react-hot-loader'
import { HashRouter, Route } from 'react-router-dom'
import BasicLayout from 'layouts/BasicLayout'
import routes from 'config/route.config'
import navData from 'config/nav.config'

const App = () => {
  return (
    <HashRouter>
      <Route path="/" render={() => <BasicLayout routes={routes} navData={navData} />} />
    </HashRouter>
  )
}

export default hot(module)(App)
