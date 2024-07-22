import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import Layout from "../components/Layout";
import HeroTemplate from "../components/hero/HeroTemplate";

import { IoLogoApple } from "react-icons/io5";
import BackgroundImg from "../assets/images/sunbird/sunbird-hero-dark.png";
import { H1Header, HeroBoxStyle, PrimaryAccentButton, PrimaryTextStyle } from "../assets/styles/Styles";
import FISGridWrapper from "./dashboard-components/fisD1-components/FISGridWrapper";
import ZenmonicsGridWrapper from "./dashboard-components/zenmonics-components/ZenmonicsGridWrapper";

const sunbirdHeroData = {
	shortIntro     : "Zenmonics: SunbirdUNITED®",
	title      : "Sunbird App",
	subTitle       : "FIS: Fidelity National Information Services, Inc.",
	description    : "Put the customer experience first with a cross-functional digital banking engagement platform.",
	imageIntro     :  BackgroundImg,
   buttonLabel    : "Go to site",
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
const sxHeaderBodyProfile = {
	fontSize: {base:"1rem", md:"1.25rem"},
	fontWeight: "500",
};
/*--= Hero Section =--*/
const sxHeroBodyContainer = {
   display        :  "flex",
   flexDirection  :  "column",
   alignItems     :  "flex-start",
   width          :  {base:"100%", md:"85%", lg:"75%"},
   background     :  "#01181eb8",
   padding        :  "2rem",
   borderRadius   :  "1rem",
   position       :  "relative",
   margin         :  "0 auto",
   top            :  "-360px",
}
const sxShortIntro = {
   fontSize      :  { base: "1rem", lg: "1.2rem" },
   fontWeight    :  "semibold",
   color         :  "primary.50",
   textAlign     :  {base:"center", md:"left"},
   textTransform :  "capitalize",
   paddingLeft   :  { base: 0, lg: 14 },
   marginBottom  :  {base:0, md:-1, lg:-3},
}
const sxTitle = {
   fontSize       :  { base: "2.5rem", lg: "4.5rem" },
   textAlign      :  {base:"center", md:"left"},
   textTransform  :  "capitalize",
   marginBottom   :  5,
   color          :  "primary.100",
}
const sxDescription = {
   fontSize    :  { base: "1rem", md: "1.25rem", lg: "1.5rem" },
   textAlign   :  {base:"center", md:"left"},
   color       :  "primary.50",
   lineHeight  :  1.3,
   textShadow  :  "2px 2px 4px black"
}

const heroData = {
	shortIntro: "Zenmonics: SunbirdUNITED®",
	cardTitle: "Sunbird App",
	subTitle: "FIS: Fidelity National Information Services, Inc.",
	description: "Put the customer experience first with a cross-functional digital banking engagement platform.",
};

const heroButtonData = {
	buttonLabel: "Go to site",
	buttonLink: "https://www.fisglobal.com/en/products/digitalone",
	linkTarget: "_blank",
};

const contentHeaderData = {
	title: "Sunbird Application",
	role: "Role: Software Engineer • UX Team",
	platform: "Platform: Angular",
	stylingFramework: "Styling Framework: Angular Material UI",
};

const bodyStyle = {
	fontSize: "1.25rem",
	fontWeight: "500",
	// paddingTop: ".5rem",
	// paddingBottom: "0rem",
	// paddingLeft: ".7rem"
};

const imageBoxStyle = {
	width: "full",
	height: "450px",
	borderRadius: "xl",
	// border:         "2px solid hsla(100, 50%, 70%, 0.95)",
	// boxShadow:      "5px 10px 16px hsla(90, 60%, 50%, 0.5)",
	margin: "0px auto",
	// objectPosition: "-2px",
	background: "accent.200",
	//==========================//
	// backgroundColor: @d1-base-background;
	// background-image: @d1-hero-bg-image;
	backgroundSize: "cover",
	backgroundPosition: "center",
	objectFit: "cover",
	backgroundRepeat: "no-repeat",
	//==========================//
	display: "flex",
	alignItems: "flex-start",
	position: "relative",
	top: "0px",
	// padding:"1rem",
};

const logoImgBoxStyle = {
	width: "100px",
	borderRadius: "full",
	// border:         "2px solid hsla(100, 50%, 70%, 0.95)",
	// boxShadow:      "5px 10px 16px hsla(90, 60%, 50%, 0.5)",
	margin: "0px auto",
	objectPosition: "-2px",
	background: "accent.200",
	//==========================//
	display: "flex",
	alignItems: "flex-start",
	position: "absolute",
	top: { base: "-100px", md: "-90px", lg: "-50px" },
	left: { base: "150px", md: "350px", lg: "750px" },
	// padding:"1rem",
};


const gridTemplateDesignUno = {
	base: `
     "one one one one"
     "two two two two"
     "three three three three"
     "four four four four "
     "five five five five "
   `,
	lg: `
     "one one one one"
     "two two three three"
     "four four three three"
     "four four five five "
   `,
};
const gridTemplateDesignDos = {
	base: `
     "one one one one"
     "two two two two"
     "three three three three"
     "four four four four "
     "five five five five "
   `,
	lg: `
     "one one one one"
     "two two two two"
     "three three three three"
     "four four four four"
     "five five five five "
   `,
};

/*--= Sunbird Dashboard Page =--*/
const SunbirdPage = () => {
   const colorModeX = useColorModeValue("primary.500", "primary.50");
	const gradationBackgroundMode = useColorModeValue("linear-gradient(to bottom, primary.50, brand.100, primary.50)", "linear-gradient(to bottom, primary.500, black)");
	const gradatedBGTranslucent = useColorModeValue(
      "linear-gradient(to bottom, #f0fcff75, #bfe9e875, #f0fcff75)",
      "linear-gradient(to bottom, #064e6075, #00000075)");

	return (
		<Layout>

         {/* Hero: Sunbird */}
         <HeroTemplate
            image={
               /*-= Background image =-*/
               <HeroBoxStyle
                  backgroundImage      =  {sunbirdHeroData.imageIntro}
                  backgroundRepeat     =  "no-repeat"
                  backgroundSize       =  "cover"
                  backgroundPosition   =  {{base:"0px 0px", md:"0px -130px", lg:"0px -200px", xl:"0px -400px"}}
                  borderRadius         =  "1rem"
               />
            }

            content = {
               <>
                  <Box className="d1HeroBodyContainer" sx={sxHeroBodyContainer} >
                     <PrimaryTextStyle className="d1ShortIntro" sx={sxShortIntro} >
                        {sunbirdHeroData.shortIntro}
                     </PrimaryTextStyle>

                     {/* Hero Title */}
                     <H1Header className="d1Title" sx={sxTitle} >
                        {sunbirdHeroData.title}
                     </H1Header>

                     {/* Desription */}
                     <PrimaryTextStyle className="d1Description" sx={sxDescription} >
                        {sunbirdHeroData.description}
                     </PrimaryTextStyle>

                     {/* action = { */}
                         {/* <Box margin={"1rem 0 0"}>
                             <PrimaryAccentButton
                                label    =  {sunbirdHeroData.buttonLabel}
                                link     =  {sunbirdHeroData.buttonLink}
                                target   =  {sunbirdHeroData.linkTarget}
                                icon     =  {<FaArrowRight />}
                             />
                          </Box> */}
                     {/* } */}

                  </Box>
               </>
            }
            />

			{/* Content Info Container: Componentize! SRP: Single Repsonsibility Principle */}
			<Box
				className="contentInfoContainer"
				marginTop="-300px"
				// marginTop={{base:"-380", lg:"300px"}}
			>
				<Flex className="contentInfoWrapper"
					flexDirection={"column"}
					justifyContent={"center"}
					alignItems={"center"}
					position={"relative"}
					margin={"0 auto"}
					padding={{base:"2rem .5rem", lg:"2rem 2rem"}}
					width={{ base: "100%", md: "90%" }}
					height={"100%"}
					textAlign={"left"}
					borderRadius={"xl"}
					backgroundImage={gradationBackgroundMode}
				>
					<Flex
						flexDirection={"column"}
                  textAlign={{base:"center", lg:"left"}}
						width={"full"}
					   >
						<Heading
							as={"h1"}
							fontSize={{base:"2rem", md:"2.5rem"}}
							fontWeight={"700"}
							width={"full"}
							lineHeight={1}
							color={colorModeX}
							paddingBottom=".5rem"
						   >
							{contentHeaderData.title}
						</Heading>

						<Text sx={sxHeaderBodyProfile}>{contentHeaderData.role}</Text>
						<Text sx={sxHeaderBodyProfile}>{contentHeaderData.platform}</Text>
						<Text sx={sxHeaderBodyProfile}>{contentHeaderData.stylingFramework}</Text>
					</Flex>

					{/* Content grid layout component */}
               <ZenmonicsGridWrapper
                  templateDesign={gridTemplateDesignDos}
                  spaceGap={"2rem"}
                  margin="2rem 0 1rem"
                  />
					{/* </Box> */}
				</Flex>
			</Box>


		</Layout>
	);
};
// 	const colorModeX = useColorModeValue("primary.200", "accent.50");
// 	const bgMode = useColorModeValue("primary.900", "accent.500");
//    const gradationBackgroundMode = useColorModeValue(
//       "linear-gradient(to bottom, primary.50, brand.100, primary.50)",
//       "linear-gradient(to bottom, primary.500, black)");
//    const gradatedBGTranslucent = useColorModeValue(
//       "linear-gradient(to bottom, #f0fcff75, #bfe9e875, #f0fcff75)",
//       "linear-gradient(to bottom, #064e6075, #00000075)");
//    const { designFlat } = useGlobalStore();
//    const { colorMode } = useColorMode();

// 	return (
// 		<Layout>
// 			{/* <Flex justifyContent={"center"}> */}
//             <HeroTemplate className="SunbirdHeroContainer"
//                img={BackgroundImg}
//                // left="20rem"
//                // border={"10px solid red"}
//                // width="500px"
//                //=------------------------=//
//                shortintro={heroData.shortIntro}
//                cardtitle={heroData.cardTitle}
//                // subTitle={heroData.subTitle}
//                description={heroData.description}
//                bgimg={gradatedBGTranslucent}
//                // bodyBackground={designFlat ? "red" : "blue"}
//                // bodyBackground={designFlat ? "#fff7f575" : "#0d4d7175"}
//                // bodyBackground={designFlat ? "hsla(0deg, 0%, 10%, 0.75)" : "hsla(100deg, 0%, 100%, 0.25)"}
//                // bodyBorder={"1px solid"}
//                //=------------------------=//
//                // buttonVariant={"accent"}
//                buttonlabel={heroButtonData.buttonLabel}
//                buttonlink={heroButtonData.buttonLink}
//                linktarget={heroButtonData.linkTarget}
//                //=------------------------=//
//                // leftIcon={<FaArrowRight />}
//                buttonrighticon={<FaArrowRight />}
//             />

// 			{/* Content Info Container: Componentize! SRP */}
// 			<Box
// 				marginTop={"4rem"}
// 				className="contentInfoContainer"
// 				// border={"1px solid orange"}
// 			>
// 				<Flex
// 					flexDirection={"column"}
// 					justifyContent={"center"}
// 					alignItems={"center"}
// 					position={"relative"}
// 					margin={"0 auto"}
// 					padding={"2rem 2rem"}
// 					top={"-100px"}
// 					width={{ base: "100%", md: "90%" }}
// 					height={"100%"}
// 					textAlign={"left"}
// 					borderRadius={"xl"}
// 					// borderColor    =  {"brand.500"}
// 					// border         =  {"1px solid"}
// 					// background     =  {contentBgMode}
// 					backgroundImage={gradationBackgroundMode}
// 					// background     =  {"brand.900"}
// 				>
// 					<Flex
// 						flexDirection={"column"}
// 						// justifyContent={"flex-start"}
// 						// alignItems={"flex-start"}
// 						width={"full"}
// 					>
// 						<Heading
// 							as={"h1"}
// 							fontSize={"2.5rem"}
// 							fontWeight={"700"}
// 							width={"full"}
// 							lineHeight={1}
// 							color={colorModeX}
// 							paddingBottom=".5rem"
// 							// marginBottom={"2rem"}
// 							// border={"1px solid"}
// 						>
// 							{contentHeaderData.title}
// 						</Heading>
// 						<Text sx={bodyStyle}>{contentHeaderData.role}</Text>
// 						<Text sx={bodyStyle}>{contentHeaderData.platform}</Text>
// 						<Text sx={bodyStyle}>{contentHeaderData.stylingFramework}</Text>
// 					</Flex>

// 					{/* <Box width={"full"}> */}
// 					{/* <Box> */}
// 					<ZenmonicsGridWrapper templateDesign={gridTemplateDesignUno} spaceGap={"2rem"} margin="2rem 0 10rem" />
// 					{/* </Box> */}
// 				</Flex>
// 			</Box>

// 		</Layout>
// 	);
// };

export default SunbirdPage;
