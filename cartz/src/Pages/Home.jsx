import React from 'react'
import Carousel from './Carousel'
import LimitedOffers from '../HomeComponents/LimitedOffers'
import style from "../HomeComponents/home.module.css"
import NewCollection from "../HomeComponents/NewCollection"
import { mobileData } from '../Data/data'

const Home = () => {
  return (
    <div style={{}}> 
      <Carousel />
      <LimitedOffers/>
      <NewCollection data={mobileData} />
    </div>
  )
}

export default Home


// dark : #008b7d
// light : #4fd1c5