import { Grid, GridItem, Text } from "@chakra-ui/react";
import imgBg from "@images/styleguide/Carousel/carousel-filipinas/carousel-filipinas-06.webp";
import { H1Header, H2Header, ImageBackgroundStyle } from "@styles/Styles";
import { color } from "framer-motion";

/*--= Grid Layout =--*/
const gridTemplateDesignUno = {
	base: `
      "one one"
      "three four"
      "two two"
   `,
	lg: `
      "one one two two"
      "one one two two"
      "three four two two"
   `,
};

const sxGridLayout = {
	gap: ".6rem",
	marginBottom: "2rem",
	position: "relative",
	bg: "primary.50",
	top: "0px",
	padding: ".6rem",
	// margin: "1rem 0 0 1rem",
	borderRadius: "1rem",
	// top            :  designFlat ? "40px" : "0px",
   boxShadow: "xl",
	border: "1px solid",
   borderColor: "neutral.100",

};
const sxAreaOne = {
   // ImageBackgroundStyle
	padding: "0rem",
   height: "200px",
   // width: "400px",
	bg: "primary.500",
   overflow:"hidden",
	borderRadius: "1rem",
	border: "1px solid",
};
const sxAreaTwo = {
   display: "flex",
   flexDirection: "column",
   alignItems: "flex-start",
	padding: "1rem 3rem",
	height: "auto",
   // width: "auto",
   textAlign: "left",
   color: "primary.50",
	bg: "primary.500",
	border: "1px solid",
	borderRadius: "1rem",
};
const sxAreaThree = {
   padding: "1rem",
	height: "auto",
   color: "primary.50",
	bg: "primary.300",
	border: "1px solid",
	borderRadius: "1rem",
};
const sxAreaFour = {
   padding: "1rem",
	height: "auto",
   color: "primary.50",
	bg: "primary.700",
	border: "1px solid",
	borderRadius: "1rem",
};

const ParallaxCinco = () => {
	return (
		<>
			{/* Grid Layout */}
			<Grid className="gridLayoutContainer" templateAreas={gridTemplateDesignUno} sx={sxGridLayout}>
				{/* Grid Items */}
				<GridItem area="one" className="areaOne" sx={sxAreaOne}>
               <ImageBackgroundStyle
                  backgroundImage={imgBg}
                  backgroundPosition={"0px -140px"}
                  height="300px"
               />
				</GridItem>
				<GridItem area="two" className="areaTwo" sx={sxAreaTwo}>
					<Text fontSize={".8rem"} textTransform={"uppercase"}>Grid Layout</Text>
					<H1Header fontWeight={"500"} letterSpacing={"-1px"} color="primary.50">Component</H1Header>
					<H2Header fontWeight={"light"} textAlign={"left"} color="primary.50">The watch that changes lives</H2Header>
               <ul>
                  <li>Perform a medical-grade electrodiagram</li>
                  <li>Perform a medical-grade electrodiagram</li>
                  <li>Perform a medical-grade electrodiagram</li>
               </ul>
				</GridItem>
				<GridItem area="three" className="areaThree" sx={sxAreaThree}>
               <Text fontSize={".8rem"} textTransform={"uppercase"}>Watches</Text>
					<H1Header fontSize={"1.5rem"} fontWeight={"500"} color="primary.50" letterSpacing={"-1px"}>ScanWatch2</H1Header>
               <ul>
                  <li>Perform a medical-grade electrodiagram</li>
               </ul>
            </GridItem>
				<GridItem area="four" className="areaFour" sx={sxAreaFour}>
               <Text fontSize={".8rem"} textTransform={"uppercase"}>Watches</Text>
					<H1Header fontSize={"1.5rem"} fontWeight={"500"} color="primary.50" letterSpacing={"-1px"}>
                  ScanWatch2
               </H1Header>
               <ul>
                  <li>Perform a medical-grade electrodiagram</li>
               </ul>
            </GridItem>
			</Grid>
		</>
	);
};

export default ParallaxCinco;
