import { useState } from "react";
import { Text, Box, Button, Tooltip, background } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { H1Header, H2Header, H3Header } from '../../assets/styles/Styles';
import { GoTypography } from "react-icons/go";
import { IoLogoApple, IoColorPaletteSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const timerDelay = {
   initDelay: 0,
   triDelay: 0,
   iconDelay: 0,
   descDelay: 2,
}

const sxHoverPopover = {
   height      : "auto",
   width       : "auto",
   position    : "absolute",
   top         : "-150px",
   left        : "0px",
   // top         : "650px",
   // left        : "300px",
   padding     : "1rem",
   color       : "primary.400",
   // background  : "#0d5e73ad",
   // background  : "primary.50",
   background  : "#f0fcffbf",
   // border      : "1px solid",
   borderRadius: ".5rem",
   zIndex      : "5000",
}

const animationData = {
	shortIntro  : "A set of standards for UX & Dev Teams",
	title       : "Animations",
	description : "React + SVG + Chakra UI + Framer Motion",
	imageIntro  : "none",
	content     : [
		{
         icon: <IoLogoApple />,
         classname: "appleLogoWrapper",
         fontsize: "3rem",
         color: "accent.500",
			top: "0", left: "0px",
         /*-=motion=-*/
			yStart: 0, yEnd: 0,
         xStart: -400, xEnd: 0,
         duration: .5, delay: timerDelay.iconDelay,
         /*-=end motion=-*/
			contentLabel : {
            title: "Brand Logo",
            description: "A branding logo is a unique symbol, design, or emblem that represents a company, product, service, or organization.",
         },
         /*-=links=-*/
			buttonLabel: "",
			buttonLink: "/brandLogo",
			linkTarget: "_self",
		},

		{
         icon: <GoTypography />,
         classname: "typographyWrapper",
         fontsize: "3rem",
         color: "accent.600",
			top: "0px",  left: "220px",
         /*-=motion=-*/
			yStart: 0,     yEnd: 0,
         xStart: -400,  xEnd: 0,
         duration: .5,  delay: timerDelay.iconDelay + .25,
         /*-=end motion=-*/
			contentLabel : {
            title: "Typography",
            description: "lorem ipsum text here",
         },
         /*-=links=-*/
			buttonLabel: "", buttonLink: "/typography", linkTarget: "_self",
		},

		{
         icon: <IoColorPaletteSharp />,
         classname: "colorpaletteWrapper",
         fontsize: "3rem",
         color: "accent.600",
			top: "0px",  left: "440px",
         /*-=motion=-*/
			yStart: 0,     yEnd: 0,
         xStart: -400,  xEnd: 0,
         duration: .5,  delay: timerDelay.iconDelay + .5,
         /*-=end motion=-*/
			contentLabel : {
            title: "Color Palette",
            description: "lorem ipsum text here",
         },
         /*-=links=-*/
			buttonLabel: "", buttonLink: "/colorpalette", linkTarget: "_self",
		},

   ]
};

const AnimationTargetElemnt = () => {
   // const [isHovered, setIsHovered] = useState(false);
   // const handleMouseEnter = () => {
   //    setIsHovered(true);
   //  };
   //  const handleMouseLeave = () => {
   //    setIsHovered(false);
   //  };

   return (
      <>
         <Box className =  "animationsMainContainer"
            background  =  {"primary.400"}
            width       =  "1000px"
            display     =  "flex"
            height      =  "800px"
            alignItems  =  "center"
            borderRadius=  "1rem"
            >

            {/* Icons Animation: Container */}
            <Box className =  "iconsContainer"
               position    =  {"relative"}
               top         =  {"-290px"}
               left        =  {"200px"}
               border={"1px solid"}
               >

               {animationData.content.map((content, index) => (
                  //  <Tooltip hasArrow
                  //  label={content.contentLabel.title}
                  //  bg="brand.50"
                  //  color="brand.900"
                  //  placement="top" >
                  <Link key={index} to={content.buttonLink} target={content.linkTarget}
                     className="href"
                  // onMouseEnter={handleMouseEnter}
                  // onMouseLeave={handleMouseLeave}
                  >
                  {/* {isHovered ?
                     <Box key={index} className="hoverPopover" sx={sxHoverPopover}>
                        {content.contentLabel.title}\
                        {index}

                        <H3Header key={index} textAlign="left" margin="0px" color="inherit" fontWeight="700">
                           Index: {index}
                        </H3Header>
                     </Box>
                  : undefined } */}

                  {/* Text Label Box: Wrapper */}
                  {/* <MotionBox key={index} className={content.classname}
                     position =  {"absolute"}
                     top      =  {content.top}
                     left     =  {content.left}
                     width    =  {"200px"}
                     height   =  {"100px"}
                     background= {"primary.300"}
                     zIndex   =  {100}
                     border   =  {"1px solid"}
                     >
                     Wrapper: {content.classname}{index} */}
                     <Box position={"relative"} top={"0px"} left={"0px"} >
                        <Tooltip hasArrow
                           label={content.contentLabel.title}
                           bg="brand.50"
                           color="brand.900"
                           placement="top"
                           size={"md"}
                           >
                           {/* Icons */}
                           <Text
                              as={"button"}
                              key            =  {index}
                              position       =  {"relative"}
                              top      =  {content.top}
                              left     =  {content.left}
                              // left={"350px"}
                              // top={"50px"}
                              fontSize       =  {content.fontsize}
                              textAlign      =  "left"
                              color          =  "accent.200"
                              background     =  "primary.500"
                              borderRadius   =  "100%"
                              border         =  "2px solid"
                              padding        =  "10px"
                              height         =  "70px"
                              width          =  "70px"
                              display        =  "flex"
                              justifyContent =   "center"
                              alignItems     =  "center"
                              boxShadow      =  "5px 5px 12px hsla(0, 10%, 10%, 0.75)"
                              _hover={{
                                 background:"accent.500"
                              }}
                                 // onMouseEnter={handleMouseEnter}
                                 // onMouseLeave={handleMouseLeave}
                              >
                              {/* <Box position={"relative"} top={"200px"}>
                                 <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                    Hover me!
                                 </button>
                                 {isHovered && <Tooltip>This is a tooltip!</Tooltip>}
                              </Box> */}

                              {content.icon}

                              {/* {isHovered ?
                                 <Box key={index} className="hoverPopover" sx={sxHoverPopover}>
                                    {content.contentLabel.title}
                                    {index}

                                    <H3Header key={index} textAlign="left" margin="0px" color="inherit" fontWeight="700">
                                       Index: {index}
                                    </H3Header>
                                 </Box>
                              : undefined } */}

                           </Text>
                        </Tooltip>
                     </Box>

                     {/* {isHovered ?
                        <Box key={index} className="hoverPopover" sx={sxHoverPopover}>
                           {content.contentLabel.title}
                           {index}

                           <H3Header key={index} textAlign="left" margin="0px" color="inherit" fontWeight="700">
                              Index: {index}
                           </H3Header>
                        </Box>
                     : undefined } */}

                  {/* <Button
                     onMouseEnter={() => setIsHovered(true) }
                     onMouseLeave={() => setIsHovered(false) }
                     >
                     {content.icon}
                  </Button> */}

                  {/* </MotionBox> */}


            </Link>
            // {/* </Tooltip> */}

            // <Box>
            //    {isHovered ?
            //       <Box key={index} className="hoverPopover" sx={sxHoverPopover}>
            //          {content.contentLabel.title}
            //          {index}

            //          <H3Header key={index} textAlign="left" margin="0px" color="inherit" fontWeight="700">
            //             Index: {index}
            //          </H3Header>
            //       </Box>
            //    : undefined }
            // </Box>

               ))}

            </Box>
         </Box>

      </>


   )
}

export default AnimationTargetElemnt