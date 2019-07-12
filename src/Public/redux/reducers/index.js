import { combineReducers } from 'redux';

import product from './product';
import cart from './cart'
import user from './user'
import store from './store'
import checkout from './checkout'
import login from './login'

const appReducer = combineReducers({
    product,
    cart,
    user,
    store,
    checkout,
    login
});

export default appReducer;