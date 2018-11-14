import React from 'react'
import { hot } from 'react-hot-loader'
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import routes from 'config/route.config'
import navData from 'config/nav.config'
import { getLoadableComponent } from 'utils/common'
import stores from './stores'

const LoadableBasicLayout = getLoadableComponent(() => import('layouts/BasicLayout'))

const App = () => {
  return (
    <Provider {...stores}>
      <HashRouter>
        <Route
          path="/"
          render={({ location }) => (
            <LoadableBasicLayout location={location} routes={routes} navData={navData} />
          )}
        />
      </HashRouter>
    </Provider>
  )
}

export default hot(module)(App)
