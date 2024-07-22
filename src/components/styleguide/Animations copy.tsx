import { Box, Flex, Text } from "@chakra-ui/react";
import { ImageBackgroundStyle } from "../../assets/styles/Styles";
import Layout from "../Layout";
import circleSVG from "./../../assets/images/circle.svg";
import StyleguideSubMenus from "./StyleguideSubMenus";
/*--= FramerMotion =--*/
import { motion, useAnimate } from "framer-motion";

const AnimationsX = () => {
   const [scope, animate] = useAnimate();
   const handleAnimate = async () => {
      await animate(scope.current, { x: 150 });
      await animate(scope.current, { rotate: "360deg" }, { duration: 1 });
      // await animate("#icon", { x: 150 });
      // await animate("#icon", { rotate: "360deg" }, { duration: 1 });
   }
   const MotionFlex = motion(Flex)

	return (
		<Layout>
			<StyleguideSubMenus />

			<div>Animations</div>

         <MotionFlex
            // as={motion.div}
            // width={"210px"}
            // height={"210px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}

            style={{
               // display: "flex",
               // justifyContent: "center",
               // alignItems: "center",
               position: "relative",
               // x:0,
               top: 0,
               width: 210,
               height: 210,
            }}
            initial={{
               opacity: 0,
               x: 0,
               background: "hsla(100, 50%, 50%, 0.2)",
             }}
            animate={{
               opacity: 1,
               rotate: 360,
               x: 600,
               background: "hsla(0, 100%, 50%, 1)",
            }}
            //  transition='1.5s linear'
             transition={{
               type: "tween",
               duration: 1,
               ease: "easeInOut",
               // type: "spring",
               // stiffness: 80,
               // damping: 20,
             }}
            >
            <Box
               width={ "12rem"}
               height={ "12rem"}
               background={ "primary.500"}
               display={"flex"}
               flexDirection={"column"}
               justifyContent={"center"}
               alignItems={"center"}
               // position={"absolute"}
               // background={ "hsla(250, 100%, 50%, 1)"}
               // style={{
               // }}
               // background="primary.100"
               // width={"200px"}
               // height={"200px"}
               >
                  {/* <Box
                     position={"relative"}
                     // left={"50px"}
                     top={"5rem"}
                     // margin={"0 auto"}
                     border={"1px solid"}
                     zIndex={"100"}
                     fontSize={"2rem"}
                     >
                     XXX
                  </Box> */}
                  <Box
                     position={"relative"}
                     // top={"-5rem"}
                     width={ "8rem"}
                     height={ "8rem"}
                     border={"1px solid orange"}
                     display={"flex"}
                     alignItems={"center"}
                     justifyContent= {'center'}
                     >
                        <Box
                           // position={"relative"}
                           // left={"50px"}
                           // top={"5rem"}
                           // margin={"0 auto"}
                           width="100px"
                           height="100px"
                           border={"1px solid"}
                           zIndex={"100"}
                           fontSize={"2rem"}
                           >
                           XXX
                           <ImageBackgroundStyle
                              backgroundImage={circleSVG}
                              backgroundSize= "cover"
                              // backgroundColor= "primary.300"
                              backgroundPosition= "0px 0px"
                              // backgroundPosition= "center"
                              // padding="10px"
                              // width="100px"
                              height="100px"
                              position={"absolute"}
                              top={"10px"}
                              zIndex={"10"}
                              border={"1px solid red"}
                              />
                              {/* <ImageSrcStyle
                                 src={circleSVG}
                                 // display={"block"}
                                 // margin={"auto"}
                                 width="90%"
                                 height="90%"
                                 objectFit={"contain"}
                                 // margin="0 auto"
                                 border={"1px solid cyan"}
                              /> */}
                        </Box>
                     {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="3.722in" height="3.722in">
                        <path fill-rule="evenodd" stroke="rgb(0, 0, 0)" stroke-width="0px" stroke-linecap="butt" stroke-linejoin="miter" fill="rgb(0, 65, 77)" d="M134.402,0.805 C208.186,0.805 268.000,60.618 268.000,134.402 C268.000,208.186 208.186,268.000 134.402,268.000 C60.618,268.000 0.805,208.186 0.805,134.402 C0.805,60.618 60.618,0.805 134.402,0.805 ZM134.396,36.727 C188.337,36.727 232.065,80.455 232.065,134.396 C232.065,188.337 188.337,232.065 134.396,232.065 C80.455,232.065 36.727,188.337 36.727,134.396 C36.727,80.455 80.455,36.727 134.396,36.727 Z" />
                     </svg> */}
                  </Box>
            </Box>
         </MotionFlex>

         {/* <Box
            as={motion.div}
            // height='140px'
            // width='140px'
            bg='accent.500'
            drag='x'
            dragConstraints={{ left: -100, right: 500 }}
            whileHover={{ scale: 1.5, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition='0.5s linear'
            // not work: transition={{ transition: "0.5", ease: "linear" }}
            >
            <ImageSrcStyle
               src={circleSVG}
               width="50px"
               height="50px"
               objectFit={"contain"}
               margin="0 auto"
               border={"1px solid cyan"}
               />
         </Box> */}

         {/* <Box
            as={motion.div}
            height='200px'
            width='200px'
            bg='accent.700'
            drag='x'
            dragConstraints={{ left: -100, right: 500 }}
            // whileHover={{ rotate: (360 * 2) }}
            whileHover={{ scale: 1.5, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            transition='2.5s linear'
            // not work: transition={{ transition: "0.5", ease: "linear" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            >
            <ImageBackgroundStyle
               backgroundImage={circleSVG}
               // backgroundSize= "cover"
               // backgroundColor= "primary.300"
               backgroundPosition= "12px 12px"
               // backgroundPosition= "center"
               padding="10px"
               width="100px"
               height="100px"
               border={"1px solid red"}
               />
         </Box> */}

         <Text ref={scope} id="icon"
            display={"flex"}
            justifyContent={"center"}
            fontSize={"2rem"}
            fontWeight={"700"}
            textAlign={"center"}
            color={"red"}
            width={"200px"}
            padding={"1rem"}
            border={"1px solid"}
            onMouseOver={() => handleAnimate()}
         >
            Animate Me
         </Text>


      </Layout>
	);
};

export default AnimationsX;
