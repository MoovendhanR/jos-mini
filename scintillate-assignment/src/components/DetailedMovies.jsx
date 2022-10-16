import { Box, Text} from "@chakra-ui/react"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { BoxShadow } from "./BoxShadow"


function DetailedMovies({movie_url}){
   const [Movie,setMovie]=useState(null)
    useEffect(() => {
  axios.get(movie_url).then((res)=>{
// console.log(res)
setMovie(res.data)
  }).catch((err)=>{
    console.log(err)
  })
    },[])
    // console.log(Movie)
    
    return(
        <>
            <br/>
        <Box boxShadow={BoxShadow} textAlign="center"p="20px">
        <Text fontSize='2xl' textDecoration={"underline"}>{Movie?.title}</Text>
        <Text>{`Director: ${Movie?.director}`}</Text>
        <Text>{`Producer: ${Movie?.producer}`}</Text>
        <Text>{`Released_Date: ${Movie?.release_date}`}</Text>

        </Box>
        <br />
        </>
    )

}


export default DetailedMovies



