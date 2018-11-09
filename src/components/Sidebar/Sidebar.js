import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {
  state = {
    selectedKeys: [],
  }

  componentDidMount() {
    this.getSelectedKeys()
  }

  getSelectedKeys = () => {
    const { location: { pathname } } = this.props

    this.setState({
      selectedKeys: [pathname],
    })
  }

  render() {
    const { navData } = this.props
    const { selectedKeys } = this.state

    return (
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKeys}
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
}

Sidebar.propTypes = {
  location: PropTypes.object.isRequired,
  navData: PropTypes.array.isRequired,
}

export default Sidebar
