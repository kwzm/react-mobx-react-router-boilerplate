import React from 'react'
import { Spin } from 'antd'
import styles from './Loading.module.less'

const Loading = () => (
  <div className={styles.loading}>
    <div>
      <Spin
        size="large"
        spinning
        tip="Loading..."
      />
    </div>
  </div>
)
export default Loading
