import { Box, Text, Tooltip } from "@chakra-ui/react";
import { cubicBezier, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BiStop } from "react-icons/bi";
import { BsCardImage } from "react-icons/bs";
import { FaRegClone } from "react-icons/fa";
import { GoTypography } from "react-icons/go";
import { IoMdLogIn } from "react-icons/io";
import { IoColorPaletteSharp, IoLogoApple, IoRadioButtonOn } from "react-icons/io5";
import { MdAnimation } from "react-icons/md";
import { Link } from "react-router-dom";
import CircularLoader from "../../assets/loaders/CircularLoader";
import { H2Header, H3Header } from '../../assets/styles/Styles';
import { MotionBox, easing } from "src/assets/variables/Variables";

const timerDelay = {
   initDelay: .5,
   triDelay: 1,
   iconDelay: 2,
   descDelay: 2,

}

const sxHoverPopover = {
   height      : "auto",
   width       : "auto",
   position    : "absolute",
   top         : "-150px",
   left        : "0px",
   padding     : "1rem",
   color       : "primary.400",
   background  : "#f0fcffbf",
   borderRadius: ".5rem",
   zIndex      : "5000",
   // border      : "1px solid",
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
			top: "765px", left: "60px",
         /*-=motion=-*/
			yStart: 0, yEnd: 0,
         xStart: -400, xEnd: 0,
         duration: .5, delay: timerDelay.iconDelay,
         /*-=end motion=-*/
			title: "Brand Logo",
			description: "A branding logo is a unique symbol, design, or emblem that represents a company, product, service, or organization.",
         /*-=links=-*/
			buttonLabel: "",
			buttonLink: "/brandLogo", linkTarget: "_self",
         /*-=tooltip=-*/
         ttPlacement: "left",
         ttXPos: "0px", ttYPos: "0px"
		},

		{
         icon: <GoTypography />,
         classname: "typographyWrapper",
         fontsize: "3rem",
         color: "accent.600",
			top: "640px",  left: "40px",
         /*-=motion=-*/
			yStart: 0,     yEnd: 0,
         xStart: -400,  xEnd: 0,
         duration: .5,  delay: timerDelay.iconDelay + .25,
         /*-=end motion=-*/
			title: "Typography",
			description: "lorem ipsum text here",
         /*-=links=-*/
			buttonLabel: "", buttonLink: "/typography", linkTarget: "_self",
         /*-=tooltip=-*/
         ttPlacement: "right",
         ttXPos: "0px", ttYPos: "0px"
		},

		{
         icon: <IoColorPaletteSharp />,
         classname: "colorpaletteWrapper",
         fontsize: "3rem",
         color: "accent.600",
			top: "500px",  left: "70px",
         /*-=motion=-*/
			yStart: 0,     yEnd: 0,
         xStart: -400,  xEnd: 0,
         duration: .5,  delay: timerDelay.iconDelay + .5,
         /*-=end motion=-*/
			title: "Color Palette",
			description: "lorem ipsum text here",
         /*-=links=-*/
			buttonLabel: "", buttonLink: "/colorpalette", linkTarget: "_self",
         /*-=tooltip=-*/
         ttPlacement: "right",
         ttXPos: "0px", ttYPos: "0px"
		},

		{
         icon: <IoRadioButtonOn />,
         classname: "buttonsWrapper",
         fontsize: "3rem",
         color: "accent.700",
			top: "380px",  left: "160px",
         /*-=motion=-*/
			yStart: 0,     yEnd: 0,
         xStart: -400,  xEnd: 0,
         duration: .5,  delay: timerDelay.iconDelay + .75,
         /*-=end motion=-*/
			title: "Buttons",
			description: "lorem ipsum text here",
         /*-=links=-*/
			buttonLabel: "", buttonLink: "/buttons", linkTarget: "_self",
         /*-=tooltip=-*/
         ttPlacement: "bottom",
         ttXPos: "60px", ttYPos: "0px"
		},

		{
         icon: <MdAnimation />,
         classname: "animationsWrapper",
         fontsize: "3rem",
         color: "accent.50",
			top: "290px",  left: "320px",
         /*-=motion=-*/
			yStart: -400,     yEnd: 0,
         xStart: 0,  xEnd: 0,
         duration: .5,  delay: timerDelay.iconDelay + 1,
         /*-=end motion=-*/
			title: "Animations",
			description: "lorem ipsum text here",
         /*-=links=-*/
			buttonLabel: "", buttonLink: "/animations", linkTarget: "_self",
         /*-=tooltip=-*/
         ttPlacement: "bottom",
         ttXPos: "40px", ttYPos: "0px"
		},

		{
         icon: <IoMdLogIn />,
         classname: "loginWrapper",
         fontsize: "3rem",
         color: "accent.100",
			top: "255px",  left: "520px",
         /*-=motion=-*/
			yStart: -400,     yEnd: 0,
         xStart: 0,  xEnd: 0,
         duration: .5,  delay: timerDelay.iconDelay + 1.25,
         /*-=end motion=-*/
			title: "Login",
			description: "lorem ipsum text here",
         /*-=links=-*/
			buttonLabel: "", buttonLink: "/login", linkTarget: "_self",
         /*-=tooltip=-*/
         ttPlacement: "bottom",
         ttXPos: "0px", ttYPos: "0px"
		},

		{
         icon: <BiStop />,
         classname: "cardWrapper",
         fontsize: "3rem",
         color: "accent.200",
			top: "315px",  left: "740px",
         /*-=motion=-*/
			yStart: 0,     yEnd: 0,
         xStart: 400,  xEnd: 0,
         duration: .5,  delay: timerDelay.iconDelay + 1.5,
         /*-=end motion=-*/
			title: "Card",
			description: "lorem ipsum text here",
         /*-=links=-*/
			buttonLabel: "", buttonLink: "/card", linkTarget: "_self",
         /*-=tooltip=-*/
         ttPlacement: "left",
         ttXPos: "10px", ttYPos: "30px"
		},

		{
         icon: <BsCardImage />,
         classname: "heroWrapper",
         fontsize: "2.5rem",
         color: "accent.300",
			top: "475px",  left: "910px",
         /*-=motion=-*/
			yStart: 0,     yEnd: 0,
         xStart: 400,  xEnd: 0,
         duration: .5,  delay: timerDelay.iconDelay + 1.75,
         /*-=end motion=-*/
			title: "Hero",
			description: "lorem ipsum text here",
         /*-=links=-*/
			buttonLabel: "", buttonLink: "/hero", linkTarget: "_self",
         /*-=tooltip=-*/
         ttPlacement: "left",
         ttXPos: "0px", ttYPos: "10px"
		},

		{
         icon: <FaRegClone />,
         classname: "modalWrapper",
         fontsize: "2rem",
         color: "accent.400",
			top: "675px",  left: "1040px",
         /*-=motion=-*/
			yStart: 0,     yEnd: 0,
         xStart: 400,  xEnd: 0,
         duration: .5,  delay: timerDelay.iconDelay + 2,
         /*-=end motion=-*/
			title: "Modal",
			description: "lorem ipsum text here",
         /*-=links=-*/
			buttonLabel: "", buttonLink: "/modal", linkTarget: "_self",
         /*-=tooltip=-*/
         ttPlacement: "left",
         ttXPos: "0px", ttYPos: "0px"
		},

   ]
};

