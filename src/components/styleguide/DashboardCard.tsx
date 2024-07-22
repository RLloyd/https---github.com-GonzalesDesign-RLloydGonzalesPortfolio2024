import { Box, Flex, Grid, GridItem, Stack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FadeTitle, H1Header, H2Header, ImageSrcStyle, XSmallTextStyle } from "../../assets/styles/Styles";
import Layout from "../Layout";
import StyleguideSubMenus from "./StyleguideSubMenus";
import dashboardCard from "./../../assets/images/styleguide/dashboardCard.png";
import sunbirdCardVertical from "./../../assets/images/styleguide/sunbirdCard-Vertical.png";
/*--= FramerMotion =--*/
import { cubicBezier, motion, useAnimate } from "framer-motion";

const sectionData = {
	title: "Card",
	subTitle: "Dashboard Card",
	leftColumn: {
		image: sunbirdCardVertical,
		text: "",
	},
	intro: {
		introTitle: "Card",
		introText: "Cards have become an integral part of user interface design, offering a visually appealing and organized way to present information. Whether used in websites, mobile applications, or digital platforms, cards provide a structured layout that enhances user experience and engagement.",
		image: dashboardCard,
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
			<Box key={index} marginBottom={"1rem"}>
				<Stack direction={"row"}>
					<Box fontSize={{ base: "14px", md: "1.125rem" }} fontWeight={"700"}>
						{item.id}{" "}
					</Box>
					<Box>
						<Box as={"span"} fontSize={{ base: "14px", md: "1.125rem" }} fontWeight={"700"}>
							{item.titleList}
						</Box>
						<Box as={"span"} fontSize={{ base: "14px", md: "1.125rem" }}>
							{item.list}
						</Box>
					</Box>
				</Stack>
			</Box>
		))}
	</li>
));

const DashboardCard = () => {
	const backgroundColor = useColorModeValue("primary.50", "primary.600");
	const { colorMode, toggleColorMode } = useColorMode();
	const BorderColorStyle = useColorModeValue("primary.100", "primary.300");
	const MotionFlex = motion(Flex);
	const easing = cubicBezier(0.35, 0.27, 0.3, 0.83);
	const easedProgress = easing(0.5);

	return (
		<Layout>
			<StyleguideSubMenus />

			<Grid
				templateAreas={gridTemplateDesignUno}
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
					{/* <H1Header
							color={"accent.500"}
							textAlign={"left"}
						>
							{sectionData.title}
						</H1Header>

						<XSmallTextStyle>{sectionData.subTitle}</XSmallTextStyle> */}
					<FadeTitle>
						<Flex flexDirection={"column"} height={"80px"}>
							<H1Header color={"accent.500"} textAlign={"left"}>
								{sectionData.title}
							</H1Header>

							<XSmallTextStyle>{sectionData.subTitle}</XSmallTextStyle>
						</Flex>
					</FadeTitle>
				</GridItem>

				{/* Left column area */}
				<GridItem area="two">
					<Box
						className="dashboardCard"
						display={{ base: "none", lg: "flex" }}
						flexDirection={"column"}
						marginBottom={"5rem"}
						gap={"70px"}
						// border={"1px solid"}
					>
						<MotionFlex
							initial={{ opacity: 0, y: 500 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ type: "spring", stiffness: 80, damping: 20 }}
							// transition={{type:"tween", duration:1, ease:"easeInOut"}}
						>
							<ImageSrcStyle
								src={sectionData.leftColumn.image}
								// src={colorMode === "light" ? GDLogoDark : GDLogoLight}
								top={"1rem"}
								width={"320px"}
								height={"420px"}
								objectFit={"contain"}
								// border      =  {"1px solid"}
							/>
						</MotionFlex>
					</Box>
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
					<MotionFlex initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: easing, duration: 1, delay: 0 }} flexDirection={"column"}>
						<H2Header fontSize="32px">{sectionData.intro.introTitle}</H2Header>
						<Box fontSize={{ base: "16px", md: "20px" }}>{sectionData.intro.introText}</Box>
					</MotionFlex>

					{/*--= Image animation =--*/}
					<MotionFlex
						className="imageContainer"
						initial={{ opacity: 0.0, x: 800 }}
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
						background={"primary.400"}
						height={"auto"}
						// border={"1px solid"}
					>
						{/*--= Dashboard image =--*/}
						<ImageSrcStyle
							// key={index}
							src={sectionData.intro.image}
							// top={"4rem"}
							// width={{base:"200px", md:"125px", xl:"180px"}}
							// height={"80%"}
							objectFit={"contain"}
							// margin={"0 2rem 0 0"}
							padding={"1rem"}
							// display="inline"
							// flexDirection={"row"}
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
                  initial={{ opacity: 0, y: 500 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: easing, duration: 0.5, delay: 0.75 }}
                  >
						<ul>
                     {brandContent}
                  </ul>
					</MotionFlex>

					{/* {sectionData.description.map((text, index) => (
						<Text>{text}</Text>
					))} */}
				</GridItem>
			</Grid>
		</Layout>
	);
};

export default DashboardCard;
