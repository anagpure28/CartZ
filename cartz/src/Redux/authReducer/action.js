import axios from "axios"
import { UserAuth } from '../../Context/AuthContext';

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType"

// {
//     "id":1,
//     "displayName":"Aniket Zade",
//     "photoURL":"https://lh3.googleusercontent.com/a/AAcHTtfASS7n9fL21g8B3gzqBsnUzaTyM4BBvqgUmx1yFg=s96-c",
//     "email":"aniketzade4024@gmail.com",
//     "emailVerified":true,
//     "password":"Aniket@123",
//     "accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3YmFiYWFiYTEwNWFkZDZiM2ZiYjlmZjNmZjVmZTNkY2E0Y2VkYTEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQU5JS0VUIFpBREUiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0ZkFTUzduOWZMMjFnOEIzZ3pxQnNuVXphVHlNNEJCdnFnVW14MXlGZz1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9jYXJ0ei0xOWI2OCIsImF1ZCI6ImNhcnR6LTE5YjY4IiwiYXV0aF90aW1lIjoxNjg2ODI2NTg2LCJ1c2VyX2lkIjoibUJPUW1UVERUdFZKRlBmTk8xSG1jbXBPN2xHMyIsInN1YiI6Im1CT1FtVFREVHRWSkZQZk5PMUhtY21wTzdsRzMiLCJpYXQiOjE2ODY4MjY1ODYsImV4cCI6MTY4NjgzMDE4NiwiZW1haWwiOiJhbmlrZXR6YWRlNDAyNEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMjM5MDU2Njc2NjU2ODY3MTkyMCJdLCJlbWFpbCI6WyJhbmlrZXR6YWRlNDAyNEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.VJvHb4eXwmiHDltZ6u1PEKTwGZSWR576B08Hs8i1ERJLCYIIfWTkRiQ28-hZ55-boxvu3GKfLil8eARaV44ExqEa3YFmugagRlsqsRkQZS1TJZ0jeYte_mJX30b7Eab1FVqF5kgvLSM5UiwQMmQ3eKL-DGlV1LdYVaNy-XzR4YBj2fw6CCsSfAGcZZKo9sLF0yjGbqHNCc72uqMrmsW3huQuZZMqfpQqa_G9jcJRxUk_yVR1y7kiUFKMCFjWg3LxDYbYJJKrKgsoR53rSA9xRzT9bTdkXdkToP35vQizoWXDjbrj-g3NWzz-7fLpZ6dMoM-ojPvAoAafqXDaP-nMQw"
//   }



export const login = (userData,user,googleSignIn) => (dispatch) => {
    // const {user,logOut} = UserAuth()
    const {email,password} = userData;
    let obj={
        displayName:user?.displayName,
        photoURL:user?.photoURL,
        email:email,
        emailVerified:true,
        password:password,
        accessToken:user?.accessToken
    }


    const PostData = ()=>{
        axios.post(`http://localhost:8080/users`,obj)
        .then((res)=>console.log(res.data))
    }



    dispatch({type: LOGIN_REQUEST})
    axios.get("http://localhost:8080/users")
    .then((res)=>{
        res.data.map((e)=>{
            if(e.email===email && e.password===password){
                googleSignIn();
            }
            else{
                googleSignIn();
                PostData()
            }
        })
    })
    .catch((err)=>console.log(err))
    
}