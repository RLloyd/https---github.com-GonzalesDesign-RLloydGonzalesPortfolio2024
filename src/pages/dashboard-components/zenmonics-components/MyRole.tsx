import { Box, Flex, Image } from "@chakra-ui/react";
import { H2Header, H4Header, PrimaryTextStyle } from "../../../assets/styles/Styles";
import screensImage from "@images/screens/screens.png";
// import screensImage from "./../../../assets/images/screens/screens.png";

const sectionContainer = {
   // width: {base:"full", lg:"500px"},
   flexDirection: "column",
   justifyContent: "center",
   alignItems: "center",
   gap: 5
}
const sectionData = {
	intro: "Abstract:",
	title: "My Role at Zenmonics",
	description: [
      "In my role as a Software Engineer/UX Developer at Zenmonics, a notable accomplishment was crafting the style guide for the Sunbird Application, an Angular cloud-based platform serving banking and financial services. This comprehensive guide encompasses the coding principles governing the construction of various components. Beyond serving as a designer's reference, it also serves developers by establishing standardized development practices.",

      "This style guide serves as a beacon, offering lucid and consistent directives for designing, developing, and documenting the application. Its scope spans essential elements such as branding, typography, color palette, user interface components, accessibility standards, and tone of communication. By adhering to this guide, we ensure a premium user experience and maintain a cohesive visual identity for the Sunbird Application across diverse devices and platforms.",

      "Furthermore, I assumed the role of the primary custodian for all styles integrated into the Sunbird app. Any proposed additions to the style repertoire undergo scrutiny, with developers required to submit them for my assessment. This process ensures that new styles harmonize with existing ones, preventing unnecessary proliferation and clutter while maintaining coherence."
   ],
	image: screensImage,
	// buttonLabel: "Zenmonics Info",
	// buttonLink: "https://www.businesswire.com/news/home/20181016005159/en/Zenmonics-Accepts-Investment-from-Fidelity-National-Information-Services-Inc.",
	// linkTarget: "_blank",
};

const sectionImageStyle = {
   // src: sectionData.image,
   // src: screensImage,
	margin: "2rem 0 0rem 0",
   width: "600px",
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
const sectionHeaderStyle = {
	// fontSize: "1.5rem",
	// fontWeight: "600",
   margin: "0rem 0 1rem",
	// marginBottom: ".5rem",
	paddingTop: "0rem",
	// paddingLeft: ".7rem"
};
const sectionBodyStyle = {
	// fontSize: "1.1rem",
	// fontWeight: "500",
	// paddingBottom: "1rem",
	// paddingLeft: ".7rem"
};

const MyRole = () => {

	return (
		<Flex sx={sectionContainer} >
			<Image src={screensImage} sx={sectionImageStyle} />

			<Box>
				<H4Header sx={sectionIntroStyle}>{sectionData.intro}</H4Header>
				<H2Header sx={sectionHeaderStyle}>{sectionData.title}</H2Header>
				{/* <Heading as={"h1"} sx={sectionHeaderStyle}>{sectionData.title}</Heading> */}
				{sectionData.description.map((data, index) => (
					<PrimaryTextStyle key={index}
                  paddingBottom={"1rem"}
                  sx={sectionBodyStyle}
                  >
						{data}
					</PrimaryTextStyle>
				))}
			</Box>

		</Flex>
	);
};

export default MyRole;
