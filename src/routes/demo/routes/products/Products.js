import React from 'react'
import List from './components/List'
import Filter from './components/Filter'

class Products extends React.Component {
  componentDidMount() {
    // todo
  }

  render() {
    return (
      <div>
        <Filter />
        <List />
      </div>
    )
  }
}

export default Products
