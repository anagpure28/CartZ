import React, { useState } from "react";
import { Box, Badge } from "@chakra-ui/react";
import { MdOutlineStarOutline, MdOutlineStar } from "react-icons/md";
import { Image } from "antd";

export const AllProductCard = ({
  id,
  img,
  product,
  price,
  ratingsContainer,
  separator,
  ratingsCount,
  brand,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      h={350}
      onClick={() => setVisible(true)}
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
      }}
    >
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
          <Image src={img}/>
        </Image.PreviewGroup>
      </div>
      <Box
        px="2"
        py="3"
        style={{
          width: "100%",
          height: "50%",
          backgroundImage:"linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,255,255,1))",
          display: "flex",
          alignItems: "end",
          cursor: "pointer",
        }}
      >
        <Box>
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
              .map((_, i) =>
                i < ratingsContainer ? (
                  <MdOutlineStar
                    key={i}
                    style={{ fontSize: "15px", margin: "0px 1px 0px 1px" }}
                    color="rgb(0,208,180)"
                  />
                ) : (
                  <MdOutlineStarOutline
                    key={i}
                    style={{ fontSize: "15px", margin: "0px 1px 0px 1px" }}
                    color="rgb(0,208,180)"
                  />
                )
              )}
            {/* <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property.reviewCount} reviews
          </Box> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};


