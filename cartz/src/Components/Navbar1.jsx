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



  export default function Navbar1() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box style={{position:"fixed",top:"0px",width:"100%",zIndex:"3"}}>
        <Flex
          bg={useColorModeValue('rgb(49,49,49)', 'gray.800')}
          color={useColorModeValue('gray', 'red')}
          minH={'60px'}
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
            <Input placeholder={"Search"} type={"search"} w={350} ml={150} h={8} border={"1px solid gray"}/>
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
            <CiShoppingCart  style={{fontSize:"22px",cursor:"pointer"}} _hover={{color:"rgb(255,111,97)"}}/>
            <CiUser  style={{fontSize:"22px",cursor:"pointer"}} _hover={{textDecoration: 'none', color: "rgb(255,111,97)",}}/>
            <Text style={{fontSize:"15px",width:"100px",textAlign:"start",marginLeft:"10px"}}>Hi Aniket</Text>
            
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4} pl={20}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={"white"}
                  _hover={{
                    textDecoration: 'none',
                    color: "rgb(255,111,97)",
                  }}>
                  {navItem.label}
                </Link>
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
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
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
      </Link>
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