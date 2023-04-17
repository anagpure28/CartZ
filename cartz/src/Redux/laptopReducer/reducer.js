import { LAPTOP_FAILURE, LAPTOP_REQUEST, LAPTOP_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

const initialState = {
    isLoading: false,
    isError: false,
    latopList: []
}


export const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case LAPTOP_REQUEST: 
            return {...state, isLoading: true}
        case LAPTOP_SUCCESS: 
            return {...state, isLoading: false, latopList: payload}
        case LAPTOP_FAILURE: 
            return {...state, isLoading: false, isError: true}
        default: 
            return state;
    }
}