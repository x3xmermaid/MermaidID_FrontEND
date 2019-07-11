import {combineReducers} from 'redux'

import cartReducer from './cart'
// import categoryReducer from './category'

const reducers = combineReducers({
    cart: cartReducer,
    // category: categoryReducer
})

export default reducers