import { Box, Flex, Image } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
// import section2Image from "@images/wavemaker-developers.png";
import section2Image from "@images/wavemaker-cover.png";
import { H3Header, H4Header, LinkButton, PrimaryTextStyle } from "../../../assets/styles/Styles";

const SectionWavemaker = () => {

   const sectionData = {
      intro:      "Development Platform:",
      title:         "Wavemaker Studio",
      description:   "Build, test, and deploy modern web apps rapidly right from your browser with the industry’s most open, enterprise-grade low-code Rapid application development platform.",
      image:         section2Image,
      imageSize:     "220px",
      buttonLabel:   "Link to Wavemaker",
      buttonLink:    "https://www.wavemaker.com/low-code-enterprise-application-development-platform/",
      linkTarget:    "_blank",
   }
	const sectionHeaderStyle = {
		// as: "h2",
		// fontSize: "1.25rem",
		// fontWeight: "600",
      margin: "0rem 0 1rem",
		// marginBottom: ".5rem",
		// paddingTop: ".5rem",
		// paddingLeft: ".7rem"
	};
	const sectionBodyStyle = {
		// fontSize: "1rem",
		// fontWeight: "500",
		// paddingTop: ".5rem",
		// paddingLeft: ".7rem"
	};
   const sectionIntroStyle = {
      fontSize: "1rem",
      fontWeight: "400",
      marginBottom: "0rem",
      // paddingTop: ".5rem",
      paddingLeft: "1rem"
   };

	return (
		<Flex
         flexDirection={{base:"column", md:"row-reverse", lg:"column"}}
         alignItems={"center"}
         justifyContent={"center"}
         marginBottom={"2rem"}
         gap={6}>

			<Image src={sectionData.image}
            width={sectionData.imageSize}
            height={"auto"} />

			{/* Modal with image */}
			{/* <BasicModal title="Basic Counter App" image={LogoImg}/> */}

			<Box lineHeight={1.5}>
            <H4Header sx={sectionIntroStyle}>{sectionData.intro}</H4Header>
				<H3Header sx={sectionHeaderStyle}>{sectionData.title}</H3Header>

            <PrimaryTextStyle fontSize={"1rem"}
               paddingBottom={"1rem"}
               // sx={sectionBodyStyle}
               >
               {sectionData.description}
            </PrimaryTextStyle>

            <LinkButton
               label    =  {sectionData.buttonLabel}
               link     =  {sectionData.buttonLink}
               target   =  {sectionData.linkTarget}
               icon     =  {<FaArrowRight />}
               textTransform={"capitalize"}
            />
				{/* <Link to={sectionData.buttonLink} target={sectionData.linkTarget}>
					<StiloButton
						// variant="ghost"
						label={sectionData.buttonLabel}
						rightIcon={<FaArrowRight />}
						//=---------------------------=//
						// boxShadow="none"
						// padding="10px 0"
						// hoverColor={"accent.200"}
                  // fontSize="sm"
                  textTransform={"capitalize"}
					/>
				</Link> */}
			</Box>
		</Flex>
	);
};

export default SectionWavemaker;
