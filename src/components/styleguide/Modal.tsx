import { Box, Flex, Grid, GridItem, Stack, Text, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FadeTitle, H1Header, H2Header, H3Header, H4Header, ImageSrcStyle, XSmallTextStyle } from "../../assets/styles/Styles";
import Layout from "../Layout";
import loaderImg from "./../../assets/images/styleguide/modal.webp";
import modalLargeImage from "./../../assets/images/styleguide/modalLarge2.webp";
import StyleguideSubMenus from "./StyleguideSubMenus";
/*--= FramerMotion =--*/
import { cubicBezier, motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ModalTemplateBasic from "../modals/ModalTemplateBasic";

import CodeHilite from "../hilights/CodeHilite";
import Copy2Clipboard from "../hilights/Copy2Clipboard";
import { MotionFlex, MotionBox } from "src/assets/variables/Variables";

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
                     <Box as="span" fontSize="1rem">
                        LOADING...
                        </Box>
                        <Flex alignItems={"center"}>
                           <H2Header className="countdown"
                              sx={sxCountdown}>
                              {Math.floor((count/(timer/100))*100)}
                           </H2Header>
                           <Box as="span" fontSize="2rem">
                              %
                           </Box>
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

const modalBGEffectCodeBlock = `
   // ModalTemplateIcons.tsx
   const OverlayOne = () => (
      <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(8px) hue-rotate(10deg)'
      />
   )
   const [overlay, setOverlay] = React.useState(<OverlayOne />)
`;
const modalTemplateCodeBlock = `
   // ModalTemplateIcons.tsx
   <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      size={{ base:"full", lg:"2xl" }}
      scrollBehavior={scrollBehavior} >
      {overlay}
      <ModalOverlay />

      <ModalContent className="modalContentWrapper">

         {/* header area */}
         <ModalHeader className="modalHeaderWrapper">
            <Flex flexDirection={"column"} >
               <Heading as={"h2"}>{title}</Heading>
               <Box>{subTitle}</Box>
            </Flex>
            <Box><LikesButton/></Box>
         </ModalHeader>

         {/* modal body area */}
         <ModalBody className="modalBodyPopUpWrapper"
            bg={"#282c34"}
            padding={"1rem"}
            borderRadius={"xl"}
            >

            {/* code snippets */}
            <Box
               textAlign="left"
               fontSize={"sm"}
               height={"400px"}
               >
               <Copy2Clipboard codeBlock={codeBlock} buttonLabel="copy"/>
               <CodeHilite codeBlock={codeBlock}/>
            </Box>
         </ModalBody>

         /* modal close button */
         <ModalFooter>
            <Button
               variant={"accent"}
               onClick={onClose}
               >
               {title}
            </Button>
         </ModalFooter>
      </ModalContent>
   </Modal>
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
	title: "Modal",
	subTitle: "Contextual Information",
	leftColumn: {
		leftColImage: loaderImg,
		// image: sunbirdCardVertical,
		text: "",
	},
	intro: {
		introTitle: "Enhanching User Experience",
		introText: "The strategic use of modals in apps and websites can improve user engagement, streamline workflows, and enhance the overall user experience by providing focused attention, contextual information, and responsive interaction. However, it's essential to use modals judiciously and ensure that they align with user expectations and design principles to maximize their effectiveness.",
		image: modalLargeImage,
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

const easing = cubicBezier(0.35, 0.27, 0.3, 0.83);

const leftColContainerAnimationVariant = {
   hidden: {opacity: 0, y: 500},
   visible: {opacity: 1, y: 0,
      // transition: {ease: easing, duration: 1, delay: 1}
      transition: {type:"spring", stiffness: 40, damping: 10, delay: 0}
   },
   exit: {
      x: "-100vw",
      transition: {ease: "easeInOut"}
   }
}

const headerIntroWrapperVariant = {
   hidden: {opacity: 0},
   visible: {
      opacity: 1,
      transition: { ease: easing, duration: 1, delay: 0 }
   }
}

const leftColContainerAnimationVariant2 = {
   hidden: {opacity: 0, y: 500},
   visible: {opacity: 1, y: 0,
      // transition: {ease: easing, duration: 1, delay: 1}
      transition: {type:"spring", stiffness: 40, damping: 10, delay: 1}
   },
   exit: {
      x: "-100vw",
      transition: {ease: "easeInOut"}
   }
}

const Modal = () => {
	const backgroundColor   = useColorModeValue("primary.50", "primary.600");
	const BorderColorStyle  = useColorModeValue("primary.100", "primary.300");
   const fontColor         = useColorModeValue("primary.900", "primary.100");
	// const easing = cubicBezier(0.35, 0.27, 0.3, 0.83);
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure(); //modal
	const [size, setSize] = React.useState("2xl"); //modal size
	const timer = 5000;
   const dynWidth = () => (
      {base:"auto", lg:"65%", xl:"auto"}
   )

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
				// border={"1px solid red"}
         >
				{/* Page title area */}
				<GridItem area="one"
					// width={"88%"}
					borderBottom={"1px solid"}
					borderColor={BorderColorStyle}
               >

               {/* Page title */}
               <FadeTitle>
                  <Flex flexDirection={"column"}
                     height={"80px"}
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
						// border={"1px solid"}
					   >
						<MotionFlex className={"leftColContainerAnimation"}
							flexDirection  =  {"column"}
							alignItems     =  {"center"}
                     variants       =  {leftColContainerAnimationVariant}
							initial        =  "hidden"
							animate        =  "visible"
                     exit           =  "exit"
						   >
                     <Box className =  "modalImageWrapper"
                        top         =  {"1rem"}
								width       =  {"300px"}
								// height   =  {"420px"}
                        padding     =  {"2rem"}
                        margin      =  {"12px 12px 0 0"}
								objectFit   =  {"contain"}
                        background  =  {"primary.500"}
								borderRadius=  {"1rem"}
								border      =  {"1px solid"}
                        borderColor =  "primary.400"
                        >
							   <ImageSrcStyle
								   src         =  {sectionData.leftColumn.leftColImage}
                           border      =  "1px solid"
                           borderColor =  "primary.300"
								   // src={colorMode === "light" ? GDLogoDark : GDLogoLight}
							   />
                        <H2Header
                           fontSize    =  {"1rem"}
                           fontWeight  =  {"600"}
                           width       =  {"100%"}
                           textAlign   =  {"center"}
                           letterSpacing= {"0"}
                           color       =  {"primary.100"}
                           margin      =  {"2rem 0 1rem"}
                           // border={"1px solid"}
                           >
                           Check out the code for the modal:
                        </H2Header>

                        {/* Modal Code Button */}
                        <ModalTemplateBasic
                           title       =  "Circular Loader Animation"
                           buttonLabel =  "Modal Code"
                           codeBlock   =  {circularLoaderCodeBlock}
                           borderRadius=  "full"
                           />
                     </Box>

						</MotionFlex>
					</Box>
				</GridItem>

            {/* <Box width={"auto"} border={"1px solid orange"}> */}

            {/* Main top column area */}
            <GridItem area="three"
               width       =  {dynWidth()}
               fontSize    =  {"1.1rem"}
               textAlign   =  {"left"}
               padding     =  {"2rem 2rem 0"}
               borderLeft  =  {"10px solid"}
               borderColor =  {BorderColorStyle}
               // border={"1px solid orange"}
               >
               <MotionFlex className = {"headerIntroWrapper"}
                  flexDirection  =  {"column"}
                  // margin      =  {"0 0 2rem"}
                  initial        =  {{opacity:0}}
                  animate        =  {{opacity:1}}
                  transition     =  {{ease:easing, duration:1, delay:0}}
                  // variants    =  {headerIntroWrapperVariant}
                  // initial     =  "hidden"
                  // animate     =  "visible"
                  // border="1px solid"
                  >
                  <H2Header fontSize="32px">{sectionData.intro.introTitle}</H2Header>
                  <Box fontSize={{ base: "16px", md: "20px" }}>
                     {sectionData.intro.introText}
                  </Box>
               </MotionFlex>

               {/*--= Image animation =--*/}
               <MotionFlex className="imageContainer"
                     initial={{opacity:.0, x:800}}
                     animate={{opacity:1, x:0}}
                     transition={{
                        ease:easing,
                        duration:.5,
                        delay:.5
                     }}
                     flexDirection={{base:"column", md:"row"}}
                     justifyContent={"center"}
                     alignItems={"center"}
                     gap={5}
                     padding={"1rem"}
                     margin={"2rem 0 0"}
                     borderRadius={"xl"}
                     background={"primary.1000"}
                     height={"auto"}
                     >
                     {/*--= Modal image =--*/}
                     <ImageSrcStyle
                        src={sectionData.intro.image}
                        objectFit={"contain"}
                        padding={"1rem"}
                     />
                  </MotionFlex>
            </GridItem>

            {/* Several reasons... */}
            <GridItem area="four"
               width={dynWidth()}
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

            {/* Setting up... code blocks */}
            <GridItem area="five"
               className="gridArea5Wrapper text-[1.1rem] text-left p-[2rem]"
               width={dynWidth()}
               // textAlign={"left"}
               borderLeft={"1px solid"}
               // border={"1px solid"}
               borderColor={BorderColorStyle}
               >
               <Box>
                  <H4Header margin={"2rem 1.5rem 1rem"}>Setting up the modal background effect:</H4Header>
                  <MotionBox className={"highlightContainer overflow-auto rounded-2xl text-base p-4 max-h-[550px] bg-[#282c34]"}>
                     <Copy2Clipboard codeBlock={modalBGEffectCodeBlock} buttonLabel="copy"/>
                     <Box width={{base:"100px", lg:"auto"}}>
                        <CodeHilite codeBlock={modalBGEffectCodeBlock}/>
                     </Box>
                  </MotionBox>

                  <H4Header margin={"2rem 1.5rem 1rem"}>Modal Pop-Up Template:</H4Header>
                  <MotionBox className={"highlightContainer overflow-auto rounded-2xl text-base p-4 max-h-[550px] bg-[#282c34]"}>
                     <Copy2Clipboard codeBlock={modalTemplateCodeBlock} buttonLabel="copy"/>
                     <Box width={{base:"100px", lg:"auto"}}>
                        <CodeHilite codeBlock={modalTemplateCodeBlock}/>
                     </Box>
                  </MotionBox>
               </Box>
            </GridItem>

            {/* </Box> */}
			</Grid>

		</Layout>
	);
};

export default Modal;


