/*--= Home page component =--*/
import { Button, Flex, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { CardBodyStyle, H1Header, H3Header, H4Header, ImageSrcStyle } from '../../assets/styles/Styles';
import { useGlobalStore } from '../../hooks/GlobalStates';
import StyleGuideBG from "./../../assets/images/styleguide/backgroundStyleguide2.png";

const cardData = {
   shortIntro: "",
   cardTitle: "Branding Standards",
   subTitle: "",
   description: "Having even a basic style guide for a website is crucial. It ensures consistency...",
};
const scrollToTop = () => {
   window.scrollTo(0, 0);
   // "/styleguide"
 };
const buttonData = {
   // buttonLink: scrollToTop(),
   buttonLink: "styleguide",
   linkTarget: "_self",
   buttonLabel: "Style guide",
   buttonLeftIcon: "none",
   buttonRightIcon: <FaArrowRight />,
   buttonBackground: "primary.500",
   butttonColor: "primary.50",
   buttonHoverColor: "orange",
};

const StyleguideDash = () => {
   const { colorMode, toggleColorMode } = useColorMode();
   const colorModeX = useColorModeValue("primary.200", "primary.50");
   const headerColor = useColorModeValue("primary.400", "primary.200");
   const headerBGColor = useColorModeValue("primary.100", "primary.400");
	const bgMode = useColorModeValue("primary.900", "primary.500");
	const borderMode = useColorModeValue("primary.100", "primary.400");
	const ImgBGMode = useColorModeValue("primary.900", "primary.50");
	const cardBGMode = useColorModeValue("white", "primary.700");
	const cardGradBGMode = useColorModeValue("linear-gradient(to bottom, primary.100, primary.50, primary.50, primary.50)", "linear-gradient(to bottom, primary.400, primary.700)");

   /*-= useNavigate instead of Link to=-*/
   const navigate = useNavigate();

   const handleSubmit = async () => {
      await /* API call here */
      navigate(buttonData.buttonLink);
      // navigate('<route here>');
      scrollToTop();
    };

	const { designFlat, setDesignFlat } = useGlobalStore();

	const sxImage = {
      // boxSize: "400px",
      width:   "500px",
      height:  "200px",
      borderRadius: "xl",
      border: "2px solid",
      borderColor: "primary.600",
      boxShadow: "xl",
      margin: "0px auto",
      position: "relative",
      left: designFlat ? "0px" : { base: "0px", lg: "0px" },
      top: designFlat ? "-10px" : { base: "80px", lg: "0px" },
      objectPosition: "-2px",
      background: cardBGMode,
      // backgroundImage: cardGradBGMode,
      // zIndex: "10",
   };

   const sxMyCard = {
      position :  "relative",
      left     :  "0",
      top      :  designFlat ?
                  { base:"0", lg:"0px" } :
                  { base:"0px", lg:"0px" },
      // top      :  {base:"0px", lg:"-60px"},
      padding  :  designFlat ?
                  {base:"2rem 1rem 0", lg:"2rem 1rem 0"} :
                  {base:"2rem 1rem 0", lg:".5rem 0rem"},
      flexDirection: designFlat ?
                  { base: "column" } :
                  { base: "column", lg: "column" },
      alignItems: designFlat ? "center" : "center",
      // padding: "2rem"},
   };

   const sxCardBodyStyleVertical = {
      // display        : "flex",
      // flexDirection  :  {base:"row", md:"column"},
      flexDirection  :  "column",
      // alignItems: {base:"center", lg:"flex-start"},
      width          :  "90%",
      alignItems     :  "center",
      position       :  "relative",
      top            :  {base:"-40px", lg:"0px"},
      // top            :  "-40px",
      padding        : {base:"1rem", lg:"1rem 1rem"},
      // padding        :  "3rem 1rem",
      margin         :  "0rem",
      border         :  "1px solid",
      borderColor    :  borderMode,
      backgroundImage:  cardGradBGMode,
   };

   const sxCardBodyStyleHorizontal = {
      flexDirection  :  "column",
      alignItems     :  "center",
      width          :  "90%",
      position       :  "relative",
      left           :  "0", //{ base: "0px", lg: "90px" },
      top            :  "0px",
      margin         :  "0rem",
      padding        :  "1rem",
      // margin: "3rem",
      // padding: "3rem 8rem",
      // border         :  "1px solid",
      // borderColor    :  borderMode,
      // backgroundImage:  cardGradBGMode,
   };
   const sxShortIntro = {
      fontSize: "1rem",
      fontWeight: "400",
      margin: "0",
   };
   const sxCardTitle = {
      fontSize       : {base:"2rem", md:"2rem", lg:"1.5rem"},
      letterSpacing  : "0",
      textTransform: "uppercase",
      // alignItems: "center"
      alignItems: designFlat ? "flex-start" : "center",
      textAlign: "center", //designFlat ? "center" : "left",
      // alignItems: {designFlat ? "center" : "flex-start" }
   };
   const sxSubTitle = {
      textTransform: "uppercase",
      fontSize: "1.1rem",
      fontWeight: "500",
      margin: ".25rem",
   };
   const sxDescription = {
      fontSize: "1rem",
      fontWeight: "normal",
      margin: "1rem 0",
      textAlign: "center",
      // textAlign: { orientation === "vertical" ? "column" : "row" }
   };

	return (
		/*--= Card Layout Format =--*/
      <>
         <H1Header
            className="softwareSkills"
            fontSize={"2rem"}
            letterSpacing={"2"}
            color={headerColor}
            background={headerBGColor}
            // background={headerBGColor}
            padding={"1rem 1rem .5rem"}
            textTransform={"uppercase"}
            >
            Mini Style Guide
         </H1Header>
         <Flex
            className="styleguideCard"
            alignItems="center"
            justifyContent="center"
            w={"100%"}
            h={"auto"}
            borderRadius={"1rem"}
            // border={"1px solid red"}
         >
            {/* My Card */}
            <Flex className="myCard" sx={sxMyCard} >

               {/* Image */}
               {designFlat ?
                  <ImageSrcStyle src={StyleGuideBG} sx={sxImage} /> :
                  undefined
               }

               {/* Content */}
               <CardBodyStyle className="cardBody"
                  sx={designFlat ? sxCardBodyStyleVertical : sxCardBodyStyleHorizontal} >
                  {/* Card Short Intro */}
                  <H4Header sx={sxShortIntro}>{cardData.shortIntro}</H4Header>
                  {/* Card Title */}
                  <H1Header sx={sxCardTitle}>{cardData.cardTitle}</H1Header>
                  {/* Card Sub-Tile */}
                  <H3Header sx={sxSubTitle}>{cardData.subTitle}</H3Header>
                  {/* Card Description */}
                  <Text sx={sxDescription}>{cardData.description}</Text>
                  {/* Button Link */}
                  {/* <Link to    =  {buttonData.buttonLink}
                        target=  {buttonData.linkTarget}
                        > */}
                  <Button
                     size     =  {"md"}
                     top      =  {designFlat ? "10px" : "10px"}
                     variant  =  {colorMode === "light" ? "primary" : "accent"}
                     rightIcon=  {buttonData.buttonRightIcon}
                     onClick  =  {handleSubmit}
                     >
                     {buttonData.buttonLabel}
                  </Button>
                  {/* </Link> */}

               </CardBodyStyle>
            </Flex>
         </Flex>
      </>
	)
}


export default StyleguideDash

