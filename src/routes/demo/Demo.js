import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getLoadableComponent } from '@/utils/common'

const LoadedTodo = getLoadableComponent(() => import('./routes/todo'))
const LoadedTodoDetail = getLoadableComponent(() => import('./routes/todoDetail'))

const Demo = props => {
  const {
    match: { path },
  } = props

  return [
    <Route path={path} exact render={() => <Redirect to="/demo/todo" />} key="root" />,
    <Route path={`${path}/todo`} exact component={LoadedTodo} key="todo" />,
    <Route path={`${path}/todo/:id`} exact component={LoadedTodoDetail} key="todoDetail" />,
  ]
}

export default Demo
