import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Button,
  Image,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

import { 
  MdVerified,
  MdOutlineDateRange,
  MdOutlineWallet,
  MdOutlinePayment,
  MdOutlinePhoneInTalk,
  MdOutlineEmail,
  MdOutlineHome,
  MdOutlineFavoriteBorder,
  MdOutlineSettings,
  MdPowerSettingsNew
} from "react-icons/md";
import { TbTruck } from "react-icons/tb";

import {useNavigate} from "react-router-dom"
import {  Drawer } from 'antd';
import {useState}  from "react"
import {UserAuth} from "../Context/AuthContext"

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Feature = ({ title, text }) => {
  return (
    <Stack>
      <Text fontSize={"30px"} fontWeight={"bold"}>
        {title}
      </Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {

  const navigate = useNavigate()
  const {user,logOut} = UserAuth();
  const [open, setOpen] = useState(false);
    

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleLogOut = async ()=>{
    try{
      await logOut();
    }
    catch (err){
      console.log(err)
    }
  }

  return (
    <div >
      <Box p={4} border={"1px solid gray"} style={{backgroundColor:"rgb(29,29,29)",color:"white"}}>
        <Text
          style={{ marginTop: "4px", fontSize: "25px", marginBottom: "10px" }}
        >
          INDIA’S LARGEST SHOPPING PLATFORM
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} marginBottom={"25px"} >
          <Feature title={"260m+"} text={"Visitors"} />
          <Feature title={"31m+"} text={"Orders Delivered"} />
          <Feature title={"180m+"} text={"Cities"}/>
        </SimpleGrid>
        <hr
          style={{
            width: "80%",
            margin: "auto",
            color: "black",
            border: "1px solid gray",
          }}
        />
        <SimpleGrid columns={{ base: 1, md: 3 }} margin={"1.5% 20%"}>
          <Text style={{ marginTop: "4px", fontSize: "20px" }}>
            Get the link to download App
          </Text>
          <input
            type="text"
            placeholder="Enter your number"
            style={{
              backgroundColor: "#f1f4f6",
              padding: "5px 10px",
              borderRadius: "5px",
              textAlign:"start"
            }}
          />
          <Button
            style={{
              backgroundColor: "#2D6E7E",
              color: "white",
              width: "120px",
              margin: "0 10px",
            }}
          >
            SEND LINK
          </Button>
        </SimpleGrid>
      </Box>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
        style={{backgroundColor:"rgb(29,29,29)",color:"white"}}
      >
        <Container as={Stack} maxW={"7xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>Know Us</ListHeader>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>Contact us</Link>
              <Link href={"#"}>Press Coverage</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Business Partnership</Link>
              <Link href={"#"}>Become a Best Customer</Link>
              <Link href={"#"}>Corporate Goverance</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Our Policies</ListHeader>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Terms & Conditions</Link>
              <Link href={"#"}>Editorial Policy</Link>
              <Link href={"#"}>Return Policy</Link>
              <Link href={"#"}>IP Policy</Link>
              <Link href={"#"}>Grivence Redressal Policy</Link>
              <Link href={"#"}>Fake Jobs and Fraud Disclaimer</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Out Services</ListHeader>
              <Link href={"#"}>Order Products</Link>
              <Link href={"#"}>Book Services</Link>
              <Link href={"#"}>Product Articles</Link>
              <Link href={"#"}>Order Status</Link>
              <Link href={"#"}>Catalog Quick Order</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Connect</ListHeader>
              <Link href={"#"}>Social Links</Link>
              <div>
                <Stack direction={"row"} spacing={2}>
                  <SocialButton label={"Twitter"} href={"#"}>
                    <FaTwitter />
                  </SocialButton>
                  <SocialButton label={"YouTube"} href={"#"}>
                    <FaYoutube />
                  </SocialButton>
                  <SocialButton label={"Instagram"} href={"#"}>
                    <FaInstagram />
                  </SocialButton>
                  <SocialButton label={"Facebook"} href={"#"}>
                    <FaFacebook />
                  </SocialButton>
                  <SocialButton label={"Linkedin"} href={"#"}>
                    <FaLinkedin />
                  </SocialButton>
                </Stack>
              </div>
              <Link href={"#"}>What daily dose of health?</Link>
              {
                user?.displayName ? <div style={{width:"90%",display:"flex",alignItems:"center",gap:"10px"}}>
                  <img style={{width:"35px",borderRadius:"50%",border:"3px solid #2D6E7E",cursor:"pointer"}} src={user?.photoURL} onClick={showDrawer} />
                  <p style={{fontWeight:"500",fontSize:"19px"}}>{user?.displayName}</p>
                  <>
                  <Drawer title="User Detials" placement="right" onClose={onClose} open={open}>
                    <div style={{textAlign:"center"}}>
                      <img src={user?.photoURL} style={{margin:"auto",border:"3px solid #2D6E7E",borderRadius:"50%",width:"150px"}}/>
                      <p style={{margin:"20px auto 0px 10px",fontWeight:"500",fontSize:"25px",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>{user?.displayName} {user?.emailVerified ? <MdVerified style={{fontSize:"17px",marginTop:"6px",color:"green"}} /> : ""}</p>
                      <p style={{fontWeight:"500",fontSize:"10px"}}>{user?.email}</p>
                    </div>
                    <div style={{width:"100%",border:"1px solid #2D6E7E",margin:"10px auto"}}></div>
                    <div style={{height:"200px",textAlign:"start",width:"95%",margin:"auto",paddingTop:"20px",lineHeight:"30px"}}>
                      <p style={{fontWeight:"500",fontSize:"16px",display:"flex",alignItems:"center"}}><MdOutlineEmail style={{marginRight:"7px"}}/>Email : {user?.email}</p>
                      <p style={{fontWeight:"500",fontSize:"16px",display:"flex",alignItems:"center"}}><MdOutlinePhoneInTalk style={{marginRight:"7px"}}/>Number : {user?.phoneNumber? "" : "Not Found"}</p>
                      <p style={{fontWeight:"500",fontSize:"16px",display:"flex",alignItems:"center"}}><MdOutlineDateRange style={{marginRight:"7px"}}/>DOB : dd/mm/yy</p>
                      <p style={{fontWeight:"500",fontSize:"16px",display:"flex",alignItems:"center"}}><MdOutlineHome style={{marginRight:"7px"}}/>Address : Not Found</p>
                    </div>
                    <div style={{width:"100%",border:"1px solid #2D6E7E",margin:"10px auto"}}></div>
                    <div style={{height:"221px",textAlign:"start",width:"95%",margin:"auto",lineHeight:"30px"}}>
                      <Link style={{display:"flex",alignItems:"center",gap:"7px",fontSize:"16px",textDecoration:"none"}}><p style={{fontWeight:"500",fontSize:"16px",display:"flex",alignItems:"center"}}><TbTruck style={{marginRight:"7px"}}/>My Orders</p></Link>
                      <Link colorScheme='orange' style={{display:"flex",alignItems:"center",gap:"7px",fontSize:"16px",textDecoration:"none"}}><p style={{fontWeight:"500",fontSize:"16px",display:"flex",alignItems:"center"}}><MdOutlineFavoriteBorder style={{marginRight:"7px"}}/>My Wishlist</p></Link>
                      <Link style={{display:"flex",alignItems:"center",gap:"7px",fontSize:"16px",textDecoration:"none"}}><p style={{fontWeight:"500",fontSize:"16px",display:"flex",alignItems:"center"}}><MdOutlineWallet style={{marginRight:"7px"}}/>My Wallet</p></Link>
                      <Link style={{display:"flex",alignItems:"center",gap:"7px",fontSize:"16px",textDecoration:"none"}}><p style={{fontWeight:"500",fontSize:"16px",display:"flex",alignItems:"center"}}><MdOutlinePayment style={{marginRight:"7px"}}/>My Payments</p></Link>
                      <Link style={{display:"flex",alignItems:"center",gap:"7px",fontSize:"16px",textDecoration:"none"}}><p style={{fontWeight:"500",fontSize:"16px",display:"flex",alignItems:"center"}}><MdOutlineSettings style={{marginRight:"7px"}}/>Settings</p></Link>
                      {/* <Link style={{display:"flex",alignItems:"center",gap:"7px",fontSize:"16px",textDecoration:"none"}}><p style={{fontWeight:"500",fontSize:"16px",display:"flex",alignItems:"center"}}><MdOutlineDeliveryDining style={{marginRight:"7px"}}/>My Orders</p></Link> */}
                      <div style={{display:"flex",justifyContent:'center',alignItems:"flex-end",height:"30%"}}>
                          <Button   colorScheme='teal' variant='outline' style={{height:"35px",gap:"5px"}} onClick={handleLogOut}><MdPowerSettingsNew style={{marginTop:"2px",decoration:"none"}}/>Logout</Button>
                      </div>
                    </div>
                  </Drawer>
                </>
                </div> :

                <Button onClick={()=>navigate("/signup")}  style={{ backgroundColor: "#2D6E7E", color: "white" }}>
                  SIGN UP
                </Button>
              }
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Install App</ListHeader>
              <img
                src="https://onemg.gumlet.io/search_widget/google-badge_3x.png?format=auto"
                alt=""
                width={"120px"}
                style={{cursor:"pointer"}}
              />
              <img
                src="https://onemg.gumlet.io/search_widget/appstore-badge_3x.png?format=auto"
                alt=""
                width={"120px"}
                style={{cursor:"pointer"}}
              />
            </Stack>
          </SimpleGrid>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"8xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "center" }}
            align={{ md: "center" }}
          >
            <Stack direction={"row"} spacing={6}>
              <Box>
                <Image
                  src="https://static.legitscript.com/seals/729605.png"
                  width="100px"
                />
              </Box>
            </Stack>
          </Container>
          <Text>Available in 15+ Countries</Text>
          <Text>
            India | Australia | Brazil |  Canada |  China |  France |  Germany |  Italy |  Japan |  Mexico | 
            Netherlands | Poland | Singapore | Spain | Turkey | United Arab Emirates |
            United Kingdom | United States 
          </Text>
        </Box>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"8xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={2}
            justify={{ md: "initial" }}
            align={{ md: "center" }}
            style={{display:"flex",justifyContent:"center",alignItem:"center"}}
          >
            <Text>
              © 2023 CartZ. All rights reserved. In compliance with selling
              Products and taking Orders.
            </Text>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
