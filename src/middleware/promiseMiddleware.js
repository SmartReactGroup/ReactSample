export default function promiseMiddleware() {
  return next => action => {
    const { promise, type, ...rest } = action

    if (!promise) return next(action)

    const SUCCESS = type
    const REQUEST = `${type}_REQUEST`
    const FAILURE = `${type}_FAILURE`

    next({ ...rest, type: REQUEST })
    return promise
      .then(res => {
        next({ ...rest, res, type: SUCCESS })
        return res /* simple chaining mechanism, at least return something from our promise */
      })
      .catch(error => {
        next({ ...rest, error, type: FAILURE })
        return false
      })
  }
}