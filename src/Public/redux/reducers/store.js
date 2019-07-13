// import console = require("console");

// import console = require("console");

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    store: [],
    image: '',
}

const storeReducer = function(state=initialState, action){
    switch (action.type) {
        case "FETCH_STORE_PENDING":
            return  {...state, fetching:true};
            break;
        case "FETCH_STORE_FULFILLED":
            return  {...state, fetching:false, store:action.payload.data.data[0]};
            break;
        case "FETCH_STORE_REJECTED":
            return  {...state, fetching:false, error: action.payload};
            break;
        case 'ADD_STORE_PENDING':
            return  {...state, fetching:true};
            break;
        case 'ADD_STORE_REJECTED':
            return  {...state, fetching:false, error: action.payload};
            break;
        case 'ADD_STORE_FULFILLED':
            return  {...state, fetching:false, store:[...state.store,action.payload.data]};
            break;
        default:
            break;
    }
    return state;
}


export default storeReducer