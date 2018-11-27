import { configure } from 'mobx'
import Demo from './demo'
import Common from './common'
import Products from './products'

configure({
  enforceActions: 'observed',
})

export default {
  demo: new Demo(),
  common: new Common(),
  products: new Products(),
}
