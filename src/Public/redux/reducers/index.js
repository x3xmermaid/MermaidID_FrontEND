import { combineReducers } from 'redux';

import product from './product';
import cart from './cart'

const appReducer = combineReducers({
    product,
    cart
    
});

export default appReducer;