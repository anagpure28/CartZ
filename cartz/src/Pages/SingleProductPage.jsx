import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { ImPriceTags } from "react-icons/im";
import { RiSecurePaymentLine } from "react-icons/ri";
import "./SingleProductPage.css";
import { Link, useParams } from "react-router-dom";
import OffersCarousel from "../CarouselComponent/OffersCarousel";
import vectorImage from "./Images/vectorOnSingleProductPage.png";
import Ethinic from "./Images/Ethinic.gif";
import sale from "./Images/sale.jpg";
import flatsale from "./Images/flatsale.jpg";
import { GridContainer } from "./GridContainer";
import { grid } from "../Data/grid";
import { AiFillStar } from "react-icons/ai";       
import {Image} from "antd"
import BestSellerBrands from "../HomeComponents/BestSellerBrands";
import axios from "axios";
import { message } from 'antd';
import { useCart } from "../cartComponents/CartProvider";

let url = "https://845wro.sse.codesandbox.io";

const images = [
  "https://img.faballey.com/images/Product/DRS03635Z/d3.jpg",
  "https://img.faballey.com/images/Product/DRS03635Z/d4.jpg",
  "https://img.faballey.com/images/Product/DRS03635Z/d5.jpg",
  "https://img.faballey.com/Images/Product/DRS03635Z/d3.jpg",
  "https://img.faballey.com/images/Product/DRS03635Z/d8.jpg",
];

export default function Simple() {
  const { category, id } = useParams();
  const [img, setImg] = useState(images[0]);
  const [singleProduct, setSingleProduct] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const { addItemToCart } = useCart()

  // const hoverHandler = (image, i) => {
  //   setImg(image);
  //   refs.current[i].classList.add("active");
  //   for (var j = 0; j < images.length; j++) {
  //     if (i !== j) {
  //       refs.current[j].classList.remove("active");
  //     }
  //   }
  // };
  // const refs = useRef([]);
  // refs.current = [];
  // const addRefs = (el) => {
  //   if (el && !refs.current.includes(el)) {
  //     refs.current.push(el);
  //   }
  // };

  const main = useRef(null);

  const addToCart = () => {
    let cartData = JSON.parse(localStorage.getItem("CartZ-cart")) || [];
    let duplicateData = false;
    cartData.forEach((el,i)=> {
      if(el.id === singleProduct.id && el.category === singleProduct.category){
        duplicateData = true;
      }
    })
    if(duplicateData){
      messageApi.info('Product is already present in the Cart');
      return;
    }
    let newCard = [...cartData, {...singleProduct, quantity: 1}];
    addItemToCart(newCard)
    localStorage.setItem("CartZ-cart", JSON.stringify(newCard))
    messageApi
      .open({
        type: 'loading',
        content: 'Action in progress..',
        duration: 1.5,
      })
      .then(() => message.success('Product Added to Cart', 2.5))
  }

  useEffect(() => {
    axios
      .get(`${url}/${category}/${id}`)
      .then((res) => {
        setSingleProduct(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
    main.current.scrollTop = -100;
    // console.log(main)
  }, []);

  return (
    <div ref={main}>
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
                 {/*<div className="left_1">
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
                  </div> */}
                <div className="left_2">
                  <Image src={singleProduct?.img} alt="" />
                </div>
              </div>
            </div>
            <div style={{ width: "90%", margin: "auto", marginTop: "35%" }}>
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
                marginLeft={"-1"}
                lineHeight={1}
                fontWeight={600}
                mb={1}
                fontSize={{ base: "1xl", sm: "2xl", lg: "3xl" }}
                textAlign={{ base: "center", sm: "center", lg: "left" }}
              >
                {singleProduct?.title}
              </Heading>
              <Link
                style={{ color: "blue", textDecoration: "underline" }}
                to={"#"}
              >
                <Text textAlign={{ base: "center", sm: "center", lg: "left" }}>Visit the Store</Text>
              </Link>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={400}
                fontSize={"md"}
                mt={1}
                lineHeight={1.5}
                textAlign={{ base: "center", sm: "center", lg: "left" }}
              >
                <span
                  style={{
                    color: "green",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  {singleProduct?.ratingsContainer}
                </span>
                <div
                  style={{
                    display: "inline-block",
                    color: "gold",
                    fontSize: "1rem",
                    marginBottom: "-2px"
                  }}
                >
                  <AiFillStar />
                </div>{" "}
                Rating | {singleProduct?.ratingsCount} reviews
              </Text>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={400}
                fontSize={"md"}
                lineHeight={1.5}
                textAlign={{ base: "center", sm: "center", lg: "left" }}
              >
                #1 Best Seller in {category}'s Collection
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
                  color={useColorModeValue("gray.900", "gray.400")}
                  fontWeight={400}
                  fontSize={"2xl"}
                  textAlign={{ base: "center", sm: "center", lg: "left" }}
                >
                  Price: <span className="loader">{singleProduct?.price}</span>
                </Text>
                <Text textAlign={{ base: "center", sm: "center", lg: "left" }} mt={-1} fontWeight={600} mb={2}>
                  Including all Taxes
                </Text>
                <hr />
                <Text
                  fontSize={{ base: 16, lg: 21 }}
                  color={useColorModeValue("#ff4d05")}
                  fontWeight={"500"}
                  mt={3}
                  mb={"1"}
                >
                  PRODUCT DESCRIPTION
                </Text>
                <Text fontSize={"md"} mt={3} textAlign={"left"}>
                Step into the world of {category}'s fashion and explore our exceptional collection of clothing designed exclusively for the modern gentleman. From sophisticated suits to casual everyday essentials, our range of men's clothing encompasses style, comfort, and versatility.
                <br />
                For colder days, indulge in our selection of cozy sweaters, jackets, and coats that combine warmth with fashion-forward design. From classic pea coats to trendy leather jackets, we have you covered for all seasons and occasions.
                <br />
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
                        Size of product:
                      </Text>{" "}
                      {singleProduct?.sizeInventoryPresent}
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Brand:
                      </Text>{" "}
                      {singleProduct?.brand}
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
                  </List>
                </Box>
              </Box>
            </Stack>
            {contextHolder}
            <Button
              w={"sm"}
              margin={"auto"}
              mt={2}
              mb={2}
              size={"lg"}
              py={"3"}
              bg={"#2D6E7E"}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              style={{ borderRadius: "12px" }}
              onClick={addToCart}
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

      <Box
        w={"100%"}
        mt={2}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <img src={vectorImage} alt="" />
        <img src={sale} width={"45%"} alt="" />
      </Box>
      <div>
        <img src={flatsale} />
        <img src={Ethinic} style={{ margin: "auto", marginBottom: "10px" }} />
      </div>
      <Container mt={"10"} maxW={"8xl"}>
        <GridContainer data={grid} title={"Featured Clothings"} />
      </Container>
      <br />
      <BestSellerBrands />
      <br />
    </div>
  );
}
