import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image
} from '@chakra-ui/react';

const Logo = (props) => {
  return (
 
    <Image  boxSize='250px' src="https://universitykart.b-cdn.net/Content/images/SVG-UKLOGO.svg"/>
  );
};

const ListHeader = ( { children,children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};



export const Footer=()=>{


    

        return (
            <Box
              bg={useColorModeValue('gray.50', 'gray.900')}
              color={useColorModeValue('gray.700', 'gray.200')}>
              <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                  templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr 1fr' }}
                  spacing={8}>
                  <Stack spacing={19}>
                    <Box>
                      <Logo color={useColorModeValue('gray.700', 'white')} />
                    </Box>
                    
                  </Stack>
                  <Stack align={'flex-start'}>
                    <Text fontSize={"2xl"} fontWeight={"700"}>About</Text>
                    <Link href={'#'}>About Us</Link>
                    <Link href={'#'}>List Your Institute</Link>
                    <Link href={'#'}>Terms & Conditions</Link>
                    <Link href={'#'}>Privacy Policy</Link>
                    <Link href={'#'}>FAQ</Link>
                  </Stack>
                  <Stack align={'flex-start'}>
                    <Text fontSize={"2xl"} fontWeight={"700"}>Top Universities</Text>
                    <Link href={'#'}>Engineering</Link>
                    <Link href={'#'}>Management</Link>
                    <Link href={'#'}>Medical</Link>
                    <Link href={'#'}>Law</Link>
                    <Link href={'#'}>Commerce</Link>
                  </Stack>
                  <Stack align={'flex-start'}>
                    <Text fontSize={"2xl"} fontWeight={"700"}>Top Colleges</Text>
                    <Link href={'#'}>MBA</Link>
                    <Link href={'#'}>B.Tech/B.E</Link>
                    <Link href={'#'}>MCA</Link>
                    <Link href={'#'}>BCA</Link>
                    <Link href={'#'}>M.Tech</Link>
                  </Stack>
                  <Stack align={'flex-start'}>
                    <Text fontSize={"2xl"} fontWeight={"700"}>Top States</Text>
                    <Link href={'#'}>Uttar Pradesh</Link>
                    <Link href={'#'}>Tamil Nadu</Link>
                    <Link href={'#'}>Karnataka</Link>
                    <Link href={'#'}>Maharastra</Link>
                    <Link href={'#'}>Kerala</Link>
                  </Stack>
                  <Stack align={'flex-start'}>
                    <Text fontSize={"2xl"} fontWeight={"700"}>Top Exams</Text>
                    <Link href={'#'}>UPSC</Link>
                    <Link href={'#'}>NEET</Link>
                    <Link href={'#'}>AMIE</Link>
                    <Link href={'#'}>Bank</Link>
                    <Link href={'#'}>NATA</Link>
                  </Stack>
                </SimpleGrid>
              </Container>
            </Box>
          );
        
    




}