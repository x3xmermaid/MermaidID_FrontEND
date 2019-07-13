// import console = require("console");

// import console = require("console");

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    user: [],
    verify: [],
    isLogin: false,
    image: '',
}

const loginReducer = function(state=initialState, action){
    switch (action.type) {
        case "ADD_USER_PENDING":
            return  {...state, fetching:true};
            break;
        case "ADD_USER_FULFILLED":
            return  {...state, fetching:false, user:action.payload.data.data};
            break;
        case "ADD_USER_REJECTED":
            return  {...state, fetching:false, user: action.payload};
            break;
        case "VERIFY_PENDING":
            return  {...state, fetching:true};
            break;
        case "VERIFY_FULFILLED":
            console.log(action.payload.data.data)
            let Login = false
            if(action.payload.data.data !== undefined){
              Login = true
            }
            return  {...state, fetching:false, verify:action.payload.data.data, isLogin:Login};
            break;
        case "VERIFY_REJECTED":
            return  {...state, fetching:false, verify: action.payload};
            break;
        case "VERIFY_LOGIN_PENDING":
            return  {...state, fetching:true};
            break;
        case "VERIFY_LOGIN_FULFILLED":
            return  {...state, fetching:false, user:action.payload.data.data};
            break;
        case "VERIFY_LOGIN_REJECTED":
            return  {...state, fetching:false, user: action.payload};
            break;
        case "LOGIN_USER_PENDING":
            return  {...state, fetching:true};
            break;
        case "LOGIN_USER_FULFILLED":
            console.log(action.payload.data.data)
            let Login2 = false
            if(action.payload.data.data !== undefined){
              Login2 = true
            }
            return  {...state, fetching:false, user:action.payload.data.result, isLogin:Login2};
            break;
        case "LOGIN_USER_REJECTED":
            return  {...state, fetching:false, user: action.payload};
            break;
        default:
            break;
    }
    return state;
}


export default loginReducer