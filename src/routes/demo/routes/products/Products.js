import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import moment from 'moment'
import List from './components/List'
import Filter from './components/Filter'

@inject(({ products }) => ({
  fetchProducts: products.fetchProducts,
}))
@observer
class Products extends React.Component {
  constructor(props) {
    super(props)

    this.filterRef = React.createRef()
  }

  handleSearch = (value = {}) => {
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

    this.props.fetchProducts(filter)
  }

  render() {
    return (
      <div>
        <Filter ref={this.filterRef} handleSearch={this.handleSearch} />
        <List />
      </div>
    )
  }
}

Products.wrappedComponent.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
}

export default Products
