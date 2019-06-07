import request from '@/utils/request'

export const queryProducts = (params) => {
  return request(`/products${params}`)
}

export const createProduct = (data) => {
  return request('/product', {
    method: 'POST',
    data,
  })
}

export const updateProduct = (id, data) => {
  return request('/product', {
    method: 'PUT',
    params: { id },
    data,
  })
}

export const deleteProduct = (id) => {
  return request('/product', {
    method: 'DELETE',
    params: { id },
  })
}
