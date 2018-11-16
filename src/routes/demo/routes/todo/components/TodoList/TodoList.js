import React from 'react'
import { observer, inject, PropTypes } from 'mobx-react'
import { List } from 'antd'
import TodoItem from '../TodoItem'

@inject(({ demo }) => ({
  data: demo.filteredTodos,
}))
@observer
class TodoList extends React.Component {
  render() {
    const { data } = this.props

    return <List dataSource={data.toJS()} renderItem={item => <TodoItem todo={item} />} />
  }
}

TodoList.wrappedComponent.propTypes = {
  data: PropTypes.observableArrayOf(PropTypes.observableObject).isRequired,
}

export default TodoList
