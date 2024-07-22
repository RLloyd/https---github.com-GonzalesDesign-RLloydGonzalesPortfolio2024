import { Box, Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import zenLogo from "../../assets/images/zenmonics-logo2.png";
import { CardBodyStyle, H1Header, H3Header, H4Header, ImageSrcStyle, PrimaryAccentButton, SuccessButton, LinkButton, DangerButton, WarningButton } from "../../assets/styles/Styles";
import { useGlobalStore } from "../../hooks/GlobalStates";
import { cubicBezier, motion } from "framer-motion";
import { MotionFlex, easing } from "src/assets/variables/Variables";

const sxCardOptions = {
	boxShadow: "xl",
	borderRadius: "1.5rem",
};

const cardData = {
   shortIntro: "channelUNITED®",
   cardTitle: "Sunbird App",
   subTitle: "Software Engineer : UI/UX Team",
   description: "Built & maintained the Sunbird style guide. Liasion between UX & Dev teams.",
};
const buttonData = {
   buttonLink     : "sunbirdDashboard",
   linkTarget     : "_self",
   buttonLabel    : "Details",
   buttonLeftIcon : "none",
   buttonRightIcon: <FaArrowRight />,
   buttonBackground: "primary.500",
   butttonColor   : "primary.50",
   buttonHoverColor: "orange",
};

const Zenmonics = () => {
   const { colorMode, toggleColorMode } = useColorMode();
	const colorModeX = useColorModeValue("primary.200", "primary.50");
	const bgMode = useColorModeValue("primary.900", "primary.500");
	const borderMode = useColorModeValue("primary.100", "primary.900");
	const borderModeH = useColorModeValue("red", "primary.900");
	const borderModeV = useColorModeValue("primary.50", "primary.500");
	const ImgBGMode = useColorModeValue("primary.900", "primary.50");
	const cardBGMode = useColorModeValue("white", "primary.700");
	const cardGradBGMode = useColorModeValue("linear-gradient(to bottom, primary.100, primary.50, primary.50, primary.50)", "linear-gradient(to bottom, primary.400, primary.700)");

	const { designFlat } = useGlobalStore();

   const sxImage = {
		boxSize     : designFlat ? "200px" : { base: "150px", md: "200px", lg: "250px", xl: "300px" },
		// boxSize     : "200px",
		borderRadius: "full",
		border      : "8px solid",
		borderColor : borderModeV,
		// borderColor : "yellow", //designFlat ? {borderModeV} : {borderModeH},
		boxShadow   : "xl",
		margin      : "0px auto",
		position    : "relative",
		left        : designFlat ? {base:"0", md:"40px"} : { base: "0px", lg: "0px" },
		top         : designFlat ? { base: "0px", md: "-40px", lg: "20px" } : { base: "30px", lg: "0px" },
		objectPosition : "-2px",
		background     : cardBGMode,
		// backgroundImage: cardGradBGMode,
		zIndex         : "10",
	};
   const sxMyCard = {
      flexDirection  :  designFlat ? {base:"column", md:"row"} : "column",
      alignItems     :  designFlat ? "center" : "center",
		position       :  "relative",
      left           :  designFlat ? {base:"0px", md:"-1rem", lg:"0px"} : {base:"0px", md:"0rem", lg:"0px"} ,
      top            :  designFlat ? {base:"0", lg:"-10px"} : {base:"0", lg:"90px"},
      // border   :  "1px solid cyan",
      // backgroundImage: cardGradBGMode,
      padding        :  "1rem 0 0",
	};
	const sxCardBodyStyleVertical = {
		// display        : "flex",
		// flexDirection  :  {base:"row", md:"column"},
		flexDirection  :  "column",
      // alignItems: {base:"center", lg:"flex-start"},
		alignItems     :  "center",
		position       :  "relative",
		top            :  {base:"0rem", lg:"60px"},
		padding        :  {base:"1rem", lg:"2rem 1rem 1rem"},
      width          :  {base:"20rem", md:"30rem", lg:"40rem"},
		margin         :  "0rem",
		border         :  "1px solid",
		borderColor    :  borderMode,
		backgroundImage:  cardGradBGMode,
	};
	const sxCardBodyStyleHorizontal = {
		flexDirection  : "column",
      alignItems     : "center",
		// alignItems: "flex-start",
		position       : "relative",
		left           : { base: "0px", lg: "0px" },
      top            : designFlat ? "0px" : { base: "0px", lg: "-60px" },
		// left: { base: "0px", lg: "90px" },
		margin         : {base:"0rem 0px 0px", lg:"3rem"},
		padding        : "3rem",
      width          : "100%",
		// padding: "3rem 8rem",
		// border: "1px solid",
		// borderColor: borderMode,
		// backgroundImage: cardGradBGMode,
	};
	const sxShortIntro = {
		fontSize    : "1rem",
		fontWeight  : "400",
		margin      : "0",
	};
   const sxCardTitle = {
		textTransform  : "uppercase",
		// alignItems: "center"
		alignItems     : designFlat ? "flex-start" : "center",
		textAlign      : "center",
		// textAlign      : designFlat ? {base:"center",  } : "left",
		// alignItems: {designFlat ? "center" : "flex-start" }
	};
	const sxSubTitle = {
		textTransform  : "uppercase",
		fontSize       : "1.1rem",
		fontWeight     : "500",
		margin         : ".25rem",
	};
	const sxDescription = {
		fontSize    : "1rem",
		fontWeight  : "normal",
		margin      : "1rem 0",
		textAlign   : "center",
		// textAlign: { orientation === "vertical" ? "column" : "row" }
	};


	return (

		/*--= Card Layout Format =--*/
		<MotionFlex
			className      = "zenmonicsCard"
         flexDirection  = "row"
			alignItems     = "center"
			justifyContent = "center"
			w  = {"100%"}
			h  = {"100%"}
			borderRadius   = {"1rem"}
         position={"relative"}
         top   = {designFlat ? {base:undefined, lg:"-50px"} : undefined}
         left  = {designFlat ? {base:undefined, lg:"-20px"} : undefined}
			// border={"1px solid red"}
         /*--= motion =-*/
         initial={designFlat ? {opacity: 0, x: "-400px"}  : {x: "-800px"}}
         animate={designFlat ? {opacity: 1, x: "0px"}     : {x: "0px"}}
         transition  =  {{ease:easing, duration:.5, delay:1}}
		>
			{/* My Card */}
			<Flex className="myCard" sx = {sxMyCard}>
				{/* Image */}
				<ImageSrcStyle src={zenLogo} sx = {sxImage} />
				{/* Content */}
				<CardBodyStyle className="cardBody"
					sx = {designFlat ? sxCardBodyStyleVertical : sxCardBodyStyleHorizontal}>
					{/* Card Short Intro */}
					<H4Header sx = {sxShortIntro}>{cardData.shortIntro}</H4Header>
					{/* Card Title */}
					<H1Header sx = {sxCardTitle}>{cardData.cardTitle}</H1Header>
					{/* Card Sub-Tile */}
					<H3Header sx = {sxSubTitle}>{cardData.subTitle}</H3Header>
					{/* Card Description */}
					<Text sx = {sxDescription}>
                  {/* textAlign={designFlat ? "center" : "center"} */}
						{cardData.description}
					</Text>

               {/* Button & Link */}
               {/* <SuccessButton */}
               {/* <DangerButton */}
               {/* <LinkButton */}
               {/* <WarningButton */}
               <PrimaryAccentButton
                  label       =  { buttonData.buttonLabel }
                  link        =  { buttonData.buttonLink }
                  target      =  { buttonData.linkTarget }
                  icon        =  { buttonData.buttonRightIcon }
               />

				</CardBodyStyle>
			</Flex>
		</MotionFlex>
	);
};

export default Zenmonics;
