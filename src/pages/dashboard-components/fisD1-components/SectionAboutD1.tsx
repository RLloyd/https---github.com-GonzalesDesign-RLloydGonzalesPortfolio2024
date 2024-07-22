import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import D1Logo from "@images/D1-Logo.png";
import { H3Header, H4Header, PrimaryTextStyle } from '../../../assets/styles/Styles';

const sectionContainer = {
   flexDirection: {base:"column", md:"row", lg:"column"},
   alignItems: "center",
   mb: "2rem",
   gap: 10,
}
const sectionData = {
   intro:      "The Product:",
   title:      "About DigitalOne",
   description:"The FIS® Digital One™ digital banking platform’s suite of solutions offers a customer-centric banking experience for your customers, business clients and bankers, providing consistency across digital and mobile self-service and banker-assisted channels.",
   // imageSize:  "150px"
}
const sectionImageStyle = {
   // src: sectionData.image,
   // src: screensImage,
   // margin: "2rem 0 0rem 0",
   width: "150px",
   height:"auto",
   objectFit: "contain",
   // height: sectionImageStyle.imageSize}
   // borderRadius: "full"}
   // border: "1px solid"}
   // borderColor: "primary.300"}
   // background: "primary.500"}
};
const sectionIntroStyle = {
	fontSize: "1rem",
	fontWeight: "400",
	marginBottom: "0rem",
	// paddingTop: ".5rem",
	paddingLeft: "1rem"
};

/*--= About D1 in D1 Dashboard =--*/
const SectionAboutD1 = () => {

  return (

   <Flex sx={sectionContainer} >

      <Image src={D1Logo} sx={sectionImageStyle}/>


      <Box lineHeight={1.5}>
         <H4Header sx={sectionIntroStyle}>{sectionData.intro}</H4Header>
         <H3Header margin={"0rem 0 1rem"}>{sectionData.title}</H3Header>

         <PrimaryTextStyle fontSize={"1rem"}>
            {sectionData.description}
         </PrimaryTextStyle>
      </Box>

   </Flex>
  )
}

export default SectionAboutD1