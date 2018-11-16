import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { Radio } from 'antd'
import styles from './TodoFooter.module.less'

const actions = ['All', 'Active', 'Completed']

@inject(({ demo }) => ({
  left: demo.left,
  filter: demo.filter,
  filterTodos: demo.filterTodos,
}))
@observer
class TodoFooter extends React.Component {
  handleChange = e => {
    const { value } = e.target
    const { filterTodos } = this.props

    filterTodos(value)
  }

  render() {
    const { left, filter } = this.props

    return (
      <footer>
        <span className={styles.left}>{left} item(s) left</span>
        <Radio.Group value={filter} onChange={this.handleChange}>
          {actions.map(action => (
            <Radio.Button key={action} value={action} className={styles.action}>
              {action}
            </Radio.Button>
          ))}
        </Radio.Group>
      </footer>
    )
  }
}

TodoFooter.wrappedComponent.propTypes = {
  left: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  filterTodos: PropTypes.func.isRequired,
}

export default TodoFooter
