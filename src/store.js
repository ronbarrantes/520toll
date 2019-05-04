import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'

import log from './middleware/log'
import fetchInfo from './middleware/fetchInfo'

const middleware = [
  log,
  fetchInfo,
]

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
)

const store = createStore(rootReducer, enhancer)
window.store = store

export default store