const AnimationTriangleSequence = () => {
   const [hasLoaded, setHasLoaded] = useState(false);
	const timer = 5000;

	useEffect(() => {
		setTimeout(() => {
			setHasLoaded(true);
		}, timer);
	}, []);

   return (
      <>
         {/* Loading the animations */}
         {!hasLoaded ? (
            <Box display={"flex"}
               justifyContent={"center"}
               alignItems={"center"}
               height={"600px"}
               borderRadius={"1rem"}
               background={"primary.500"}
               // border="1px solid"
               >
               <CircularLoader timer={timer} />
            </Box>
         ) : (
         <Box className =  "insideBoxWrapper"
            position    =  {"relative"}
            height      =  {"600px"}
            width       =  {"auto"}
            top         =  {"0px"}
            left        =  {"0px"}
            padding     =  {"2rem"}
            // transform={"scale(0.85)"}
            // transform   =  {"scale(0.65)"}
            borderColor =  {"primary.300"}
            background  =  "primary.500"
            borderRadius=  {"1rem"}
            // border      =  {"1px solid"}
            >
            {/* Title Animation */}
            <MotionBox
               initial={{ opacity: 0, x:500, y:0 }}
               animate={{ opacity: 1, x:0, y:0 }}
               transition={{ease:easing, duration:1, delay:timerDelay.initDelay}}
               >
               <H2Header
                  fontSize="2.5rem"
                  fontWeight="700"
                  color="accent.300"
                  // textTransform="uppercase"
                  textAlign="left"
                  margin="0 0 0 1rem"
                  // border="1px solid"
                  >
                     {animationData.title}
                  </H2Header>
                  </MotionBox>
                  <MotionBox
                     initial={{ opacity: 0, x:500, y:0 }}
                     animate={{ opacity: 1, x:0, y:0 }}
                     transition={{ease:easing, duration:1, delay:timerDelay.initDelay + 0.5}}
                     >
               <H3Header
                  fontSize="1.5rem"
                  fontWeight="600"
                  color="primary.200"
                  // textTransform="uppercase"
                  textAlign="left"
                  margin="0 0 0 1rem"
                  // border="1px solid"
                  >
                  {animationData.description}
                  </H3Header>
            </MotionBox>

            <Box className="animationContentWrapper"
               position = {"relative"}
               top={"-50px"}
               left = {"-130px"}
               transform = {"scale(0.65)"}
               // border = {"1px solid"}
            >

               {/* Circle Title Animation */}
               <MotionBox
                  position       =  "relative"
                  top            =  "655px"
                  left           =  "243px"
                  width          =  "260px"
                  zIndex         =  "200"
                  initial={{ opacity: 0, x:0, y:0 }}
                  animate={{ opacity: 1, x:0, y:0 }}
                  transition={{ease:easing, duration:1, delay:timerDelay.iconDelay}}
               >
                  <H2Header
                     fontSize       =  "4rem"
                     textTransform  =  "uppercase"
                     textAlign      =  "center"
                     lineHeight     =  "1"
                     color          =  "primary.400"
                  > Style Guide
                  </H2Header>
               </MotionBox>

               {/* Data Content */}
               {animationData.content.map((content, index) => (
                  <Link key={index} to={content.buttonLink} target={content.linkTarget}>
                  {/* Icons Animation */}
                  <Box key={index} className =  "iconsContainer"
                     position    =  {"relative"}
                     top         =  {"-320px"}
                     left        =  {"-50px"}
                  >

                     {/* Text Label Box: Wrapper */}
                     <MotionBox key={index} className={content.classname}
                        position =  {"absolute"}
                        top      =  {content.top}
                        left     =  {content.left}
                        width    =  {"200px"}
                        height   =  {"100px"}
                        // background= {"primary.300"}
                        zIndex   =  {100}
                        // border   =  {"1px solid"}
                           initial={{ opacity: 0, x:content.xStart,  y:content.yStart }}
                           animate={{ opacity: 1, x:content.xEnd,    y:content.yEnd }}
                           transition={{
                                 duration : content.duration,
                                 ease     : "easeInOut",
                                 delay    : content.delay }}
                     >

                        {/* Icons */}
                        <Tooltip
                           // hasArrow
                           label={content.title}
                           bg="accent.50"
                           color="primary.500"
                           size={"md"}
                           placement={"left"}
                           // placement={content.ttPlacement}
                           top={content.ttYPos}
                           left={content.ttXPos}
                        >
                           <Text key={index} as={"button"}
                              position       =  {"relative"}
                              left           =  {"50px"}
                              top            =  {"50px"}
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
                           > {content.icon}
                           </Text>

                        </Tooltip>
                     </MotionBox>
                  </Box>
               </Link>
               ))}

               {/* Triangles Animations */}
               <Box className="trianglesContainer"
                  position={"absolute"} top={"70px"}>
                  {/* copied as svg from Figma */}
                  <motion.svg width="1204" height="805" viewBox="0 0 1204 805" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <motion.path      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,     ease: "easeInOut", delay: timerDelay.triDelay + 0 }} d="M372.622 322.867C189.815 322.867 41.6216 471.061 41.6216 653.867H703.622C703.622 471.061 555.428 322.867 372.622 322.867Z" fill="#FFF7F5" />
                     <motion.path      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,     ease: "easeInOut", delay: timerDelay.triDelay + 0.25 }} d="M768.622 653.867C768.622 435.162 591.326 257.867 372.622 257.867C201.087 257.867 55.0251 366.932 0 519.5L372.622 653.867H768.622Z" fill="#FFD4C7" />
                     <motion.path      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,     ease: "easeInOut", delay: timerDelay.triDelay + 0.5 }} d="M838.622 653.867C838.622 396.503 629.986 187.867 372.622 187.867C229.467 187.867 101.389 252.418 15.9067 354L372.622 653.867H838.622Z" fill="#FFB095" />
                     <motion.path      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,     ease: "easeInOut", delay: timerDelay.triDelay + 0.75 }} d="M903.622 653.868C903.622 360.604 665.885 122.868 372.622 122.868C275.49 122.868 184.45 148.947 106.122 194.486L372.622 653.868H903.622Z" fill="#FF8A59" />
                     <motion.path      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,     ease: "easeInOut", delay: timerDelay.triDelay + 1 }} d="M972.622 653.868C972.622 322.497 703.992 53.8677 372.622 53.8677C336.627 53.8677 301.372 57.0373 267.122 63.1127L372.622 653.868H972.622Z" fill="#FF651D" />
                     <motion.path      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,     ease: "easeInOut", delay: timerDelay.triDelay + 1.25 }} d="M1036.62 653.868C1036.62 327.071 800.54 55.4149 489.622 0.142578L372.122 653.868H1036.62Z" fill="#F05D1A" />
                     <motion.path      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,     ease: "easeInOut", delay: timerDelay.triDelay + 1.5 }} d="M1091.62 653.867C1091.62 388.769 948.152 157.18 734.622 32.5098L370.622 653.867H1091.62Z" fill="#B5491B" />
                     <motion.path      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,     ease: "easeInOut", delay: timerDelay.triDelay + 1.75 }} d="M1140.62 653.868C1140.62 466.502 1073.53 294.807 962.051 161.5L370.622 653.868H1140.62Z" fill="#7D361A" />
                     <motion.path      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,     ease: "easeInOut", delay: timerDelay.triDelay + 2 }} d="M1203.62 653.868C1203.62 554.733 1186.26 459.652 1154.42 371.5L370.622 653.868H1203.62Z" fill="#15110F" />
                     <motion.circle    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5,   ease: "easeInOut", delay: timerDelay.triDelay + 0 }} cx="372.622" cy="653.867" r="151" fill="white" />
                  </motion.svg>
               </Box>

            </Box>

         </Box>
         )}
      </>
	);
};

export default AnimationTriangleSequence;
