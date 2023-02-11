import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { BoxShadow } from './BoxShadow'
// import banner from "./images.mini.jpg"

const Mainpage = () => {
  return (
    <>
     <Container
            boxShadow={BoxShadow}
            maxW="8xl"
            minHeight= "90vh"
            mt="50px"
            borderRadius="10px"
            bgImage="url('https://media.istockphoto.com/id/1159779256/photo/jesus-christ-in-the-clouds.jpg?s=612x612&w=0&k=20&c=vPShuNZqsA48vh7ULIGQIFhUWt3A8_ARlnXWme2xnZ4=')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Text
  bgGradient='linear(to-l, #ae8213, #e8eae6)'
  bgClip='text'
  fontSize='5xl'
  fontWeight='extrabold'
  textAlign={"center"}
  textShadow="0 0 20px black"

   >
   Bethel House of Prayer <br/> Shoolagiri.
    </Text>
            
            <Flex
              h="400px"
              mb={"10rem"}
              direction="row"
              gap={2}
              textAlign="center"
              color="white"
              textShadow="0 0 20px black"
              fontWeight="bold"
            >
            
         
              <Box >
              <br/>
              <br/>
              <Heading as="h1" color="orange" mr={"10rem"}>
                COME AND WORSHIP IN BEAUTI OF HOLINESS.
                 </Heading>
                 <br/>
                 <br/>


             <Heading as="h1" color="orange" mr={"10rem"}>
                  S U N D A Y
                </Heading>
                <br/>
                <Heading as="h1" color="orange" ml={"10rem"}>
                 S E R V I C E.
                </Heading>
                <br/>
                <br/>
                <Heading as="h1" color={"orange"} ml={"10rem"}>
                    12 FEB 2023.
                </Heading>
                <Heading as="h1" color={"orange"}  ml={"10rem"}>
                    10:00 AM.
                </Heading>
              </Box>
              <Box>
              <Heading as="h1" color="teal" >
                Word & Worship <br/>
              Rev:Joshua S Kumar.B.th.M.th
                </Heading>
              <Container
             boxShadow={BoxShadow}
             borderRadius="20%"
             bgImage="url('https://user-images.githubusercontent.com/87975437/218272310-cf368c7e-db0e-467b-b798-dba6a162ab42.jpeg')"
             bgPosition="center"
             bgRepeat="no-repeat"
              bgSize="cover"
             h={"300px"}
             mt='7rem'
             mr={"4rem"}
             w="300px"
            ></Container>
              </Box>
           
            </Flex>



          </Container>
      
    </>
  )
}

export default Mainpage
