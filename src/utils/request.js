import superagent from 'superagent'
import { getBaseApiUrl } from './api'

const successHander = (res) => {
  if (res.body) {
    return res.body
  }

  return JSON.parse(res.text)
}
const errorHandler = (err) => {
  return Promise.reject(err)
}

function request(url, options = {}) {
  const { method = 'get', params, headers, data } = options
  const defaultHeader = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  const baseApiUrl = getBaseApiUrl()

  return superagent[method.toLowerCase()](`${baseApiUrl}${url}`)
    .set({
      ...defaultHeader,
      ...headers,
    })
    .query(params)
    .send(data)
    .then(successHander)
    .catch(errorHandler)
}

export default request
