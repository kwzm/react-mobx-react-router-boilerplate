import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { observer, PropTypes as ObservablePropTypes, inject } from 'mobx-react'
import { List, Checkbox, Icon } from 'antd'
import styles from './TodoItem.module.less'

@inject(({ demo }) => ({
  removeTodo: demo.removeTodo,
}))
@observer
class TodoItem extends React.Component {
  handleChange = () => {
    const { todo } = this.props

    todo.toggle()
  }

  handleClick = () => {
    const { todo, removeTodo } = this.props

    removeTodo(todo)
  }

  render() {
    const { todo } = this.props

    return (
      <List.Item actions={[<Icon type="close" onClick={this.handleClick} />]}>
        <div className={styles.item}>
          <Checkbox checked={todo.isFinished} onChange={this.handleChange} />
          <span className={classNames(styles.title, { [styles.finished]: todo.isFinished })}>
            {todo.title}
          </span>
        </div>
      </List.Item>
    )
  }
}

TodoItem.wrappedComponent.propTypes = {
  removeTodo: PropTypes.func.isRequired,
}

TodoItem.propTypes = {
  todo: ObservablePropTypes.observableObject.isRequired,
}

export default TodoItem
