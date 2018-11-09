import React from 'react'
import { hot } from 'react-hot-loader'
import { HashRouter, Route } from 'react-router-dom'
import routes from 'config/route.config'
import navData from 'config/nav.config'
import { getLoadableComponent } from 'utils/common'

const LoadableBasicLayout = getLoadableComponent(() => import('layouts/BasicLayout'))

const App = () => {
  return (
    <HashRouter>
      <Route path="/" render={({ location }) => <LoadableBasicLayout location={location} routes={routes} navData={navData} />} />
    </HashRouter>
  )
}

export default hot(module)(App)
