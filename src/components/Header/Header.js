import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Header.module.less'

class Header extends React.Component {
  componentDidMount() {}

  render() {
    const { className } = this.props

    return <header className={classNames(styles.header, { [className]: !!className })} />
  }
}

Header.propTypes = {
  className: PropTypes.string,
}

export default Header
