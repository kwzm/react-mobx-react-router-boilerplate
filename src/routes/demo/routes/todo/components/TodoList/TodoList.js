import React from 'react'
import { observer, inject, PropTypes } from 'mobx-react'
import TodoItem from '../TodoItem'
import styles from './TodoList.module.less'

@inject(({ demo }) => ({
  data: demo.filteredTodos,
}))
@observer
class TodoList extends React.Component {
  render() {
    const { data } = this.props

    return (
      <ul className={styles.todoList}>
        {data.length > 0 ? (
          data.map(item => <TodoItem key={item.id} todo={item} />)
        ) : (
          <div className={styles.noData}> no data </div>
        )}
      </ul>
    )
  }
}

TodoList.wrappedComponent.propTypes = {
  data: PropTypes.observableArrayOf(PropTypes.observableObject).isRequired,
}

export default TodoList
