import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BiStop } from "react-icons/bi";
import { BsCardImage } from "react-icons/bs";
import { FaRegClone } from "react-icons/fa";
import { GoTypography } from "react-icons/go";
import { IoMdLogIn } from "react-icons/io";
import { IoColorPaletteSharp, IoLogoApple, IoRadioButtonOn } from "react-icons/io5";
import { MdAnimation } from "react-icons/md";
import { Link } from "react-router-dom";
import { MotionBox } from "src/assets/variables/Variables";
import { H2Header, H3Header } from '../../assets/styles/Styles';

// const ButtonX = () => {
//    const [isHovered, setIsHovered] = useState(false);

//    const handleMouseEnter = () => {
//      setIsHovered(true);
//    };

//    const handleMouseLeave = () => {
//      setIsHovered(false);
//    };

//    return (
//      <button
//        onMouseEnter={handleMouseEnter}
//        onMouseLeave={handleMouseLeave}
//      >
//        Hover me!
//      </button>
//    );
//  };

//  const Popup = () => {
//    const isHovered = useState(false);

//    if (isHovered) {
//      return (
//        <div className="popup">
//          This is a popup!
//        </div>
//      );
//    }

//    return null;
//  };


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
   top         : "650px",
   left        : "300px",
   padding     : "1rem",
   color       : "primary.400",
   // background  : "#0d5e73ad",
   // background  : "primary.50",
   background  : "#f0fcffbf",
   // border      : "1px solid",
   borderRadius: ".5rem",
   zIndex      : 500,
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
			buttonLink: "/brandLogo",
			linkTarget: "_self",
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
		},

   ]};

const AnimationTriangleSequence = () => {
   // const [isHovering, setHovering] = useState(false)
   const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      setIsHovered(true);
      // return (
      //    <Box key={item} className="hoverPopover" sx={sxHoverPopover}>
      //       <H3Header textAlign="left" margin="0px" color="inherit" fontWeight="700">
      //          HELLO {item}
      //       </H3Header>
      //    </Box>
      //    );
      // Update the state of your button here
      // <Box className="hoverPopover" sx={sxHoverPopover}>
      //    <H3Header textAlign="left" margin="0px" color="inherit" fontWeight="700">
      //       HELLO Brand Logo
      //       {/* /~ {content.title} ~/ */}
      //    </H3Header>
      //    <Text textAlign="left" margin="0px" color="inherit">
      //       WORLD!
      //       {/* /~ {content.description} ~/ */}
      //    </Text>
      // </Box>
    }
//   }, []);
  }, [isHovered]);

