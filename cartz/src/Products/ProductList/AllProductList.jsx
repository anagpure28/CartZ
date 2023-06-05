import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mensProduct } from "../../Redux/ProductReducer/action";
import { AllProductCard } from "./AllProductCard";
import styled from "styled-components";
import { WarningTwoIcon } from '@chakra-ui/icons';
import { Box, Heading, SkeletonText } from "@chakra-ui/react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars-2';
import ProductCard from "../../Components/ProductCard";

export const AllProductList = () => {
  const [query, setQuery] = useState("");
  const [searchParams] = useSearchParams();
  const products = useSelector((store) => store.ProductReducer.products);
  const skeleton = [1,1,1,1,1,1,1,1,1,1,1,1];
  const loading = useSelector((store) => store.ProductReducer.isLoading);
  console.log("loading", loading);

  const location = useLocation();
  const dispatch = useDispatch();
  let ref = useRef();

  let obj = {
    params: {
      brand: searchParams.getAll("brand"),
      category: searchParams.getAll("category"),
    },
  };

  const paramObj = {
    params: {
      q: query && query,
    },
  };

  //Fetching Data
  useEffect(() => {
    console.log("data", obj);
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
          className="search"
          autoComplete="off"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          style={{textAlign:"start"}}
        />
      </div>

      {loading ? (
        <div className="grid">
          {skeleton.map((el, i) => {
            return (
              <Box padding="0" bg="white" borderRadius="5px">
                <SkeletonText
                  mt="4"
                  noOfLines={1}
                  spacing="1"
                  skeletonHeight="28"
                />
                <SkeletonText
                  mt="4"
                  noOfLines={3}
                  spacing="3"
                  skeletonHeight="3"
                />
              </Box>
            );
          })}
        </div>
      ) : !loading && products.length ? (
        <div className="main">
          <Scrollbars>
          <div className="grid">
            {products.length > 0 &&
              products.splice(0,12).map((el, i) => {
                return <ProductCard key={i} {...el} />;
              })}
          </div>
          </Scrollbars>
        </div>
      ) : (
        <Box textAlign="center" py={10} px={6}>
          <WarningTwoIcon boxSize={"50px"} color={"orange.300"} />
          <Heading as="h2" size="xl" mt={6} mb={2}>
            Sorry No Data Found
          </Heading>
        </Box>
      )}
    </DIV>
  );
};

const DIV = styled.div`
  text-align: left;
  .main {
    height: 1000px;
    border-radius: 10px;
  }
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
  .input {
    margin: 0 0 15px 0;
  }
  @media screen and (min-width: 901px) and (max-width: 1450px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
    }
  }
  @media screen and (min-width: 710px) and (max-width: 1075px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
  }
  @media screen and (max-width: 710px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 15px;
    }
  }
`;

// {products.length > 0 &&
//   products.map((el,i) => {
//     return  <Box padding="0" bg="white" borderRadius="5px">
//     <SkeletonText mt="4" noOfLines={1} spacing="1" skeletonHeight="28" />
//     <SkeletonText mt="4" noOfLines={3} spacing="3" skeletonHeight="3" />
//   </Box>;
//   })}
// </div>
