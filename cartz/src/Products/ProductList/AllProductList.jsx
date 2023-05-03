import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../Redux/ProductReducer/action';
import { AllProductCard } from "./AllProductCard"
import styled from 'styled-components';

export const AllProductList = () => {
  const products = useSelector((store) => store.ProductReducer.products);
  const dispatch = useDispatch()
  console.log(products)

  useEffect(()=> {
    dispatch(getProduct())
  },[])

  return (
    <DIV>
        {products?.map((el) => {
            return <AllProductCard key={el.id} {...el}/>
        })}
    </DIV>
  )
}

const DIV = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
`