//   function handleHover (item:any) {
  const handleHover = (item:any) => {
   // alert(`You clicked on ${item}`)
   return (
      <Box key={item} className="hoverPopover" sx={sxHoverPopover}>
         <H3Header textAlign="left" margin="0px" color="inherit" fontWeight="700">
            HELLO {item}
         </H3Header>
      </Box>
      );
  }

   // const showPopUpInfo = () => {
   //    setHovering(true)
   //    // <Box sx={sxHoverPopover}>Hello</Box>
   // }
   // const hidePopUpInfo = () => {
   //    setHovering(false)
   // }

   // const mappedItems = animationData.content.map((content) => {
   //    return <Box onMouseEnter={() => {
   //       const clickedItem = Event.target;
   //    }}>{content}</Box>
   //    })



   return (

      <>
         {/* test */}
         {/* <div>
            <Button />
            <Popup />
         </div> */}
      {/* TEST */}
      {/* {isHovered ? alert("Hello") : undefined } */}
      {/* {isHovered ?
         <Box className="hoverPopover" sx={sxHoverPopover}>
            <H3Header textAlign="left" margin="0px" color="inherit" fontWeight="700">
               HELLO Brand Logo
            </H3Header>
            <Text textAlign="left" margin="0px" color="inherit">
               WORLD!
            </Text>
         </Box>
         : undefined } */}

		<Box className =  "animationsMainContainer"
         background  =  {"primary.400"}
         width       =  "1000px"
         display     =  "flex"
         height      =  "800px"
         alignItems  =  "center"
         borderRadius=  "1rem"
         >

			<Box className =  "insideBoxWrapper"
				position    =  {"relative"}
				height      =  {"900px"}
				width       =  {"1300px"}
				top         =  {"0px"}
				left        =  {"-60px"}
				padding     =  {"2rem"}
				transform   =  {"scale(0.65)"}
				border      =  {"1px solid"}
            borderColor =  {"primary.300"}
            background  =  "primary.500"
            borderRadius=  {"2rem"}
				// background={"primary.500"}
			>
            {/* Framer Motion Animation */}

            {/* Title Animation */}
            <Box
               // initial={{ opacity: 0, x:0, y:0 }}
               // animate={{ opacity: 1, x:0, y:0 }}
               // transition={{
               //       duration: 1,
               //       ease: "easeInOut",
               //       delay: 0 }}
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
               <H3Header
                  fontSize="2rem"
                  fontWeight="600"
                  color="primary.200"
                  // textTransform="uppercase"
                  textAlign="left"
                  margin="0 0 0 1rem"
                  // border="1px solid"
                  >
                  {animationData.description}
                  </H3Header>
            </Box>

            {/* Circle Title Animation */}
            <H2Header
               color          =  "primary.400"
               position       =  "relative"
               top            =  "655px"
               left           =  "243px"
               width          =  "260px"
               zIndex         =  "200"
               fontSize       =  "4rem"
               textTransform  =  "uppercase"
               textAlign      =  "center"
               lineHeight     =  "1"
               // lineHeight     =  "0.9"
               // border         =  "1px solid"
               >
                  Style Guide
               </H2Header>


            {/* Data Content */}
            {animationData.content.map((content, index) => (
               <Link to={content.buttonLink} target={content.linkTarget}
               // <motion.button
               //    whileHover={() => setIsHovered(true)}
               //    >Hyah</motion.Button>
               onMouseEnter={() => setIsHovered(true) }
               // onMouseLeave={() => setIsHovered(false) }
               >
               {/* { isHovered && index === 4 ?
                  <Box key={index} className="hoverPopover"
                        position={"absolute"}
                        top={"-100px"}>

                     <H3Header textAlign="left" margin="0px" color="inherit" fontWeight="700">
                        Hello{index}
                     </H3Header>
                  </Box> : undefined }

               { isHovered && index === 5 ?
                  <Box key={index} className="hoverPopover"
                        position={"absolute"}
                        top={"-100px"} >
                     <H3Header textAlign="left" margin="0px" color="inherit" fontWeight="700">
                        Hello{index}
                     </H3Header>
                  </Box>
               : undefined } */}
               {isHovered ?
                  <Box className="hoverPopover" sx={sxHoverPopover}>
                     <H3Header textAlign="left" margin="0px" color="inherit" fontWeight="700">
                        {content.classname}
                     </H3Header>
                     <Text textAlign="left" margin="0px" color="inherit">
                        WORLD!
                     </Text>
                  </Box>
                  : undefined }


               {/* Icons Animation */}
               <Box key={index} className =  "iconsContainer"
                  position    =  {"relative"}
                  top         =  {"-290px"}
                  left        =  {"0px"}
                  >
                  box{index}
                  {/* <MotionBox key={index} className={content.classname} */}
                  {/* <motion.button key={index} className={content.classname} */}
                  <MotionBox key={index} className={content.classname}
                     position =  {"absolute"}
                     top      =  {content.top}
                     left     =  {content.left}
                     width    =  {"100px"}
                     height   =  {"100px"}
                     zIndex   =  {100}
                        // initial={{ opacity: 0, x:content.xStart,  y:content.yStart }}
                        // whileHover={ false }
                        // animate={{ opacity: 1, x:content.xEnd,    y:content.yEnd }}
                        // transition={{
                        //       duration : content.duration,
                        //       ease     : "easeInOut",
                        //       delay    : content.delay }}
                        //       // border={"1px solid magenta"}
                        // exit={{}}
                        // onMouseEnter={() => setIsHovered(true) } ****
                        // onMouseEnter={() => handleHover(index) }
                        // onMouseLeave={() => setIsHovered(false) }
                     >
                        {/* {content[index].} */}
                     {content.classname}{index}

                     {/* <button */}
                     <Text
                        as={"button"}
                        key            =  {index}
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
                        // initial={{ opacity: 0, x:content.xStart,  y:content.yStart }}
                        // // whileHover={ false }
                        // animate={{ opacity: 1, x:content.xEnd,    y:content.yEnd }}
                        // transition={{
                        //       duration : content.duration,
                        //       ease     : "easeInOut",
                        //       delay    : content.delay }}
                              // border={"1px solid magenta"}
                        // exit={{}}


                        // onMouseEnter={() => setIsHovered(true) }
                        // onMouseLeave={() => setIsHovered(false) }
                        // onMouseOver={() => showPopUpInfo() }
                        // onMouseOut={() => hidePopUpInfo() }
                        >

                        {content.icon}
                      </Text>

                  {/* <Button
                     onMouseEnter={() => setIsHovered(true) }
                     onMouseLeave={() => setIsHovered(false) }
                     >
                     {content.icon}
                  </Button> */}

                  </MotionBox>


               </Box>
            </Link>
         ))}

            {/* Triangles Animations */}
            <Box className="trianglesContainer"
               position={"absolute"} top={"200px"}>
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
         {/* ))} */}
			</Box>
		</Box>

      </>
	);
};

export default AnimationTriangleSequence;
