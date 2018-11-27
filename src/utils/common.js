import Loadable from 'react-loadable'
import LoadingInLoadable from '@/components/LoadingInLoadable'

export const getIsDev = () => {
  return process.env.NODE_ENV === 'development'
}

export const isMock = () => {
  return process.env.REACT_APP_MOCK !== 'none'
}

export const getLoadableComponent = loader => {
  return Loadable({
    loader,
    loading: LoadingInLoadable,
  })
}

export const isIe9 = () => {
  if (
    navigator.appName === 'Microsoft Internet Explorer'
    && navigator.appVersion.split(';')[1].replace(/[ ]/g, '') === 'MSIE9.0'
  ) {
    return true
  }

  return false
}

export default getIsDev
