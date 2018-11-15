import React from 'react'
import PropTypes from 'prop-types'
import { Switch } from 'react-router-dom'
import Sidebar from 'components/Sidebar'
import Header from 'components/Header'
import styles from './BasicLayout.module.less'

const BasicLayout = props => {
  const { location, routes, navData } = props

  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
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

BasicLayout.propTypes = {
  location: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
  navData: PropTypes.array.isRequired,
}

export default BasicLayout
