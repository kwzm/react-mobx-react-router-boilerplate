import React from 'react'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
import styles from './Todo.module.less'

const Todo = () => (
  <div className={styles.todo}>
    <TodoHeader />
    <TodoList />
    <TodoFooter />
  </div>
)

export default Todo
