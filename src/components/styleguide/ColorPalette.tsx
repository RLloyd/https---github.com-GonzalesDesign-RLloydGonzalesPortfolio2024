import { Box, Flex, Grid, GridItem, Text, useColorModeValue } from "@chakra-ui/react";
import IntroCollectionList from "src/assets/firebase/IntroCollectionList";
import useGetFirestoreCollection from "src/hooks/useGetFirestoreCollection";
import { FadeTitle, H1Header, H2Header, ImageSrcStyle, XSmallTextStyle } from "../../assets/styles/Styles";
import Layout from "../Layout";
import styleguideHeroVertical from "./../../assets/images/styleguide/bgStyleguide-Vertical.png";
import StyleguideSubMenus from "./StyleguideSubMenus";

const gridTemplateDesignUno = {
	base: `
     "one one one one"
     "two two two two"
     "three three three three"
     "four four four four "
     "five five five five "
   `,
	lg: `
     "one    one     one"
     "two    three   three"
     "two    four    four"
   `,
};

const paletteData = {
	title: "Color Palette",
	subTitle: "Branding Colors",
	intro: {
		introTitle: "Why do we need color palette?",
		introText: "A color palette is a crucial element of a style guide for several reasons. It defines a brand's identity, ensures consistency across various platforms, evokes desired emotions, promotes accessibility, streamlines the design process, ensures cross-platform compatibility, and provides legal protection. In essence, it serves as the foundation for cohesive and impactful brand communication. Hilited are the base colors.",
	},
	content: [
		{
			id: 0,
			palette: "Primary Colors",
			colors: [
				{ id: 0, label: "primary.50", hex: "#f0fcff" },
				{ id: 1, label: "primary.100", hex: "#bad2d9" },
				{ id: 2, label: "primary.200", hex: "#85aab6" },
				{ id: 3, label: "primary.300", hex: "#508393" },
				{ id: 4, label: "primary.400", hex: "#0d5e73" },
				{ id: 5, label: "primary.500", hex: "#064e60" },
				{ id: 6, label: "primary.600", hex: "#07404e" },
				{ id: 7, label: "primary.700", hex: "#06323e" },
				{ id: 8, label: "primary.800", hex: "#05242d" },
				{ id: 9, label: "primary.900", hex: "#01181e" },
				{ id: 10, label: "primary.1000", hex: "#00090A" },
			],
		},
		{
			id: 1,
			palette: "Accent Colors",
			colors: [
				{ id: 0, label: "accent.50", hex: "#fff7f5" },
				{ id: 1, label: "accent.100", hex: "#ffd5c6" },
				{ id: 2, label: "accent.200", hex: "#ffb292" },
				{ id: 3, label: "accent.300", hex: "#ff8d53" },
				{ id: 4, label: "accent.400", hex: "#ff6a00" },
				{ id: 5, label: "accent.500", hex: "#eb6200" },
				{ id: 6, label: "accent.600", hex: "#b14c11" },
				{ id: 7, label: "accent.700", hex: "#7a3815" },
				{ id: 8, label: "accent.800", hex: "#462515" },
				{ id: 9, label: "accent.900", hex: "#15110f" },
			],
		},
		{
			id: 2,
			palette: "Success Colors",
			colors: [
				{ id: 0, label: "success.50",  hex: "#fafffa" },
				{ id: 1, label: "success.100", hex: "#cfe5ce" },
				{ id: 2, label: "success.200", hex: "#a7cca1" },
				{ id: 3, label: "success.300", hex: "#80b275" },
				{ id: 4, label: "success.400", hex: "#5b9849" },
				{ id: 5, label: "success.500", hex: "#347e16" },
				{ id: 6, label: "success.600", hex: "#286713" },
				{ id: 7, label: "success.700", hex: "#1d510f" },
				{ id: 8, label: "success.800", hex: "#133b0b" },
				{ id: 9, label: "success.900", hex: "#0c2702" },
			],
		},
		{
			id: 2,
			palette: "Warning Colors",
			colors: [
				{ id: 0, label: "warning.50",  hex: "#fffdfa" },
				{ id: 1, label: "warning.100", hex: "#fee9cb" },
				{ id: 2, label: "warning.200", hex: "#fed49e" },
				{ id: 3, label: "warning.300", hex: "#fdbe72" },
				{ id: 4, label: "warning.400", hex: "#fca646" },
				{ id: 5, label: "warning.500", hex: "#fb8d0e" },
				{ id: 6, label: "warning.600", hex: "#c3661b" },
				{ id: 7, label: "warning.700", hex: "#8b441a" },
				{ id: 8, label: "warning.800", hex: "#542713" },
				{ id: 9, label: "warning.900", hex: "#220d00" },
			],
		},
		{
			id: 3,
			palette: "Danger Colors",
			colors: [
				{ id: 0, label: "danger.50",  hex: "#fff5f5" },
				{ id: 1, label: "danger.100", hex: "#ffcfcd" },
				{ id: 2, label: "danger.200", hex: "#ffada6" },
				{ id: 3, label: "danger.300", hex: "#ff877a" },
				{ id: 4, label: "danger.400", hex: "#ff5644" },
				{ id: 5, label: "danger.500", hex: "#ff0000" },
				{ id: 6, label: "danger.600", hex: "#c80015" },
				{ id: 7, label: "danger.700", hex: "#910018" },
				{ id: 8, label: "danger.800", hex: "#5b0013" },
				{ id: 9, label: "danger.900", hex: "#2a0000" },
			],
		},
		{
			id: 4,
			palette: "Neutral Colors",
			colors: [
				{ id: 0, label: "white",       hex: "#ffffff" },
				{ id: 1, label: "neutral.50",  hex: "#dae9f1" },
				{ id: 2, label: "neutral.100", hex: "#c2d3db" },
				{ id: 3, label: "neutral.200", hex: "#abbdc4" },
				{ id: 4, label: "neutral.300", hex: "#94a7af" },
				{ id: 5, label: "neutral.400", hex: "#7d9299" },
				{ id: 6, label: "neutral.500", hex: "#677e85" },
				{ id: 7, label: "neutral.600", hex: "#526a70" },
				{ id: 8, label: "neutral.700", hex: "#3d565d" },
				{ id: 9, label: "neutral.800", hex: "#294449" },
				{ id: 10, label: "neutral.900", hex: "#153237" },
				{ id: 11, label: "black",      hex: "#000000" },
			],
		},
	],
};

