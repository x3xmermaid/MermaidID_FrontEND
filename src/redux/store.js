import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import reducers from './reducers'

const middleware = applyMiddleware(logger, thunk, promise)

const store = createStore(reducers, middleware)

export default store