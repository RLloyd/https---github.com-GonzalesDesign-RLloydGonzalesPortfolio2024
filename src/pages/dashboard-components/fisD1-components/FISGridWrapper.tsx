import { Box, Divider, Flex, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import SectionAboutD1 from "./SectionAboutD1";
import SectionD1Implementation from "./SectionD1Implementation";
import SectionUXUIStyleArchitecture from "./SectionUXUIStyleArchitecture";
import SectionWavemaker from "./SectionWavemaker";

const sxWrapper = {
	paddingX: [10, 15, 20],
	paddingY: 5,
	background: "primary.500",
	// bgGradient: 'linear(to-t, primary.50, accent.100)',
	border: "1px solid",
	borderColor: "brand.200",
	borderRadius: "1rem",
	boxShadow: "xl",
};

const contentHeaderData = {
	title: "DigitalOne Core Consumer Application",
	role: "Role: Software Engineer • UX Team",
	platform: "Platform: Wavemaker Enterprise",

};
const sectionHeaderStyle = {
	as: "h2",
	fontSize: "1.5rem",
	fontWeight: "600",
	marginBottom: ".5rem",
	paddingTop: ".5rem",
	// paddingLeft: ".7rem"
};
const bodyStyle = {
	fontSize: "1rem",
	fontWeight: "400",
	paddingTop: ".5rem",
	// paddingLeft: ".7rem"
};
// const sxGridItemStylye = {
//    // background: {base:"", "primary.600"},
//    background: sectionBgColorMode,
// 	borderRadius: "1rem",
// 	// border: "1px solid #ffffff30",
// 	padding: "2rem",
// };



type Props = {
	templateDesign: {} | string
   spaceGap?: string
   margin?: string
};

/*--= Child component in FISD1Page =--*/
const FISGridWrapper = ({
   templateDesign,
   spaceGap,
   margin,
   }: Props) => {

   // find a way to make this re-usable
   const sectionContainerBgColorMode = useColorModeValue("primary.50", "primary.700");
   const sectionBgColorMode = useColorModeValue("primary.50", "primary.600");
   const sectionBorderColorMode = useColorModeValue("primary.100", "primary.500");
   const gradationBackgroundMode = useColorModeValue(
      "linear-gradient(to bottom, primary.50, brand.100, primary.50)",
      "linear-gradient(to bottom, primary.600, primary.900)");

   const sxSectionBoxStyle = {
      padding: "1rem",
      border: "1px solid",
      borderColor: sectionBorderColorMode,
      // borderColor: {sectionBorderColorMode},
      borderRadius: "1rem",
   }
   const sxGridItemStylye = {
      // background: sectionBgColorMode,
      borderRadius: "1rem",
      // border: "1px solid #ffffff30",
      padding: {base:"0px", md:"2rem"},
      boxShadow: "xl",
   };


	return (
		<>
			<Grid
				templateAreas={templateDesign}
            gap={spaceGap}
            margin={margin}
			   >
				<GridItem area="one" className="areaOneContainer"
               sx={sxGridItemStylye}
               background={sectionContainerBgColorMode}
               >
               <Flex gap={10} className="areaOneWrapper" flexDirection={{base:"column", lg:"row"}}>

                  {/* DigitalOne Studio Implementation */}
                  <Box className="area1LeftContainer"
                     padding={"2rem"}
                     border={"0px solid"}
                     borderColor={"primary.400"}
                     borderRadius={"1rem"}
                     backgroundImage={gradationBackgroundMode}
                     >
                        <SectionD1Implementation />
                  </Box>

                  {/* About D1 & Wavemaker Container */}
                  <Flex className="area1RightContainer"
                     flexDirection={"column"}
                     gap={"1rem"}
                     padding={"1rem"}
                     border={"0px solid"}
                     borderColor={"primary.400"}
                     borderRadius={"1rem"}
                     backgroundImage={gradationBackgroundMode}
                     >
                        {/* About DigitalOne */}
                        <Box className="aboutDigitalOne" sx={sxSectionBoxStyle}>
                           <SectionAboutD1 />
                        </Box>

                        {/* Wavemaker Studio */}
                        <Box className="WavemakerStudio" sx={sxSectionBoxStyle}>
                           <SectionWavemaker />
                        </Box>
                  </Flex>
               </Flex>

				</GridItem>

            {/* UXUISA Section Container */}
				<GridItem area="two"
               sx={sxGridItemStylye}
               background={sectionContainerBgColorMode}
               className="areaTwoContainer"
               >
                  <Box sx={sxSectionBoxStyle}
                     padding={"2rem"}
                     backgroundImage={gradationBackgroundMode}
                     >
                     <SectionUXUIStyleArchitecture />
                  </Box>
				</GridItem>

			</Grid>
		</>
	);
};

export default FISGridWrapper;
