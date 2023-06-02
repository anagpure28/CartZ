import React from 'react';
import { useBreakpointValue } from '@chakra-ui/react';
import {
  Box,
  Stack,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";

import Slider from 'react-slick';
// import pic1 from "../CarouselImages/HomePage/1.jpg";
// import pic2 from "../CarouselImages/HomePage/2.jpg";
// import pic3 from "../CarouselImages/HomePage/3.jpg";
// import pic4 from "../CarouselImages/HomePage/4.jpg";
// import pic5 from "../CarouselImages/HomePage/5.jpg";
// import pic6 from "../CarouselImages/HomePage/6.jpg";
// import pic7 from "../CarouselImages/HomePage/7.jpg";

// Settings for the slider
const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 3000,
  slidesToShow: 3,
  slidesToScroll: 3
};

export default function OffersCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    // pic1,
    // pic2,
    // pic3,
    // pic4,
    // pic5,
    // pic6,
    // pic7
  ];

  const Card = ({ heading, description, icon, href }) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5} 
        backgroundColor={"gray.50"}
        textAlign={"left"}>
        <Stack align={'start'}>
          <Box mt={2}>
            <Heading size="md">Bank Offer</Heading>
            <Text mt={1} fontSize={'sm'}>
            Upto ₹300.00 discount on select Credit Cards, HDFC Bank Debit CardsUpto...
            </Text>
          </Box>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'} lineHeight={0}>
            6 offers
          </Button>
        </Stack>
      </Box>
    );
  };

  return (
    <Box
      position={'relative'}
      width={'100%'}
      m={"auto"}
      overflow={'hidden'}
      >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {[1,2].map((url, index) => (
          <Card
          key={index}
          backgroundPosition="center"
            heading={'Heading'}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            href={'#'}
          />
        ))}
      </Slider>
    </Box>
  );
}