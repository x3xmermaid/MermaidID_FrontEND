const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    cart: [],
    categoryName: '',
    image: '',
}

const cartReducer = function(state=initialState, action){
    switch (action.type) {
        case "SET_CATEGORY_NAME":
            return  {...state, categoryName : action.payload};
            break;
        case "SET_IMAGE":
            return  {...state, image: action.payload};
            break;
        case "FETCH_CART_PENDING":
            return  {...state, fetching:true};
            break;
        case "FETCH_CART_FULFILLED":
            return  {...state, fetching:false, cart:action.payload};
            break;
        case "FETCH_CART_REJECTED":
            return  {...state, fetching:false, error: action.payload};
            break;
        default:
            break;
    }
    return state;
}


export default cartReducer