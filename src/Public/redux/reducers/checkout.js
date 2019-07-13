const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    checkout: [],
}

const checkoutReducer = function(state=initialState, action){
    switch (action.type) {
        case "UPDATE_CHECKOUT_PENDING":
            return  {...state, fetching:true};
            break;
        case "UPDATE_CHECKOUT_FULFILLED":
            return  {...state, fetching:false};
            break;
        case "UPDATE_CHECKOUT__REJECTED":
            return  {...state, fetching:false, error: action.payload};
            break;
        default:
            break;
    }
    return state;
}


export default checkoutReducer