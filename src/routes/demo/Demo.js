import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getLoadableComponent } from '@/utils/common'

const LoadedTodo = getLoadableComponent(() =>
  import(/* webpackChunkName: "todo" */ './routes/todo')
)
const LoadedTodoDetail = getLoadableComponent(() =>
  import(/* webpackChunkName: "todoDetail" */ './routes/todoDetail')
)
const LoadedProducts = getLoadableComponent(() =>
  import(/* webpackChunkName: "products" */ './routes/products')
)

const Demo = props => {
  const {
    match: { path },
  } = props

  return [
    <Route path={path} exact render={() => <Redirect to="/demo/todo" />} key="root" />,
    <Route path={`${path}/todo`} exact component={LoadedTodo} key="todo" />,
    <Route path={`${path}/todo/:id`} exact component={LoadedTodoDetail} key="todoDetail" />,
    <Route path={`${path}/products`} exact component={LoadedProducts} key="products" />,
  ]
}

export default Demo
