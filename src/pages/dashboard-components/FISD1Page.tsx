import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
import BackgroundImg from "../../assets/images/fintech-bg.png";
import { H1Header, HeroBoxStyle, PrimaryAccentButton, PrimaryTextStyle } from "../../assets/styles/Styles";
import Layout from "../../components/Layout";
import HeroTemplate from "../../components/hero/HeroTemplate";
import FISGridWrapper from "./fisD1-components/FISGridWrapper";

const d1HeroData = {
	shortIntro     :  "FIS: Fidelity National Information Services, Inc.",
	pageTitle      :  "DigitalOne App",
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

const contentHeaderData = {
	title: "DigitalOne Core Consumer Application",
	role: "Role: Software Engineer • UX Team",
	platform: "Platform: Wavemaker Enterprise",
	stylingFramework: "Styling Pre-Processor: LESS",
};

const sxHeaderBodyProfile = {
	fontSize: {base:"1rem", md:"1.25rem"},
	fontWeight: "500",
};

/*--= Grid Layout =--*/
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

/*--= Content Info Container Section =--*/
const sxContentInfoWrapper = {
   flexDirection  :  "column",
   justifyContent :  "center",
   alignItems     :  "center",
   position       :  "relative",
   margin         :  "0 auto",
   padding        :  { base:"2rem .5rem", lg:"2rem 2rem" },
   width          :  { base: "100%", md: "90%" },
   height         :  "100%",
   textAlign      :  "left",
   borderRadius   :  "xl",
}
const sxContentInfo = {
   flexDirection  :  "column",
   textAlign      :  { base:"center", lg:"left" },
   width          :  "full",
}

/*--= Homepage card content =--*/
const FISD1Page = () => {
	const colorModeX = useColorModeValue("primary.500", "primary.50");
	const gradationBackgroundMode = useColorModeValue("linear-gradient(to bottom, primary.50, brand.100, primary.50)", "linear-gradient(to bottom, primary.500, black)");
	const gradatedBGTranslucent = useColorModeValue(
      "linear-gradient(to bottom, #f0fcff75, #bfe9e875, #f0fcff75)",
      "linear-gradient(to bottom, #064e6075, #00000075)");

	return (
		<Layout>
         {/* Hero: FIS D1 */}
         <HeroTemplate
            image={
               /*-= Background image =-*/
               <HeroBoxStyle
                  backgroundImage      =  {d1HeroData.imageIntro}
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
                             />
                          </Box>
                     {/* } */}

                  </Box>
               </>
            }
         />

			{/* Content Info Container: Componentize! SRP: Single Repsonsibility Principle */}
			<Box className="contentInfoContainer" marginTop="-380" >
				<Flex className="contentInfoWrapper" sx={sxContentInfoWrapper} backgroundImage={gradationBackgroundMode} >
					<Flex className="contentInfo" sx={sxContentInfo}>
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
               <FISGridWrapper
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

export default FISD1Page;
