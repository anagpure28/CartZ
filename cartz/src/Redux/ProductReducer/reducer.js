import { GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionType"

const initialState = {
    isLoading: false,
    isError: false,
    products: []
}

export const reducer = (state=initialState, {type, payload}) => {
    switch(type){
        case PRODUCT_REQUEST: 
            return {...state, isLoading: true}
        case GET_PRODUCT_SUCCESS: 
            return {...state, isLoading: false, products: payload}
        case POST_PRODUCT_SUCCESS: 
            return {...state, isLoading: false}
        case PRODUCT_FAILURE: 
            return {...state, isLoading: false, isError: true}
        default: 
            return state;
    }
}