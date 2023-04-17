// import axios from "axios"
import { LAPTOP_FAILURE, LAPTOP_REQUEST, LAPTOP_SUCCESS } from "./actionType";

export const laptopRequestAction = () => {
    return {type: LAPTOP_REQUEST}
}

export const laptopSuccessAction = (payload) => {
    return {type: LAPTOP_SUCCESS, payload}
}

export const laptopFailureAction = () => {
    return {type: LAPTOP_FAILURE}
}

// export const laptop = (userData) => (dispatch) => {
//     dispatch(laptopRequestAction())
//     axios.post("https://reqres.in/api/login", userData).then((res) => {
//         dispatch(laptopSuccessAction(res.data))
//         console.log(res.data.token)
//     }).catch((err) => {
//         dispatch(laptopFailureAction(err.message))
//     })
// }