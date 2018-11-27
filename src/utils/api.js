import { apiConfig } from '@/config/config'
import { getIsDev } from './common'

export const getBaseApiUrl = () => {
  const isDev = getIsDev()
  const config = isDev ? apiConfig.dev : apiConfig.prod
  const { API_HOST, API_PATH, API_PORT } = config

  return `${API_HOST}:${API_PORT}${API_PATH}`
}

export default getBaseApiUrl
