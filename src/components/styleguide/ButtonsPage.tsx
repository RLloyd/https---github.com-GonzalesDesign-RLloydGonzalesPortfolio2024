import { Box, Flex, Grid, GridItem, Stack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FadeTitle, H1Header, H2Header, ImageSrcStyle, XSmallTextStyle } from "../../assets/styles/Styles";
import Layout from "../Layout";
import StyleguideSubMenus from "./StyleguideSubMenus";
import buttons from "./../../assets/images/buttons.png";
import buttonsLeftColumn from "./../../assets/images/styleguide/buttonsLeftColumn2.png";
/*--= FramerMotion =--*/
import { cubicBezier, motion, useAnimate } from "framer-motion";
/*--= Firestore =--*/
import { collection, limit, orderBy, query } from "firebase/firestore";
import ContentCollectionList from "src/assets/firebase/ContentCollectionList";
import useGetFirestoreCollection from "src/hooks/useGetFirestoreCollection";
import { db } from "src/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ContentSubCollectionList from "src/assets/firebase/ContentSubCollectionList";
import ModalTemplateBasic from "@components/modals/ModalTemplateBasic";

const sectionData = {
	title: "Buttons",
	subTitle: "Dashboard Card",
	leftColumn: {
		image: buttonsLeftColumn,
		text: "",
	},
	intro: {
		introTitle: "Buttons",
		introText: "Cards have become an integral part of user interface design, offering a visually appealing and organized way to present information. Whether used in websites, mobile applications, or digital platforms, cards provide a structured layout that enhances user experience and engagement.",
		image: buttons,
	},

	content: [
		{
			id: 1,
			subTitle: "Card Usage:",
			description: [
				{ id: "1.", titleList: "Consistency: ", list: "Maintain uniformity in sizing, spacing, and design elements across cards for a cohesive look." },
				{ id: "2.", titleList: "Clarity: ", list: "Keep content concise and visually appealing to convey information effectively." },
				{ id: "3.", titleList: "Visual Hierarchy: ", list: "Use size, color, and typography to prioritize content and guide user attention." },
				{ id: "4.", titleList: "Responsive Design: ", list: "Ensure cards adapt seamlessly to various screen sizes and devices for optimal user experience." },
				{ id: "5.", titleList: "Accessibility: ", list: "Make cards accessible with proper color contrast, readable text, and keyboard navigation support." },
				{ id: "6.", titleList: "Gestures and Interactions: ", list: "Design intuitive touch gestures and interactions for mobile devices." },
				{ id: "7.", titleList: "Loading and Performance: ", list: "Optimize card loading times and performance for a smooth user experience." },
				{ id: "8.", titleList: "Branding: ", list: "Incorporate brand elements consistently to reinforce brand identity." },
				{ id: "9.", titleList: "User Feedback: ", list: "Provide clear feedback for user interactions to enhance usability." },
				{ id: "10.", titleList: "Testing and Iteration: ", list: "Continuously test and iterate card designs based on user feedback for improvement." },
				{ id: "", titleList: "In conclusion, ", list: "Effectively utilizing cards in design projects requires adherence to principles such as consistency, clarity, accessibility, and responsiveness. By prioritizing user experience and incorporating branding elements consistently, designers can create visually appealing and user-friendly interfaces. Regular testing and iteration based on user feedback ensure continuous improvement, ultimately leading to a more refined and engaging digital experience for users." },
			],
		},
	],
	buttonLabel: "UXUISA",
	buttonLink: "https://www.businesswire.com/news/home/20181016005159/en/Zenmonics-Accepts-Investment-from-Fidelity-National-Information-Services-Inc.",
	linkTarget: "_blank",
};
const buttonsCodeBlock = `
// Installation:
npm install firebase
`

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

const brandContent = sectionData.content.map((content, index) => (
	// <li key={content.id}>
	<li key={index}>
		<H2Header fontWeight={"500"} margin={"3rem 0 .5rem"}>
			{content.subTitle}
		</H2Header>

		{/* <Text> */}
		{content.description?.map((item, index) => (
			<Text key={index} marginBottom={"1rem"}>
				<Stack direction={"row"}>
					<Text fontSize={{ base: "14px", md: "1.125rem" }} fontWeight={"700"}>
						{item.id}{" "}
					</Text>
					<Box>
						<Text as={"span"} fontSize={{ base: "14px", md: "1.125rem" }} fontWeight={"700"}>
							{item.titleList}
						</Text>
						<Text as={"span"} fontSize={{ base: "14px", md: "1.125rem" }}>
							{item.list}
						</Text>
					</Box>
				</Stack>
			</Text>
		))}
	</li>
));

