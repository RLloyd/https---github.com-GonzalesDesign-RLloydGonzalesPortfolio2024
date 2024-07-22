import { Box, Flex, Grid, GridItem, Text, useColorModeValue } from "@chakra-ui/react";
import { FadeTitle, H1Header, H2Header, H3Header, H4Header, PrimaryTextStyle, XSmallTextStyle } from "../../assets/styles/Styles";
import Layout from "../Layout";
import StyleguideSubMenus from "./StyleguideSubMenus";

// Firebase data
import IntroCollectionList from "src/assets/firebase/IntroCollectionList";
import useGetFirestoreCollection from "src/hooks/useGetFirestoreCollection";
import ContentCollectionList from "src/assets/firebase/ContentCollectionList";

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

const Typography = () => {
	const backgroundColor = useColorModeValue("primary.50", "primary.600");
	const BorderColorStyle = useColorModeValue("primary.100", "primary.300");

   // Firebase:
   /*-----------------------------------------------------*/
   const docName = "Typography";
   const [section] = useGetFirestoreCollection(docName);
   /*-----------------------------------------------------*/

	return (
		<Layout>
			<StyleguideSubMenus />

			{section?.map((sect: any, index) => (

				<Grid
					templateAreas={gridTemplateDesignUno}
					key={index}
               // key={Math.random()}
					marginTop={"2rem"}
					bg="primary.50"
					padding={"2rem 2rem 5rem"}
					borderRadius={"2xl"}
					background={backgroundColor}
					overflow={"hidden"}
					// border={"1px solid"}
            >

               {/* Page title */}
					<GridItem area="one"
						className="titleAreaWrapper"
						// width={"90%"}
						borderBottom={"1px solid"}
						borderColor={BorderColorStyle}
					>
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
					<GridItem area="two" className="leftColumn" display={{ base: "none", lg: "flex" }} justifyContent={"center"} marginBottom={"5rem"}>
						<H1Header fontSize={"12rem"} fontWeight={"700"} textAlign={"left"} position={"relative"} top={"4rem"}>
							Aa
						</H1Header>
					</GridItem>

               {/* Main column: Intro */}
					<GridItem area="three"
                  // key={sect.intro.id}
						className="bodyArea"
						width={{ base: "300px", md: "90%" }}
						textAlign={"left"}
						padding={{ base: "2rem 0rem 5rem 1rem", lg: "2rem 2rem 5rem" }}
						// paddingLeft={"1rem"}
						// paddingBottom={"5rem"}
						// border={"1px solid"}
						borderLeft={"10px solid"}
						borderColor={BorderColorStyle}
					>
                  {/* {sect.subcollectionRef.map((subSect: any) => ( */}
                  {/* {sect.intro.map((subSect: any) => ( */}
                     <Box
                        fontSize={"20px"}
                        textAlign={"left"}
                        padding={"0rem 0rem 2rem"}
                        // borderLeft={"10px solid"}
                        // borderColor={BorderColorStyle}
                     >
                        <ContentCollectionList collectionPath={`styleguideSection/${docName}/Intro`}/>
                        <ContentCollectionList collectionPath={`styleguideSection/${docName}/Intro/Descriptions/Desc`} />
                        {/* <IntroCollectionList collectionPath={`styleguideSection/${docName}/children`} /> */}
                        {/* {sect.subTitle} */}
                        {/* <IntroCollectionList collectionPath={`styleguideSection/Typography/children`} /> */}
                        {/* {sect.Intro.subTitle} */}
                        {/* {subSect.intro_text} */}
                        {/* {sect.sub_title} */}
                        {/* {section.map((sect: any) => ( */}
                        {/* {`sect/${sect.intro}/intro_text`} */}
                        {/* {sect.intro.intro_text} */}
                        {/* {sect.intro((intro:any) => (intro.intro_text))} */}
                        {/* Typography is an essential component of a style guide as it ensures consistency, reinforces brand identity, enhances readability and accessibility, establishes hierarchy and emphasis, maintains coherence across platforms, conveys professionalism, and allows for flexibility and scalability in design. */}
                     </Box>
                  {/* ))} */}

						<H2Header color={"accent.500"} fontSize={"3rem"} fontWeight={"700"} letterSpacing={-2} top={"4rem"}>
							Open Sans
						</H2Header>

						<H2Header fontSize={"2.5rem"} fontWeight={"500"}>
							ABCDEFGHIJKLMNOPQRSTUVWXYZ
							<Text>abcdefghijklmnopqrstuvwxyz</Text>
							<Text>1234567890</Text>
						</H2Header>
					</GridItem>

					<GridItem
						area="four"
						className="sampleArea"
						// border={"1px solid"}
						borderLeft={"1px solid"}
						borderColor={BorderColorStyle}
						paddingBottom={"2rem"}
						paddingLeft={"2rem"}
					>
						{/* Header Light */}
						<H1Header
							// fontSize={"2.5rem"}
							fontWeight={"100"}
							textAlign={"left"}
							// paddingLeft={"2rem"}
							marginTop={"2rem"}
						>
							H1: Page Header Light
						</H1Header>
						<Text
							textAlign={"left"}
							// paddingLeft={"2rem"}
						>
							Default = size: 2.25rem • weight: 100
						</Text>

						{/* Header Regular */}
						<H1Header
							// fontSize={"2.5rem"}
							fontWeight={"400"}
							textAlign={"left"}
							// paddingLeft={"2rem"}
							marginTop={"2rem"}
						>
							H1: Page Header Regular
						</H1Header>
						<Text
							textAlign={"left"}
							// paddingLeft={"2rem"}
						>
							Default = size: 2.25rem • weight: 400
						</Text>

						{/* Header Medium */}
						<H1Header
							// fontSize={"2.5rem"}
							fontWeight={"600"}
							textAlign={"left"}
							// paddingLeft={"2rem"}
							marginTop={"2rem"}
						>
							H1: Page Header Medium
						</H1Header>
						<Text
							textAlign={"left"}
							// paddingLeft={"2rem"}
						>
							size: 2.25rem • weight: 600
						</Text>

						{/* Header Bold */}
						<H1Header
							// fontSize={"2.5rem"}
							fontWeight={"700"}
							textAlign={"left"}
							// paddingLeft={"2rem"}
							marginTop={"2rem"}
						>
							H1: Page Header Bold
						</H1Header>
						<Text
							textAlign={"left"}
							// paddingLeft={"2rem"}
						>
							size: 2.25rem • weight: 700
						</Text>

						{/* Header Black */}
						<H1Header
							// fontSize={"2.5rem"}
							fontWeight={"900"}
							textAlign={"left"}
							// paddingLeft={"2rem"}
							marginTop={"2rem"}
						>
							H1: Page Header Black
						</H1Header>
						<Text
							textAlign={"left"}
							// paddingLeft={"2rem"}
						>
							size: 2.25rem • weight: 900
						</Text>

						{/* H2 Regular */}
						<H2Header
							// fontSize={"1.875rem"}
							fontWeight={"700"}
							textAlign={"left"}
							// paddingLeft =  {"2rem"}
							margin={"2rem 0 0"}
						>
							H2: Page Header Bold
						</H2Header>
						<Text
							textAlign={"left"}
							// paddingLeft={"2rem"}
						>
							size: 1.75rem • weight: 400
						</Text>

						{/* H3 Regular */}
						<H3Header
							// fontSize={"1.875rem"}
							fontWeight={"700"}
							textAlign={"left"}
							// paddingLeft =  {"2rem"}
							margin={"2rem 0 0"}
						>
							H3: Page Header Bold
						</H3Header>
						<Text
							textAlign={"left"}
							// paddingLeft={"2rem"}
						>
							size: 1.5rem • weight: 400
						</Text>

						{/* H4 Regular */}
						<H4Header
							// fontSize={"1.875rem"}
							fontWeight={"700"}
							textAlign={"left"}
							// paddingLeft={"2rem"}
							margin={"2rem 0 0"}
						>
							H4: Page Header Bold
						</H4Header>
						<Text
							textAlign={"left"}
							// paddingLeft={"2rem"}
						>
							size: 1.25rem • weight: 400
						</Text>

						{/* Body Regular */}
						<PrimaryTextStyle
							// fontSize={"1.875rem"}
							fontWeight={"400"}
							textAlign={"left"}
							// paddingLeft={"2rem"}
							margin={"2rem 0 0"}
						>
							Paragraph: Regular
						</PrimaryTextStyle>
						<Text
							textAlign={"left"}
							// paddingLeft={"2rem"}
						>
							size: 1rem • weight: 400
						</Text>
					</GridItem>
					{/* <GridItem area="five"   bg="primary.500">two</GridItem> */}
				</Grid>
			))}

			{/* <Box>
         <H2Header>Header & Content Font</H2Header>
         <Text>Typography used for headers & body</Text>
      </Box>

      <Flex>
         // Left column
         <Box> Aa </Box>
      </Flex> */}
		</Layout>
	);
};

export default Typography;
