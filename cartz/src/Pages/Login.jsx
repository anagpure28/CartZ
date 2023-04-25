import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/authReducer/action';

export default function SimpleCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const handleLogin = () => {
    const userData = {email, password}
    dispatch(login(userData))
  }

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
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input 
                type="email" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input 
                type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
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
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}