export const apiConfig = {
  dev: {
    API_HOST: 'http://localhost',
    API_PATH: '/api',
    API_PORT: '3000',
  },
  prod: {
    API_HOST: '',
    API_PATH: '/api',
    API_PORT: '80',
  },
}

export const DEFAULT_PAGE_SIZE = 10

export const PAGE_SIZE_OPTIONS = ['10', '20', '30', '40']

export default apiConfig
