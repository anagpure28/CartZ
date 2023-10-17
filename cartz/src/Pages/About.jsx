import React, {useEffect} from 'react';
import styles from "../CSS/AboutUs.module.css"
import AniketZadePhoto from "./Images/AniketZade.png"
import AniketNagpurePhoto from "./Images/AniketNagpure.png"
import GoogleImage from "./Images/Google.png"
import MicroSoftImage from "./Images/MicroSoft.png"

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel
} from '@chakra-ui/react';

const Testimonial = (props) => {
  const { children } = props

  return <Box>{children}</Box>
}

const TestimonialContent = (props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id={styles.main}>
        <Box bg={useColorModeValue('gray.100', 'gray.700')}>
          <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
            <Stack spacing={0} align={'center'}>
              <Heading>Our Clients Speak</Heading>
              <Text>We have been working with clients around the world</Text>
            </Stack>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 10, md: 4, lg: 10 }}>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
                  <TestimonialText>
                  Here everyone's unique strengths come together to drive the projects forward swiftly and effectively.
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={
                    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                  }
                  name={'Anuj Sharma'}
                  title={'Analyst at AppxWide Corporation'}
                />
              </Testimonial>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>Intuitive Design</TestimonialHeading>
                  <TestimonialText>
                  We can effortlessly navigate the website, making user interface enjoyable and memorable.
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={
                    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                  }
                  name={'Kartik Raut'}
                  title={'Software Developer at IBM'}
                />
              </Testimonial>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>Mindblowing Service</TestimonialHeading>
                  <TestimonialText>
                  Your team consistently goes above and beyond to meet our needs and exceed our expectations.
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={
                    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                  }
                  name={'Aarti Raut'}
                  title={'Traniee at Majestic Finance'}
                />
              </Testimonial>
            </Stack>
          </Container>
        </Box>
      <div id={styles.MeetYourDevelopers}>
        <h1>
          Meet Our Developers
        </h1>
        <p>Explore the faces that bring your digital dreams to life here.</p>
        <div id={styles.DevelopersList}>
          <div className={styles.DevelopersCard}>
            <div>
              <img src={AniketZadePhoto}/>
            </div>
            <div>
              <h3>Aniket Zade</h3>
              <p>Software Developer</p>
              <img src={GoogleImage} />
            </div>  
          </div>
          <div className={styles.DevelopersCard}>
            <div>
              <img src={AniketNagpurePhoto}/>
            </div>
            <div>
              <h3>Aniket Nagpure</h3>
              <p>Software Developer</p>
              <img src={MicroSoftImage}  width="60px"/>
            </div>
          </div>
        </div>

      </div>
      <div id={styles.CompanyProfile}>
          <h1>Company Profile</h1>
          <p>Cart-Z - Your Global E-Commerce Destination</p>
          <div>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      About Us
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign={"start"}>
                  Welcome to Cart-Z, your premier online shopping destination that connects you to a world of possibilities. Established with a vision to make global shopping accessible to everyone, Cart-Z has become a household name for online shoppers in over 196 countries. We're more than just an e-commerce website; we're your one-stop shop for an unparalleled shopping experience.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Our Mission
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign={"start"}>
                  At Cart-Z, we're on a mission to bridge geographical boundaries, enabling shoppers to explore and purchase products from around the world with ease and convenience. We believe that global shopping should be effortless, affordable, and enjoyable.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      What We Offer
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign={"start"}>
                  Cart-Z boasts an extensive product catalog, featuring a wide array of items, from the latest gadgets to fashion trends, home essentials to unique artisanal products. We collaborate with reputable sellers and brands worldwide to ensure that you have access to the best quality products at competitive prices.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Key Features
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign={"start"}>
                  <ol>
                    <li>Global Reach: We proudly serve customers in 196+ countries, making us a truly global shopping platform.</li>
                    <li>Secure Shopping: Your safety is our top priority. We employ cutting-edge security measures to protect your personal and financial information.</li>
                    <li>Effortless Navigation: Our user-friendly website and mobile app make it simple to find, compare, and purchase products.</li>
                    <li>Diverse Selection: Choose from a vast selection of products across multiple categories, ensuring you find what you need.</li>
                    <li>Reliable Shipping: We partner with trusted logistics providers to deliver your orders efficiently and on time.</li>
                    <li>24/7 Customer Support: Our dedicated support team is ready to assist you with any questions or concerns around the clock.</li>
                  </ol>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Our Vision
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign={"start"}>
                  We envision a world where shopping knows no boundaries, where customers can discover and enjoy the best products from every corner of the globe. Cart-Z is committed to turning this vision into a reality, one satisfied customer at a time.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Join Us on the Journey
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign={"start"}>
                  Cart-Z invites you to explore a world of shopping without limits. Come, join our global community of savvy shoppers and experience the future of e-commerce. Your journey to Cart-Z is a journey to the world.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <p>
            Discover. Shop. Connect. With Cart-Z, the world is your marketplace.
            <br/>
            Thank you for choosing Cart-Z, where global shopping becomes a reality.
          </p>
      </div>
    </div>
  )
}

export default About;