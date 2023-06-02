import React from 'react'
import Carousel from './Carousel'
import LimitedOffers from '../HomeComponents/LimitedOffers'
import style from "../HomeComponents/home.module.css"
import NewCollection from "../HomeComponents/NewCollection"
import { newCollectionCaroselData } from '../Data/data'
import BestSellerBrands from '../HomeComponents/BestSellerBrands'
import UpcomingCategory from '../HomeComponents/UpcomingCategory'
import FirstCarosel from '../HomeComponents/FirstCarosel'
import couponImage from "../HomeComponents/images/PC_Coupon_stripe.gif"
import buyonegetoneImage from "../HomeComponents/images/640x128-bxgy-revised_update.jpg"
 
const Home = () => {
  return (
    <div style={{}}> 
      <FirstCarosel />
      <div className={style.cashback} style={{backgroundImage:`url(${couponImage})`}}>

      </div>
      <LimitedOffers/>
      <div className={style.buy1get1} style={{backgroundImage:`url(${buyonegetoneImage})`}}>
        <button></button>
      </div>
      <NewCollection data={newCollectionCaroselData} />
      <BestSellerBrands/>
      <UpcomingCategory/>
    </div>
  )
}

export default Home


// dark : #008b7d
// light : #4fd1c5