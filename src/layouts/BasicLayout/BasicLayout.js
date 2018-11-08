import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon } from 'antd'
import styles from './BasicLayout.module.less'

const BasicLayout = (props) => {
  const {
    Header,
    Content,
    Sider,
  } = Layout
  const { routes, navData } = props

  return (
    <Layout className={styles.layout}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className={styles.logo} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          { navData.map(item => (
            <Menu.Item key={item.id}>
              <Icon type={item.icon} />
              <span className="nav-text">{item.text}</span>
            </Menu.Item>
          )) }
        </Menu>
      </Sider>
      <Layout>
        <Header className={styles.header} />
        <Content className={styles.content}>
          <div>
            {routes}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

BasicLayout.propTypes = {
  routes: PropTypes.array.isRequired,
  navData: PropTypes.array.isRequired,
}

export default BasicLayout
