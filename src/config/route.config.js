import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getLoadableComponent } from '@/utils/common'

const LoadedHome = getLoadableComponent(() => import(/* webpackChunkName: "home" */'@/routes/home'))
const LoadedDemo = getLoadableComponent(() => import(/* webpackChunkName: "demo" */'@/routes/demo'))
const Loaded404 = getLoadableComponent(() => import(/* webpackChunkName: "404" */'@/routes/404'))

const routes = [
  <Route path="/" exact render={() => <Redirect to="/home" />} key="root" />,
  <Route path="/home" component={LoadedHome} key="home" />,
  <Route path="/demo" component={LoadedDemo} key="demo" />,
  <Route component={Loaded404} key="404" />,
]

export default routes
