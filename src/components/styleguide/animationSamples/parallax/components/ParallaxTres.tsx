import React from "react";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { H1Header, H3Header, HeroBoxStyle, ImageBackgroundStyle, ImageSrcStyle, PrimaryAccentButton, PrimaryTextStyle } from "@styles/Styles";
import bgImage from "./../../../../../assets/images/bokeh-light-bg.jpeg"
import { MdBorderColor } from 'react-icons/md';
import HeroTemplate from "@components/hero/HeroTemplate";
import { FaArrowRight } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";

const d1HeroData = {
	shortIntro     :  "Enhanced Storytelling",
	pageTitle      :  "Parallax Scrolling",
	description    : "Adds a dynamic element to web pages, captivating users with visually stunning effects. By moving different layers of content at different speeds as the user scrolls.",
	imageIntro     :  bgImage,
   buttonLabel    : "More info",
	buttonLink     : "https://www.fisglobal.com/en/products/digitalone",
	linkTarget     : "_blank",
	content: [
		{
			gridArea: "two",
			classname: "styleguideDashLogo",
			title: "Brand Logo",
			description: "A branding logo is a unique symbol, design, or emblem that represents a company, product, service, or organization.",
			isImage: false,
			image: "none",
         icon: <IoLogoApple />,
			imageSize: "220px",
			buttonLabel: "Details",
			buttonLink: "/brandLogo",
			linkTarget: "_self",
		},
   ]
}
/*--= Hero Section =--*/
const sxHeroBodyContainer = {
   display        :  "flex",
   flexDirection  :  "column",
   alignItems     :  "center",
   width          :  {base:"100%", md:"85%", lg:"75%"},
   background     :  "#58d9fb4f",
   boxShadow      :  "2xl",
   padding        :  "2rem",
   borderRadius   :  "1rem",
   position       :  "relative",
   margin         :  "0 auto",
   top            :  "-520px",
}
const sxShortIntro = {
   fontSize      :  { base: ".65rem", lg: "1rem" },
   fontWeight    :  "semibold",
   color         :  "primary.800",
   textAlign     :  {base:"center", md:"left"},
   textTransform :  "uppercase",
   paddingLeft   :  { base: 0, lg: 0 },
   marginBottom  :  {base:0, md:-1, lg:-1},
}
const sxTitle = {
   fontSize       :  { base: "2.5rem", lg: "4.5rem" },
   textAlign      :  "center",
   textTransform  :  "capitalize",
   marginBottom   :  5,
   color          :  "primary.900",
}
const sxDescription = {
   fontSize    :  { base: "1rem", md: "1.25rem", lg: "1.5rem" },
   textAlign   :  "center",
   color       :  "primary.900",
   lineHeight  :  1.3,
   // textShadow  :  "2px 2px 4px black"
}

const ParallaxTres = () => {
   const bgColor = useColorModeValue("primary.200", "primary.500");

	return (
		<>
         <HeroTemplate
            image={
               /*-= Background image =-*/
               <HeroBoxStyle
                  backgroundImage      =  {d1HeroData.imageIntro}
                  backgroundRepeat     =  "no-repeat"
                  backgroundSize       =  "cover"
                  backgroundPosition   =  {"0px 0px"}
                  // backgroundPosition   =  {{base:"0px 0px", md:"0px -130px", lg:"0px -200px", xl:"0px -400px"}}
                  borderRadius         =  "1rem"
                  height               =  {"630px"}
                  // border               =  {"1px solid"}
               />
            }

            content = {
               <>
                  <Box className="d1HeroBodyContainer" sx={sxHeroBodyContainer} >
                     <PrimaryTextStyle className="d1ShortIntro" sx={sxShortIntro} >
                        {d1HeroData.shortIntro}
                     </PrimaryTextStyle>

                     {/* Hero Title */}
                     <H1Header className="d1Title" sx={sxTitle} >
                        {d1HeroData.pageTitle}
                     </H1Header>

                     {/* Desription */}
                     <PrimaryTextStyle className="d1Description" sx={sxDescription} >
                        {d1HeroData.description}
                     </PrimaryTextStyle>

                     {/* action = { */}
                         <Box margin={"1rem 0 0"}>
                             <PrimaryAccentButton
                                label    =  {d1HeroData.buttonLabel}
                                link     =  {d1HeroData.buttonLink}
                                target   =  {d1HeroData.linkTarget}
                                icon     =  {<FaArrowRight />}
                                size     = "md"
                             />
                          </Box>
                     {/* } */}

                  </Box>
               </>
            }
         />

         {/* <ImageBackgroundStyle backgroundImage={bgImage}
            // width={"300px"}
            height={"630px"}
            // margin={"2rem"}
            // border={"1px solid"}
            // borderColor={"primary.400"}
            // boxShadow={"2xl"}
            /> */}
            {/* <Flex className="parallaxTresContainer"
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
                  >Visual Appeal</Text>
               <H1Header
                  fontSize={"3rem"}
                  fontWeight={"normal"}
                  width={"600px"}
                  lineHeight={"1.2"}
                  // border={"1px solid"}
                  >Parallax scrolling adds a dynamic element to web pages</H1Header>
            </Flex> */}
         {/* </ImageBackgroundStyle> */}
		</>
	);
};

export default ParallaxTres;
