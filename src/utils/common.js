export const getIsDev = () => {
  return process.env.NODE_ENV === 'development'
}

export default getIsDev
