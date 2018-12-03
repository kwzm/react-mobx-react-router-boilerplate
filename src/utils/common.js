import Loadable from 'react-loadable'
import queryString from 'query-string'
import LoadingInLoadable from '@/components/LoadingInLoadable'

export const getIsDev = () => {
  return process.env.NODE_ENV === 'development'
}

export const isMock = () => {
  return process.env.REACT_APP_MOCK !== 'none'
}

export const getLoadableComponent = loader => {
  return Loadable({
    loader,
    loading: LoadingInLoadable,
  })
}

export const isIe9 = () => {
  if (
    navigator.appName === 'Microsoft Internet Explorer' &&
    navigator.appVersion.split(';')[1].replace(/[ ]/g, '') === 'MSIE9.0'
  ) {
    return true
  }

  return false
}

export const stringifyProductParmas = (filter, pagination) => {
  return queryString.stringify({
    filter: JSON.stringify(filter),
    pagination: JSON.stringify(pagination),
  })
}

export const parseProductsParams = search => {
  const query = queryString.parse(search)
  const filter = query.filter ? JSON.parse(query.filter) : undefined
  let pagination

  if (query.pagination) {
    pagination = JSON.parse(query.pagination)
  } else {
    pagination = { page: 1 }
  }

  return {
    filter,
    pagination,
  }
}

export default getIsDev
