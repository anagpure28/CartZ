import axios from "axios"
import { GET_CART_PRODUCT_FAILURE, GET_CART_PRODUCT_REQUEST, GET_CART_PRODUCT_SUCCESS, POST_CART_PRODUCT_FAILURE, POST_CART_PRODUCT_REQUEST, POST_CART_PRODUCT_SUCCESS } from "./actionType"

export const getCartData = () => (dispatch) => {
    // dispatch({type:GET_CART_PRODUCT_REQUEST})
    // axios.get(`https://thzv8b-8080.csb.app/cartData`)
    // .then((res)=>{dispatch({type:GET_CART_PRODUCT_SUCCESS,payload:res.data});console.log(res.data)})
    // .catch((err)=>dispatch({type:GET_CART_PRODUCT_FAILURE}))

}

export const postCartData = (id,path) => (dispatch) => {
    // let obj={
    //     email:"aniketzade123@gmail.com",
    //     displayName:"Aniket",
    //     dataLength:2,
    //     data:[]
    // };
    // // dispatch({type:POST_CART_PRODUCT_REQUEST})
    // console.log(obj)

    // axios.get(`https://845wro.sse.codesandbox.io${path}/${id}`)
    // .then((res)=>obj.data=[])

    

    // axios.post(`https://thzv8b-8080.csb.app/cartData`,obj)
    // .then((res)=>{dispatch({type:POST_CART_PRODUCT_SUCCESS,payload:res.data})})
    // .catch((err)=>dispatch({type:POST_CART_PRODUCT_FAILURE}))
    
}
