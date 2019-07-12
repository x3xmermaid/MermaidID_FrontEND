// import console = require("console");

// import console = require("console");

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    user: [],
    image: '',
}

const userReducer = function(state=initialState, action){
    switch (action.type) {
        case "FETCH_USER_PENDING":
            return  {...state, fetching:true};
            break;
        case "FETCH_USER_FULFILLED":
            return  {...state, fetching:false, user:action.payload.data.data[0]};
            break;
        case "FETCH_USER_REJECTED":
            return  {...state, fetching:false, error: action.payload};
            break;
        default:
            break;
    }
    return state;
}


export default userReducer