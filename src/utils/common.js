import Loadable from 'react-loadable'
import LoadingInLoadable from 'components/LoadingInLoadable'

export const getIsDev = () => {
  return process.env.NODE_ENV === 'development'
}

export const getLoadableComponent = (loader) => {
  return Loadable({
    loader,
    loading: LoadingInLoadable,
  })
}

export default getIsDev
