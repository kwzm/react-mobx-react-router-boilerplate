import { observable, action, runInAction } from 'mobx'
import { parseProductsParams } from '@/utils/common'
import { DEFAULT_PAGE_SIZE } from '@/config/config'
import { queryProducts, createProduct, updateProduct, deleteProduct } from '@/services/products'

class Products {
  @observable listLoading = false

  @observable formLoading = false

  @observable list = []

  @observable categories = [
    {
      name: '食品',
      value: '1',
    },
    {
      name: '服装',
      value: '2',
    },
    {
      name: '家电',
      value: '3',
    },
  ]

  @observable filter = {}

  @observable pagination = {
    page: 1,
    pageSize: DEFAULT_PAGE_SIZE,
    total: 0,
  }

  @action.bound fetchProducts(search) {
    const query = parseProductsParams(search)
    const { filter } = query

    this.filter = filter
    this.listLoading = true
    return queryProducts(search)
      .then((resp) => {
        runInAction(() => {
          this.list = resp.data
          this.pagination.page = resp.page
          this.pagination.total = resp.total
          this.pagination.pageSize = resp.pageSize
        })
      })
      .catch((err) => {
        return Promise.reject(err)
      })
      .finally(() => {
        runInAction(() => {
          this.listLoading = false
        })
      })
  }

  @action.bound addProduct(data) {
    this.formLoading = true
    return createProduct(data)
      .then((resp) => {
        runInAction(() => {
          this.list.unshift(resp)
        })
      })
      .catch((err) => {
        return Promise.reject(err)
      })
      .finally(() => {
        runInAction(() => {
          this.formLoading = false
        })
      })
  }

  @action.bound editProduct(id, data) {
    this.formLoading = true
    return updateProduct(id, data)
      .then((resp) => {
        runInAction(() => {
          const index = this.list.findIndex((item) => item.id === id)

          this.list[index] = {
            id,
            ...resp,
          }
        })
      })
      .catch((err) => {
        return Promise.reject(err)
      })
      .finally(() => {
        runInAction(() => {
          this.formLoading = false
        })
      })
  }

  @action.bound removeProduct(value) {
    this.listLoading = true
    return deleteProduct(value.id)
      .then(() => {
        runInAction(() => {
          this.list.remove(value)
        })
      })
      .catch((err) => {
        return Promise.reject(err)
      })
      .finally(() => {
        runInAction(() => {
          this.listLoading = false
        })
      })
  }
}

export default Products
