import React from "react";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { H1Header, H3Header, ImageSrcStyle } from "@styles/Styles";
import loaderImg from "./../../../../../assets/images/styleguide/loaderImg.webp"
import { MdBorderColor } from 'react-icons/md';

const ParallaxUno = () => {
   const bgColor = useColorModeValue("primary.200", "primary.500");

	return (
		<>
         <Flex className="parallaxUnoContainer"
            flexDirection={"column"}
            alignItems={"center"}
            height={"650px"}
            bg={bgColor}
            borderRadius={"1rem"}
            >
            <Text
               fontSize={"1rem"}
               textTransform={"uppercase"}
               margin={"2rem 0 1rem"}
               >
               Visual Appeal
            </Text>
            <H1Header
               fontSize={{base:"2.25rem", md:"3rem"}}
               fontWeight={"normal"}
               width={{base:"auto", md:"600px"}}
               lineHeight={"1.2"}
               // border={"1px solid"}
               >
               Parallax scrolling adds a dynamic element to web pages
            </H1Header>
            <ImageSrcStyle src={loaderImg}
               width={"300px"}
               height={"300px"}
               margin={"2rem"}
               border={"1px solid"}
               borderColor={"primary.400"}
               boxShadow={"2xl"}
               />
         </Flex>
		</>
	);
};

export default ParallaxUno;
