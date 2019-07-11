const initialState = {
    productData:[],
    isLoading: false
}

export default product = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCT_PENDING':
            return {
                ...state,
                isLoading:true,
                
            }
        case 'GET_PRODUCT_REJECTED':
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
            default:
                return state;
    }
}