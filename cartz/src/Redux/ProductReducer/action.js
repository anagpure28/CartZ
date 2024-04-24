import axios from "axios"
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionType"

//Mens Product
export const mensProduct = (data) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST})
    axios.get(`https://mock-server-app-2-46w4.onrender.com/Men`, data).then((res)=> {
        dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data})
    }).catch((err)=> {
        dispatch({type: PRODUCT_FAILURE})
    })
}

// Womens Product
export const womensProduct = (data) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST})
    axios.get("https://mock-server-app-2-46w4.onrender.com/Women", data).then((res)=> {
        dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data})
    }).catch((err)=> {
        dispatch({type: PRODUCT_FAILURE})
    })
}

//Boys Product
export const boysProduct = (data) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST})
    axios.get("https://mock-server-app-2-46w4.onrender.com/Boys", data).then((res)=> {
        dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data})
    }).catch((err)=> {
        dispatch({type: PRODUCT_FAILURE})
    })
}

// Girls Product
export const girlsProduct = (data) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST})
    axios.get("https://mock-server-app-2-46w4.onrender.com/Girls", data).then((res)=> {
        dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data})
    }).catch((err)=> {
        dispatch({type: PRODUCT_FAILURE})
    })
}
