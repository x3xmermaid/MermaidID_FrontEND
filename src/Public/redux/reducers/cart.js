// import console = require("console");

// import console = require("console");

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    cart: [],
    cartProduct: [],
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
            let cartStore = action.payload.data
            let max = action.payload.data.store.length
            // cons
            let tempCart =[]
            for(let i=0; i<max; i++){
                let key = action.payload.data.store.filter(function(store){
                    return store.id_store == action.payload.data.store[i].id_store;
                })
                
                // console.log(storeData[0])
                tempCart[i] = {
                    data: action.payload.data.product.filter(function(product){
                        return product.id_store == action.payload.data.store[i].id_store;
                    }),
                    // key:"data",
                    key
                }
            }

            // let unique = [...new Set(cartStore.id_store)]
            // console.log(action.payload.data.store[0].id_store)
            console.log(tempCart)
            // fo
            return  {...state, fetching:false, cart:tempCart};
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