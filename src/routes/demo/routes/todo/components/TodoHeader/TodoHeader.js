import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import { observer, inject } from 'mobx-react'
import styles from './TodoHeader.module.less'

@inject(({ demo }) => ({
  createTodo: demo.createTodo,
}))
@observer
class TodoHeader extends React.Component {
  state = {
    value: '',
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  handleEnter = e => {
    const { createTodo } = this.props
    const { value } = e.target

    createTodo(value)
    this.setState({ value: '' })
  }

  render() {
    const { value } = this.state

    return (
      <header className={styles.header}>
        <h1>Todos</h1>
        <Input
          value={value}
          size="large"
          onChange={this.handleChange}
          onPressEnter={this.handleEnter}
          placeholder="What needs to be finished?"
        />
      </header>
    )
  }
}

TodoHeader.wrappedComponent.propTypes = {
  createTodo: PropTypes.func.isRequired,
}

export default TodoHeader
