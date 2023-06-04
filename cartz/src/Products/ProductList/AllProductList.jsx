import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mensProduct } from "../../Redux/ProductReducer/action";
import { AllProductCard } from "./AllProductCard";
import styled from "styled-components";
import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { useLocation, useSearchParams } from "react-router-dom";
import ProductCart from "../../Components/ProductCart";

export const AllProductList = () => {
  const [query, setQuery] = useState("");
  const [searchParams] = useSearchParams();
  const products = useSelector((store) => store.ProductReducer.products);
  const loading = useSelector((store) => store.ProductReducer.isLoading);
  const location = useLocation();
  const dispatch = useDispatch();
  let ref = useRef();

  let obj = {
    params: {
      gender: searchParams.getAll("gender"),
      brand: searchParams.getAll("brand"),
      category: searchParams.getAll("category")
    }
  }

  const paramObj = {
    params: {
      q: query && query,
    },
  };

  //Fetching Data
  useEffect(() => {
    console.log("data", obj)
    dispatch(mensProduct(obj));
  }, [location.search]);

  //Search functionality
  useEffect(() => {
    if (ref.current) {
      clearTimeout(ref.current);
    }

    ref.current = setTimeout(() => {
      dispatch(mensProduct(paramObj));
    }, 1000);
  }, [query]);

  return (
    <DIV>
      <div className="input">
        <input
          type="text"
          class="search"
          autoComplete="off"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          style={{textAlign:"start"}}
        />
      </div>
      {loading ? <div className="grid">
        {products.length > 0 &&
          products.map((el,i) => {
            return <Box padding="0" bg="white" borderRadius="5px">
            <SkeletonText mt="4" noOfLines={1} spacing="1" skeletonHeight="28" />
            <SkeletonText mt="4" noOfLines={3} spacing="3" skeletonHeight="3" />
          </Box>;
          })}
      </div> :
      <div className="grid">
        {products.length > 0 &&
          products.map((el) => {
            return <ProductCart key={el.id} {...el} />
          })}
      </div> }
    </DIV>
  );
};

const DIV = styled.div`
  text-align: left;
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
  }
  .search {
    border: 3px solid #242424;
    border-radius: 10px;
    width: 30%;
    color: black;
    padding: 6px 10px;
  }
  img {
    margin: 10px 0;
  }
  .input{
    margin: 0 0 15px 0;
  }
`;
