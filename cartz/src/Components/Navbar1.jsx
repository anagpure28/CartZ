import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Spinner,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Input,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { CiShoppingCart,CiShop,CiUser } from "react-icons/ci";
import { UserAuth } from '../Context/AuthContext';
import React, { useState } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
import '../index.css';
import {  Drawer } from 'antd';
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
import {Link as Link1,NavLink} from "react-router-dom"
import { color } from 'framer-motion';
import {useLocation} from "react-router-dom"
import { useLocale } from 'antd/es/locale';
import { TbTruck } from "react-icons/tb";
import style from "./navbar.module.css"

  export default function Navbar1() {
    const { isOpen, onToggle } = useDisclosure();
    const {user,logOut} = UserAuth()
    const [open, setOpen] = useState(false);
    console.log(user)
   

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  // console.log(user)
  // console.log(useLocation())

  const handleLogOut = async ()=>{
    try{
      await logOut();
    }
    catch (err){
      console.log(err)
    }
  }

  let cartData = JSON.parse(localStorage.getItem("CartZ-cart")) || [];
  
    return (
      <Box style={{position:"fixed",top:"0px",width:"100%",zIndex:"3"}}>
        <Flex
          bg={useColorModeValue('rgb(29,29,29)', 'gray.800')}
          color={useColorModeValue('gray', 'red')}
          minH={'70px'}
          py={{ base: 2 }}
          px={{ base: 100 }}
          pr={{base:5}}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
            
            >
            <IconButton
                
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base:1 }} justify={{ base: 'center', md: 'start' }} style={{alignItems:"Center"}}>
            <Link
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('white', 'rgb(235,235,235)')}
              href={'/'}
              cursor={"pointer"}
              style={{textDecoration:"none"}}
              >
              CartZ
            </Link>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
            style={{
                display:"flex",
                alignItems:"center",
                color:"white"
              }}
            >
            <CiShop  style={{fontSize:"22px",cursor:"pointer"}} _hover={{color:"rgb(255,111,97)"}}/>
            <Badge count={cartData.length}><Link href={"/carts"}><CiShoppingCart  style={{fontSize:"22px", color: 'white', cursor:"pointer"}} _hover={{color:"rgb(255,111,97)"}}/></Link></Badge>
            {
              user?.displayName ? <div style={{
                display:"flex",
                alignItems:"center",
                color:"white"
              }}>
                {/* <CiUser  style={{fontSize:"22px",cursor:"pointer"}} _hover={{textDecoration: 'none', color: "rgb(255,111,97)",}}/> */}
                <img src={user?.photoURL} width={"35px"}  style={{borderRadius:"50px",border:"2px solid rgb(255,111,97)",cursor:"pointer",padding:"1px"}} onClick={showDrawer}/>
                <Text style={{fontSize:"15px",width:"180px",textAlign:"start",marginLeft:"20px"}}>👋 Hi {user?.displayName.split(" ")[0]}</Text>
                <>
                  <Drawer title="User Detials" placement="right" onClose={onClose} open={open}>
                    <div style={{textAlign:"center"}}>
                      <img src={user?.photoURL} style={{margin:"auto",border:"3px solid rgb(255,111,97)",borderRadius:"50%",width:"150px",padding:"2px"}}/>
                      <p style={{margin:"20px auto 0px 10px",fontWeight:"500",fontSize:"25px",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>{user?.displayName} {user?.emailVerified ? <MdVerified style={{fontSize:"17px",marginTop:"6px",color:"green"}} /> : ""}</p>
                      <p style={{fontWeight:"500",fontSize:"10px"}}>{user?.email}</p>
                    </div>
                    <div style={{width:"100%",border:"1px solid rgb(255, 111, 97)",margin:"10px auto"}}></div>
                    <div style={{height:"200px",textAlign:"start",width:"95%",margin:"auto",paddingTop:"20px",lineHeight:"30px"}}>
                      <p style={{fontWeight:"500",fontSize:"16px",display:"flex",alignItems:"center"}}><MdOutlineEmail style={{marginRight:"7px"}}/>Email : {(user?.email).substring(0,30)}{user?.email.length>30 ? "..." : ""}</p>
                      <p style={{fontWeight:"500",fontSize:"16px",display:"flex",alignItems:"center"}}><MdOutlinePhoneInTalk style={{marginRight:"7px"}}/>Number : {user?.phoneNumber? "" : "Not Found"}</p>
                      <p style={{fontWeight:"500",fontSize:"16px",display:"flex",alignItems:"center"}}><MdOutlineDateRange style={{marginRight:"7px"}}/>DOB : dd/mm/yy</p>
                      <p style={{fontWeight:"500",fontSize:"16px",display:"flex",alignItems:"center"}}><MdOutlineHome style={{marginRight:"7px"}}/>Address : Not Found</p>
                    </div>
                    <div style={{width:"100%",border:"1px solid rgb(255, 111, 97)",margin:"10px auto"}}></div>
                    <div style={{height:"221px",textAlign:"start",width:"95%",margin:"auto",lineHeight:"30px"}}>
                      <Link style={{display:"flex",alignItems:"center",gap:"7px",fontSize:"16px",textDecoration:"none"}}><p style={{fontWeight:"500",fontSize:"16px",display:"flex",alignItems:"center"}}><TbTruck style={{marginRight:"7px"}}/>My Orders</p></Link>
                      <Link colorScheme='orange' style={{display:"flex",alignItems:"center",gap:"7px",fontSize:"16px",textDecoration:"none"}}><p style={{fontWeight:"500",fontSize:"16px",display:"flex",alignItems:"center"}}><MdOutlineFavoriteBorder style={{marginRight:"7px"}}/>My Wishlist</p></Link>
                      <Link style={{display:"flex",alignItems:"center",gap:"7px",fontSize:"16px",textDecoration:"none"}}><p style={{fontWeight:"500",fontSize:"16px",display:"flex",alignItems:"center"}}><MdOutlineWallet style={{marginRight:"7px"}}/>My Wallet</p></Link>
                      <Link style={{display:"flex",alignItems:"center",gap:"7px",fontSize:"16px",textDecoration:"none"}}><p style={{fontWeight:"500",fontSize:"16px",display:"flex",alignItems:"center"}}><MdOutlinePayment style={{marginRight:"7px"}}/>My Payments</p></Link>
                      <Link style={{display:"flex",alignItems:"center",gap:"7px",fontSize:"16px",textDecoration:"none"}}><p style={{fontWeight:"500",fontSize:"16px",display:"flex",alignItems:"center"}}><MdOutlineSettings style={{marginRight:"7px"}}/>Settings</p></Link>
                      {/* <Link style={{display:"flex",alignItems:"center",gap:"7px",fontSize:"16px",textDecoration:"none"}}><p style={{fontWeight:"500",fontSize:"16px",display:"flex",alignItems:"center"}}><MdOutlineDeliveryDining style={{marginRight:"7px"}}/>My Orders</p></Link> */}
                      <div style={{display:"flex",justifyContent:'center',alignItems:"flex-end",height:"30%"}}>
                          <Button   colorScheme='orange' variant='outline' style={{height:"35px",gap:"5px"}} onClick={handleLogOut}><MdPowerSettingsNew style={{marginTop:"2px",decoration:"none"}}/>Logout</Button>
                      </div>
                    </div>
                  </Drawer>
                </>
              </div>

              : 

              <Link1 to="/login" ><Button color={"black"} h={"35px"} w={"70px"}>Login</Button></Link1>
            }
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    // const linkColor = useColorModeValue('gray.600', 'gray.200');
    // const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    const defaultLinkStyle = {
      textDecoration: "none",
      color: "white",
      border:"0px",
      fontSize:"14px",
      letterSpacing:"1px",
    };
    const activeLinkStyle = {
      textDecoration: "none",
      color: "rgb(255,111,97)",
      border:"0px",
      fontSize:"14px",
      letterSpacing:"1px",
      fontWeight:"800"
    };
    return (
      <Stack direction={'row'} spacing={8} pl={20} >
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger >
                <NavLink
                  className={style.menuNav}
                  p={2}
                  to={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  style={({ isActive }) => {
                    return isActive ?  activeLinkStyle : defaultLinkStyle ;
                  }}
                  >
                  {navItem.label}
                </NavLink>
                {/* <Input placeholder='Basic usage' /> */}
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };

  
  
  const DesktopSubNav = ({ label, href }) => {
    
    return (
      <NavLink
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') 
        }}
        
        >
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}
              >
              {label}
            </Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </NavLink>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({label, href}) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  const NAV_ITEMS = [
    {
      label: "MEN",
      href: "/men"
    },
    {
      label: "WOMEN",
      href: "/women"
    },
    {
      label: "KIDS",
      href: '/kids',
    },
    {
        label: "ALL-PRODUCTS",
        href: '/all-products',
    },
    {
      label: 'STUDIO',
      href: '/studio',
    },
  ];