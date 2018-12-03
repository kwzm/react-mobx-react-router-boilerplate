import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer, PropTypes as ObservablePropTypes } from 'mobx-react'
import moment from 'moment'
import { stringifyProductParmas } from '@/utils/common'
import List from './components/List'
import Filter from './components/Filter'

@inject(({ products }) => ({
  filter: products.filter,
  pagination: products.pagination,
  fetchProducts: products.fetchProducts,
}))
@observer
class Products extends React.Component {
  constructor(props) {
    super(props)

    this.filterRef = React.createRef()
  }

  componentDidMount() {
    const {
      location: { search },
      fetchProducts,
    } = this.props

    fetchProducts(search)
  }

  componentWillReceiveProps(nextProps) {
    const {
      location: { search },
      fetchProducts,
    } = this.props
    const {
      location: { search: nextSearch },
    } = nextProps

    if (nextSearch !== search) {
      fetchProducts(nextSearch)
    }
  }

  handleSearch = (value = {}) => {
    const { history, location, pagination } = this.props
    const values = {
      ...this.filterRef.current.getFieldsValue(),
      ...value,
    }
    const filter = {}

    if (values.productionDate instanceof moment) {
      values.productionDate = values.productionDate.format('YYYY-MM-DD')
    }

    Object.keys(values).forEach(key => {
      if (values[key]) {
        filter[key] = values[key]
      }
    })

    const params = stringifyProductParmas(filter, pagination)

    history.push(`${location.pathname}?${params}`)
  }

  render() {
    const { filter } = this.props

    return (
      <div>
        <Filter ref={this.filterRef} data={filter} handleSearch={this.handleSearch} />
        <List />
      </div>
    )
  }
}

Products.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

Products.wrappedComponent.propTypes = {
  filter: ObservablePropTypes.observableObject,
  pagination: ObservablePropTypes.observableObject.isRequired,
  fetchProducts: PropTypes.func.isRequired,
}

export default Products
