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
import { Link, Navigate, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { UserAuth } from "../Context/AuthContext";
import { useState } from "react";
import { CreateUser } from "../Redux/authReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function SignupCard() {
  const toast = useToast();
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setLoginEmail] = useState("");
  const [password, setLoginPasword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { googleSignIn, logOut } = UserAuth();
  // const isAuth = useSelector((store) => store.authReducer.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setlastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleUser = (e) => {
    const payload = { firstName, lastName, email, password };

    {
      !firstName ? setFirstNameError(true) : setFirstNameError(false);
    }
    {
      !lastName ? setlastNameError(true) : setlastNameError(false);
    }
    {
      !email ? setEmailError(true) : setEmailError(false);
    }
    {
      !password ? setPasswordError(true) : setPasswordError(false);
    }

    if (!firstName || !email || !password || !lastName) {
      return false;
    }

    fetch(`https://cartz-new-backend.onrender.com/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.msg === "User already exists") {
          toast({
            title: data.msg,
            status: "warning",
            position: "top",
            duration: 5000,
            isClosable: true,
          });
          return;
        } else {
          toast({
            title: data.msg,
            position: "top",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // if (isAuth) {
  //   return <Navigate to={"/login"} />;
  // }

  return (
    <Flex minH={"60vh"} align={"center"} justify={"center"} bg={"gray.50"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8} h={540}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    textAlign={"start"}
                    value={firstName}
                    name={"firstname"}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {firstNameError ? <Text style={{color: 'red', textAlign: 'left'}}>FirstName is Required</Text> : null}
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    textAlign={"start"}
                    value={lastName}
                    name={"lastname"}
                    onChange={(e) => setlastName(e.target.value)}
                  />
                  {lastNameError ? <Text style={{color: 'red', textAlign: 'left'}}>LastName is Required</Text> : null}
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                textAlign={"start"}
                value={email}
                name={"email"}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              {emailError ? <Text style={{color: 'red', textAlign: 'left'}}>Email is Required</Text> : null}
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  textAlign={"start"}
                  value={password}
                  name={"password"}
                  onChange={(e) => setLoginPasword(e.target.value)}
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
            {passwordError ? <Text style={{color: 'red', textAlign: 'left'}}>Password is Required</Text> : null}
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

export default SignupCard;
