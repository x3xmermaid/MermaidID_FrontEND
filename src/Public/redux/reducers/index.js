import { combineReducers } from 'redux';

import product from './product';
import cart from './cart'
import user from './user'
import store from './store'

const appReducer = combineReducers({
    product,
    cart,
    user,
    store
});

export default appReducer;