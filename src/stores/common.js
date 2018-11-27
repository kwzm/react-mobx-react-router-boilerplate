import { observable, action } from 'mobx'

class Common {
  @observable collapsed = false

  @action.bound setCollapsed(val) {
    this.collapsed = val
  }
}

export default Common
