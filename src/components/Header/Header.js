import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import classNames from 'classnames'
import { Icon } from 'antd'
import styles from './Header.module.less'

@inject(({ common }) => ({
  collapsed: common.collapsed,
  setCollapsed: common.setCollapsed,
}))
@observer
class Header extends React.Component {
  toggle = () => {
    const { collapsed, setCollapsed } = this.props

    setCollapsed(!collapsed)
  }

  render() {
    const { className, collapsed } = this.props

    return (
      <header className={classNames(styles.header, { [className]: !!className })}>
        <Icon
          className={styles.trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
      </header>
    )
  }
}

Header.wrappedComponent.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
}

Header.propTypes = {
  className: PropTypes.string,
}

export default Header
