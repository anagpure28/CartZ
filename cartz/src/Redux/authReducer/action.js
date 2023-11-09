import axios from "axios"
import { UserAuth } from '../../Context/AuthContext';

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, USER_SUCCESS, USER_FAILURE, USER_REQUEST, USER_LOGOUT } from "../actionType"


// export const login = (userData,user,googleSignIn) => (dispatch) => {
//     // const {user,logOut} = UserAuth()
//     const {email,password} = userData;
//     let obj={
//         displayName:user?.displayName,
//         photoURL:user?.photoURL,
//         email:email,
//         emailVerified:true,
//         password:password,
//         accessToken:user?.accessToken
//     }


//     const PostData = ()=>{
//         axios.post(`http://localhost:8080/users`,obj)
//         .then((res)=>console.log(res.data))
//     }



//     dispatch({type: LOGIN_REQUEST})
//     axios.get("http://localhost:8080/users")
//     .then((res)=>{
//         res.data.map((e)=>{
//             if(e.email===email && e.password===password){
//                 googleSignIn();
//             }
//             else{
//                 googleSignIn();
//                 PostData()
//             }
//         })
//     })
//     .catch((err)=>console.log(err))
    
// }

export const userLogin = (userData) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    return axios
      .post(`https://cartz-new-backend.onrender.com/users/login`, userData)
      .then((res) => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
        console.log(res);
      })
      .catch(() => {
        dispatch({ type: LOGIN_FAILURE });
      });
  };

export const CreateUser = (data) => (dispatch) => {
    dispatch({ type: USER_REQUEST });
    return axios
      .post(`https://cartz-new-backend.onrender.com/users/register`, data)
      .then((res) => {
        // console.log(res);
        dispatch({ type: USER_SUCCESS, payload: res.data });
      })
      .catch(() => {
        dispatch({ type: USER_FAILURE });
      });
  };

  export const userLogout = (userData) => async (dispatch) => {
    try {
      // Include email and password in the request to delete the user's data
      await axios.get('https://cartz-new-backend.onrender.com/users/logout', { data: userData });
  
      // Dispatch a Redux action to indicate that the user has logged out
      dispatch({ type: USER_LOGOUT });
    } catch (error) {
      // Handle any errors
      console.error('Error logging out:', error);
    }
  };