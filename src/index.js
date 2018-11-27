import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import 'moment/locale/zh-cn'
import { getIsDev, isMock } from '@/utils/common'
import 'minireset.css'
import './index.css'
import App from './App'

if (getIsDev() && isMock()) {
  import('../mock')
}

moment.locale('zh-cn')

ReactDOM.render(<App />, document.getElementById('root'))
