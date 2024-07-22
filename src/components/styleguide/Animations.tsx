import { Box, Flex, Grid, GridItem, Stack, Text, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FadeTitle, H1Header, H2Header, ImageSrcStyle, XSmallTextStyle } from "../../assets/styles/Styles";
import Layout from "../Layout";
import dashboardCard from "./../../assets/images/styleguide/dashboardCard.png";
import loaderImg from "./../../assets/images/styleguide/loaderImg.webp";
import StyleguideSubMenus from "./StyleguideSubMenus";
/*--= FramerMotion =--*/
import { cubicBezier, motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ModalTemplateBasic from "../modals/ModalTemplateBasic";
import AnimationTriangleSequence from "./AnimationTriangleSequence";
import AnimationSamplesDashboard from "./animationSamples/AnimationSamplesDashboard";
import { MotionFlex, easing } from "src/assets/variables/Variables";

const circularLoaderCodeBlock = `
   const timerDelay = {
      initDelay : .5,
      circDelay  : 1,
      iconDelay : 2,
      descDelay : 2,
   }

   type Props = {
      timer : number;
   }

   const CircularLoader = ({ timer }: Props) => {
      const easing = cubicBezier(0.35, 0.27, 0.3, 0.83);
      const [isHidden] = useState(false);
      const tymer = timer / 1000;
      const [count, setCount] = useState(0);

      useEffect(() => {
         const interval = setInterval(() => {
            setCount((prev) => prev + 1);
         }, 100);
         return () => clearInterval(interval);
      }, []);

      return (
         <>
            {!isHidden ? (
               <>
                  <Flex className="loaderAnimationContainer"
                     sx={sxLoaderAnimationContainer}>

                  {/* Counter animation */}
                  <Flex className="counterAnimContainer"
                     sx={sxCounterAnimContainer}>
                     <Text as="span" fontSize="1rem">
                        LOADING...
                        </Text>
                        <Flex alignItems={"center"}>
                           <H2Header className="countdown"
                              sx={sxCountdown}>
                              {Math.floor((count/(timer/100))*100)}
                           </H2Header>
                           <Text as="span" fontSize="2rem">
                              %
                           </Text>
                        </Flex>
                     </Flex>

                     {/* Rings animation */}
                     <Box position="absolute">
                        <motion.svg width="314" height="314"
                           viewBox="0 0 314 314" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           {/* One circular ring sample animation with incomplete path */}
                           <motion.path
                              initial={{ rotate: 0 }}
                              animate={{ rotate: 720 }}
                              transition={{
                                 duration: tymer,
                                 ease: easing,
                                 delay: timerDelay.circDelay + 0 }}
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M156.699 33.1997C88.4921  33.1997 33.1992 88.4925 33.1992..."
                              fill="#85aab6"
                           />
                        </motion.svg>
                     </Box>
                  </Flex>
               </>
            : undefined }
         </>
      )
`;

const checkAnimCodeBlock = `
   const sxCheckAnimWrapper = {
      display        :  "flex",
      justifyContent :  "center",
      alignItems     :  "center;",
      width          :  "150px",
      height         :  "150px",
      borderRadius   :  "100%",
      border         :  "1px solid",
      borderColor    :  "accent.100",
      }

   const CheckmarkAnim = (props: any) => {
      const [isChecked, setIsChecked] = useState(true)
      const pathLength = useMotionValue(0)
      const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1])
      const MotionFlex = motion(Flex);
      const MotionBox = motion(Box);

      return (
         <Flex className='checkmarkAnimContainer' flexDirection={"column"}>
               {/* Checkmark Anim */}
            <MotionBox className="checkAnimWrapper" sx={sxCheckAnimWrapper}
                  initial={{opacity:1}}
                  animate={{
                     opacity: isChecked ? 1 : 0.2,
                     backgroundColor: isChecked
                        ? "#fff7f5"
                        : "#eb620099"
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                  <svg>
                     <motion.path
                        d="M38 74.707l24.647 24.646L116.5 45.5"
                        fill="transparent"
                        strokeWidth="20"
                        stroke="#eb6200"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 1 }}
                        animate={{
                              pathLength: isChecked ? 0.9 : 0,
                           }}
                        style={{ pathLength, opacity }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                     />
                  </svg>
            </MotionBox>

            <Button className="primaryAccentButton"
               size={"sm"}
               margin={"1rem"}
               variant={"primary"}
               onClick={() => setIsChecked(!isChecked)}
            >
            on/off
            </Button>
         </Flex>
      )
`

const sxImage = {
	position: "absolute",
	margin: "-480px 400px",
	// margin: {base: "-550px 400px", lg: "-550px 400px"},
	// left: "0px"} top: "-50px",
	boxSize: "200px",
	padding: "1rem",
	// boxSize: {base:"150px", sm:"300px"},
	// border: "1px solid hsla(10, 100%, 70%, 0.95)",
	borderRadius: "full",
	// border: "1px solid #80b3ba80"
};

const buttonData = {
	buttonLink: "fisD1",
	linkTarget: "_self",
	buttonLabel: "Details",
	buttonLeftIcon: "none",
	buttonRightIcon: <FaArrowRight />,
	buttonBackground: "primary.500",
	butttonColor: "primary.50",
	buttonHoverColor: "orange",
};
const sectionData = {
	title: "Animations",
	subTitle: "Sense of delight and playfulness",
	leftColumn: {
		image: loaderImg,
		// image: sunbirdCardVertical,
		text: "",
	},
	intro: {
		introTitle: "Emotional Connection",
		introText: "Animations play a vital role in enhancing user experience by providing feedback, guiding navigation, increasing engagement, improving clarity, conveying brand personality, fostering emotional connection, and enhancing accessibility. When implemented thoughtfully and purposefully, animations can significantly contribute to the success of an app or website. Include the following examples: Scrolling banners, svg path animation: https://www.youtube.com/watch?v=He1_AH6kC8Y, https://v2.chakra-ui.com/docs/components/transitions : Collapse transition",
		image: dashboardCard,
	},

	content: [
		{
			id: 1,
			subTitle: "Several reasons why animations are important:",
			description: [
				{ id: "1.", titleList: "Immediate Feedback: ", list: "Animations give instant visual cues, making interactions feel responsive." },
				{ id: "2.", titleList: "Guidance and Navigation: ", list: "They guide users through the interface, simplifying complex structures." },
				{ id: "3.", titleList: "Engagement: ", list: "Dynamic animations capture attention, encouraging exploration." },
				{ id: "4.", titleList: "Clarity: ", list: "They clarify relationships between elements, reducing confusion." },
				{ id: "5.", titleList: "Feedback for Operations: ", list: "Animations indicate when the system is working, reducing uncertainty." },
				{ id: "6.", titleList: "Brand Identity: ", list: "They reflect the brand's personality, creating a unique identity." },
				{ id: "7.", titleList: "Emotional Connection: ", list: "Animations evoke emotions, fostering a stronger bond with users." },
				{ id: "8.", titleList: "Accessibility: ", list: "They can aid users with disabilities by providing additional feedback." },
			],
		},
	],
	buttonLabel: "",
	buttonLink: "",
	linkTarget: "",
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
     "two    five    five"
   `,
};
const brandContent = sectionData.content.map((content, index) => (
	<li key={index}>
		<H2Header
			// fontSize={"1.75rem"}
			fontWeight={"500"}
			margin={"3rem 0 .5rem"}
		>
			{content.subTitle}
		</H2Header>

		{content.description?.map((item, index) => (
			<Box key={index} marginBottom={"1rem"}>
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
			</Box>
		))}
	</li>
));

const Animations = () => {
	const backgroundColor = useColorModeValue("primary.50", "primary.600");
	const BorderColorStyle = useColorModeValue("primary.100", "primary.300");
   const fontColor = useColorModeValue("primary.900", "primary.100");

	const { colorMode, toggleColorMode } = useColorMode();

	const { isOpen, onOpen, onClose } = useDisclosure(); //modal
	const [size, setSize] = React.useState("2xl"); //modal size

	const timer = 5000;

	return (
		<Layout>
			<StyleguideSubMenus />

			<Grid templateAreas={gridTemplateDesignUno}
				marginTop={"2rem"}
				bg="primary.50"
				padding={"2rem 2rem 5rem"}
				borderRadius={"2xl"}
				background={backgroundColor}
				// border={"1px solid"}
			>
				{/* Page title area */}
				<GridItem area="one"
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
                  <Flex flexDirection={"column"}
                     height={"80px"}
                     // border={"1px solid"}
                     >
                     <H1Header color={"accent.500"} textAlign={"left"}>
                        {sectionData.title}
                     </H1Header>

                     <XSmallTextStyle>
                        {sectionData.subTitle}
                     </XSmallTextStyle>
                  </Flex>
               </FadeTitle>

				</GridItem>

				{/* Left column area */}
				<GridItem area="two">
					<Box className    =  "leftColumnArea"
						display        =  {{ base: "none", lg: "flex" }}
						flexDirection  =  {"column"}
						marginBottom   =  {"5rem"}
						gap            =  {"70px"}
						// justifyContent={"center"}
						// alignItems={"flex-start"}
						// border={"1px solid"}
					   >
						<MotionFlex
							flexDirection  =  {"column"}
							alignItems     =  {"center"}
							initial        =  {{ opacity: 0, y: 500 }}
							animate        =  {{ opacity: 1, y: 0 }}
							transition     =  {{ ease: easing, duration: 1, delay: timer / 1000 }}
							// transition={{ type: "spring", stiffness: 80, damping: 10 }}
							// transition={{type:"tween", duration:1, ease:"easeInOut"}}
						   >
                     <Box className =  "loaderCard"
                        top         =  {"1rem"}
								width       =  {"300px"}
								// height={"420px"}
                        padding     =  {"2rem"}
                        margin      =  {"12px 12px 0 0"}
								objectFit   =  {"contain"}
                        background  =  {"primary.500"}
								borderRadius=  {"1rem"}
								// border={"1px solid"}
                        >
							   <ImageSrcStyle
								src={sectionData.leftColumn.image}
								// src={colorMode === "light" ? GDLogoDark : GDLogoLight}
							   />
                        <H2Header
                           fontSize    =  {"1rem"}
                           fontWeight  =  {"600"}
                           width       =  {"100%"}
                           textAlign   =  {"center"}
                           letterSpacing= {"0"}
                           color       =  {"primary.100"}
                           // margin={"3rem 0 0rem"}
                           // border={"1px solid"}
                           >
                           Check out the code for the loader:
                        </H2Header>

                        {/* Modal: Circular Loader */}
                        <ModalTemplateBasic
                           title="Circular Loader Animation"
                           buttonLabel="Circular Loader"
                           codeBlock={circularLoaderCodeBlock}
                           // image={aiCuteOwl3}
                           // imageStyle={sxImage}
                           />
                     </Box>

						</MotionFlex>
					</Box>
				</GridItem>

				{/* Main top column area */}
				<GridItem area="three"
					fontSize={"1.1rem"}
					textAlign={"left"}
					padding={"2rem 2rem 0"}
					borderLeft={"10px solid"}
					borderColor={BorderColorStyle}
					// border={"1px solid"}
					// borderColor={"red"}
               >
					<MotionFlex
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ ease: easing, duration: 1, delay: 0 }}
						flexDirection={"column"}
						margin={"0 0 2rem"}
						// border="1px solid"
					>
						<H2Header fontSize="32px">{sectionData.intro.introTitle}</H2Header>
						<Text fontSize={{ base: "16px", md: "20px" }}>
                     {sectionData.intro.introText}
                  </Text>
					</MotionFlex>

					{/* Loading the animations */}
               <AnimationTriangleSequence />
					{/* Loading the animations */}
					{/* {hasLoaded ? (
						<AnimationTriangleSequence />
					) : (
						<Box display={"flex"}
                     justifyContent={"center"}
                     alignItems={"center"}
                     height={"600px"}
                     border="1px solid"
                     borderRadius={"1rem"}
                     background={"primary.500"}
                     >
							<CircularLoader timer={timer} />
						</Box>
					)} */}
				</GridItem>

				{/* Several reasons... */}
				<GridItem area="four"
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
						<ul>{brandContent}</ul>
					</MotionFlex>
				</GridItem>

				{/* Animation Samples Dashboard */}
				<GridItem area="five"
               className="areaFiveWrapper"
					fontSize={"1.1rem"}
					textAlign={"left"}
					padding={"2rem"}
					borderLeft={"1px solid"}
					borderColor={BorderColorStyle}
               height={"650px"}
               position={"relative"}
               top={"0px"}
					// border={"1px solid"}
				   >
					<MotionFlex className={"sampleDashContainer"}
                  initial={{ opacity: 0, y: 500, transform:"scale(.75)" }}
                  animate={{ opacity: 1, y: 0, transform:"scale(1)" }}
                  transition={{ ease: easing, duration: 0.5, delay: 1.25 }}

                  // https://v2.chakra-ui.com/docs/hooks/use-media-query
                  // animate={{ base: {opacity: 1, y: 0, transform:"scale(2)" }, lg: {opacity: 1, y: 0, transform:"scale(2)" }}}
                  // transform={{base:"scale(.75)", xl:"scale(1)"}}

                  display={"flex"}
                  flexDirection={"column"}
                  // justifyContent={"center"}
                  // alignItems={"center"}
                  height={"100%"}
                  position={"relative"}
                  top={"0px"}
                  // border={"1px solid yellow"}
                  >
                  <Box
                     width={"100%"}
                     height={"100%"}
                     // border={"1px solid red"}
                     >
                     <AnimationSamplesDashboard/>
                  </Box>

					</MotionFlex>
				</GridItem>


			</Grid>
		</Layout>
	);
};

export default Animations;


