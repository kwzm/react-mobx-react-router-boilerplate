import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { observer, PropTypes as ObservablePropTypes, inject } from 'mobx-react'
import { Checkbox, Icon } from 'antd'
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

  handleClose = () => {
    const { todo, removeTodo } = this.props

    removeTodo(todo)
  }

  render() {
    const { todo } = this.props

    return (
      <li className={styles.item}>
        <div className={styles.checkboxWrap}>
          <Checkbox checked={todo.isFinished} onChange={this.handleChange} />
        </div>
        <div className={styles.titleWrap}>
          <div>
            <Link to={`/demo/todo/${todo.id}`}>
              <span className={classNames({ [styles.finished]: todo.isFinished })}>
                {todo.title}
              </span>
            </Link>
          </div>
        </div>
        <div className={styles.deleteWrap}>
          <Icon type="close" onClick={this.handleClose} />
        </div>
      </li>
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
