import React from 'react'
import logo from './logo.svg'
import styles from './home.module.less';

const Home = () => {
  return (
    <div className={styles.Home}>
      <header className={styles.HomeHeader}>
        <img src={logo} className={styles.HomeLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.HomeLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default Home
