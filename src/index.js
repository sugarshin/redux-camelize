import camelizeKeys from './camelizeKeys'

const camelizeMiddleware = () => next => action => {
  if (action.meta && action.meta.camelize) {
    return next({ ...action, payload: camelizeKeys(action.payload) })
  }
  return next(action)
}

export { camelizeKeys }
export default camelizeMiddleware
