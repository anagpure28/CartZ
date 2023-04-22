// import axios from "axios"

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType"


export const loginRequestAction = () => {
    return {type: LOGIN_REQUEST}
}

export const loginSuccessAction = (payload) => {
    return {type: LOGIN_SUCCESS, payload}
}

export const loginFailureAction = () => {
    return {type: LOGIN_FAILURE}
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