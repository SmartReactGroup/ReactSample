import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import promiseMiddleware from '../middleware/promiseMiddleware'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

const isProd = process.env.NODE_ENV === 'production'

const configureStore = isProd ? preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, promiseMiddleware)
) : preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, promiseMiddleware, createLogger()),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
