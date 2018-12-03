import { configure } from 'mobx'
import Common from './common'
import Todos from './todos'
import Products from './products'

configure({
  enforceActions: 'observed',
})

export default {
  common: new Common(),
  todos: new Todos(),
  products: new Products(),
}
