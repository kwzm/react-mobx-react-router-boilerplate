import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { inject, observer, PropTypes as ObservablePropTypes } from 'mobx-react'
import { Table, Button, Row, Col, Popconfirm, message } from 'antd'
import { stringifyProductParmas } from '@/utils/common'
import { DEFAULT_PAGE_SIZE, PAGE_SIZE_OPTIONS } from '@/config/config'
import FormModal from '../FormModal'
import styles from './List.module.less'

@inject(({ products }) => ({
  data: products.list,
  filter: products.filter,
  pagination: products.pagination,
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

  handlePageChange = current => {
    const { history, location, pagination, filter } = this.props
    const params = stringifyProductParmas(filter, {
      ...pagination,
      page: current,
    })

    history.push(`${location.pathname}?${params}`)
  }

  handlePageSizeChange = (current, size) => {
    const { history, location, pagination, filter } = this.props
    const params = stringifyProductParmas(filter, {
      ...pagination,
      pageSize: size,
    })

    history.push(`${location.pathname}?${params}`)
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
        sorter: (a, b) => a.price - b.price,
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
    const {
      data,
      listLoading,
      pagination: { page, total },
    } = this.props
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
            defaultPageSize: DEFAULT_PAGE_SIZE,
            pageSizeOptions: PAGE_SIZE_OPTIONS,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (totalNum, range) => `第${range[0]}-${range[1]}条 总数${totalNum}条`,
            onChange: this.handlePageChange,
            onShowSizeChange: this.handlePageSizeChange,
          }}
        />
        <FormModal data={currentProduct} visible={isOpenModal} onClose={this.handleCloseModel} />
      </div>
    )
  }
}

List.wrappedComponent.propTypes = {
  data: ObservablePropTypes.observableArray.isRequired,
  filter: ObservablePropTypes.observableObject,
  pagination: ObservablePropTypes.observableObject.isRequired,
  categories: ObservablePropTypes.observableArray.isRequired,
  listLoading: PropTypes.bool.isRequired,
  removeProduct: PropTypes.func.isRequired,
}

List.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default withRouter(List)
