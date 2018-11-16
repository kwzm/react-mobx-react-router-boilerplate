import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      openKeys: [],
      rootSubmenuKeys: props.navData.filter(item => !!item.children).map(item => item.url),
    }
  }

  componentDidMount() {
    const {
      location: { pathname },
    } = this.props

    this.getOpenKeys(pathname)
  }

  componentWillReceiveProps(nextProps) {
    const {
      location: { pathname },
    } = nextProps

    this.getOpenKeys(pathname)
  }

  renderSubMenu = item => {
    return (
      <SubMenu
        key={item.url}
        title={(
          <span>
            <Icon type={item.icon} />
            <span>{item.text}</span>
          </span>
)}
      >
        {item.children.map(child => (
          <Menu.Item key={child.url}>
            <Link to={child.url}>
              <Icon type={child.icon} />
              <span>{child.text}</span>
            </Link>
          </Menu.Item>
        ))}
      </SubMenu>
    )
  }

  getOpenKeys = pathname => {
    const { rootSubmenuKeys } = this.state
    const openKeys = rootSubmenuKeys.filter(item => pathname.indexOf(item) > -1)

    this.setState({
      openKeys,
    })
  }

  handleOpenChange = keys => {
    if (keys.length === 0) {
      return this.setState({ openKeys: [] })
    }

    const { openKeys, rootSubmenuKeys } = this.state
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      return this.setState({ openKeys })
    }

    return this.setState({
      openKeys: latestOpenKey ? [latestOpenKey] : [],
    })
  }

  render() {
    const {
      navData,
      location: { pathname },
    } = this.props
    const { openKeys } = this.state

    return (
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[pathname]}
        openKeys={openKeys}
        onOpenChange={this.handleOpenChange}
      >
        {navData.map(item => {
          if (item.children) {
            return this.renderSubMenu(item)
          }

          return (
            <Menu.Item key={item.url}>
              <Link to={item.url}>
                <Icon type={item.icon} />
                <span>{item.text}</span>
              </Link>
            </Menu.Item>
          )
        })}
      </Menu>
    )
  }
}

Sidebar.propTypes = {
  location: PropTypes.object.isRequired,
  navData: PropTypes.array.isRequired,
}

export default Sidebar
