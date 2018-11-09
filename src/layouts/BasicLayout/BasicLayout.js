import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import { Switch } from 'react-router-dom'
import Sidebar from 'components/Sidebar'
import styles from './BasicLayout.module.less'

const BasicLayout = (props) => {
  const {
    Header,
    Content,
    Sider,
  } = Layout
  const { location, routes, navData } = props

  return (
    <Layout className={styles.layout}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className={styles.logo} />
        <Sidebar location={location} navData={navData} />
      </Sider>
      <Layout>
        <Header className={styles.header} />
        <Content className={styles.content}>
          <div>
            <Switch>
              {routes}
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

BasicLayout.propTypes = {
  location: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
  navData: PropTypes.array.isRequired,
}

export default BasicLayout
