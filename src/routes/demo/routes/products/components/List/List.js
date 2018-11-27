import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer, PropTypes as ObservablePropTypes } from 'mobx-react'
import { Table, Button } from 'antd'
import FormModal from '../FormModal'
import styles from './List.module.less'

@inject(({ products }) => ({
  data: products.list,
  page: products.page,
  total: products.total,
  filter: products.filter,
  categories: products.categories,
  listLoading: products.listLoading,
  fetchProducts: products.fetchProducts,
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

  componentDidMount() {
    const { fetchProducts } = this.props

    fetchProducts()
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
    this.props.removeProduct(data)
  }

  handleTableChange = pagination => {
    const { filter, fetchProducts } = this.props

    fetchProducts(filter, { page: pagination.current })
  }

  getColumns = () => {
    const { categories } = this.props

    return [
      {
        title: '名称',
        dataIndex: 'name',
      },
      {
        title: '厂家',
        dataIndex: 'manufacturer',
      },
      {
        title: '类别',
        dataIndex: 'category',
        render: val => {
          return categories.find(item => item.value === val).name
        },
      },
      {
        title: '生产日期',
        dataIndex: 'productionDate',
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
              <Button type="danger" onClick={() => this.handleRemove(record)}>
                删除
              </Button>
            </div>
          )
        },
      },
    ]
  }

  render() {
    const { data, listLoading, page, total } = this.props
    const { isOpenModal, currentProduct } = this.state

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
  filter: ObservablePropTypes.observableObject.isRequired,
  categories: ObservablePropTypes.observableArray.isRequired,
  listLoading: PropTypes.bool.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
}

export default List
