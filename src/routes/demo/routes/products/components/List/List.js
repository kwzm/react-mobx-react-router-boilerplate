import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { inject, observer, PropTypes as ObservablePropTypes } from 'mobx-react'
import { Table, Button, Row, Col, Popconfirm, message } from 'antd'
import { stringifyProductParmas } from '@/utils/common'
import FormModal from '../FormModal'
import styles from './List.module.less'

@inject(({ products }) => ({
  data: products.list,
  page: products.page,
  total: products.total,
  filter: products.filter,
  categories: products.categories,
  listLoading: products.listLoading,
  removeProduct: products.removeProduct,
}))
@observer
class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpenModal: false,
      currentProduct: {},
    }
  }

  handleOpenModel = () => {
    this.setState({ isOpenModal: true })
  }

  handleCloseModel = () => {
    this.setState({ isOpenModal: false })
  }

  handleAdd = () => {
    this.setState({ currentProduct: {} })
    this.handleOpenModel()
  }

  handleEdit = data => {
    this.setState({ currentProduct: data })
    this.handleOpenModel()
  }

  handleRemove = data => {
    this.props
      .removeProduct(data)
      .then(() => {
        message.success('删除成功')
      })
      .catch(err => {
        message.error(err)
      })
  }

  handleTableChange = pagination => {
    const { history, location, page, filter } = this.props
    const { current } = pagination
    const params = stringifyProductParmas(filter, { page: current })

    if (page !== current) {
      history.push(`${location.pathname}?${params}`)
    }
  }

  getColumns = () => {
    const { categories } = this.props

    return [
      {
        title: '名称',
        dataIndex: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: '厂家',
        dataIndex: 'manufacturer',
        sorter: (a, b) => a.manufacturer.length - b.manufacturer.length,
      },
      {
        title: '类别',
        dataIndex: 'category',
        render: val => {
          return categories.find(item => item.value === val).name
        },
        sorter: (a, b) => Number(a.category) - Number(b.category),
      },
      {
        title: '价格（元）',
        dataIndex: 'price',
        sorter: (a, b) => {
          console.log(a.price)
          return a.price - b.price
        },
      },
      {
        title: '生产日期',
        dataIndex: 'productionDate',
        sorter: (a, b) => {
          const dateA = a.productionDate
          const dateB = b.productionDate

          if (moment(dateA).isBefore(dateB)) {
            return -1
          }

          if (moment(dateA).isSame(dateB)) {
            return 0
          }

          return 1
        },
      },
      {
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) => {
          return (
            <div>
              <Button className={styles.edit} onClick={() => this.handleEdit(record)}>
                编辑
              </Button>
              <Popconfirm
                title="你是否确定要删除这条数据？"
                onConfirm={() => this.handleRemove(record)}
              >
                <Button type="danger">删除</Button>
              </Popconfirm>
            </div>
          )
        },
      },
    ]
  }

  render() {
    const { data, listLoading, page, total } = this.props
    const { isOpenModal, currentProduct } = this.state
    const expandedRowRender = record => (
      <Row>
        <Col span={2}>备注：</Col>
        <Col span={20}>{record.remark}</Col>
      </Row>
    )

    return (
      <div>
        <Button type="primary" icon="plus-circle-o" onClick={this.handleAdd}>
          新增
        </Button>
        <Table
          className={styles.table}
          rowKey="id"
          loading={listLoading}
          columns={this.getColumns()}
          expandedRowRender={expandedRowRender}
          dataSource={data.toJS()}
          pagination={{
            current: page,
            total,
          }}
          onChange={this.handleTableChange}
        />
        <FormModal data={currentProduct} visible={isOpenModal} onClose={this.handleCloseModel} />
      </div>
    )
  }
}

List.wrappedComponent.propTypes = {
  data: ObservablePropTypes.observableArray.isRequired,
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  filter: ObservablePropTypes.observableObject,
  categories: ObservablePropTypes.observableArray.isRequired,
  listLoading: PropTypes.bool.isRequired,
  removeProduct: PropTypes.func.isRequired,
}

List.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default withRouter(List)
