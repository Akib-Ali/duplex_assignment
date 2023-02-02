import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Image
} from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon,ArrowDownIcon } from '@chakra-ui/icons'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Lucknow'];

const NavLink = ( {children, children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);





export const Navbar=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure();



return (

    <>
    <Box bg={useColorModeValue('#13005A', '#13005A')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box color="white">
          <Image  boxSize='250px' src="https://universitykart.b-cdn.net/Content/images/SVG-UKLOGO.svg"/>
          </Box>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <>
              
              <Text color='white'>{link} </Text>
              
              <ArrowDownIcon color={"white"}></ArrowDownIcon>
              </>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}  gap="30px">
            <Text  color='white'>Colleges</Text>
            <Text color='white'>Courses</Text>
            <Text color='white'>Exam</Text>
            <Text color='white'>More</Text>
          <Menu>
         
            <Button colorScheme={"green"}>Enquire</Button>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  </>

)


}