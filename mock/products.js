/* eslint-disable */
import Mock from 'mockjs'
import { parseProductsParams } from '@/utils/common'

const Random = Mock.Random
const DEFAULT_PAGE_SIZE = 10
const TOTAL = 50

const getProducts = (options) => {
  const search = options.url.split('?')[1]
  const query = parseProductsParams(search)
  const { filter, pagination } = query
  const pageSize = pagination.pageSize ? pagination.pageSize : DEFAULT_PAGE_SIZE
  let data = []

  if (filter && Object.keys(filter).length > 0) {
    const { name, manufacturer, productionDate, price, category } = filter
    const item = {
      name: name ? name : Random.string(),
      manufacturer: manufacturer ? manufacturer : Random.string(),
      productionDate: productionDate ? productionDate : Random.date(),
      price: price ? price : Random.float(60, 100, 2, 2),
      category: category ? category : `${Random.integer(1, 3)}`,
      remark: Random.cparagraph(1, 3),
    }

    for (let i = 0; i < pageSize; i++) {
      data.push({
        id: Random.guid(),
        ...item,
      })
    }
  } else {
    for (let i = 0; i < pageSize; i++) {
      const item = {
        id: Random.guid(),
        name: Random.string(),
        manufacturer: Random.string(),
        productionDate: Random.date(),
        price: Random.float(60, 100, 2, 2),
        category: `${Random.integer(1, 3)}`,
        remark: Random.cparagraph(1, 3),
      }

      data.push(item)
    }
  }

  return {
    data,
    total: TOTAL,
    page: pagination.page,
    pageSize: pagination.pageSize,
  }
}

const addProduct = (options) => {
  const data = JSON.parse(options.body)

  return {
    id: Random.guid(),
    ...data,
  }
}

const editProduct = (options) => {
  return JSON.parse(options.body)
}

const deleteProduct = () => {
  return {
    success: true,
  }
}

Mock.mock(/\/products/, 'get', getProducts)

Mock.mock(/\/product/, 'post', addProduct)

Mock.mock(/\/product/, 'put', editProduct)

Mock.mock(/\/product/, 'delete', deleteProduct)
