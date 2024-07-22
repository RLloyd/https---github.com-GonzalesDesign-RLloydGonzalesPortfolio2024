import { Box, Flex, Image } from "@chakra-ui/react";
import { H2Header, H4Header, PrimaryTextStyle } from "../../../assets/styles/Styles";
import screensImage from "@images/screens/screens.png";

const sxSectionContainer = {
   flexDirection: "column",
   justifyContent: "center",
   alignItems: "center",
   gap: 5
}
const sectionData = {
	intro: "Synopsis:",
	title: "DigitalOne Studio Implementation",
	description: [
      "Following the merger of Zenmonics and FIS, significant changes were introduced to the entire channelUNITED® (Sunbird) ecosystem. With Sunbird experiencing rapid growth, it was imperative to align with client demands for deployment.",

      "FIS explored various LCD (low-code development) platforms for migrating Sunbird. After testing several RAD (Rapid Application Development) platforms, Wavemaker Studio emerged as the preferred choice for FIS.",

      "We embarked on a hands-on learning journey for several months and conducted a pilot program with one of our clients before proceeding with full-scale implementations.",

      "As a Software Engineer on the DigitalOne UX Team, my role involved analyzing the core HTML code, focusing on custom elements and inline utility classes. While utility classes offer convenient styling options, they can pose challenges when applications require custom styling, especially considering that this core app serves as a template for multiple clients. To address this, I proposed the UXUISA (UX/UI Style Architecture) solution.",

      "Furthermore, I collaborated with a team to ensure ADA Compliance across all sites we developed, as it became mandatory for all banks at the time."
   ],
	image: screensImage
};

const sxSectionImageStyle = {
	margin: "0px",
   width: "400px",
   height:"auto",
   objectFit: "contain",
};
const sxSectionIntroStyle = {
	fontSize: "1rem",
	fontWeight: "400",
	marginBottom: "0rem",
	paddingLeft: "1rem"
};
const sxSectionHeaderStyle = {
   margin: "0rem 0 1rem",
	paddingTop: "0rem",
};

const SectionD1Implementation = () => {

	return (
		<Flex sx={sxSectionContainer} >
			<Image src={sectionData.image} sx={sxSectionImageStyle} />

			<Box>
				<H4Header sx={sxSectionIntroStyle}>{sectionData.intro}</H4Header>

				<H2Header sx={sxSectionHeaderStyle}>{sectionData.title}</H2Header>

            {sectionData.description.map((data, index) => (
					<PrimaryTextStyle key={index}
                  paddingBottom={"1rem"}
                  >
						{data}
					</PrimaryTextStyle>
				))}
			</Box>

		</Flex>
	);
};

export default SectionD1Implementation;
