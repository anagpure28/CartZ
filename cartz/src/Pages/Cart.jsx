import React, { useEffect, useState } from 'react';
import style from "../CSS/Cart.module.css"
import CartProductCard from '../cartComponents/CartProductCard';
import { useSelector } from 'react-redux';
import axios from 'axios';


const Cart = () => {

  const [data,setData] = useState([])
  // console.log(data)

  const fetchData = () => {
    axios.get("https://845wro.sse.codesandbox.io/Men")
    .then((data1)=>{
      setData(data1.data)
      console.log(data1)
    })
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
  <div id={style.cart}>
    <div id={style.items}>
      {
        data.map((e) => <CartProductCard {...e}/>)
      }
    </div>
    <div id={style.invoice}>
      <div id={style.totalSection}>
        <div id={style.totalSectionTOP}>
          <div>
            <p>Total MRP</p>
            <p>Sub Total <p style={{ fontStyle: "italic", color: "gray", fontSize: "12px" }}>(Include all taxs)</p></p>
            <p>Discount on MRP</p>
            <p>Coupon Discount</p>
            <p>Shipping</p>
          </div>
          <div>
            <p>₹4,999.03</p>
            <p>₹5,138.93</p>
            <p>-₹873 (50% OFF)</p>
            <p>-₹394 (18% OFF)</p>
            <p>₹49</p>
          </div>
        </div>
        <div id={style.totalSectionBOTTOM}>
          <div>
            <p>Total Amount</p>
          </div>
          <div>
            <p>₹3,865.92</p>
          </div>
        </div>
      </div>
      <div id={style.cuponSection}>
        <div>
          <p>Apply Cupoun</p>
        </div>
        <div>
          <input type="text" name="" id="" placeholder='e.g. CARTZF50' />
          <button>Apply</button>
        </div>
      </div>
      <div id={style.buttonSection}>
        <button>Place Order</button>
      </div>
    </div>
  </div>
  )
}

export default Cart