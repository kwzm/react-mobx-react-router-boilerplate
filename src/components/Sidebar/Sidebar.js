import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
  const { navData, location: { pathname } } = props

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[pathname]}
    >
      { navData.map(item => (
        <Menu.Item key={item.url}>
          <Link to={item.url}>
            <Icon type={item.icon} />
            <span className="nav-text">{item.text}</span>
          </Link>
        </Menu.Item>
      )) }
    </Menu>
  )
}

Sidebar.propTypes = {
  location: PropTypes.object.isRequired,
  navData: PropTypes.array.isRequired,
}

export default Sidebar
