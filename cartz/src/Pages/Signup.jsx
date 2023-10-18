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
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, Navigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { UserAuth } from "../Context/AuthContext";
import { useState } from "react";
import { CreateUser } from "../Redux/authReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

export default function SignupCard() {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const { googleSignIn, logOut } = UserAuth();
  const [formState, setFormState] = useState(initialState);
  const isAuth = useSelector((store)=> store.authReducer.isAuth)
  const dispatch = useDispatch();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    if (formState.firstname == "") {
      toast({
        title: "Please fill the firstname",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else if (formState.lastname == "") {
      toast({
        title: "Please fill the lastname",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else if (formState.email == "") {
      toast({
        title: "Please fill the email",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else if (formState.password == "") {
      toast({
        title: "Please fill the password",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      dispatch(CreateUser(formState))
        .then(() => {
          toast({
            title: "Account Created 👍.",
            description: "We created Account for you!",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        })
        .catch(() => {
          toast({
            title: "Account Not Created.",
            description: "Failed to Create Account!",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        });
      setFormState(initialState);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isAuth) {
    return <Navigate to={"/login"} />;
  }

  return (
    <Flex
      minH={"60vh"}
      align={"center"}
      justify={"center"}
      bg={"gray.50"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={"white"}
          boxShadow={"lg"}
          p={8}
          h={540}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    textAlign={"start"}
                    value={formState.firstname}
                    name={"firstname"}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    textAlign={"start"}
                    value={formState.lastname}
                    name={"lastname"}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                textAlign={"start"}
                value={formState.email}
                name={"email"}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  textAlign={"start"}
                  value={formState.password}
                  name={"password"}
                  onChange={handleChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
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
                  bgGradient: "linear(to-r, pink.500, orange.500)",
                }}
                onClick={handleUser}
              >
                Sign up
              </Button>
            </Stack>
            <Stack>
              <p style={{ marginBottom: "10px" }}>OR</p>
              <GoogleButton
                onClick={handleGoogleSignIn}
                style={{
                  width: "60%",
                  margin: "auto",
                  backgroundColor: "white",
                  color: "gray",
                  fontWeight: "600",
                  padding: "0px 15px",
                  borderRadius: "10px",
                }}
              />
            </Stack>
            <Stack pt={2}>
              <Text align={"center"}>
                Already a user ?{" "}
                <Link to="/login" style={{ color: "#008170" }}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
