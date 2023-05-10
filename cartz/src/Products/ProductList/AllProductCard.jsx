// import React from 'react'
// import styled from 'styled-components'

// export const AllProductCard = ({id, images, title, price, rating, brand}) => {
//   return (
//     <DIV>
//         <div className='img-cont'>
//             <img src={images["image1"]} alt="" />
//         </div>
//         <div className='box'>
//             <h3>{brand}</h3>
//             <h3>{title}</h3>
//             <p>Price: {price}</p>
//         </div>
//     </DIV>
//   )
// }

// const DIV = styled.div`
//     /* border: 1px solid black; */
//     height: 380px;
//     box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
//     .img-cont{
//         width: 100%;
//         height: 75%;
//         margin: auto;
//         /* border: 1px solid red; */
//         object-fit: contain;
//     }
//     .img-cont > img{
//         width: 100%;
//         height: 100%;
//     }
//     .box{
//         padding-left: 5px;
//         text-align: left;
//     }
// `

import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const AllProductCard = (
  { id, 
    img, 
    product, 
    price, 
    ratingsContainer, 
    separator,
    ratingsCount,
    brand 
  }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={img} alt={product} width="100%" />

      <Box p="2">
        <Box display="flex" alignItems="baseline">
          <Box
            color="black"
            fontWeight="650"
            letterSpacing="wide"
            fontSize={16}
            textAlign={"left"}
            textTransform="uppercase"
            ml="1"
          >
            {brand}
          </Box>
          <Badge ml="2" borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
        </Box>

        <Box
          fontWeight="600"
          fontSize={16}
          lineHeight="tight"
          noOfLines={1}
          textAlign={"left"}
          ml="1"
        >
          {product}
        </Box>

        <Box fontSize={16} fontWeight={600} ml="1" textAlign={"left"}>
          Rs: {price}
        </Box>

        <Box display="flex" mt="1" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < ratingsContainer ? "teal.500" : "gray.300"} />
            ))}
          {/* <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property.reviewCount} reviews
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};
