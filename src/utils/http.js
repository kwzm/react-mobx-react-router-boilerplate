import request from 'superagent'
import { getBaseApiUrl } from './api'

const baseApiUrl = getBaseApiUrl()
const baseHeader = {
  'Accept': 'application/json',
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

const get = (url, params = {}, headers = {}) => new Promise((resolve, reject) => {
  const reqHeaders = {
    ...baseHeader,
    ...headers,
  }

  request.get(`${baseApiUrl}${url}`)
    .set(reqHeaders)
    .query(params)
    .then((res) => successHander(res, resolve))
    .catch((err) => errorHandler(err, reject))
})

const post = (url = '', params = {}, data = {}, headers = {}) => new Promise((resolve, reject) => {
  const reqHeaders = {
    ...baseHeader,
    ...headers,
  }

  request.post(`${baseApiUrl}${url}`)
    .set(reqHeaders)
    .query(params)
    .send(data)
    .then((res) => successHander(res, resolve))
    .catch((err) => errorHandler(err, reject))
})

const requestApi = {
  get,
  post,
}

export default requestApi
