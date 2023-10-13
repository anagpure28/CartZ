import React from 'react';
import { Box, SimpleGrid, Text, Stack, Button } from '@chakra-ui/react';

const Feature = ({ title, text }) => {
  return (
    <Stack>
      <Text fontSize={"30px"} fontWeight={'bold'}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4} border={"1px solid gray"}>
      <Text style={{marginTop: "4px", fontSize: "25px", marginBottom: "10px"}}>INDIA’S LARGEST HEALTHCARE PLATFORM</Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} marginBottom={"25px"} >
        <Feature
          title={'260m+'}
          text={"Visitors"}
        />
        <Feature
          title={'31m+'}
          text={"Orders Delivered"}
        />
        <Feature
          title={'180m+'}
          text={"Cities"}
        />
      </SimpleGrid>
      <hr style={{width:"80%", margin: "auto", color: "black", border: "1px solid gray"}}/>
      <SimpleGrid columns={{ base: 1, md: 3 }} margin={"1.5% 20%"} >
        <Text style={{marginTop: "4px", fontSize: "20px"}}>Get the link to download App</Text>
        <input 
            type="text" 
            placeholder='Enter your number' 
            style={{backgroundColor: "#f1f4f6", padding: "5px 10px", borderRadius: "5px", }}/>
        <Button style={{backgroundColor: "#2D6E7E", color: "white", width: "120px", margin: "0 10px"}}>SEND LINK</Button>
      </SimpleGrid>
    </Box>
  );
}