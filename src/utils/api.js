import { getIsDev } from './common'
import config from '../config'

export const getBaseApiUrl = () => {
  const isDev = getIsDev()
  let apiConfig = isDev ? config.api.dev : config.api.prod
  const {
    API_HOST,
    API_PATH,
    API_PORT,
  } = apiConfig

  return `${API_HOST}:${API_PORT}${API_PATH}`
}
