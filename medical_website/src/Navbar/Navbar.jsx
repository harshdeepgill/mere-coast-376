import { Flex, Heading, Image, Link as Clink, Button } from '@chakra-ui/react'
import React from 'react';
import {Link as Rlink} from "react-router-dom"

const Navbar = () => {
  return (
    <Flex color={"brandGreen"}  p={"10px 15px"} alignItems="center" justify={"space-between"}>
        <Flex alignItems={"center"}>
            <Image width={"60px"} src='\Resources\image-removebg-preview.png'/>
            <Heading as={"h4"} fontSize={"2rem"}><span style={{color:'#f28a5d'}}>Family</span> Doctor</Heading>
        </Flex>
        <Flex  w={"40%"} justify="space-between">
            <Clink fontSize={"1rem"} as={Rlink} to="/">Home</Clink>
            <Clink fontSize={"1rem"} as={Rlink} to="/">About Us</Clink>
            <Clink fontSize={"1rem"} as={Rlink} to="/">Cases</Clink>
            <Clink fontSize={"1rem"} as={Rlink} to="/">Services</Clink>
        </Flex>
        <Flex w={"15%"} justify={"space-between"}>
            <Button bgColor={"brandGreen"} color={"white"} size={"sm"}>Signin</Button>
            <Button bgColor={"white"} color={"brandGreen"} size={"sm"}>SignUp</Button>
        </Flex>
    </Flex>
  )
}

export default Navbar