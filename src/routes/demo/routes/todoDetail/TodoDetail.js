import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject, PropTypes as ObservablePropTypes } from 'mobx-react'

@inject(({ todos }) => ({
  todos: todos.todos,
}))
@observer
class TodoDetail extends React.Component {
  componentDidMount() {
    // todo
  }

  getTodo = () => {
    const { match, todos } = this.props

    return todos.find((item) => `${item.id}` === match.params.id)
  }

  render() {
    const todo = this.getTodo()

    return (
      <ul>
        <li>
          <span>id：</span>
          <span>{todo.id}</span>
        </li>
        <li>
          <span>名称：</span>
          <span>{todo.title}</span>
        </li>
        <li>
          <span>是否完成：</span>
          <span>{todo.isFinished ? '完成' : '未完成'}</span>
        </li>
      </ul>
    )
  }
}

TodoDetail.wrappedComponent.propTypes = {
  todos: ObservablePropTypes.observableArray.isRequired,
}

TodoDetail.propTypes = {
  match: PropTypes.object.isRequired,
}

export default TodoDetail