const ButtonsPage = () => {
	const backgroundColor = useColorModeValue("primary.50", "primary.600");
	const { colorMode, toggleColorMode } = useColorMode();
	const BorderColorStyle = useColorModeValue("primary.100", "primary.300");
	const MotionFlex = motion(Flex);
	const easing = cubicBezier(0.35, 0.27, 0.3, 0.83);
	const easedProgress = easing(0.5);
   // Firebase:
	/*-----------------------------------------------------*/
	const docName = "Buttons";
	const [section] = useGetFirestoreCollection(docName);
	const subDocName = "Purposes";

   // const subCollectionPath = `${docName}/Intro/Descriptions`;
	// const subCollectionRef = collection(db, subCollectionPath);
   // const q = query(subCollectionRef, orderBy("numero", "asc"), limit(5));
   // console.log("q: ", q);
   // const [subDocs, subLoading, subError] = useCollectionData(q);

	return (
		<Layout>
			<StyleguideSubMenus />

         {section?.map((sect: any, index) => (

            <Grid
               templateAreas={gridTemplateDesignUno}
               key={index}
               marginTop={"2rem"}
               bg="primary.50"
               padding={"2rem 2rem 5rem"}
               borderRadius={"2xl"}
               background={backgroundColor}
               // border={"1px solid"}
            >
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
               <GridItem area="two"
                  // border={"1px solid"}
                  >
                  <MotionFlex
                     initial={{opacity:0, y:500}}
                     animate={{opacity:1, y:0}}
                     transition={{type:"spring", stiffness:80, damping:20}}
                     // transition={{type:"tween", duration:1, ease:"easeInOut"}}
                  >
                     <Box
                        padding={"1rem 0"}
                        margin={"1rem 1rem 0 0"}
                        borderRadius={"1rem"}
                        border={"1px solid"}
                        borderColor={"primary.300"}
                        >
                        <Box
                           className="buttons"
                           display={{ base: "none", lg: "flex" }}
                           flexDirection={"column"}
                           marginBottom={"5rem"}
                           gap={"70px"}
                           width={"320px"}
                           height={"490px"}
                           // border={"1px solid"}
                           >

                           <ImageSrcStyle
                              src={sectionData.leftColumn.image}
                              // src={colorMode === "light" ? GDLogoDark : GDLogoLight}
                              top={"1rem"}
                              // width={"320px"}
                              // height={"420px"}
                              objectFit={"contain"}
                              // border      =  {"1px solid"}
                           />
                        </Box>

                        <H2Header
                           fontSize={"1rem"}
                           fontWeight={"600"}
                           width={"100%"}
                           textAlign={"center"}
                           letterSpacing={"0"}
                           color={"primary.100"}
                           margin={"6rem 0 1rem"}
                           padding={"0 .5rem"}
                           // border={"1px solid"}
                           // borderTop={"1px solid"}
                           >
                           Check out the code buttons:
                        </H2Header>

                        {/* Modal: Buttons */}
                        <ModalTemplateBasic
                           title="Buttons Code Block"
                           buttonLabel="Buttons Code"
                           codeBlock={buttonsCodeBlock}
                           // image={aiCuteOwl3}
                           // imageStyle={sxImage}
                        />
                     </Box>
                  </MotionFlex>
               </GridItem>

               {/*--= Intro & Image =--*/}
               <GridItem
                  area="three"
                  fontSize={"1.1rem"}
                  textAlign={"left"}
                  padding={"2rem 2rem 0"}
                  borderLeft={"10px solid"}
                  borderColor={BorderColorStyle}
                  // border={"1px solid yellow"}
               >
                  {/*--= Intro description =--*/}
                  <MotionFlex
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ ease: easing, duration: 1, delay: 0 }}
                     flexDirection={"column"}
                     >
                        {/* <H2Header fontSize="32px">{sectionData.intro.introTitle}XXX</H2Header>
                        <H2Header fontSize="32px">{sect.title}</H2Header> */}
                        <ContentCollectionList collectionPath={`styleguideSection/${docName}/Intro`}/>
                        <ContentCollectionList collectionPath={`styleguideSection/${docName}/Intro/Descriptions/Desc`} />
                        {/* <ContentCollectionList collectionPath={`styleguideSection/${docName}/${subDocName}`}/>
                     <ContentCollectionList collectionPath={`styleguideSection/${docName}/${subDocName}/Descriptions/Description_Lists`} /> */}
                        {/* <Text fontSize={{ base: "16px", md: "20px" }}>{sect.descriptions}</Text> */}
                  </MotionFlex>

                  {/*--= Image animation =--*/}
                  <MotionFlex
                     className="imageContainer"
                     initial={{ opacity: 0, x: 800 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{
                        ease: easing,
                        duration: 0.5,
                        delay: 0.5,
                     }}
                     flexDirection={{ base: "column", md: "row" }}
                     justifyContent={"center"}
                     alignItems={"center"}
                     gap={5}
                     padding={"1rem"}
                     margin={"2rem 0 0"}
                     borderRadius={"xl"}
                     // background={"primary.400"}
                     height={"auto"}
                     border={"1px solid"}
                     borderColor={"primary.400"}
                  >
                     {/*--= Dashboard image =--*/}
                     <ImageSrcStyle
                        src={sectionData.intro.image}
                        objectFit={"contain"}
                        padding={"1rem"}
                        // border={"1px solid"}
                        // background={img.bgcolor}
                     />
                  </MotionFlex>
               </GridItem>

               {/*--= Brand content =--*/}
               <GridItem
                  area="four"
                  fontSize={"1.1rem"}
                  textAlign={"left"}
                  padding={"2rem"}
                  borderLeft={"1px solid"}
                  borderColor={BorderColorStyle}
                  // borderColor={"primary.100"}
               >
                  <MotionFlex
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ ease: easing, duration: 1, delay: 1 }}
                     flexDirection={"column"}
                     >
                     <Box pt={10}>
                        <ContentCollectionList collectionPath={`styleguideSection/${docName}/${subDocName}`}/>
                        <ContentSubCollectionList collectionPath={`styleguideSection/${docName}/${subDocName}/Descriptions/Description_Lists`} />
                     </Box>
                  </MotionFlex>

               </GridItem>
            </Grid>
         ))}

		</Layout>
	);
};

export default ButtonsPage;
