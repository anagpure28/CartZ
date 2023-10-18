import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mensProduct } from "../../Redux/ProductReducer/action";
import styled from "styled-components";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, SkeletonText } from "@chakra-ui/react";
import { Pagination } from "../../Pages/Pagination";

export const MenProductList = () => {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const products = useSelector((store) => store.ProductReducer.products);
  const skeleton = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const loading = useSelector((store) => store.ProductReducer.isLoading);
  const initialPage = searchParams.get("page");
  const [page, setPage] = useState(+initialPage || 1);
  const location = useLocation();
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const end = Math.ceil(products.length / 12);

  let obj = {
    params: {
      brand: searchParams.getAll("brand"),
      category: searchParams.getAll("category"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
      _page: searchParams.get("page"),
      _limit: 12,
    },
  };

  //Search query
  const paramObj = {
    params: {
      q: query && query,
    },
  };

  useEffect(() => {
    let param = {
      page,
    };
    setSearchParams(param);
  }, [page]);

  //Fetching Data
  useEffect(() => {
    console.log("data", obj);
    dispatch(mensProduct(obj));
  }, [location.search]);

  //Search functionality
  useEffect(() => {
    if (inputRef.current) {
      clearTimeout(inputRef.current);
    }

    inputRef.current = setTimeout(() => {
      dispatch(mensProduct(paramObj));
    }, 1000);
  }, [query]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DIV>
      <div className="input">
        <input
          type="text"
          className="search"
          autoComplete="off"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="grid">
          {skeleton.map((el, i) => {
            return (
              <Box key={i} padding="0" bg="white" borderRadius="5px">
                <SkeletonText
                  mt="4"
                  noOfLines={1}
                  spacing="1"
                  skeletonHeight="52"
                />
                <SkeletonText
                  mt="4"
                  noOfLines={4}
                  spacing="3"
                  skeletonHeight="3"
                />
              </Box>
            );
          })}
        </div>
      ) : !loading && products.length ? (
        <div className="main">
          <div className="grid">
            {products.length > 0 &&
              products?.splice(0, 12)?.map((el, i) => {
                return <ProductCard key={i} detail={el} {...el} />;
              })}
          </div>
          <Box>
            <Pagination page={page} setPage={setPage} end={end} />
          </Box>
        </div>
      ) : (
        <Box textAlign="center" py={85} px={6}>
          <WarningTwoIcon boxSize={"50px"} color={"orange.300"} />
          <Heading as="h2" size="xl" mt={6} mb={2}>
            Sorry No Data Found
          </Heading>
          <Box>
            <Link to={"/men"}><Button style={{marginTop: '30px', backgroundColor: 'black', color: 'white'}}>Explore more</Button></Link>
          </Box>
        </Box>
      )}
    </DIV>
  );
};

const DIV = styled.div`
  text-align: left;
  .main {
    height: auto;
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
