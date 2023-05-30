import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mensProduct } from "../../Redux/ProductReducer/action";
import { AllProductCard } from "./AllProductCard";
import styled from "styled-components";
import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { useLocation, useSearchParams } from "react-router-dom";

export const AllProductList = () => {
  const [searchParams] = useSearchParams()
  const products = useSelector((store) => store.ProductReducer.products);
  const loading = useSelector((store) => store.ProductReducer.isLoading);
  const location = useLocation()
  const dispatch = useDispatch();
  console.log(products);

  let obj = {
    params: {
      gender: searchParams.getAll("gender"),
      brand: searchParams.getAll("brand"),
      category: searchParams.getAll("category")
    }
  }

  useEffect(() => {
    console.log("data", obj)
    dispatch(mensProduct(obj));
  }, [location.search]);

  if(loading){
    return <Box padding="6" boxShadow="lg" bg="white">
    <SkeletonCircle size="16" />
    <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="8" />
  </Box>;
  }

  return (
    <DIV>
      {products.length > 0 && products.map((el) => {
        return <AllProductCard key={el.id} {...el} />;
      })}
    </DIV>
  );
};

const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
