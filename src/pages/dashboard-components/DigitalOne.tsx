import { Box, Button, Flex, Text, background, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import FISD1logo from "../../assets/images/D1-Logo.png";
import { CardBodyStyle, H1Header, H3Header, H4Header, ImageSrcStyle } from "../../assets/styles/Styles";
import { useGlobalStore } from "../../hooks/GlobalStates";
import { cubicBezier, motion } from "framer-motion";
import { MotionFlex, easing } from "src/assets/variables/Variables";

// const designFlat = true;
// const designFlat = false;

const buttonDataX = {
	buttonLabel: "Details",
	// buttonLink: "../fisGrid",
	buttonLink: "fisD1",
	linkTarget: "_self",
};
// Use for sx={} specific to imgBox parameter of CardTemplate component
const imageBoxStyle = {
	// boxSize:        "200px",
	// borderRadius:   "full",
	// border:         "2px solid hsla(100, 50%, 70%, 0.95)",
	// boxShadow:      "5px 10px 16px hsla(90, 60%, 50%, 0.5)",
	margin: "0px auto",
	// objectPosition: "-2px",
	// background:     "hsla(80, 100%, 60%, 0.35)",
};

const sxVerticalDesign = {
	display: "flex",
	flexDirection: "column",
	border: "0px solid red",
	boxShadow: "none",
};
const sxHorizontalDesign = {
	border: "0px solid red",
	boxShadow: "none",
};


const sxContent = {
	border: "1px solid",
	borderRadius: "1rem",
	background: "blue",
};

const cardData = {
	shortIntro: "Advanced Integrated Banking",
	cardTitle: "Digital One App",
	subTitle: "Software Engineer : UI/UX Team",
	description: "Worked on the implementation of the core application using WaveMaker.",
};


const buttonData = {
   buttonLink:       "fisD1",
   linkTarget:       "_self",
   buttonLabel:      "Details",
   buttonLeftIcon:   "none",
   buttonRightIcon:  <FaArrowRight/>,
   buttonBackground: "primary.500",
   butttonColor:     "primary.50",
   buttonHoverColor: "orange"
}

/*--= Homepage card content =--*/
const DigitalOne = () => {
   const { colorMode, toggleColorMode } = useColorMode();

   const D1GradBGMode = useColorModeValue(
      // "linear-gradient(to bottom, primary.100, primary.50, primary.50, primary.50)",
      // "linear-gradient(to bottom, #bad2d970, #f0fcff75)",
      "linear-gradient(to bottom, #f0fcff75, #0d5e7347)",
      "linear-gradient(to bottom, primary.400, primary.700)");

   const gradatedBGTranslucent = useColorModeValue(
      "linear-gradient(to bottom, #f0fcff75, #bfe9e895, #f0fcff95, primary.50)",
      "linear-gradient(to bottom, #064e6075, #00000075)");

   const BorderColor = useColorModeValue("primary.100", "primary.600");
   const CardContainerBorderColor1 = useColorModeValue("purple", "yellow");
   const CardContainerBorderColor2 = useColorModeValue("primary.100", "primary.600");
   const CardBodyBorderColor = useColorModeValue("primary.50", "primary.500");

   const { designFlat, setDesignFlat } = useGlobalStore()
	const toggleMe = () => {
      setDesignFlat(!designFlat)
      console.log("designFlat: ", designFlat)
	};

	const colorModeX = useColorModeValue("primary.200", "accent.50");
	const bgMode = useColorModeValue("primary.900", "accent.500");
	const logoBGMode = useColorModeValue("primary.100", "primary.700");

   const sxMyCardContainer = {
      width          :  "auto",
      // borderColor={designFlat ? BorderColor : BorderColor}
      borderRadius   :  "1.5rem",
      backgroundImage:  designFlat ? undefined : gradatedBGTranslucent,
      // backgroundImage:  D1GradBGMode,
      // background     :  "hsla(0, 0%, 100%, 0.05)",
      flexDirection  :   designFlat ? {base:"column", md:"row-reverse"} : {base:"column", md:"row"},
      alignItems     :  "center",
      // alignItems     :   designFlat ? "center" : "center" ,
      padding        :  designFlat ? "1rem" : "2rem 3rem 3rem",
      border         :  designFlat ? "0px solid" : "1px solid" ,
      borderColor    :  designFlat ? CardContainerBorderColor1 : CardContainerBorderColor2 ,
      // borderColor    :  {CardContainerBorderColor},
      zIndex         :  "200",
   }
   const sxCardBody  = {
      position       :  "relative",
      left           :  {base:"0px", md:"20px"},
      flexDirection  :  "column",
      padding        :  designFlat ? "2rem 1rem" : {base:"0", lg:"0 2rem"},
      alignItems     :  designFlat ? undefined : {base:"center", md:"flex-start"},
      // alignItems  :    { designFlat ? {base:"center", lg:"center"} : {base:"center", lg:"center"} ,
      border         :  designFlat ? "1px solid" : "0px solid" ,
      borderColor    :  designFlat ? CardBodyBorderColor : CardContainerBorderColor2,
      // background     =  {designFlat ? "hsla(200, 60%, 20%, 0.5)" : "none"}
      boxShadow      :  designFlat ? "xl" : "none",
   }
   const sxImage = {
      width    :  "200px",
      height   :  " 200px",
      position :  "relative",
      top      :  "0px",
      zIndex   :  "10",
      boxShadow:  "2xl",
      borderRadius:  "full",
      background: logoBGMode,
      // border: "1px solid",
   };
   const sxShortIntro = {
      fontSize: "1rem",
      fontWeight: "400",
      margin: "0"
   }
   const sxCardTitle = {
      textTransform: "uppercase",
      // alignItems: "center"
      alignItems: designFlat ? "flex-start" : "center",
      // textAlign: designFlat ? {base:"center", lg:"left"} : {base:"center", lg:"left"},
      // alignItems: {designFlat ? "center" : "flex-start" }
   }
   const sxSubTitle = {
      textTransform  :  "uppercase",
      textAlign      :  designFlat ? {base:"center", lg:"center"} : {base:"center", lg:"left"},
      fontSize       :  "1.1rem",
      fontWeight     :  "500",
      margin         :  ".25rem",
   }
   const sxDescription = {
      fontSize: "1rem",
      fontWeight: "normal",
      margin: "1rem 0",
      textAlign: designFlat ? undefined : {base:"center", md:"left"}
      // textAlign: "left"
      // textAlign: { orientation === "vertical" ? "column" : "row" }
   }

	return (
      /*--= Card Layout Format =--*/
		<MotionFlex className="digitalOne"
         alignItems="center"
         justifyContent="center"
         w={"100%"} h={"100%"}
         borderRadius={"1rem"}
         minWidth={"0"}
         position={"relative"}
         top={designFlat ? "-20px" : "0px"}
         /*--= motion =-*/
         initial={designFlat ? {opacity: 0, x: "400px"}   : {y: "400px"}}
         animate={designFlat ? {opacity: 1, x: "0px"}     : {y: "0px"}}
         transition  =  {{ease:easing, duration:.5, delay:.5}}
         // border={"1px solid red"}
      >
			{/* My Card : Container */}
			<Flex className="myCardContainer" sx={sxMyCardContainer}>

				{/* Image */}
            <ImageSrcStyle className="logoFIS" src={FISD1logo} sx={sxImage}/>

				{/* Content: Card body */}
            <CardBodyStyle className="cardBody" sx={sxCardBody}>
					{/* Card Short Intro */}
					<H4Header sx={sxShortIntro}>{cardData.shortIntro}</H4Header>
					{/* Card Title */}
					<H1Header sx={sxCardTitle}>{cardData.cardTitle}</H1Header>
					{/* Card Sub-Tile */}
					<H3Header sx={sxSubTitle}>{cardData.subTitle}</H3Header>
					{/* Card Description */}
					<Text sx={sxDescription}>{cardData.description}</Text>
               {/* Button Link */}
               <Link to={buttonData.buttonLink} target={buttonData.linkTarget}>
                  <Button
                     size={"md"}
                     top={designFlat ? "10px" : "10px"}
                     variant={colorMode === "light" ? "primary" : "accent"}
                     // variant={colorMode === "light" ? "success" : "success"}
                     rightIcon={buttonData.buttonRightIcon}
                     >
                     {buttonData.buttonLabel}
                  </Button>
               </Link>

               </CardBodyStyle>

			</Flex>

		</MotionFlex>
	);
};

export default DigitalOne;
