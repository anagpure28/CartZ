import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  InputGroup,
  Stack,
  InputRightElement,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/authReducer/action';
import GoogleButton from 'react-google-button';
import { UserAuth } from '../Context/AuthContext';
import {Link as Link1,useNavigate} from "react-router-dom";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const {googleSignIn,user} = UserAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const userData = {email, password}
    dispatch(login(userData,user,googleSignIn))
  }

  const navigate = useNavigate();

  const handleGoogleSignIn = async ()=>{
    try {
        await googleSignIn();
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect (()=>{
    if(user?.displayName){
      navigate("/")
    }
  },[user])

  return (
    <Flex
      minH={'90vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'pink.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4} h={400}>
            <FormControl id="email" >
              <FormLabel>Email address</FormLabel>
              <Input 
                type="email" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                style={{textAlign:"start"}}
                />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} textAlign={"start"} value={password}  onChange={(e)=>setPassword(e.target.value)}/>
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
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'pink.400'}>Forgot password?</Link>
              </Stack>
              <Button
                colorScheme={"white"}
                bgGradient="linear(to-r, pink.400, orange.400)"
                _hover={{
                  bgGradient:"linear(to-r, pink.500, orange.500)"
                }}
                onClick={handleLogin}
                >
                Login in
              </Button>
              <p style={{margin:"10px"}}>OR</p>
              <GoogleButton onClick={handleGoogleSignIn} style={{width:"90%",margin:"auto",backgroundColor:"white",color:"gray",fontWeight:"600",padding:"0px 55px",borderRadius:"10px"}}/>
              <p style={{margin:"15px"}}>Don't Have an Account ?  <Link1 to="/signup" style={{color:"rgb(255,111,97)"}}> Register</Link1></p>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}