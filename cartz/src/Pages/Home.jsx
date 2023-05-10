import React from 'react'
import Carousel from './Carousel'
import LimitedOffers from '../HomeComponents/LimitedOffers'

const Home = () => {
  return (
    <div style={{marginTop:"70px"}}>
      <Carousel />
      <LimitedOffers/>
    </div>
  )
}

export default Home


// dark : #008b7d
// light : #4fd1c5