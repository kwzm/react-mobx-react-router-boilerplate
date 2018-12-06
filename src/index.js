import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'minireset.css'
import './index.css'
import App from './App'

if (process.env.NODE_ENV === 'development' && process.env.REACT_APP_MOCK !== 'none') {
  import('../mock')
}

moment.locale('zh-cn')

ReactDOM.render(<App />, document.getElementById('root'))
