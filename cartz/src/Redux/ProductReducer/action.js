import axios from "axios"
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionType"

export const getProduct = (data) => (dispatch) => {
    dispatch({type: PRODUCT_REQUEST})
    axios.get("https://4sbc0v-8080.csb.app/Men", data).then((res)=> {
        dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data})
    }).catch((err)=> {
        dispatch({type: PRODUCT_FAILURE})
    })
}