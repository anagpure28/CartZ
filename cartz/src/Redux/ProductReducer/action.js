import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionType"


export const getProduct = (data) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST})
    axios.get(" http://localhost:8080/products", data).then((res)=> {
        dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data})
    }).catch((err)=> {
        dispatch({type: PRODUCT_FAILURE})
    })
}