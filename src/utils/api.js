import config from 'config/config'
import { getIsDev } from './common'

export const getBaseApiUrl = () => {
  const isDev = getIsDev()
  const apiConfig = isDev ? config.api.dev : config.api.prod
  const {
    API_HOST,
    API_PATH,
    API_PORT,
  } = apiConfig

  return `${API_HOST}:${API_PORT}${API_PATH}`
}

export default getBaseApiUrl
