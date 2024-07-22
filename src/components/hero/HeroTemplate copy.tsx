import { Box } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { H1Header, HeroBoxStyle, PrimaryAccentButton, PrimaryTextStyle } from '../../assets/styles/Styles';

type Props<T> = {
   heroBGImage          : string
   backgroundPosition?  : any
   heroIntro            : string
   heroTitle            : string
   heroDescription      : string
   isButton?            : boolean
   buttonlabel?         : string
   buttonlink?          : string
   linktarget?          : string
   buttonrighticon?     : T
   isGradient?          :  boolean
}

const HeroTemplate = ({
   heroBGImage,
   backgroundPosition = "0px 0px",
   heroIntro,
   heroTitle,
   heroDescription,
   isButton,
   buttonlabel,
   buttonlink,
   linktarget,
   buttonrighticon,
   isGradient,
}: Props<ReactElement>) => {

   const alignText = "left"

   return (

   <HeroBoxStyle
      /*-= Background image =-*/
      backgroundImage={heroBGImage}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition={backgroundPosition}
      borderRadius="1rem"
      >

      {/* Hero Body Content */}
      <Box className="heroBodyContainer"
         display={"flex"}
         flexDirection={"column"}
         alignItems={"flex-start"}
         width={{base:"100%", md:"85%", lg:"75%"}}
         background={"#064e60d9"}
         // background={"#01181ec7"}
         // background={"primary.500"}
         // background={"#064e60d4"}
         padding={"2rem"}
         borderRadius={"1rem"}
         position={"relative"}
         margin={"0 auto"}
         top={"50px"}
         >
			<PrimaryTextStyle className="shortIntro"
            fontSize={{ base: "1rem", lg: "1.2rem" }}
            fontWeight={"semibold"}
            color={"primary.50"}
            textAlign={alignText}
            textTransform={"capitalize"}
            paddingLeft={{ base: 0, lg: 14 }}
            marginBottom={{base:0, md:-1, lg:-3}}
            >
				{heroIntro}
			</PrimaryTextStyle>

			{/* Hero Title */}
         <H1Header
            fontSize       =  {{ base: "2.5rem", lg: "4.5rem" }}
            textAlign      =  {alignText}
            textTransform  =  {"capitalize"}
            marginBottom   =  {5}
            /*-= gradated text =-*/
            bgGradient     =  {isGradient ? 'linear(to-r, success.200 10%, accent.400 50%, yellow.300 95%)' : "none"}
            color          =  {"primary.100"}
            bgClip         =  {isGradient ? 'text' : "none"}
            // bgClip         =  {isGradient ? 'text' : "none"}
            // bgClip='text'
            // textShadow     = "2px 2px 4px black"
            >
            {heroTitle}
         </H1Header>

			{/* Desription */}
			<PrimaryTextStyle
				fontSize    =  {{ base: "1rem", md: "1.25rem", lg: "1.5rem" }}
            textAlign   =  {alignText}
            color={"primary.50"}
				lineHeight  =  {1.3}
				textShadow  =  "2px 2px 4px black"
            >
				{heroDescription}
			</PrimaryTextStyle>

         {/* Optional: Button */}
         {isButton ?
         <Box margin={"1rem 0 0"}>
            {/* <LinkButton */}
            <PrimaryAccentButton
               label    =  {buttonlabel}
               link     =  {buttonlink}
               target   =  {linktarget}
               icon     =  {buttonrighticon}
            />
         </Box>
         :
         undefined }

      </Box>
   </HeroBoxStyle>
  )
}

export default HeroTemplate