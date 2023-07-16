import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

export const GridCard = ({image, text}) => {

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' spacing={5} bg={"gray.300"} >
      <Image src={image} width={"100%"} height={"75%"} mt={"0"} objectFit={"cover"}/>
      <Box pl={"4"} pr={"4"}>
        <Box
          mt='1'
          fontWeight='semibold'
          lineHeight='tight'
          textAlign={"left"}
          textDecoration={"underline"}
        >
        <Text mt={5}>{text}</Text>
        </Box>
      </Box>
    </Box>
  )
}