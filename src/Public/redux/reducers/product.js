const initialState = {
    productData:[],
    wishlistData:[],
    categoryData:[],
    userData:[],
    isLoading: false
}

export default product = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCT_PENDING':
        case 'GET_CATEGORY_PENDING':
        case 'GET_USER_PENDING':
            return {
                ...state,
                isLoading:true,
                
            }
        case 'GET_PRODUCT_REJECTED':
        case 'GET_CATEGORY_PENDING':
        case 'GET_USER_PENDING':
            return {
                ...state,
                isLoading:false
            }
        case 'GET_PRODUCT_FULFILLED':
            return {
                ...state,
                isLoading:false,
                productData:action.payload.data.data
            }
        case 'GET_WISHLIST_PENDING':
            return {
                ...state,
                isLoading:true,
                
            }
        case 'GET_WISHLIST_REJECTED':
            return {
                ...state,
                isLoading:false
            }
        case 'GET_WISHLIST_FULFILLED':
            return {
                ...state,
                isLoading:false,
                wishlistData:action.payload.data.data
            }
            case 'POST_IMAGE_PENDING':
                return {
                    ...state,
                    isLoading:true,
                    
                }
            case 'POST_IMAGE_REJECTED':
                return {
                    ...state,
                    isLoading:false
                }
            case 'POST_IMAGE_FULFILLED':
                return {
                    ...state,
                    isLoading:false,
                    wishlistData:action.payload.data.data
                }
            case 'ADD_CART_PENDING':
                return {
                        ...state,
                        isLoading:true,
                        
                    }
            case 'ADD_CART_REJECTED':
                return {
                        ...state,
                        isLoading:false
                    }
            case 'ADD_CART_FULFILLED':
                return {
                        ...state,
                        isLoading:false,
                        productData:[...state.productData,action.payload.data.data]
                    }
            default:
                return state;
    }
}