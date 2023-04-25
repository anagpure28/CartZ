import React from 'react'
import styled from 'styled-components'

export const AllProductCard = ({id, images, title, price, rating, brand}) => {
  return (
    <DIV>
        <div className='img-cont'>
            <img src={images["image1"]} alt="" />
        </div>
        <div className='box'>
            <h3>{brand}</h3>
            <h3>{title}</h3>
            <p>Price: {price}</p>
        </div>
    </DIV>
  )
}


const DIV = styled.div`
    /* border: 1px solid black; */
    height: 380px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
    .img-cont{
        width: 100%;
        height: 75%;
        margin: auto;
        /* border: 1px solid red; */
        object-fit: contain;
    }
    .img-cont > img{
        width: 100%;
        height: 100%;
    }
    .box{
        padding-left: 5px;
        text-align: left;
    }
`