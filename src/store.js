import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

import reducers from './reducers'

const middleware = [
  promiseMiddleware(),
  thunkMiddleware,
]

let composeEnhancers = compose

if (process.env.NODE_ENV !== 'production') {
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  } else {
    const createLogger = require('redux-logger')
    middleware.push(createLogger())
  }
}

const initialState = {}
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middleware))(createStore)
const store = createStoreWithMiddleware(combineReducers(reducers), initialState)

export function injectReducer(namespace, asyncReducer) {
  if (reducers[namespace] === undefined) {
    reducers[namespace] = asyncReducer
    store.replaceReducer(combineReducers(reducers))
  }

  return store
}

export default store
