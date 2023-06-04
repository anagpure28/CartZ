import { GET_CART_PRODUCT_FAILURE, GET_CART_PRODUCT_REQUEST, GET_CART_PRODUCT_SUCCESS, POST_CART_PRODUCT_FAILURE, POST_CART_PRODUCT_REQUEST, POST_CART_PRODUCT_SUCCESS } from "./actionType"

const initialState = {
    isLoading:false,
    isError:false,
    data:[]
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_CART_PRODUCT_REQUEST : {
            return {...state,isLoading:true,isError:false}
        }
        case GET_CART_PRODUCT_SUCCESS :{
            return {...state,isLoading:false,data:payload,isError:false}
        }
        case GET_CART_PRODUCT_FAILURE :{
            return {...state,isError:true,isLoading:false}
        }
        case POST_CART_PRODUCT_REQUEST : {
            return {...state,isLoading:true,isError:false}
        }
        case POST_CART_PRODUCT_SUCCESS :{
            return {...state,isLoading:false,data:[...state.data,payload],isError:false}
        }
        case POST_CART_PRODUCT_FAILURE :{
            return {...state,isError:true,isLoading:false}
        }
        default:{
            return state
        }
    }
}