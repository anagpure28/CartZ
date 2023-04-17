// import axios from "axios"
import { LAPTOP_FAILURE, LAPTOP_REQUEST, LAPTOP_SUCCESS } from "../laptopReducer/actionType";

export const mobileRequestAction = () => {
    return {type: LAPTOP_REQUEST}
}

export const mobileSuccessAction = (payload) => {
    return {type: LAPTOP_SUCCESS, payload}
}

export const mobileFailureAction = () => {
    return {type: LAPTOP_FAILURE}
}

// export const login = (userData) => (dispatch) => {
//     dispatch(loginRequestAction())
//     axios.post("https://reqres.in/api/login", userData).then((res) => {
//         dispatch(loginSuccessAction(res.data.token))
//         console.log(res.data.token)
//     }).catch((err) => {
//         dispatch(loginFailureAction(err.message))
//     })
// }