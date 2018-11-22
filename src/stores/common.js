import { observable, action, configure } from 'mobx'

configure({
  enforceActions: 'observed',
})

class Common {
  @observable collapsed = false

  @action.bound setCollapsed(val) {
    this.collapsed = val
  }
}

export default Common
