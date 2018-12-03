import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { Switch } from 'react-router-dom'
import classNames from 'classnames'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import styles from './BasicLayout.module.less'

@inject(({ common }) => ({
  collapsed: common.collapsed,
}))
@observer
class BasicLayout extends React.Component {
  render() {
    const { location, routes, navData, collapsed } = this.props

    return (
      <div className={styles.layout}>
        <nav
          className={classNames(styles.nav, {
            [styles.navCollapsed]: collapsed,
            [styles.navSpread]: !collapsed,
          })}
        >
          <div className={styles.logo} />
          <Sidebar location={location} navData={navData} />
        </nav>
        <section className={styles.contentWrap}>
          <Header className={styles.header} />
          <article className={styles.content}>
            <div>
              <Switch>{routes}</Switch>
            </div>
          </article>
        </section>
      </div>
    )
  }
}

BasicLayout.wrappedComponent.propTypes = {
  collapsed: PropTypes.bool.isRequired,
}

BasicLayout.propTypes = {
  location: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
  navData: PropTypes.array.isRequired,
}

export default BasicLayout
