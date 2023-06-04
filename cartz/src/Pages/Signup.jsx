import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { UserAuth } from '../Context/AuthContext';
import { useState } from 'react';
  
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    const {googleSignIn,logOut} = UserAuth();
    

    const handleGoogleSignIn = async ()=>{
      try {
          await googleSignIn();
      } catch (error) {
        console.log(error)
      }
    }

    

    return (
      <Flex
        minH={'60vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
            h={540}
            >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" textAlign={"start"}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" textAlign={"start"}/>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" textAlign={"start"}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} textAlign={"start"} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={5}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  colorScheme={"white"}
                  bgGradient="linear(to-r, pink.400, orange.400)"
                  _hover={{
                  bgGradient:"linear(to-r, pink.500, orange.500)"
                }}>
                  Sign up
                </Button>
              </Stack>
              <Stack>
                <p style={{marginBottom:"10px"}}>OR</p>
                <GoogleButton onClick={handleGoogleSignIn} style={{width:"60%",margin:"auto",backgroundColor:"white",color:"gray",fontWeight:"600",padding:"0px 15px",borderRadius:"10px"}}/>
              </Stack>
              <Stack pt={2}>
                <Text align={'center'}>
                  Already a user ?  <Link to="/login" style={{color: "rgb(255,111,97)"}}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }