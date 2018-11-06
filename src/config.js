const config = {
  api: {
    dev: {
      API_HOST: 'http://localhost',
      API_PATH: '/api/index.php',
      API_PORT: '3000',
    },
    prod: {
      API_HOST: '',
      API_PATH: '/api',
      API_PORT: '80',
    }
  }
}

export default config
