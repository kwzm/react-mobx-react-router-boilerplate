import React from 'react'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
import styles from './Demo.module.less'

const Demo = () => (
  <div className={styles.demo}>
    <TodoHeader />
    <TodoList />
    <TodoFooter />
  </div>
)

export default Demo