const ColorPalette = () => {
   const backgroundColor = useColorModeValue("primary.50", "primary.600");
	const BorderColorStyle = useColorModeValue("primary.100", "primary.300");
	const ChipsBorderColorMode = useColorModeValue("primary.50", "primary.300");

   // Firebase:
   /*-----------------------------------------------------*/
   const docName = "ColorPalette";
   const [section] = useGetFirestoreCollection(docName);
   /*-----------------------------------------------------*/
   const paleta = paletteData.content.map((content, id) => (
      <Box key={id} display={"flex"} flexDirection={"column"}>
      <H2Header className={"palatteCategoryLabel"}
         fontWeight={"500"}
         // fontSize={"1.75rem"}
         margin={"3rem 0 .5rem"}
      >
         {content.palette}
      </H2Header>
      <Flex className="colorChipsContainer"
         flexWrap="wrap"
         justifyContent={"center"}
         gap={{base:"1rem", md:"1.5rem"}}
         >
         {content.colors.map((color, id) => (
            <Flex key={id}
               flexDirection={"column"}
               alignItems={"center"}
               // border={"1px solid"}
               borderRadius={".5rem"}
               // gap={2}
               >
               <Box
                  height={{base:"80px", md:"120px"}}
                  width={{base:"80px", md:"100px"}}
                  border      =  {content.colors.length  >= 11 && color.label === "neutral.500" || (color.label !== "neutral.500" && id == 5 )  ? "4px solid"  : "1px solid" }
                  borderColor =  {content.colors.length  <= 11 && id          === 5 || (color.label === "neutral.500" && id !== 5)              ? {ChipsBorderColorMode}      : "#508393bd" }
                  background={color.label}
                  >
               </Box>
               <Text fontSize={{base:"12px", md:"1rem"}}>{color.label}</Text>
               <Text fontSize={{base:"12px", md:"1rem"}}>{color.hex}</Text>
            </Flex>
         ))}

      </Flex>
   </Box>
	));

	return (
		<Layout>
			<StyleguideSubMenus />

         {section?.map((sect:any, index:any) => (

            <Grid className="templateAreaContainer"
               templateAreas={gridTemplateDesignUno}
               // key={sect.id}
               key={index}
               marginTop={"2rem"}
               bg="primary.50"
               padding={{base:"2rem 1rem 5rem", lg:"2rem 2rem 5rem"}}
               borderRadius={"2xl"}
               background={backgroundColor}
               overflow={"hidden"}
               // border={"1px solid"}
            >
               <GridItem area="one" className="titleAreaWrapper"
                  // width={"90%"}
                  borderBottom={"1px solid"}
                  borderColor={BorderColorStyle}
               >
                  {/* Page title */}
                  <FadeTitle>
                     <Flex flexDirection={"column"}
                        height={"80px"}
                        // border={"1px solid"}
                        >
                        <H1Header color={"accent.500"} textAlign={"left"}>
                           {sect.title}
                        </H1Header>

                        <XSmallTextStyle>
                           {sect.subTitle}
                        </XSmallTextStyle>
                     </Flex>
                  </FadeTitle>

               </GridItem>

               {/* Left column area */}
               <GridItem area="two" className="leftColumn"
                  display={{base:"none", lg:"flex"}}
                  justifyContent={"center"}
                  margin={".5rem .5rem 0 0"}
                  // marginBottom={"5rem"}
                  // border={"1px solid"}
                  >
                  <ImageSrcStyle
                     src={styleguideHeroVertical}
                     // width={"320px"}
                     height={"fit-content"}
                     objectFit={"contain"}
                     borderRadius={"12px"}
                     // border={"1px solid magenta"}
                  />
               </GridItem>

               <GridItem area="three" className="bodyAreaContainer"
                  fontSize={"1.1rem"}
                  textAlign={"left"}
                  padding={{base:"1rem", md:"2rem"}}
                  borderLeft={"10px solid"}
                  borderColor={BorderColorStyle}
               >
                  {/* <H2Header fontSize="32px">{paletteData.intro.introTitle}</H2Header>
                  <Text fontSize={{base:"1rem", md:"20px"}}>{paletteData.intro.introText}</Text> */}
                  {/* <IntroCollectionList collectionPath={`styleguideSection/ColorPalette/children`} /> */}

                  <IntroCollectionList collectionPath={`styleguideSection/${docName}/children`} />

               </GridItem>

               <GridItem area="four" className="contentArea"
                  borderLeft={"1px solid"}
                  borderColor={BorderColorStyle}
                  paddingBottom={"2rem"}
                  paddingLeft={{base:"0rem", lg:"1.5rem"}}
                  // border={"1px solid"}
                  >
                  {/* Paleta */}
                  <Box className="paletaContainer">
                     {paleta}
                  </Box>
               </GridItem>
            </Grid>
         ))}
		</Layout>
	);
};

export default ColorPalette;
