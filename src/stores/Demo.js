import { observable, action, computed } from 'mobx'

class Todo {
  constructor(title) {
    this.title = title
  }

  id = Math.random()

  @observable title = ''

  @observable isFinished = false

  @action.bound toggle() {
    this.isFinished = !this.isFinished
  }
}

class Demo {
  @observable todos = []

  @observable filter = 'All'

  @action.bound createTodo(title) {
    this.todos.unshift(new Todo(title))
  }

  @action.bound removeTodo(todo) {
    this.todos.remove(todo)
  }

  @action.bound filterTodos(filter) {
    this.filter = filter
  }

  @computed get left() {
    return this.todos.filter(todo => !todo.isFinished).length
  }

  @computed get filteredTodos() {
    switch (this.filter) {
      case 'Active':
        return observable(this.todos.filter(todo => !todo.isFinished))
      case 'Completed':
        return observable(this.todos.filter(todo => todo.isFinished))
      case 'All':
        return this.todos
      default:
        return this.todos
    }
  }
}

export default Demo
