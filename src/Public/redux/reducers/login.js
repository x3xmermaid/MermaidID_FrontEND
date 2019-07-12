// import console = require("console");

// import console = require("console");

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    user: [],
    image: '',
}

const loginReducer = function(state=initialState, action){
    switch (action.type) {
        case "ADD_USER_PENDING":
            return  {...state, fetching:true};
            break;
        case "ADD_USER_FULFILLED":
            return  {...state, fetching:false, user:action.payload};
            break;
        case "ADD_USER_REJECTED":
            return  {...state, fetching:false, user: action.payload};
            break;
        default:
            break;
    }
    return state;
}


export default loginReducer