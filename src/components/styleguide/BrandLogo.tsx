import { Box, Flex, Grid, GridItem, Stack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FadeTitle, H1Header, H2Header, ImageSrcStyle, XSmallTextStyle } from "../../assets/styles/Styles";
import Layout from "../Layout";
import GDLogoDark from "./../../assets/images/GD-Logo-2024-black.png";
import GDLogoGradient from "./../../assets/images/GD-Logo-2024-gradient.png";
import GDLogoLight from "./../../assets/images/GD-Logo-2024-white.png";
import StyleguideSubMenus from "./StyleguideSubMenus";
// Firestore
import { collection, limit, orderBy, query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ContentCollectionList from "src/assets/firebase/ContentCollectionList";
import IntroCollectionList from "src/assets/firebase/IntroCollectionList";
import { db } from "src/firebase";
import useGetFirestoreCollection from "src/hooks/useGetFirestoreCollection";
import ContentSubCollectionList from "src/assets/firebase/ContentSubCollectionList";

const sectionData = {
	title: "Brand Logo",
	subTitle: "Your Visual Identity",
	intro: {
		introTitle: "What is a Branding Logo?",
		introText: "A branding logo is a unique symbol, design, or emblem that represents a company, product, service, or organization. It is typically accompanied by a name, slogan, or tagline, and it plays a crucial role in creating brand recognition and differentiation in the market.",
		images: [
			{ image: GDLogoLight, bgcolor: "primary.900" },
			{ image: GDLogoDark, bgcolor: "primary.50" },
			{ image: GDLogoGradient, bgcolor: "transparent" },

			// GDLogoDark, GDLogoGradient
		],
	},

	content: [
		{
			id: 1,
			subTitle: "Importance of branding logos:",
			description: [
				{ id: "1.", titleList: "Brand Identity: ", list: "Logos are the cornerstone of a brand's visual identity. They provide a memorable visual representation that helps consumers recognize and connect with the brand." },
				{ id: "2.", titleList: "Differentiation: ", list: "In a crowded marketplace, a distinct logo helps a brand stand out from competitors. It communicates the brand's unique selling propositions and sets it apart in the minds of consumers." },
				{ id: "3.", titleList: "Trust and Credibility: ", list: "A well-designed logo conveys professionalism and reliability. It can evoke trust and confidence in the brand, reassuring consumers about the quality of its products or services." },
				{ id: "4.", titleList: "Memorability: ", list: "Logos are designed to be memorable, making it easier for consumers to recall the brand when making purchasing decisions. A strong logo stays in the minds of consumers, even after they have interacted with the brand." },
				{ id: "5.", titleList: "Consistency: ", list: "Logos provide consistency across various marketing channels and touchpoints. Whether it's on a product package, website, or advertisement, a consistent logo reinforces brand recognition and builds brand equity over time." },
				{ id: "6.", titleList: "Emotional Connection: ", list: "Logos can evoke emotions and create a personal connection with consumers. Through color, typography, and imagery, a logo can convey the brand's values, personality, and aspirations, resonating with its target audience on an emotional level." },
			],
		},
		{
			id: 2,
			subTitle: "Elements of effective branding logos:",
			description: [
				{ id: "1.", titleList: "Simplicity: ", list: "A successful logo is simple yet distinctive. It should be easily recognizable and memorable, even when scaled down or reproduced in different contexts." },
				{ id: "2.", titleList: "Relevance: ", list: "The design of a logo should reflect the brand's identity, values, and offerings. It should resonate with the target audience and communicate the brand's message effectively." },
				{ id: "3.", titleList: "Versatility: ", list: "A good logo is versatile and adaptable across various mediums and applications. It should look equally compelling whether it's displayed on a billboard, website, or business card." },
				{ id: "4.", titleList: "Timelessness: ", list: "While trends come and go, a timeless logo withstands the test of time. It avoids being overly trendy and maintains its relevance and appeal for years to come." },
				{ id: "5.", titleList: "Originality: ", list: "A strong logo is original and distinctive, setting the brand apart from competitors. It should avoid resembling other logos to prevent confusion and ensure uniqueness." },
				{ id: "6.", titleList: "Scalability: ", list: "Logos should be designed with scalability in mind, ensuring that they remain clear and legible across different sizes and formats." },
			],
		},
	],
	// image: GDLogoLight,
	// image: blackoDark,
	// imageSize: "420px",
	buttonLabel: "UXUISA",
	buttonLink: "https://www.businesswire.com/news/home/20181016005159/en/Zenmonics-Accepts-Investment-from-Fidelity-National-Information-Services-Inc.",
	linkTarget: "_blank",
};

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

const BrandLogo = () => {
	const backgroundColor = useColorModeValue("primary.50", "primary.600");
	const { colorMode, toggleColorMode } = useColorMode();
	const BorderColorStyle = useColorModeValue("primary.100", "primary.300");

	const brandImages = sectionData.intro.images.map((img, index) => (
		<ImageSrcStyle
			key={index}
			src={img.image}
			// top={"4rem"}
			width={{ base: "200px", md: "125px", xl: "180px" }}
			// height={"80%"}
			objectFit={"contain"}
			margin={"0"}
			padding={"1rem"}
			// display="inline"
			// flexDirection={"row"}
			border={"1px solid"}
			background={img.bgcolor}
		/>
	));

	// Firebase:
	/*-----------------------------------------------------*/
	const docName = "BrandLogo";
	const [section] = useGetFirestoreCollection(docName);

   // const collectionPath = `styleguideSection`;
	// const collectionRef = collection(db, collectionPath);
	// const [section, loading, error] = useCollectionData(collectionRef);

   // const subCollectionPath = "BrandLogo/Experience/children";
	// const subCollectionRef = collection(db, subCollectionPath);
   // const q = query(subCollectionRef, orderBy("id", "asc"), limit(3));
	// const [subDocs, subLoading, subError] = useCollectionData(q);

	/*-----------------------------------------------------*/
	// const brandContent = sectionData.content.map((content, index) => (
	// <li key={index}>

	const brandContent = section?.map((content: any) => (
		<li key={content.id}>
			<H2Header
				fontWeight={"500"}
				// fontSize={"1.75rem"}
				margin={"3rem 0 .5rem"}
			>
				{content.subTitle}XoXoX
			</H2Header>

			{/* <Text> */}
			{content.description?.map((item: any, index: any) => (
				<Text key={index} marginBottom={"1rem"}>
					<Stack direction={"row"}>
						<Text fontWeight={"700"}>{item.id} </Text>
						<Box>
							<Text as={"span"} fontWeight={"700"}>
								{item.titleList}xxx
							</Text>
							<Text as={"span"}>{item.list}</Text>
						</Box>
					</Stack>
				</Text>
			))}
		</li>
	));

	return (
		<>
			<Layout>
				<StyleguideSubMenus />

            {section?.map((sect: any, index) => (

               <Grid
                  key={index}
                  templateAreas={gridTemplateDesignUno}
                  marginTop={"2rem"}
                  bg="primary.50"
                  padding={"2rem 2rem 5rem"}
                  borderRadius={"2xl"}
                  background={backgroundColor}
                  // border={"1px solid"}
                  >
                  {/* Title area */}
                  <GridItem
                     area="one"
                     // width={"200px"}
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
                  <GridItem area="two">
                     <Box
                        className="brandLogo"
                        display={{ base: "none", lg: "flex" }}
                        flexDirection={"column"}
                        marginBottom={"5rem"}
                        gap={"70px"}
                        // justifyContent={"center"}
                        // alignItems={"flex-start"}
                        // border={"1px solid"}
                        >
                        <ImageSrcStyle
                           // src={sectionData.image}
                           src={colorMode === "light" ? GDLogoDark : GDLogoLight}
                           position="relative"
                           top={"4rem"}
                           width={"320px"}
                           height={"240px"}
                           objectFit={"contain"}
                           objectPosition="center"
                           // border={"1px solid"}
                        />
                        <H1Header
                           fontSize={"2rem"}
                           fontWeight={"600"}
                           width={"100%"}
                           textAlign={"center"}
                           letterSpacing={"0"}
                           // border={"1px solid"}
                        >
                           GonzalesDesign
                        </H1Header>
                     </Box>
                  </GridItem>

                  {/* Main column: Intro area */}
                  <GridItem
                     area="three"
                     fontSize={"1.1rem"}
                     textAlign={"left"}
                     padding={"2rem 2rem 0"}
                     borderLeft={"10px solid"}
                     borderColor={BorderColorStyle}
                     // border={"1px solid"}
                     // borderColor={"red"}
                  >
                     <ContentCollectionList collectionPath={`styleguideSection/${docName}/Intro`}/>
                     <ContentCollectionList collectionPath={`styleguideSection/${docName}/Intro/Descriptions/Desc`} />
                     {/* <IntroCollectionList collectionPath={`styleguideSection/${docName}/children`} /> */}
                     {/* <IntroCollectionList collectionPath={`styleguideSection/${docName}/children/Content/childfren_2`} /> */}

                     <Box className="logoImagesContainer"
                        display={"flex"}
                        flexDirection={{ base: "column", md: "row" }}
                        justifyContent={"center"}
                        alignItems={"center"} gap={10}
                        padding={"1rem"} margin={"2rem 0 0"}
                        borderRadius={"xl"}
                        background={"primary.400"}
                        height={"auto"}
                        >
                        {brandImages}
                     </Box>
                  </GridItem>

                  <GridItem
                     area="four"
                     fontSize={"1.1rem"}
                     textAlign={"left"}
                     padding={"2rem"}
                     borderLeft={"1px solid"}
                     borderColor={BorderColorStyle}
                     // borderColor={"primary.100"}
                     >
                     {/* Content */}
                     <Box pt={10}>
                        CONTENT
                        <ContentCollectionList collectionPath={`styleguideSection/${docName}/Importance`}/>
                        {/* <ContentCollectionList collectionPath={`styleguideSection/${docName}/children/Content/children`}/> */}
                        <ContentSubCollectionList collectionPath={`styleguideSection/${docName}/Importance/Descriptions/Description_Lists`} />
                     </Box>

                     <Box pt={"2rem"}>
                        <ContentCollectionList collectionPath={`styleguideSection/${docName}/Elements`} />
                        <ContentSubCollectionList collectionPath={`styleguideSection/${docName}/Elements/Descriptions/Description_Lists`} />
                     </Box>

                  </GridItem>

               </Grid>

            ))}

			</Layout>
		</>
	);
};

export default BrandLogo;
