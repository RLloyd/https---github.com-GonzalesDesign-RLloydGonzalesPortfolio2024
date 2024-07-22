import { Box, Flex, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import SectionD1Implementation from "../fisD1-components/SectionD1Implementation";
import MyRole from "./MyRole";
import SectionAboutD1 from "../fisD1-components/SectionAboutD1";
import SectionUXUIStyleArchitecture from "../fisD1-components/SectionUXUIStyleArchitecture";
import SectionWavemaker from "../fisD1-components/SectionWavemaker";


type Props = {
	templateDesign: {} | string
   spaceGap?: string
   margin?: string
};


const sxGridItemStylye = {
   // background: sectionBgColorMode,
   borderRadius: "1rem",
   border: "1px solid #ffffff30",
   padding: "2rem",
   boxShadow: "xl",
   // bg:"primary.100",
   minWidth:"0px",
   width: "100%",
};

const ZenmonicsGridWrapper = ({
   templateDesign,
   spaceGap,
   margin,
   }: Props) => {

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
               <Flex
                  gap={10}
                  className="areaOneWrapper"
                  flexDirection={{base:"column", lg:"row"}}>

                  {/* Sunbird My Role */}
                  <Box className="area1LeftContainer"
                     padding={"2rem"}
                     border={"0px solid"}
                     borderColor={"primary.400"}
                     borderRadius={"1rem"}
                     backgroundImage={gradationBackgroundMode}
                     >
                        <MyRole />
                  </Box>




               </Flex>

				</GridItem>

            {/* UXUISA Section Container */}
				{/* <GridItem area="two"
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
				</GridItem> */}

			</Grid>
		</>
	);
};
//    const sectionContainerBgColorMode = useColorModeValue("primary.50", "primary.700");
//    const gradationBackgroundMode = useColorModeValue(
//       "linear-gradient(to bottom, primary.50, brand.100, primary.50)",
//       "linear-gradient(to bottom, primary.600, primary.900)");

//   return (
//    <Grid templateAreas={gridTemplateDesignUno}  gap={spaceGap} margin={margin}>
//       <GridItem area="one" className="areaOneContainer"
//          sx={sxGridItemStylye}
//          background={sectionContainerBgColorMode}>

//          {/* DigitalOne Studio Implementation */}
//          <Box className="area1LeftContainer"
//             padding={"2rem"}
//             border={"0px solid"}
//             borderColor={"primary.400"}
//             borderRadius={"1rem"}
//             // background={"red"}
//             backgroundImage={gradationBackgroundMode}>
//             <MyRole />
//          </Box>

//       </GridItem>



//       <GridItem area="two"    bg="primary.200" minWidth={"0px"}>
//          {/* DigitalOne Studio Implementation */}
//          <Box className="area1LeftContainer"
//             padding={"2rem"}
//             border={"0px solid"}
//             borderColor={"primary.400"}
//             borderRadius={"1rem"}
//             // background={"red"}
//             backgroundImage={gradationBackgroundMode}
//             >
//                {/* <SectionD1Implementation /> */}
//                <MyRole />
//          </Box>
//       </GridItem>


//       <GridItem area="three"  bg="primary.300" minWidth={"0px"}>
//          {/* DigitalOne Studio Implementation */}
//          <Box className="area1LeftContainer"
//             padding={"2rem"}
//             border={"0px solid"}
//             borderColor={"primary.400"}
//             borderRadius={"1rem"}
//             // background={"red"}
//             backgroundImage={gradationBackgroundMode}
//             ><SectionD1Implementation />
//          </Box>
//       </GridItem>


//       <GridItem area="four"   bg="primary.400" minWidth={"0px"}>Uno</GridItem>
//       <GridItem area="five"   bg="primary.500" minWidth={"0px"}>Uno</GridItem>
//    </Grid>
//   )
// }

export default ZenmonicsGridWrapper