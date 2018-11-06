import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import requestApi from './utils/http'
import logo from './logo.svg';
import styles from './App.module.less';

class App extends Component {
  componentDidMount() {
    requestApi.post('', {
      mod: '/user/login'
    }, {
      pass: "123",
      username: "gepeng",
    })
      .then(data => {
        console.log('data', data)
      })
      .catch(err => {
        console.log('error', err)
      })
  }

  render() {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={styles.AppLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default hot(module)(App);
