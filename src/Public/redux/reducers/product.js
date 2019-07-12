const initialState = {
    productData:[],
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
                isLoading:true,
                productData:action.payload.data.data
            }
        case 'GET_CATEGORY_FULFILLED':
            return {
                ...state,
                isLoading:true,
                categoryData:action.payload.data.data
            }
        case 'GET_USER_FULFILED':
            return {
                ...state,
                isLoading,
                userData:action.payload.data.data
            }
            default:
                return state;
    }
}