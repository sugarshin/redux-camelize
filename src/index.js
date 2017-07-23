import camelizeKeys from './camelizeKeys'

const camelizeMiddleware = ({ ignoreOnError = true } = {}) => () => next => action => {
  if (action.meta && action.meta.camelize && !(action.error && ignoreOnError)) {
    return next({ ...action, payload: camelizeKeys(action.payload) })
  }
  return next(action)
}

export { camelizeKeys }
export default camelizeMiddleware
