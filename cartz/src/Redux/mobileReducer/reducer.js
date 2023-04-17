import { LAPTOP_FAILURE, LAPTOP_REQUEST, LAPTOP_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, MOBILE_FAILURE, MOBILE_REQUEST, MOBILE_SUCCESS } from "./actionType";

const initialState = {
    isLoading: false,
    isError: false,
    mobileList: []
}


export const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case MOBILE_REQUEST: 
            return {...state, isLoading: true}
        case MOBILE_SUCCESS: 
            return {...state, isLoading: false, mobileList: payload}
        case MOBILE_FAILURE: 
            return {...state, isLoading: false, isError: true}
        default: 
            return state;
    }
}