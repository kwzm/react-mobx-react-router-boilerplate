import request from 'superagent'
import { getBaseApiUrl } from './api'

const baseApiUrl = getBaseApiUrl()
const baseHeader = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}
const successHander = (res, resolve) => {
  if (res.body) {
    resolve(res.body)
  } else {
    resolve(JSON.parse(res.text))
  }
}
const errorHandler = (err, reject) => {
  reject(err)
}

const getOrDelete = (method = 'get') => {
  return (url, params = {}, headers = {}) =>
    new Promise((resolve, reject) => {
      const reqHeaders = {
        ...baseHeader,
        ...headers,
      }

      request[method](`${baseApiUrl}${url}`)
        .set(reqHeaders)
        .query(params)
        .then(res => successHander(res, resolve))
        .catch(err => errorHandler(err, reject))
    })
}

const postOrPut = method => {
  return (url = '', params = {}, data = {}, headers = {}) =>
    new Promise((resolve, reject) => {
      const reqHeaders = {
        ...baseHeader,
        ...headers,
      }

      request[method](`${baseApiUrl}${url}`)
        .set(reqHeaders)
        .query(params)
        .send(data)
        .then(res => successHander(res, resolve))
        .catch(err => errorHandler(err, reject))
    })
}

const requestApi = {
  get: getOrDelete('get'),
  post: postOrPut('post'),
  put: postOrPut('put'),
  delete: getOrDelete('del'),
}

export default requestApi
