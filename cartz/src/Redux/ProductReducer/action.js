import axios from "axios"
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionType"

//Mens Product
export const mensProduct = (data) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST})
    axios.get(`https://845wro-8080.csb.app/Men`, data).then((res)=> {
        dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data})
    }).catch((err)=> {
        dispatch({type: PRODUCT_FAILURE})
    })
}

// Womens Product
export const womensProduct = (data) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST})
    axios.get("https://845wro-8080.csb.app/Women", data).then((res)=> {
        dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data})
    }).catch((err)=> {
        dispatch({type: PRODUCT_FAILURE})
    })
}

//Boys Product
export const boysProduct = (data) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST})
    axios.get("https://845wro-8080.csb.app/Boys", data).then((res)=> {
        dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data})
    }).catch((err)=> {
        dispatch({type: PRODUCT_FAILURE})
    })
}

// Girls Product
export const girlsProduct = (data) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST})
    axios.get("https://845wro-8080.csb.app/Girls", data).then((res)=> {
        dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data})
    }).catch((err)=> {
        dispatch({type: PRODUCT_FAILURE})
    })
}
