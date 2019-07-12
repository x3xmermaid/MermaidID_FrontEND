// import console = require("console");

// import console = require("console");

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    cart: [],
    totalPrice: 0,
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
        case "GET_CART":
            return {...state, error:null};
            break;
        case "FETCH_CART_PENDING":
            return  {...state, fetching:true};
            break;
        case "FETCH_CART_FULFILLED":
            let cartStore = action.payload.data
            // let product =[]
            let max = action.payload.data.store.length
            // cons
            let tempCart =[]
            for(let i=0; i<max; i++){
                let key = action.payload.data.store.filter(function(store){
                    return store.id_store == action.payload.data.store[i].id_store;
                })
                let product = action.payload.data.product.filter(function(product){
                    return product.id_store == action.payload.data.store[i].id_store;
                })
                let totalPrice = 0
                for(let j=0; j< product.length; j++){
                    let priceItem = product[j].price * product[j].qty
                    totalPrice = totalPrice + priceItem; 
                }
                // console.log("bler")
                // console.log(product)
                tempCart[i] = {
                    data: action.payload.data.product.filter(function(product){
                        return product.id_store == action.payload.data.store[i].id_store;
                    }),
                    // key:"data",
                    key,
                    total: totalPrice,
                }
            }

            max = action.payload.data.product.length
            let totalPrice = 0
            for(let i=0; i<max; i++){
                let priceItem = action.payload.data.product[i].price * action.payload.data.product[i].qty
                totalPrice = totalPrice + priceItem; 
            }
            // let unique = [...new Set(cartStore.id_store)]
            // console.log(action.payload.data.store[0].id_store)
            // console.log(tempCart)
            // fo
            return  {...state, fetching:false, totalPrice: totalPrice, cart:tempCart, cartProduct:action.payload.data.product};
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