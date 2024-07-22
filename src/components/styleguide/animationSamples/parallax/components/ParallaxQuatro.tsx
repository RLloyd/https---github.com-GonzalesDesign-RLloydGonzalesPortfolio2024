import { Box } from '@chakra-ui/react'
import LayoutDesignUno from '@components/layoutTemplates/LayoutDesignUno'
import { H1Header, HeroBoxStyle, PrimaryAccentButton, PrimaryTextStyle } from '@styles/Styles'
import { FaArrowRight } from 'react-icons/fa'
import { IoLogoApple } from "react-icons/io5";
import BackgroundImg from "@images/Bokeh-Teal-BG.jpg";
import { border } from '@chakra-ui/react';

const d1HeroData = {
	shortIntro     :  "The dynamic nature of parallax scrolling",
	pageTitle      :  "Improved Engagement",
	description    : "As users scroll down a page, they are rewarded with visual surprises, animations, or transitions, keeping them engaged and encouraging them to spend more time on the website or app.",
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

/*--= Hero Section =--*/
const sxHeroBodyContainer = {
   display        :  "flex",
   flexDirection  :  "column",
   alignItems     :  "flex-start",
   width          :  {base:"100%", md:"50%", lg:"60%"},
   // background     :  "#01181e60",
   padding        :  "2rem",
   borderRadius   :  "1rem",
   position       :  "relative",
   margin         :  "20px",
   top            :  "-600px",
}
const sxShortIntro = {
   fontSize      :  { base: ".65rem", lg: ".75rem" },
   fontWeight    :  "normal",
   color         :  "primary.50",
   textAlign     :  {base:"center", md:"left"},
   textTransform :  "uppercase",
   paddingLeft   :  "6px",
   marginBottom  :  {base:0, md:-1, lg:-6},
}
const sxTitle = {
   fontSize       :  { base: "1rem", lg: "2rem" },
   fontWeight     :  "500",
   textAlign      :  {base:"center", md:"left"},
   textTransform  :  "capitalize",
   margin         :  "2rem 0",
   letterSpacing  :  ".5px",
   color          :  "primary.50",
}
const sxDescription = {
   fontSize    :  { base: "1rem", md: "1.25rem", lg: "1.5rem" },
   textAlign   :  {base:"center", md:"left"},
   color       :  "primary.50",
   lineHeight  :  1.3,
   textShadow  :  "2px 2px 4px black"
}
/*--= Grid Layout =--*/
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

const ParallaxQuatro = () => {
  return (
   <LayoutDesignUno
   image={
      /*-= Background image =-*/
      <HeroBoxStyle
         backgroundImage      =  {d1HeroData.imageIntro}
         backgroundRepeat     =  "no-repeat"
         backgroundSize       =  "cover"
         backgroundPosition   =  {{base:"0px 0px", md:"0px -130px", lg:"0px -200px", xl:"0px -400px"}}
         borderRadius         =  "1rem"
         height               =  {"700px"}
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
                <Box margin={"3rem 0 0"}>
                    <PrimaryAccentButton
                       label    =  {d1HeroData.buttonLabel}
                       link     =  {d1HeroData.buttonLink}
                       target   =  {d1HeroData.linkTarget}
                       icon     =  {<FaArrowRight />}
                       size     =  "sm"
                    />
                 </Box>
            {/* } */}

         </Box>
      </>
   }
/>
  )
}

export default ParallaxQuatro