import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { ImPriceTags } from "react-icons/im";
import { RiSecurePaymentLine } from "react-icons/ri";
import "./SingleProductPage.css";
import { Link } from "react-router-dom";
import OffersCarousel from "../CarouselComponent/OffersCarousel";

const images = [
  "https://res.cloudinary.com/eastern/image/upload/w_1000,q_auto,f_auto/2062313_002_main.jpg",
  "https://res.cloudinary.com/eastern/image/upload/w_1000,q_auto,f_auto/2062313_002_alt1.jpg",
  "https://res.cloudinary.com/eastern/image/upload/w_1000,q_auto,f_auto/2062313_002_alt2.jpg",
  "https://res.cloudinary.com/eastern/image/upload/w_1000,q_auto,f_auto/2062313_002_alt3.jpg",
];

export default function Simple() {
  const [img, setImg] = useState(images[0]);
  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add("active");
    for (var j = 0; j < images.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("active");
      }
    }
  };
  const refs = useRef([]);
  refs.current = [];
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <div>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 3, md: 2 }}
          // py={{ base: 18, md: 28 }}
          mt={24}
        >
          <div style={{ display: "inline-block" }}>
            <div className="container">
              <div className="left">
                <div className="left_1">
                  {images.map((image, i) => (
                    <div
                      className={i == 0 ? "img_wrap active" : "img_wrap"}
                      key={i}
                      onClick={() => hoverHandler(image, i)}
                      ref={addRefs}
                    >
                      <img src={image} alt="" />
                    </div>
                  ))}
                </div>
                <div className="left_2">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
            <div style={{ width: "90%", margin: "auto", marginTop: "160px" }}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/461/553/original/buy-1-get-1-free-sale-banner-template-illustration-free-vector.jpg"
                alt=""
              />
            </div>
          </div>

          <Stack
            spacing={{ base: 1, md: 1 }}
            py={{ base: 2, md: 3 }}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <Box as={"header"} textAlign={"left"}>
              <Heading
                lineHeight={1}
                fontWeight={600}
                fontSize={{ base: "1xl", sm: "2xl", lg: "3xl" }}
              >
                Automatic Watch
              </Heading>
              <Link
                style={{ color: "blue", textDecoration: "underline" }}
                to={"#"}
              >
                Visit the Store
              </Link>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={400}
                fontSize={"md"}
                lineHeight={1.5}
              >
                Rating | <Link to={"#"}>246 answered questions</Link>
              </Text>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={400}
                fontSize={"md"}
                lineHeight={1.5}
              >
                #1 Best Seller in Men's Collection
              </Text>
            </Box>

            <Stack
              spacing={{ base: 1, sm: 4 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <Box spacing={{ base: 2, sm: 4 }}>
                <Text
                  textAlign={"left"}
                  color={useColorModeValue("gray.900", "gray.400")}
                  fontWeight={400}
                  fontSize={"2xl"}
                >
                  Price: <span class="loader">350.00</span>
                </Text>
                <Text textAlign={"left"} mt={-2} fontWeight={600}>
                  Including all Taxes
                </Text>
                <Text fontSize={"md"} mt={3} textAlign={"left"}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
              </Box>
              <Box>
                <Box display={"flex"} justifyContent={"center"}>
                  <ImPriceTags
                    style={{
                      color: "#ff4d05",
                      height: "30px",
                      margin: "0 5px",
                    }}
                  />
                  <Text
                    fontSize={{ base: "16px", lg: "20px" }}
                    color={useColorModeValue("#ff4d05")}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"3"}
                  >
                    OFFERS
                  </Text>
                </Box>
                <OffersCarousel />
              </Box>

              <Box>
                <Text
                  fontSize={{ base: 16, lg: 21 }}
                  color={useColorModeValue("#ff4d05")}
                  fontWeight={"500"}
                  mb={"1"}
                >
                  PRODUCT DELIVERY
                </Text>

                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "centre",
                    justifyContent: "center",
                    gap: "2rem",
                    cursor: "pointer",
                  }}
                >
                  <SimpleGrid
                    style={{
                      border: "black",
                      width: "100%",
                    }}
                    columns={{ base: 1, md: 2, lg: 4 }}
                    spacing={1}
                    mt={3}
                  >
                    <Box align={"center"}>
                      <TbTruckDelivery
                        style={{
                          backgroundColor: "rgba(234, 233, 233, 0.5)",
                          borderRadius: "50%",
                          width: "3rem",
                          height: "3rem",
                          padding: "0.8rem",
                        }}
                      />
                      <Text>Free Delivery</Text>
                    </Box>
                    <Box align={"center"}>
                      <TbReplace
                        style={{
                          backgroundColor: "rgba(234, 233, 233, 0.5)",
                          borderRadius: "50%",
                          width: "3rem",
                          height: "3rem",
                          padding: "0.8rem",
                        }}
                      />
                      <Text>7 Days Replacement</Text>
                    </Box>
                    <Box align={"center"}>
                      <TbTruckDelivery
                        style={{
                          backgroundColor: "rgba(234, 233, 233, 0.5)",
                          borderRadius: "50%",
                          width: "3rem",
                          height: "3rem",
                          padding: "0.8rem",
                        }}
                      />
                      <Text>CartZ Delivery</Text>
                    </Box>
                    <Box align={"center"}>
                      <RiSecurePaymentLine
                        style={{
                          backgroundColor: "rgba(234, 233, 233, 0.5)",
                          borderRadius: "50%",
                          width: "3rem",
                          height: "3rem",
                          padding: "0.8rem",
                        }}
                      />
                      <Text>Secure Transaction</Text>
                    </Box>
                  </SimpleGrid>
                </Box>
              </Box>

              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "20px" }}
                  color={useColorModeValue("#ff4d05")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={-3}
                >
                  Product Details
                </Text>
                <Box textAlign={"left"} m={8}>
                  <List spacing={2}>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Product Dimensions :
                      </Text>{" "}
                      8 x 5 x 10 cm; 300 Grams
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Manufacturer:
                      </Text>{" "}
                      SILICA TEXTILE PVT LTD
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Pack Of:
                      </Text>{" "}
                      1
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Pattern:
                      </Text>{" "}
                      Solid
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Reversible:
                      </Text>{" "}
                      No
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Country of Origin:
                      </Text>{" "}
                      India
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Stack>

            <Button
              rounded={"none"}
              w={"sm"}
              margin={"auto"}
              mt={2}
              mb={2}
              size={"lg"}
              py={"3"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box w={"100%"} mt={2}>
        <Image
          src="https://cdn.w600.comps.canstockphoto.com/discount-for-flat-people-vector-image_csp91298978.jpg"
          alt=""
        />
      </Box>
    </div>
  );
}
