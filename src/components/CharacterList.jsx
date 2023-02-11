import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeftIcon,ArrowRightIcon, Icon } from '@chakra-ui/icons'
// import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai';
// import { NavLink } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import {IoIosHeart,IoIosHeartEmpty}from "react-icons/io"
import { Box, Button, Center, Flex, Link, Spacer, Spinner, Stack, Text } from "@chakra-ui/react";
import { BoxShadow, BoxShadow1 } from "./BoxShadow";

function CharacterList(){
  const [lists, setList] = useState();
  const [isLoading,setLoading] = useState(false);
  const [increments,setIncrements] = useState(1);
  const [data,updateData] = useState([]);
  const [localData,setLocalData]=useState(JSON.parse(localStorage.getItem("fav"))||[]);
  // const [count,setCount] = useState(1)
  // const [fav,setFav]=useState()
  // const [favorites, setFavorites] = useState([]);
  
  //  console.log(lists)
//increments
let incNum=()=>{
  if(increments<9){
    setIncrements(Number(increments)+1);
  }
}
let decNum=()=>{
  if(increments>1){
    setIncrements(increments-1);
  }
}
// console.log(increments)
CallFun(increments)
//function  calling
  function CallFun(increments) {
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(true);
    },500)
    axios.get(`${increments?`https://swapi.dev/api/people/?page=${increments}`:`https://swapi.dev/api/people/`}`).then((res)=>{
      setList(res.data)
     //console.log(res.data);
     setLoading(false)
    })
  },[increments])
}

useEffect(() => {
  localStorage.setItem('data', JSON.stringify(data));
}, [data]);



// useEffect(() => {
//   localStorage.setItem('fav', JSON.stringify(favr));
// }, [data]);
// const updateData=()=>{
//   console.log("yes")
// }
//  console.log(data)

//addfavourites
// const addFav=(props:any)=>{
//     let array = favorites;
//     let addArray=true;
//     array.map((item:any,key:number)=>{

//     })
// }
 let navigate=useNavigate()
function handleClick(){
 // console.log("clicked")
  setTimeout(()=>{
    navigate('/detailview')

  },1250)

}

//console.log(favr)
let fav = localStorage.getItem("fav");
  if (!fav) {
    // if fav is null/undefined;
    fav = []; 
    localStorage.setItem("fav", JSON.stringify(fav));
  } else {
    fav = JSON.parse(fav);
    
  }
function setFav(el){
 // console.log("el",el)
   let fav = JSON.parse(localStorage.getItem("fav")); // get fav data from local storage;
   fav.push(el); // add new item to the fav;
    localStorage.setItem("fav", JSON.stringify(fav));
    window.location.reload();

}
//delete fav 


function DeleteFav(index){
  // var fav = JSON.parse(localStorage.getItem("fav")); // updated
  // console.log(fav.length)
  // for (var i = 0; i< fav.length; i++) {
  //   var items = JSON.parse(items[i]);
  //   if (fav[i].name === el.name) {
  //       fav.splice(i, 1);
  //       console.log(fav[i].name)
  //       break;
  //   
    //console.log(items[i].name)
  
  let updated=localData?.filter((e,i)=>i!=index)
  localStorage.setItem("fav",JSON.stringify(updated))
  // fav = JSON.stringify(fav);
  setLocalData(updated)
  //Restoring object left into items again
  
}




//console.log("fav",fav)
return(
    <>
    <Center>
    <Text fontSize='5xl' textAlign='center' textDecoration={"underline overline"}>CHARACTERS</Text>

    </Center>
    <br/>
      <Center>
          <Box >
          {lists?.results?.length > 0 ? (
                <Box boxShadow={BoxShadow} padding={"15px"}
                 
                gap={3}>
                  {lists?.results?.map((e) => (
                    <Box
                     mt="0.5rem" 
                     boxShadow={BoxShadow1} 
                     padding={"10px"}
                     >
                      <Flex>
                        <Box 
                         onClick={handleClick}
                         _hover={{border: '1px solid black',cursor:"pointer" }}
                         >
                        <Text key={e.id} onClick={()=>updateData(e.url)}>
                          {`Name: ${e.name}`}
                        </Text>
                        </Box>
                        <Spacer/>
                         <IoIosHeartEmpty 
                         onClick={ ()=> setFav(e) }
                           style={{color:"red",fontSize:"25px", cursor:"pointer"}} 
                      
                        />
                      
                  </Flex>
                   </Box>
                  ))}
                </Box>
              ) : (
                <Flex justify="center" mt={"5"}>
                  <Spinner
                    thickness="5px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="#3182ce"
                    size="lg"
                  />
                </Flex>
              )}
          </Box>
</Center>
<br />
    <Center>   
<Stack direction='row' spacing={4}>
  <Button 
  disabled={increments===1?true:false} 
  colorScheme='blue' 
   variant='solid'   
   _hover={{ bg: 'white',color:"black",border: '1px solid black' }}
   onClick={decNum}
>
   <Icon as={ArrowLeftIcon}/>
    PREV
  </Button>
  <Button  
  disabled={increments===9?true:false} 
  colorScheme='blue' 
  variant='solid'   
  _hover={{ bg: 'white',color: 'black',border: '1px solid black' }}
  onClick={incNum}
>
 NEXT
    <Icon as={ArrowRightIcon}/>
  </Button>
</Stack>
    

    <br />
     <br />



    </Center>
    <br />
    <Center>

     <Text fontSize='5xl' textAlign='center' textDecoration={"underline overline"}>FAVORITES</Text>
             </Center>
             <br />
               <Center>
             <Box boxShadow={BoxShadow} p="10px">

             {fav?.map((e,index) => (

                    <Box
                     mt="0.5rem" 
                     boxShadow={BoxShadow1} 
                     padding={"10px"}
                     >
                      <Flex justifyContent="space-between">
                        <Box 
                         onClick={handleClick}
                         _hover={{border: '1px solid black',cursor:"pointer" }}
                         >
                        <Text key={e.id} onClick={()=>updateData(e.url)}>
                          {`Name: ${e.name}`}
                        </Text>
                        </Box>
                        <Spacer/>
                         <IoIosHeart 
                         onClick={ ()=> DeleteFav(index) }

                         style={{color:"red",fontSize:"25px", cursor:"pointer",marginLeft:"20px"}} 
                         
                         />
                      
                  </Flex>
                   </Box>
                  ))}
                  </Box>
                  </Center>

    </>
)

}

export default CharacterList;