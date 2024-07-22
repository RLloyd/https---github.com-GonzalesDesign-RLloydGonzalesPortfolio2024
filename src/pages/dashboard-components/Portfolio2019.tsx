import { Box, Button, Flex, Text, transition, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import portfolioSml     from "../../assets/images/portfolio2019-sml.png";
import { FaArrowRight } from "react-icons/fa";
import portfolioLg from "../../assets/images/portfolio2019-lg.png";

import { CardBodyStyle, H1Header, H3Header, H4Header, ImageSrcStyle } from "../../assets/styles/Styles";
import { useGlobalStore } from "../../hooks/GlobalStates";
import { cubicBezier, motion, animate } from "framer-motion";
import { delay } from "lodash";
import { MotionBox, easing } from "src/assets/variables/Variables";

const pwaLink = "https://pwa.rlloydgonzales.com";
const navigateOutApp = () => window.open("https://pwa.rlloydgonzales.com", "_blank", "noreferrer");

const sxCardOptions = {
	boxShadow: "xl",
	borderRadius: "1.5rem",
};

const Portfolio2019 = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const colorModeX = useColorModeValue("primary.200", "primary.50");
	const bgMode = useColorModeValue("primary.900", "primary.500");
	const borderMode = useColorModeValue("primary.100", "primary.400");
	const ImgBGMode = useColorModeValue("primary.900", "primary.50");
	const cardBGMode = useColorModeValue("white", "primary.700");
	const cardGradBGMode = useColorModeValue("linear-gradient(to bottom, primary.100, primary.50, primary.50, primary.50)", "linear-gradient(to bottom, primary.400, primary.700)");

	const D1GradBGMode = useColorModeValue("linear-gradient(to bottom, primary.100, primary.50, primary.50, primary.50)", "linear-gradient(to bottom, primary.400, primary.700)");
	const Port2019GradBGMode = useColorModeValue("linear-gradient(to bottom, primary.100, primary.50, primary.50, primary.50)", "linear-gradient(to bottom, primary.800, primary.700, primary.700)");

	const { designFlat, setDesignFlat } = useGlobalStore();

	const sxImage = {
		width: designFlat ? "350px" : "auto",
		height: "auto",
		// boxSize     : "full",
		borderRadius: "xl",
		border: "2px solid",
		borderColor: "primary.400",
		boxShadow: "xl",
		margin: "0px auto",
		position: "relative",
		left: "0", //designFlat ? "0px" : { base: "0px", lg: "0px" }, //
		top: "-10px", //designFlat ? "0px" : { base: "0px", lg: "0px" },
		objectFit: "cover",
		objectPosition: "0px",
		background: cardBGMode,
	};

	const cardData = {
		shortIntro: "Previous works done up to 2019",
		cardTitle: "Portfolio 2019",
		subTitle: "Software Engineer : UI/UX Team",
		description: "Different types of work on different industries",
	};
	const sxMyCard = {
		position: "relative",
		width: "100%",
		left: "0",
		top: { base: "20px", lg: "0" },
		// border={"1px solid cyan"}
		flexDirection: designFlat ? { base: "column" } : { base: "column" },
		alignItems: designFlat ? "center" : "center",
		padding: { base: ".25rem", lg: "2rem" },
		// zIndex: "10",
	};
	const sxCardBodyStyleVertical = {
		width: "90%",
		// display        : "flex",
		// flexDirection  :  {base:"row", md:"column"},
		flexDirection: "column",
		// alignItems: {base:"center", lg:"flex-start"},
		alignItems: "center",
		position: "relative",
		top: "-40px",
		padding: "1rem",
		margin: "0rem",
		border: "1px solid",
		borderColor: borderMode,
		backgroundImage: cardGradBGMode,
	};
	const sxCardBodyStyleHorizontal = {
		width: "85%",
		flexDirection: "column",
		alignItems: "center",
		// alignItems: "flex-start",
		position: "relative",
		left: "0", //{ base: "0px", lg: "90px" },
		top: { base: "-80px", md: "-70px", lg: "-40px" },
		margin: { base: "0rem", md: "0 0 2rem 0", lg: "1rem" },
		padding: { base: "1rem 1rem", lg: "1.5rem 5rem 2rem" },
		border: "1px solid",
		borderColor: borderMode,
		backgroundImage: cardGradBGMode,
		zIndex: "10",
	};
	const sxShortIntro = {
		fontSize: "1rem",
		fontWeight: "400",
		margin: "0",
	};
	const sxCardTitle = {
		textTransform: "uppercase",
		// alignItems: "center"
		alignItems: designFlat ? "flex-start" : "center",
		textAlign: "center", //designFlat ? "center" : "center",
		// alignItems: {designFlat ? "center" : "flex-start" }
	};
	const sxSubTitle = {
		textTransform: "uppercase",
		fontSize: "1.1rem",
		fontWeight: "500",
		margin: ".25rem",
	};
	const sxDescription = {
		fontSize: "1rem",
		fontWeight: "normal",
		margin: "1rem 0",
		textAlign: "center",
		// textAlign: { orientation === "vertical" ? "column" : "row" }
	};
	const buttonData = {
		buttonLink: "https://pwa.rlloydgonzales.com",
		// buttonLink: {navigateOutApp},
		// buttonLink: {pwaLink},
		linkTarget: "_blank",
		buttonLabel: "Go to site",
		buttonLeftIcon: "none",
		buttonRightIcon: <FaArrowRight />,
		buttonBackground: "primary.500",
		butttonColor: "primary.50",
		buttonHoverColor: "orange",
	};

	return (
		/*--= Card Layout Format =--*/
		<Flex
			className="portfolio2019Card"
			alignItems="center"
			justifyContent="center"
			w={"100%"}
			// h={"100%"}
			borderRadius={"1rem"}
			// border={"1px solid red"}
		>
			{/* My Card */}
			<Flex className="myCard" sx={sxMyCard}>
				{/* Image */}
				<MotionBox
					/*--= motion =-*/
					initial={designFlat ? { opacity: 0, x: "400px" } : { opacity: 0, y: "400px" }}
					animate={designFlat ? { opacity: 1, x: "0px" } : { opacity: 1, y: "0px" }}
					transition={{ ease: easing, duration: 0.5, delay: 0.5 }}
				>
					<ImageSrcStyle className="imageSourceStyle" src={portfolioLg} sx={sxImage} />
				</MotionBox>

				{/* Content */}
				<MotionBox
					className={"cardMotionWrapper"}
					position={"relative"}
					top={"-20px"}
					display={"flex"}
					justifyContent={"center"}
					// border={"1px solid"}

					/*--= motion =-*/
					initial={designFlat ? { opacity: 0, x: "400px" } : { opacity: 0, y: "400px" }}
					animate={designFlat ? { opacity: 1, x: "0px" } : { opacity: 1, y: "0px" }}
					transition={{ ease: easing, duration: 0.5, delay: 0.75 }}
				>
					<CardBodyStyle className="cardBody" sx={designFlat ? sxCardBodyStyleVertical : sxCardBodyStyleHorizontal}>
						{/* Card Short Intro */}
						<H4Header sx={sxShortIntro}>{cardData.shortIntro}</H4Header>
						{/* Card Title */}
						<H1Header sx={sxCardTitle}>{cardData.cardTitle}</H1Header>
						{/* Card Sub-Tile */}
						<H3Header sx={sxSubTitle}>{cardData.subTitle}</H3Header>
						{/* Card Description */}
						<Text sx={sxDescription}>
							{/* textAlign={designFlat ? "center" : "center"} */}
							{cardData.description}
						</Text>

						{/* Button Link */}
						<Link to={buttonData.buttonLink} target={buttonData.linkTarget}>
							<Button
								size={"md"}
								top={designFlat ? "0px" : "10px"}
								// variant={"accent"}
								variant={colorMode === "light" ? "primary" : "accent"}
								rightIcon={buttonData.buttonRightIcon}
							>
								{buttonData.buttonLabel}
							</Button>
						</Link>
					</CardBodyStyle>
				</MotionBox>
			</Flex>
		</Flex>
	);
};

export default Portfolio2019;
