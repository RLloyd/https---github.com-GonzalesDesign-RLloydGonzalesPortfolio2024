import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import { AiFillCodeSandboxCircle, AiFillCodepenCircle } from "react-icons/ai";
import { HiCheckCircle, HiChip } from "react-icons/hi";
import { H2Header, H3Header, ImageSrcStyle } from "../../../assets/styles/Styles";
/*--= FramerMotion =--*/
import { LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { BsFan, BsHandIndexThumb } from "react-icons/bs";
import ModalTemplateAdvanced from "../../modals/ModalTemplateAdvanced";

import carousel01 from "@images/styleguide/Carousel/carousel-birdcage/carousel-birdcage-01.webp";
import carousel02 from "@images/styleguide/Carousel/carousel-birdcage/carousel-birdcage-02.webp";
import carousel03 from "@images/styleguide/Carousel/carousel-birdcage/carousel-birdcage-03.webp";
import carousel04 from "@images/styleguide/Carousel/carousel-birdcage/carousel-birdcage-04.webp";
import carousel05 from "@images/styleguide/Carousel/carousel-birdcage/carousel-birdcage-05.webp";
import carousel06 from "@images/styleguide/Carousel/carousel-birdcage/carousel-birdcage-06.webp";
import carousel07 from "@images/styleguide/Carousel/carousel-birdcage/carousel-birdcage-07.webp";

import { MotionBox, easing } from "src/assets/variables/Variables";
import CheckmarkAnim from "./CheckmarkAnim";
import Carousel from "./carousel/Carousel";
import ExpandableBox from "./expandableTags/ExpandableBox";
// import DrawerPopup from "./drawerPopup/DrawerPopup";

const timerDelay = {
   initDelay: .5,
   nodeLineDelay: 2,
   nodeCardDelay: 2.45,
   nodeContentDelay: 3.5, //node cards content
   circDelay:1,         //circle rings
   iconDelay: 2,
   descDelay: 2,
}

// The following should be componentize
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

const carouselCodeBlock = `
   //App.tsx
   const images = [
      {image: carousel01},
      {image: carousel02},
      {image: carousel03},
      {image: carousel04},
      {image: carousel05},
      {image: carousel06},
      {image: carousel07},
   ];

   const sampleDasboardAnimationData = {
      content:[
         sampleComponent:
         <Carousel autoSlide={true} autoSlideInterval={5000}>
            {images.map((img, index) => (
               <ImageSrcStyle key={index} src={img.image} />))}
         </Carousel>
            ...
      ]
   }

   //Carousel.tsx
   const Carousel = ({
      children: images,
      autoSlide = false,
      autoSlideInterval = 3000 }) => {
      const [current, setCurrent] = useState(0);
      const MotionFlex = motion(Flex)
      const { colorMode, toggleColorMode } = useColorMode();
      const carouselAnimVariant = {
         hidden: { translateX: 0 },
         visible: { translateX: \`-\${current * 100}%\`,
            transition: {SPRING_OPTIONS},
         },
      }
      const prev = () => {
         setCurrent((current) => (current === 0 ? images.length - 1 : current - 1))
      }
      const next = () => {
         setCurrent((current) => (current === images.length - 1 ? 0 : current + 1))
      }
      useEffect(()=>{
         if(!autoSlide) return
         const slideInterval = setInterval(next, autoSlideInterval)
         return ()=> clearInterval(slideInterval)
      }, [])
      return (
         <Flex className="carouselContainer"
            overflow={"hidden"}
            position={"relative"}
            width={"640px"}
            height={"auto"}
            borderRadius={"1rem"}
            border={"1px solid"}
            borderColor={"primary.200"} >
            <MotionFlex gap={"0rem"} className={"carouselWrapper"}
               variants={carouselAnimVariant}
               initial = "hidden"
               animate = "visible" >
               {images}
            </MotionFlex>

           {/*--= Button Group =--*/}
           <Flex className="buttonsWrapper"
              position={"absolute"}
              alignItems={"center"}
              justifyContent={"space-between"}
              padding={"1rem"}
              inset={"0"} >
              <Button onClick={prev}
                 variant={colorMode === "light" ? "primary" : "accent"}
                 padding={"0px"}
                 borderRadius={"full"} >
                 <BiChevronLeft size={40}/>
              </Button>

              <Button onClick={next}
                 variant={colorMode === "light" ? "primary" : "accent"}
                 padding={"0px"}
                 borderRadius={"full"} >
                 <BiChevronRight size={40}/>
              </Button>
           </Flex>

           {/*--= Bottom dots =--*/}
           <Box className="dotsContainer"
              position={"absolute"}
              bottom={"1rem"}
              right={"0px"}
              left={"0px"} >
              <Flex className="dotsWrapper"
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={2} >
                  {images.map((xspace:any, index:any)=> (
                     <div className={\`
                     transition-all w-3 h-3 bg-white rounded-full
                     \${current === index ? "p-3" : "bg-opacity-50"}
                     \`}/>
                  ))}
               </Flex>
            </Box>
         </Flex>
      )
   }
`
const expandableCodeBlock = `
   // ExpandableBox.tsx
   const ExpandableBox = ({title, hoveredText, isButton, buttonLabel, durationTime, unHoveredText}:any) => {
      const [isHovering, setIsHovering] = useState(false);
      const { colorMode } = useColorMode();
      const xWidth = useRef(0)
      const widthRef = useRef<HTMLDivElement>(null)
      const fontColor = useColorModeValue("primary.900", "primary.100");
      const bgColor = useColorModeValue("primary.50", "primary.500");
      return (
         <LayoutGroup>
            <MotionFlex
               className="layoutGroupWrapper"
               style={{minWidth:xWidth.current}}work.
               cursor={"pointer"}
               width={"fit-content"}
               onHoverStart={() => {
                  if(!isHovering){
                     xWidth.current = widthRef.current!.offsetWidth;un-hovered state
                  }
                  setIsHovering(true)
               }}

               onHoverEnd={() => {
                  setIsHovering(false)}
               >

               <MotionBox className="referenceWrapper"
                  layout={true} //to animate scale
                  ref={widthRef}
                  display={"inline-block"}
                  color={fontColor}
                  bg={bgColor}
                  px={"1rem"}
                  py={"0.375rem"}
                  textTransform={"uppercase"}
                  letterSpacing={"0.05rem"}
                  fontSize={"0.875rem"}
                  fontWeight={"500"}
                  whiteSpace={"nowrap"}
                  border={"1px solid"}
                  borderColor={"primary.300"}
                  style={{ borderRadius:"6px" }}
                  transition={{duration:durationTime}} >
                  <AnimatePresence initial={false} mode={'wait'}>
                     {isHovering ? hoveredText : unHoveredText}
                     <MotionBox as={"span"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{duration:durationTime}}
                        key={isHovering ? "hovering" : "unhovering"} >
                        { isHovering ?
                           <Flex className="hoveredContainer"
                              flexDirection={"row"}
                              alignItems={"flex-start"}
                              justifyContent={"space-between"}
                              gap={4} >
                              <Flex className="hoveredWrapper"
                                 flexDirection={"column"}
                                 alignItems={"flex-start"} >
                                 {title &&
                                    <H3Header
                                       margin={".5rem 0 .25rem 0"}
                                       padding={"0px"}
                                       textTransform="capitalize" >
                                       {title}
                                    </H3Header>
                                 }
                                 <Box textTransform="capitalize">
                                    {hoveredText}
                                 </Box>
                              </Flex>
                              {isButton &&
                                 <Button
                                    size={"sm"}
                                    borderRadius={"full"}
                                    variant={colorMode === "light" ? "primary" : "accent"}
                                    rightIcon={<FaArrowRight/>}
                                    textTransform={"capitalize"}
                                    margin={"auto"}
                                    >
                                    {buttonLabel}
                                 </Button>
                              }
                           </Flex>
                           :
                           <Flex flexDirection={"column"}>
                              {unHoveredText}
                           </Flex>
                        }
                     </MotionBox>
                  </AnimatePresence>
               </MotionBox>
            </MotionFlex>
         </LayoutGroup>
      )
   }

   //App.tsx
   const expandableData = [...]
   const sampleDasboardAnimationData = {
      content:[
         {
            sampleComponent:
               <Flex className="layoutGroupContainer"
                  flexDirection={"column"}
                  alignItems={"center"}
                  gap={4}
                  padding={4}
                  marginTop={"0rem"}
                  >
                  {/* to animate the group as one */}
                  <LayoutGroup>
                     <Box>Hover on the text to trigger expansion</Box>
                     {expandableData.map((data, indx) => (
                        <ExpandableBox key={indx}
                           unHoveredText={data.unHoveredText}
                           title={data.title}
                           hoveredText={data.hoveredText}
                           isButton={data.isButton}
                           buttonLabel={data.buttonLabel}
                           durationTime={data.durationTime}
                        />
                     ))}
                  </LayoutGroup>
               </Flex>,
            sampleTop: "0px", sampleLeft: "0px",
            sampleWidth: "auto", sampleHeight:"auto",
            sampleTransform: "scale(1)",
         },
      ]
   }
`

const scaleAnim = (delay: number) => {
   return {
      hidden: { scale: 0 },
      visible: { scale: 1 ,
         transition: {
            duration: 1,
            ease: "easeInOut",
            delay: delay,
         },
      },
   }
}


const images = [
   // {image: "@images/styleguide/Carousel/carousel-01.webp"},
   {image: carousel01},
   {image: carousel02},
   {image: carousel03},
   {image: carousel04},
   {image: carousel05},
   {image: carousel06},
   {image: carousel07},
   // {video: backyardMovie},
];

const expandableData = [
   {  unHoveredText: "$3.5M+",
      title: "",
      hoveredText: "$3,543,210 Million",
      isButton: false,
      buttonLabel: "",
      durationTime: .25,
   },
   {  unHoveredText: "Article",
      title: "Some article header goes here.",
      hoveredText: "Accompanied by her enthusiastic 10-year-old son, a dedicated Certified Nursing Assistant (CNA) steps into the serene ambiance of a nursing home, where every corner echoes tales of a lifetime. On this special 'Take Your Child to Work Day,' they embark on a poignant journey through the corridors of care and compassion.",
      isButton: true,
      buttonLabel: "Read more",
      durationTime: .25,
   },
]

const sampleDasboardAnimationData = {
	shortIntro  : "Sample Animations Dashbaord",
	title       : "Animations",
	description : "React + SVG + Chakra UI + TW + Framer Motion",
	imageIntro  : "none",
	content     : [
      // 01
		{
         /*-=modal trigger props=-*/
         classname: "imageCarouselWrapper",
			title: "Image Carousel",
         modalSize: "2xl",
         icon: <AiFillCodeSandboxCircle/>,
			number: "01",
         fontsize: "3rem",
			top: "260px", left: "56px",
         marginSpace: "0",
         /*-=motion=-*/
         delay: timerDelay.nodeContentDelay + .5,
         /*-=isModal=-*/
         isModal: true,
         /*-=codeblock=-*/
			codeBlock: carouselCodeBlock,
         /*-=sample animation component=-*/
         sampleComponent:
            <Carousel autoSlide={true} autoSlideInterval={5000}>
               {images.map((img, index) => (
                  <ImageSrcStyle src={img.image} key={index}/>
                  // <ImageSrcStyle key={Math.random()} src={img.image} />)
                  )
               )}
            </Carousel>,
         sampleTop: "0px",
         sampleLeft: {base:"0px", lg:"0px"},
         sampleWidth: "auto", sampleHeight:"auto",
         // sampleWidth: "80vw", sampleHeight:"500px",
         sampleTransform: {base: "scale(1)", lg:"scale(1)"},
         // sampleTransform: "scale(1)",
		},
      // 02
		{
         classname: "parallaxWrapper",
			title: "Parallax",
			modalSize: "full",
         icon: <AiFillCodepenCircle/>,
			number: "02",
         fontsize: "3rem",
			top: "165px", left: "181px",
         marginSpace: "0",
         /*-=motion=-*/
         delay: timerDelay.nodeContentDelay + 1,
         /*-=isModal=-*/
         isModal: false,
         link: "/parallax",
         // link: "https://www.wavemaker.com/low-code-enterprise-application-development-platform/",
         target: "_self",
         /*-=codeblock=-*/
         codeBlock: checkAnimCodeBlock,
         /*-=sample animation component=-*/
         sampleComponent: "",
         sampleTop: "0px", sampleLeft: "20px",
         sampleWidth: "330px", sampleHeight:"800px",
         sampleTransform: "scale(2)",
		},
      // 03
		{
         classname: "compWrapper",
			title: "Checkmark Animation",
			modalSize: "2xl",
         icon: <HiCheckCircle/>,
			number: "03",
         fontsize: "2.5rem",
			top: "37px", left: "307px",
         marginSpace: "0",
         /*-=motion=-*/
         delay: timerDelay.nodeContentDelay + 1.5,
         /*-=isModal=-*/
         isModal: true,
         /*-=codeblock=-*/
         codeBlock: checkAnimCodeBlock,
         /*-=sample animation component=-*/
         sampleComponent: <CheckmarkAnim />,
         sampleTop: "0px", sampleLeft: "0px",
         sampleWidth: "330px", sampleHeight:"220px",
         sampleTransform: "scale(1)",
		},
      // 04
		{
         classname: "compWrapper",
			title: "Expandable On Hover",
			modalSize: "2xl",
         icon: <HiChip/>,
			number: "04",
         fontsize: "2.5rem",
			top: "-139px", left: "433px",
         marginSpace: "0",
         /*-=motion=-*/
         delay: timerDelay.nodeContentDelay + 1,
         /*-=isModal=-*/
         isModal: true,
         /*-=codeblock=-*/
         codeBlock: expandableCodeBlock,
         /*-=sample animation component=-*/
         sampleComponent:
            <Flex className="layoutGroupContainer"
               flexDirection={"column"}
               alignItems={"center"}
               gap={4}
               padding={4}
               marginTop={"0rem"}
               // border={"1px solid"}
               >

               {/* to animate the group as one */}
               <LayoutGroup>
                  <Box>Hover on the text to trigger expansion</Box>
                  {expandableData.map((data, indx) => (
                     // <ExpandableBox key={Math.random()}
                     <ExpandableBox key={indx}
                        unHoveredText={data.unHoveredText}
                        title={data.title}
                        hoveredText={data.hoveredText}
                        isButton={data.isButton}
                        buttonLabel={data.buttonLabel}
                        durationTime={data.durationTime}
                     />
                  ))}
               </LayoutGroup>
            </Flex>
         ,
         sampleTop: "0px", sampleLeft: "0px",
         sampleWidth: "auto", sampleHeight:"auto",
         sampleTransform: "scale(1)",

         // color: "accent.500",
			// // top: "200px", left: "100px",
			// yStart: 0, yEnd: 0,
         // xStart: -400, xEnd: 0,
         // duration: .5,
         // /*-=end motion=-*/
         // /*-=links=-*/
			// buttonLabel: "",
			// buttonLink: "/brandLogo", linkTarget: "_self",
         // /*-=tooltip=-*/
         // ttPlacement: "left",
         // ttXPos: "0px", ttYPos: "0px",
         // /*-=modal header-code space=-*/
         // marginSpace: "0",
		},
      // 05
		{
         classname: "compWrapper",
			title: "Drawer Component",
			modalSize: "2xl",
         icon: <BsFan/>,
			number: "05",
         fontsize: "2.5rem",
			top: "-352px", left: "559px",
         marginSpace: "0",
         /*-=motion=-*/
         delay: timerDelay.nodeContentDelay + .5,
         /*-=isModal=-*/
         isModal: false,
         isDrawer: true,
         link: "/drawer",
         target: "_self",
         // link: {loadDrawer},
         /*-=codeblock=-*/
         codeBlock: checkAnimCodeBlock,
         /*-=sample animation component=-*/
         // sampleComponent: <DrawerPopup />,
         sampleTop   : "unset",
         sampleLeft  : "unset",
         sampleWidth : "unset",
         sampleHeight: "unset",
         sampleTransform: "scale(1)",
		},
   ]
}


const AnimationSamplesDashboard = () => {
   const [isLoaded, setIsLoaded] = useState(false)
   const { isOpen, onOpen, onClose } = useDisclosure();

	return (
      <>
         <Box className="animationSamplesDashboardContainer">
            {/* Animation dashboard trigger header & sub-head */}
            <Flex
               flexDirection  =  {"column"}
               position       =  {"relative"}
               top            =  {"-30px"}
               zIndex         =  {"100"}
               padding        =  {"2rem"}
               // border={"1px solid"}
               >
               <H2Header
                  fontSize    =  {"2rem"}
                  fontWeight  =  {"700"}
                  color       =  {"accent.400"}
                  margin      =  {"0px"}
                  // width={"700px"}
                  // border={"1px solid"}
                  >
                  Animations Dashboard
               </H2Header>
               <H3Header
                  fontSize =  {"1.25rem"}
                  color    =  {"primary.100"}
                  margin   =  {"0px"}
                  >
                  React + SVG + Chakra UI + Framer Motion
               </H3Header>

            </Flex>

            {/* When dashboard is loaded */}
            {isLoaded ? (
               // Sample animations dashboard
               <Flex className="animationDashboardWrapper flex-row absolute"
                  // position       =  {"absolute"}
                  top            =  {"-30px"}
                  left           =  {"0px"}
                  height         =  {"110%"}
                  // width          =  {"100%"}
                  width          =  {"670px"}
                  transform      =  {"scale(1)"}
                  bg             =  {"primary.400"}
                  borderRadius   =  {"1rem"}
                  // border         =  {"1px solid yellow"}
                  >
                  <Box
                     width={"100%"}
                     position={"relative"}
                     top={"68px"}
                     >
                     {/* Text: "Animations" */}
                     <Flex className="animationHeaderWrapper"
                        justifyContent={"center"}
                        alignItems={"center"}
                        position={"absolute"}
                        top={"129px"}
                        left={"295px"}
                        height={"80px"}
                        width={"80px"}
                        bg={"primary.400"}
                        padding={"1rem"}
                        boxShadow={"4px 4px 20px black"}
                        borderRadius={"full"}
                        zIndex={"100"}
                        border={"2px solid purple"}
                     >
                        <H2Header
                           height={"40px"}
                           fontSize="1.2rem"
                           fontWeight="700"
                           padding=".5rem 1rem"
                           color={"primary.500"}
                           bg="primary.50"
                           textTransform="uppercase"
                           borderRadius="999999px"
                           boxShadow={"4px 4px 8px #07323e94"}
                           // border={"1px solid red"}
                        >
                           {sampleDasboardAnimationData.title}
                        </H2Header>
                     </Flex>

                     {/* Box: Icons */}
                     <Box className="iconsContainer"
                        justifyContent={"center"}
                        alignItems={"center"}
                        position={"relative"}
                        // position={"absolute"}
                        top={"7px"}
                        left={"-33px"}
                        // left={"0px"}
                        height={"100%"}
                        width={"100%"}
                        // width={"670px"}
                        padding={"1rem"}
                        zIndex={"100"}
                        // border={"8px solid black"}
                     >
                        {sampleDasboardAnimationData.content.map((content, index) => (
                           // <Box key={Math.random()}>
                           <Box key={index}>
                              <MotionBox className="iconTextWrapper"
                                 initial     =  {{ opacity: 0}}
                                 animate     =  {{ opacity: 1}}
                                 transition  =  {{ease:easing, duration:1, delay:content.delay}}
                                 display     =  {"flex"}
                                 flexDirection= {"column"}
                                 alignItems  =  {"center"}
                                 justifyContent={"flex-start"}
                                 position    =  {"relative"}
                                 top         =  {content.top}
                                 left        =  {content.left}
                                 color       =  {"primary.500"}
                                 width       =  {"90px"}
                                 height      =  {"154px"}
                                 cursor      =  {"pointer"}
                                 zIndex      =  {"100"}
                              >
                                 {/* Icons: open modal, drawer or link */}
                                 {/*---= Using grouped props =---*/}
                                 <ModalTemplateAdvanced
                                    modalTriggerProps = {{
                                       title       :  content.title,
                                       iconSize    :  content.fontsize,
                                       buttonIcon  :  content.icon,
                                    }}
                                    linkTypeProps = {{
                                       isModal     : content.isModal,
                                       isDrawer    : content.isDrawer,
                                       link        : content.link,
                                    }}
                                    modalSettingProps = {{
                                       modalSize   :  {base: "full", lg: content.modalSize},
                                       sampleInsert:  content.sampleComponent,
                                       transform   :  content.sampleTransform,
                                       top         :  content.sampleTop,
                                       left        :  content.sampleLeft,
                                       width       :  content.sampleWidth,
                                       height      :  content.sampleHeight,
                                       codeBlock   :  content.codeBlock,
                                       marginSpace :  content.marginSpace,
                                    }}
                                 />

                                 {/* Numbers */}
                                 <Box className   =  "textWrapper"
                                    position       =  {"relative"}
                                    top            =  {"0px"}
                                    left           =  {"0px"}
                                    fontSize       =  {"2.25rem"}
                                    fontWeight     =  {"800"}
                                    // border={"2px solid gray"}
                                 >
                                    {content.number}
                                 </Box>

                                 <Box
                                    position =  {"relative"}
                                    top      =  {"-10px"}
                                    left     =  {"0px"}
                                    fontSize =  {".8rem"}
                                    fontWeight= {"600"}
                                    textAlign=  {"center"}
                                    lineHeight= {"1.1"}
                                    margin   =  {".25rem 0 0"}
                                    padding  =  {"12px 1rem"}
                                    textTransform={"uppercase"}
                                    bg       =  {"primary.100"}
                                    boxShadow=  {"0px 3px 8px #00000082"}
                                    borderRadius={"6px"}
                                    // border   =  {"1px solid gray"}
                                 >
                                    {content.title}
                                 </Box>
                              </MotionBox>
                           </Box>
                        ))}
                     </Box>
                  </Box>

                  {/* Dashboard */}
                  <Box className =  "animSampleDashContainer"
                     display     =  {"flex"}
                     justifyContent={"center"}
                     width       =  {"100%"}
                     padding     =  {"2rem"}
                     borderRadius=  {"1rem"}
                     position    =  {"absolute"}
                     top         =  {"68px"}
                     // border={"1px solid magenta"}
                     >
                     <svg width="606" height="512" viewBox="0 0 606 512" fill="none" xmlns="http://www.w3.org/2000/svg">

                        {/* NODE CARDS */}
                        {/* 03 */}
                        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: timerDelay.nodeCardDelay + 2 }}>
                           <circle cx="303" cy="356" r="51" fill="#80A7AF" fillOpacity="0.45"/>
                           <circle cx="35" cy="35" r="34.5" transform="matrix(-1 0 0 1 338 442)" fill="#004F5F" fillOpacity="0.25" stroke="#FFD4C7"/>
                           <circle cx="26" cy="26" r="26" transform="matrix(-1 0 0 1 329 451)" fill="#FF651D"/>
                           <rect x="260.5" y="355.5" width="85" height="130" rx="4.5" fill="white" stroke="#B9D3D9"/>
                           <circle cx="32.8667" cy="32.8667" r="32.8667" transform="matrix(-1 0 0 1 335.867 325.267)" fill="#00414D" fillOpacity="0.1"/>
                           <circle cx="32.8667" cy="32.8667" r="32.3667" transform="matrix(-1 0 0 1 335.867 323)" fill="#FF651D" stroke="#F0FCFF"/>
                           <circle cx="22.6667" cy="22.6667" r="22.6667" transform="matrix(-1 0 0 1 325.667 333.2)" fill="white"/>
                        </motion.g>

                        {/* 04 */}
                        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: timerDelay.nodeCardDelay + 1 }}>
                           <circle cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 304 355)" fill="#FD1010"/>
                           <circle cx="429" cy="334" r="51" fill="#80A7AF" fillOpacity="0.45"/>
                           <circle cx="35" cy="35" r="34.5" transform="matrix(-1 0 0 1 464 420)" fill="#004F5F" fillOpacity="0.25" stroke="#FFD4C7"/>
                           <circle cx="26" cy="26" r="26" transform="matrix(-1 0 0 1 455 429)" fill="#FF651D"/>
                           <rect x="386.5" y="333.5" width="85" height="130" rx="4.5" fill="white" stroke="#B9D3D9"/>
                           <circle cx="32.8667" cy="32.8667" r="32.8667" transform="matrix(-1 0 0 1 461.867 303.267)" fill="#00414D" fillOpacity="0.1"/>
                           <circle cx="32.8667" cy="32.8667" r="32.3667" transform="matrix(-1 0 0 1 461.867 301)" fill="#FF651D" stroke="#F0FCFF"/>
                           <circle cx="22.6667" cy="22.6667" r="22.6667" transform="matrix(-1 0 0 1 451.667 311.2)" fill="white"/>
                        </motion.g>

                        {/* 02 */}
                        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: timerDelay.nodeCardDelay + 1 }}>
                           <circle cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 430 333)" fill="#FD1010"/>
                           <circle cx="177" cy="334" r="51" fill="#80A7AF" fillOpacity="0.45"/>
                           <circle cx="35" cy="35" r="34.5" transform="matrix(-1 0 0 1 212 420)" fill="#004F5F" fillOpacity="0.25" stroke="#FFD4C7"/>
                           <circle cx="26" cy="26" r="26" transform="matrix(-1 0 0 1 203 429)" fill="#FF651D"/>
                           <rect x="134.5" y="333.5" width="85" height="130" rx="4.5" fill="white" stroke="#B9D3D9"/>
                           <circle cx="32.8667" cy="32.8667" r="32.8667" transform="matrix(-1 0 0 1 209.867 303.267)" fill="#00414D" fillOpacity="0.1"/>
                           <circle cx="32.8667" cy="32.8667" r="32.3667" transform="matrix(-1 0 0 1 209.867 301)" fill="#FF651D" stroke="#F0FCFF"/>
                           <circle cx="22.6667" cy="22.6667" r="22.6667" transform="matrix(-1 0 0 1 199.667 311.2)" fill="white"/>
                        </motion.g>

                        {/* 05 */}
                        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: timerDelay.nodeCardDelay + 0 }}>
                           <circle cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 178 333)" fill="#FD1010"/>
                           <circle cx="555" cy="275" r="51" fill="#80A7AF" fillOpacity="0.45"/>
                           <circle cx="35" cy="35" r="34.5" transform="matrix(-1 0 0 1 590 361)" fill="#004F5F" fillOpacity="0.25" stroke="#FFD4C7"/>
                           <circle cx="26" cy="26" r="26" transform="matrix(-1 0 0 1 581 370)" fill="#FF651D"/>
                           <rect x="512.5" y="274.5" width="85" height="130" rx="4.5" fill="white" stroke="#B9D3D9"/>
                           <circle cx="32.8667" cy="32.8667" r="32.8667" transform="matrix(-1 0 0 1 587.867 244.267)" fill="#00414D" fillOpacity="0.1"/>
                           <circle cx="32.8667" cy="32.8667" r="32.3667" transform="matrix(-1 0 0 1 587.867 242)" fill="#FF651D" stroke="#F0FCFF"/>
                           <circle cx="22.6667" cy="22.6667" r="22.6667" transform="matrix(-1 0 0 1 577.667 252.2)" fill="white"/>
                        </motion.g>

                        {/* 01 */}
                        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: timerDelay.nodeCardDelay + 0 }}>
                           <circle cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 556 274)" fill="#FD1010"/>
                           <circle cx="51" cy="275" r="51" fill="#80A7AF" fillOpacity="0.45"/>
                           <circle cx="35" cy="35" r="34.5" transform="matrix(-1 0 0 1 86 361)" fill="#004F5F" fillOpacity="0.25" stroke="#FFD4C7"/>
                           <circle cx="26" cy="26" r="26" transform="matrix(-1 0 0 1 77 370)" fill="#FF651D"/>
                           <rect x="8.5" y="274.5" width="85" height="130" rx="4.5" fill="white" stroke="#B9D3D9"/>
                           <circle cx="32.8667" cy="32.8667" r="32.8667" transform="matrix(-1 0 0 1 83.8672 244.267)" fill="#00414D" fillOpacity="0.1"/>
                           <circle cx="32.8667" cy="32.8667" r="32.3667" transform="matrix(-1 0 0 1 83.8672 242)" fill="#FF651D" stroke="#F0FCFF"/>
                           <circle cx="22.6667" cy="22.6667" r="22.6667" transform="matrix(-1 0 0 1 73.667 252.2)" fill="white"/>
                        </motion.g>

                        {/* CIRCLE RINGS */}

                        {/* <circle cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 52 274)" fill="#FD1010"/>
                        <circle cx="303.5" cy="137.5" r="111.5" fill="#00414D"/> */}

                        {/* outside ring */}
                        <motion.path initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: .35 }} transition={{ duration: 1, ease: "easeInOut", delay: timerDelay.circDelay + 0 }} fillRule="evenodd" clipRule="evenodd" d="M303.5 275C379.439 275 441 213.439 441 137.5C441 61.5608 379.439 0 303.5 0C227.561 0 166 61.5608 166 137.5C166 213.439 227.561 275 303.5 275ZM303.5 247C363.975 247 413 197.975 413 137.5C413 77.0248 363.975 28 303.5 28C243.025 28 194 77.0248 194 137.5C194 197.975 243.025 247 303.5 247Z" fill="#0b404e"/>
                        {/* <motion.path variants={scaleOpacityAnim(0.35)} fillRule="evenodd" clipRule="evenodd" d="M303.5 275C379.439 275 441 213.439 441 137.5C441 61.5608 379.439 0 303.5 0C227.561 0 166 61.5608 166 137.5C166 213.439 227.561 275 303.5 275ZM303.5 247C363.975 247 413 197.975 413 137.5C413 77.0248 363.975 28 303.5 28C243.025 28 194 77.0248 194 137.5C194 197.975 243.025 247 303.5 247Z" fill="cyan"/> */}
                           {/* fillRule="evenodd" clipRule="evenodd" d="M303.5 275C379.439 275 441 213.439 441 137.5C441 61.5608 379.439 0 303.5 0C227.561 0 166 61.5608 166 137.5C166 213.439 227.561 275 303.5 275ZM303.5 247C363.975 247 413 197.975 413 137.5C413 77.0248 363.975 28 303.5 28C243.025 28 194 77.0248 194 137.5C194 197.975 243.025 247 303.5 247Z" fill="#0b404e"/> */}

                        <motion.path initial={{ scale: 0, opacity: 0 }} animate={{ scale: .9, opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: timerDelay.circDelay + 0 }} fillRule="evenodd" clipRule="evenodd" d="M303.5 275C379.439 275 441 213.439 441 137.5C441 61.5608 379.439 0 303.5 0C227.561 0 166 61.5608 166 137.5C166 213.439 227.561 275 303.5 275ZM303.5 247C363.975 247 413 197.975 413 137.5C413 77.0248 363.975 28 303.5 28C243.025 28 194 77.0248 194 137.5C194 197.975 243.025 247 303.5 247Z" fill="#005F72"/>

                        <motion.path initial={{ scale: 0 }} animate={{ scale: .8 }} transition={{ duration: 1, ease: "easeInOut", delay: timerDelay.circDelay + 0 }} fillRule="evenodd" clipRule="evenodd" d="M303.5 275C379.439 275 441 213.439 441 137.5C441 61.5608 379.439 0 303.5 0C227.561 0 166 61.5608 166 137.5C166 213.439 227.561 275 303.5 275ZM303.5 247C363.975 247 413 197.975 413 137.5C413 77.0248 363.975 28 303.5 28C243.025 28 194 77.0248 194 137.5C194 197.975 243.025 247 303.5 247Z" fill="#0b404e"/>
                        <motion.circle initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: .35 }} transition={{ duration: 1, ease: "easeInOut", delay: timerDelay.circDelay + 0 }} cx="303.5" cy="137.5" r="100.5" fill="#ff5722"/>
                        <circle cx="303.5" cy="137.5" r="90.5" fill="#005F72"/>
                        <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: timerDelay.circDelay + 0 }} d="M372 137.5C372 175.332 341.332 206 303.5 206C265.668 206 235 175.332 235 137.5C235 99.6685 265.668 69 303.5 69C341.332 69 372 99.6685 372 137.5Z" fill="#005F72"/>
                        <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: timerDelay.circDelay + 0 }} fillRule="evenodd" clipRule="evenodd" d="M303.5 204C340.227 204 370 174.227 370 137.5C370 100.773 340.227 71 303.5 71C266.773 71 237 100.773 237 137.5C237 174.227 266.773 204 303.5 204ZM303.5 206C341.332 206 372 175.332 372 137.5C372 99.6685 341.332 69 303.5 69C265.668 69 235 99.6685 235 137.5C235 175.332 265.668 206 303.5 206Z" fill="#4B8492"/>
                        <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: timerDelay.circDelay + 0 }} fillRule="evenodd" clipRule="evenodd" d="M264.658 62.9999C237.814 77.0253 219.5 105.126 219.5 137.5C219.5 183.892 257.108 221.5 303.5 221.5C349.892 221.5 387.5 183.892 387.5 137.5C387.5 105.126 369.186 77.0253 342.342 62.9999L344.658 58.5684C373.087 73.4218 392.5 103.192 392.5 137.5C392.5 186.653 352.653 226.5 303.5 226.5C254.347 226.5 214.5 186.653 214.5 137.5C214.5 103.192 233.913 73.4218 262.342 58.5684L264.658 62.9999Z" fill="#4B8492"/>

                        {/* circle rails */}
                        {/* <motion.path initial={{ rotate: 0 }} animate={{ rotate: 720 }} transition={{ duration: 10, ease: easing, delay: timerDelay.circDelay + 0 }} */}
                        <motion.path initial={{ opacity: 0 }} animate={{ opacity: [1, 0, 1, 0, 0, 1] }} transition={{ duration: 2, ease: "easeInOut", delay: timerDelay.circDelay + 0 }}
                           fillRule="evenodd" clipRule="evenodd" d="M262.882 209.092C263.696 209.553 264.519 210 265.349 210.433L269.974 201.567C269.244 201.186 268.522 200.793 267.807 200.389L262.882 209.092ZM341.651 210.433C342.481 210 343.304 209.553 344.118 209.092L339.193 200.389C338.478 200.793 337.756 201.186 337.026 201.567L341.651 210.433ZM348.907 206.163C350.472 205.131 351.999 204.048 353.486 202.915L347.428 194.959C346.12 195.955 344.778 196.907 343.403 197.814L348.907 206.163ZM253.514 202.915C255.001 204.048 256.528 205.131 258.093 206.163L263.597 197.814C262.222 196.907 260.88 195.955 259.572 194.959L253.514 202.915ZM357.834 199.365C359.243 198.133 360.61 196.853 361.932 195.529L354.854 188.464C353.692 189.629 352.49 190.754 351.251 191.838L357.834 199.365ZM245.068 195.529C246.39 196.853 247.757 198.133 249.166 199.365L255.749 191.838C254.51 190.754 253.308 189.629 252.146 188.464L245.068 195.529ZM365.76 191.425C366.989 190.015 368.171 188.563 369.303 187.071L361.336 181.027C360.341 182.339 359.302 183.615 358.221 184.855L365.76 191.425ZM237.697 187.071C238.829 188.563 240.011 190.015 241.24 191.425L248.779 184.855C247.698 183.615 246.659 182.339 245.664 181.027L237.697 187.071ZM372.542 182.485C373.568 180.923 374.542 179.323 375.462 177.689L366.748 172.783C365.94 174.218 365.084 175.624 364.182 176.997L372.542 182.485ZM231.538 177.689C232.458 179.323 233.432 180.923 234.458 182.485L242.818 176.997C241.916 175.624 241.06 174.218 240.252 172.783L231.538 177.689ZM226.712 167.552C227.402 169.299 228.149 171.017 228.952 172.704L237.981 168.405C237.276 166.924 236.62 165.416 236.015 163.883L226.712 167.552ZM378.048 172.704C378.851 171.017 379.598 169.299 380.288 167.552L370.985 163.883C370.38 165.416 369.724 166.924 369.019 168.405L378.048 172.704ZM382.168 162.258C382.732 160.48 383.237 158.676 383.681 156.848L373.963 154.489C373.573 156.093 373.13 157.676 372.636 159.237L382.168 162.258ZM223.319 156.848C223.763 158.676 224.268 160.48 224.832 162.258L234.364 159.237C233.87 157.676 233.427 156.093 233.037 154.489L223.319 156.848ZM384.818 151.347C385.132 149.511 385.385 147.656 385.575 145.782L375.627 144.771C375.459 146.418 375.237 148.048 374.961 149.659L384.818 151.347ZM221.425 145.782C221.615 147.656 221.868 149.511 222.182 151.347L232.039 149.659C231.763 148.048 231.541 146.418 231.373 144.771L221.425 145.782ZM385.953 140.181C385.984 139.25 386 138.315 386 137.376C386 136.473 385.985 135.572 385.956 134.675L375.962 134.998C375.987 135.788 376 136.58 376 137.376C376 138.203 375.986 139.026 375.959 139.846L385.953 140.181ZM221 137.376C221 138.315 221.016 139.25 221.047 140.181L231.041 139.846C231.014 139.026 231 138.203 231 137.376C231 136.58 231.013 135.788 231.038 134.998L221.044 134.675C221.015 135.572 221 136.473 221 137.376ZM385.608 129.298C385.432 127.496 385.198 125.712 384.908 123.946L375.041 125.567C375.295 127.118 375.501 128.685 375.655 130.268L385.608 129.298ZM222.092 123.946C221.802 125.712 221.568 127.496 221.392 129.297L231.345 130.268C231.499 128.685 231.705 127.118 231.959 125.567L222.092 123.946ZM383.858 118.651C383.448 116.891 382.982 115.153 382.461 113.438L372.893 116.344C373.35 117.849 373.759 119.374 374.119 120.918L383.858 118.651ZM224.539 113.438C224.018 115.153 223.552 116.891 223.142 118.65L232.881 120.918C233.241 119.374 233.65 117.849 234.107 116.344L224.539 113.438ZM380.723 108.327C380.085 106.638 379.394 104.976 378.65 103.342L369.548 107.483C370.201 108.917 370.807 110.376 371.367 111.859L380.723 108.327ZM228.35 103.342C227.606 104.976 226.915 106.638 226.277 108.327L235.633 111.859C236.193 110.376 236.799 108.917 237.452 107.483L228.35 103.342ZM376.256 98.5069C375.403 96.9189 374.5 95.3622 373.549 93.839L365.067 99.1368C365.903 100.475 366.696 101.843 367.445 103.237L376.256 98.5069ZM233.452 93.8389C232.5 95.3622 231.597 96.9189 230.744 98.5069L239.555 103.237C240.304 101.843 241.097 100.475 241.933 99.1367L233.452 93.8389ZM370.542 89.3592C369.491 87.8983 368.393 86.4733 367.251 85.0863L359.532 91.4437C360.536 92.6632 361.501 93.9159 362.425 95.2L370.542 89.3592ZM239.749 85.0863C238.607 86.4733 237.509 87.8983 236.458 89.3592L244.575 95.1999C245.499 93.9159 246.464 92.6631 247.468 91.4437L239.749 85.0863ZM363.688 81.0368C362.457 79.7262 361.184 78.4558 359.87 77.2279L353.042 84.5333C354.197 85.6132 355.317 86.7304 356.399 87.8829L363.688 81.0368ZM247.13 77.2279C245.816 78.4558 244.543 79.7262 243.312 81.0368L250.601 87.8829C251.683 86.7304 252.803 85.6132 253.958 84.5333L247.13 77.2279ZM355.812 73.675C354.423 72.5362 352.995 71.4417 351.532 70.3938L345.71 78.5241C346.996 79.4453 348.251 80.4076 349.473 81.409L355.812 73.675ZM255.468 70.3938C254.005 71.4417 252.577 72.5362 251.188 73.675L257.527 81.409C258.749 80.4076 260.004 79.4453 261.29 78.524L255.468 70.3938ZM264.627 64.7007C263.037 65.55 261.479 66.4498 259.954 67.3977L265.233 75.8905C266.573 75.0573 267.943 74.2667 269.339 73.5205L264.627 64.7007ZM347.046 67.3978C345.521 66.4498 343.963 65.55 342.373 64.7007L337.661 73.5205C339.057 74.2667 340.427 75.0573 341.767 75.8905L347.046 67.3978ZM274.453 60.2523C272.763 60.887 271.1 61.5755 269.466 62.3155L273.59 71.4254C275.026 70.7754 276.486 70.1708 277.97 69.6135L274.453 60.2523ZM337.534 62.3155C335.9 61.5755 334.237 60.887 332.547 60.2523L329.03 69.6135C330.514 70.1708 331.974 70.7754 333.41 71.4254L337.534 62.3155ZM327.435 58.5216C325.72 58.0033 323.982 57.5392 322.222 57.1314L319.964 66.8732C321.51 67.2314 323.036 67.6389 324.542 68.0939L327.435 58.5216ZM284.778 57.1314C283.018 57.5392 281.28 58.0033 279.565 58.5216L282.458 68.0939C283.964 67.6389 285.49 67.2314 287.036 66.8732L284.778 57.1314ZM295.424 55.3901C293.623 55.5649 291.839 55.7976 290.073 56.0863L291.687 65.9552C293.238 65.7016 294.806 65.497 296.39 65.3433L295.424 55.3901ZM316.927 56.0863C315.161 55.7976 313.377 55.5649 311.576 55.3901L310.61 65.3433C312.194 65.497 313.762 65.7016 315.313 65.9552L316.927 56.0863ZM303.5 55C302.597 55 301.697 55.0145 300.8 55.0433L301.121 65.0382C301.911 65.0128 302.704 65 303.5 65C304.296 65 305.089 65.0128 305.879 65.0382L306.2 55.0433C305.303 55.0145 304.403 55 303.5 55Z" fill="#A73407"/>
                        <path d="M364 137.5C364 170.913 336.913 198 303.5 198C270.087 198 243 170.913 243 137.5C243 104.087 270.087 77 303.5 77C336.913 77 364 104.087 364 137.5Z" fill="#F05D1A"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M303.5 196C335.809 196 362 169.809 362 137.5C362 105.191 335.809 79 303.5 79C271.191 79 245 105.191 245 137.5C245 169.809 271.191 196 303.5 196ZM303.5 198C336.913 198 364 170.913 364 137.5C364 104.087 336.913 77 303.5 77C270.087 77 243 104.087 243 137.5C243 170.913 270.087 198 303.5 198Z" fill="#FCCDB8"/>
                        <circle cx="303.5" cy="137.5" r="51.5" fill="#FDF1EC"/>
                        {/* <circle cx="303.5" cy="137.5" r="51.5" fill="#FDF1EC"/> */}
                        {/* lines */}
                        {/* 05 */}
                        <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,     ease: "easeInOut", delay: timerDelay.nodeLineDelay + 0 }} d="M368.333 138C368.333 139.473 369.527 140.667 371 140.667C372.473 140.667 373.667 139.473 373.667 138C373.667 136.527 372.473 135.333 371 135.333C369.527 135.333 368.333 136.527 368.333 138ZM552.333 242C552.333 243.473 553.527 244.667 555 244.667C556.473 244.667 557.667 243.473 557.667 242C557.667 240.527 556.473 239.333 555 239.333C553.527 239.333 552.333 240.527 552.333 242ZM538.006 177.029L537.893 177.516L538.006 177.029ZM555 198.451L554.5 198.451L555 198.451ZM370.886 138.487L537.893 177.516L538.12 176.542L371.114 137.513L370.886 138.487ZM554.5 198.451L554.5 242L555.5 242L555.5 198.451L554.5 198.451ZM537.893 177.516C547.62 179.789 554.5 188.462 554.5 198.451L555.5 198.451C555.5 187.998 548.3 178.921 538.12 176.542L537.893 177.516Z" fill="white"/>
                        {/* 04 */}
                        <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,     ease: "easeInOut", delay: timerDelay.nodeLineDelay + 1 }} d="M351.333 181C351.333 182.473 352.527 183.667 354 183.667C355.473 183.667 356.667 182.473 356.667 181C356.667 179.527 355.473 178.333 354 178.333C352.527 178.333 351.333 179.527 351.333 181ZM426.333 302C426.333 303.473 427.527 304.667 429 304.667C430.473 304.667 431.667 303.473 431.667 302C431.667 300.527 430.473 299.333 429 299.333C427.527 299.333 426.333 300.527 426.333 302ZM419.616 226.931L419.329 227.341L419.616 226.931ZM353.713 181.41L419.329 227.341L419.903 226.522L354.287 180.59L353.713 181.41ZM428.5 244.954V302H429.5V244.954H428.5ZM419.329 227.341C425.077 231.364 428.5 237.939 428.5 244.954H429.5C429.5 237.612 425.918 230.732 419.903 226.522L419.329 227.341Z" fill="white"/>
                        {/* 01 */}
                        <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,     ease: "easeInOut", delay: timerDelay.nodeLineDelay + 0 }} d="M237.667 138C237.667 139.473 236.473 140.667 235 140.667C233.527 140.667 232.333 139.473 232.333 138C232.333 136.527 233.527 135.333 235 135.333C236.473 135.333 237.667 136.527 237.667 138ZM53.6667 242C53.6667 243.473 52.4728 244.667 51 244.667C49.5272 244.667 48.3333 243.473 48.3333 242C48.3333 240.527 49.5272 239.333 51 239.333C52.4728 239.333 53.6667 240.527 53.6667 242ZM67.9936 177.029L68.1074 177.516L67.9936 177.029ZM51 198.451L51.5 198.451L51 198.451ZM235.114 138.487L68.1074 177.516L67.8798 176.542L234.886 137.513L235.114 138.487ZM51.5 198.451L51.5 242L50.5 242L50.5 198.451L51.5 198.451ZM68.1074 177.516C58.3802 179.789 51.5 188.462 51.5 198.451L50.5 198.451C50.5 187.998 57.7002 178.921 67.8798 176.542L68.1074 177.516Z" fill="white"/>
                        {/* 02 */}
                        <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,     ease: "easeInOut", delay: timerDelay.nodeLineDelay + 1 }} d="M254.667 181C254.667 182.473 253.473 183.667 252 183.667C250.527 183.667 249.333 182.473 249.333 181C249.333 179.527 250.527 178.333 252 178.333C253.473 178.333 254.667 179.527 254.667 181ZM179.667 302C179.667 303.473 178.473 304.667 177 304.667C175.527 304.667 174.333 303.473 174.333 302C174.333 300.527 175.527 299.333 177 299.333C178.473 299.333 179.667 300.527 179.667 302ZM186.384 226.931L186.671 227.341L186.384 226.931ZM252.287 181.41L186.671 227.341L186.097 226.522L251.713 180.59L252.287 181.41ZM177.5 244.954V302H176.5V244.954H177.5ZM186.671 227.341C180.923 231.364 177.5 237.939 177.5 244.954H176.5C176.5 237.612 180.082 230.732 186.097 226.522L186.671 227.341Z" fill="white"/>
                        {/* 03 */}
                        <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,     ease: "easeInOut", delay: timerDelay.nodeLineDelay + 2 }} d="M301.333 205C301.333 206.473 302.527 207.667 304 207.667C305.473 207.667 306.667 206.473 306.667 205C306.667 203.527 305.473 202.333 304 202.333C302.527 202.333 301.333 203.527 301.333 205ZM301.333 323C301.333 324.473 302.527 325.667 304 325.667C305.473 325.667 306.667 324.473 306.667 323C306.667 321.527 305.473 320.333 304 320.333C302.527 320.333 301.333 321.527 301.333 323ZM303.5 205V323H304.5V205H303.5Z" fill="white"/>
                     </svg>
                  </Box>

               </Flex>

               )
               // When dashboard is not loaded, show trigger button
               :
               (
                  // Animation trigger button to open the sample animations dashboard
                  <>
                     <Flex className="animSampleDashTriggerWrapper"
                        justifyContent={"center"}
                        alignItems={"center"}
                        position={"absolute"}
                        top={"179px"}
                        left={"105px"}
                        zIndex={"100"}
                        // border={"2px solid purple"}
                        >
                        <Button
                           height={"40px"}
                           width={"450px"}
                           fontSize="1.2rem"
                           fontWeight="700"
                           padding=".5rem 1rem"
                           color={"primary.500"}
                           bg="primary.50"
                           textTransform="uppercase"
                           borderRadius="999999px"
                           boxShadow={"4px 4px 8px #07323e94"}
                           onClick={() => setIsLoaded(!isLoaded)}
                           rightIcon={<BsHandIndexThumb />}
                           // border={"5px solid red"}
                        >
                        Sample Animations Dashboard
                        </Button>

                     </Flex>

                     <Box className="animSampleDashContainer"
                        display={"flex"}
                        justifyContent={"center"}
                        // width={"100%"}
                        padding={"2rem"}
                        bg={"primary.600"}
                        borderRadius={"1rem"}
                        position={"absolute"}
                        // position={"relative"}
                        top={"50px"}
                        // border={"1px solid magenta"}
                        >
                        <svg width="606" height="512" viewBox="0 0 606 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <circle cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 52 274)" fill="#FD1010"/>
                           <circle cx="303.5" cy="137.5" r="111.5" fill="#00414D"/>

                           <motion.path
                              variants={scaleAnim(timerDelay.circDelay + 0)}
                              // variants={ScaleAnimationVariant}
                              fillRule="evenodd" clipRule="evenodd"
                              d="M303.5 275C379.439 275 441 213.439 441 137.5C441 61.5608 379.439 0 303.5 0C227.561 0 166 61.5608 166 137.5C166 213.439 227.561 275 303.5 275ZM303.5 247C363.975 247 413 197.975 413 137.5C413 77.0248 363.975 28 303.5 28C243.025 28 194 77.0248 194 137.5C194 197.975 243.025 247 303.5 247Z" fill="#005F72"/>
                              {/* fill="#005F72" */}
                           <motion.path
                           // variants={scaleAnim(5)}
                           initial={{ scale: 0, opacity:0 }} animate={{ scale: .95, opacity:.75 }} transition={{ duration: 1, ease: "easeInOut", delay: timerDelay.nodeCardDelay + 2 }}
                           fillRule="evenodd" clipRule="evenodd" d="M303.5 275C379.439 275 441 213.439 441 137.5C441 61.5608 379.439 0 303.5 0C227.561 0 166 61.5608 166 137.5C166 213.439 227.561 275 303.5 275ZM303.5 247C363.975 247 413 197.975 413 137.5C413 77.0248 363.975 28 303.5 28C243.025 28 194 77.0248 194 137.5C194 197.975 243.025 247 303.5 247Z" fill="#0b404e"/>
                           {/* #0b404e timerDelay.circDelay + 1 */}
                           <circle cx="303.5" cy="137.5" r="100.5" fill="#4B8492"/>
                           <circle cx="303.5" cy="137.5" r="90.5" fill="#005F72"/>
                           <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: timerDelay.circDelay + 0 }} d="M372 137.5C372 175.332 341.332 206 303.5 206C265.668 206 235 175.332 235 137.5C235 99.6685 265.668 69 303.5 69C341.332 69 372 99.6685 372 137.5Z" fill="#005F72"/>
                           <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: timerDelay.circDelay + 0 }} fillRule="evenodd" clipRule="evenodd" d="M303.5 204C340.227 204 370 174.227 370 137.5C370 100.773 340.227 71 303.5 71C266.773 71 237 100.773 237 137.5C237 174.227 266.773 204 303.5 204ZM303.5 206C341.332 206 372 175.332 372 137.5C372 99.6685 341.332 69 303.5 69C265.668 69 235 99.6685 235 137.5C235 175.332 265.668 206 303.5 206Z" fill="#4B8492"/>
                           <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: timerDelay.circDelay + 0 }} fillRule="evenodd" clipRule="evenodd" d="M264.658 62.9999C237.814 77.0253 219.5 105.126 219.5 137.5C219.5 183.892 257.108 221.5 303.5 221.5C349.892 221.5 387.5 183.892 387.5 137.5C387.5 105.126 369.186 77.0253 342.342 62.9999L344.658 58.5684C373.087 73.4218 392.5 103.192 392.5 137.5C392.5 186.653 352.653 226.5 303.5 226.5C254.347 226.5 214.5 186.653 214.5 137.5C214.5 103.192 233.913 73.4218 262.342 58.5684L264.658 62.9999Z" fill="#4B8492"/>

                           {/* circle rails */}
                           {/* <motion.path initial={{ rotate: 0 }} animate={{ rotate: 720 }} transition={{ duration: 10, ease: easing, delay: timerDelay.circDelay + 0 }} */}
                           <motion.path initial={{ opacity: 0 }} animate={{ opacity: [1, 0, 1, 0, 0, 1] }} transition={{ duration: 2, ease: "easeInOut", delay: timerDelay.circDelay + 0 }}
                              fillRule="evenodd" clipRule="evenodd" d="M262.882 209.092C263.696 209.553 264.519 210 265.349 210.433L269.974 201.567C269.244 201.186 268.522 200.793 267.807 200.389L262.882 209.092ZM341.651 210.433C342.481 210 343.304 209.553 344.118 209.092L339.193 200.389C338.478 200.793 337.756 201.186 337.026 201.567L341.651 210.433ZM348.907 206.163C350.472 205.131 351.999 204.048 353.486 202.915L347.428 194.959C346.12 195.955 344.778 196.907 343.403 197.814L348.907 206.163ZM253.514 202.915C255.001 204.048 256.528 205.131 258.093 206.163L263.597 197.814C262.222 196.907 260.88 195.955 259.572 194.959L253.514 202.915ZM357.834 199.365C359.243 198.133 360.61 196.853 361.932 195.529L354.854 188.464C353.692 189.629 352.49 190.754 351.251 191.838L357.834 199.365ZM245.068 195.529C246.39 196.853 247.757 198.133 249.166 199.365L255.749 191.838C254.51 190.754 253.308 189.629 252.146 188.464L245.068 195.529ZM365.76 191.425C366.989 190.015 368.171 188.563 369.303 187.071L361.336 181.027C360.341 182.339 359.302 183.615 358.221 184.855L365.76 191.425ZM237.697 187.071C238.829 188.563 240.011 190.015 241.24 191.425L248.779 184.855C247.698 183.615 246.659 182.339 245.664 181.027L237.697 187.071ZM372.542 182.485C373.568 180.923 374.542 179.323 375.462 177.689L366.748 172.783C365.94 174.218 365.084 175.624 364.182 176.997L372.542 182.485ZM231.538 177.689C232.458 179.323 233.432 180.923 234.458 182.485L242.818 176.997C241.916 175.624 241.06 174.218 240.252 172.783L231.538 177.689ZM226.712 167.552C227.402 169.299 228.149 171.017 228.952 172.704L237.981 168.405C237.276 166.924 236.62 165.416 236.015 163.883L226.712 167.552ZM378.048 172.704C378.851 171.017 379.598 169.299 380.288 167.552L370.985 163.883C370.38 165.416 369.724 166.924 369.019 168.405L378.048 172.704ZM382.168 162.258C382.732 160.48 383.237 158.676 383.681 156.848L373.963 154.489C373.573 156.093 373.13 157.676 372.636 159.237L382.168 162.258ZM223.319 156.848C223.763 158.676 224.268 160.48 224.832 162.258L234.364 159.237C233.87 157.676 233.427 156.093 233.037 154.489L223.319 156.848ZM384.818 151.347C385.132 149.511 385.385 147.656 385.575 145.782L375.627 144.771C375.459 146.418 375.237 148.048 374.961 149.659L384.818 151.347ZM221.425 145.782C221.615 147.656 221.868 149.511 222.182 151.347L232.039 149.659C231.763 148.048 231.541 146.418 231.373 144.771L221.425 145.782ZM385.953 140.181C385.984 139.25 386 138.315 386 137.376C386 136.473 385.985 135.572 385.956 134.675L375.962 134.998C375.987 135.788 376 136.58 376 137.376C376 138.203 375.986 139.026 375.959 139.846L385.953 140.181ZM221 137.376C221 138.315 221.016 139.25 221.047 140.181L231.041 139.846C231.014 139.026 231 138.203 231 137.376C231 136.58 231.013 135.788 231.038 134.998L221.044 134.675C221.015 135.572 221 136.473 221 137.376ZM385.608 129.298C385.432 127.496 385.198 125.712 384.908 123.946L375.041 125.567C375.295 127.118 375.501 128.685 375.655 130.268L385.608 129.298ZM222.092 123.946C221.802 125.712 221.568 127.496 221.392 129.297L231.345 130.268C231.499 128.685 231.705 127.118 231.959 125.567L222.092 123.946ZM383.858 118.651C383.448 116.891 382.982 115.153 382.461 113.438L372.893 116.344C373.35 117.849 373.759 119.374 374.119 120.918L383.858 118.651ZM224.539 113.438C224.018 115.153 223.552 116.891 223.142 118.65L232.881 120.918C233.241 119.374 233.65 117.849 234.107 116.344L224.539 113.438ZM380.723 108.327C380.085 106.638 379.394 104.976 378.65 103.342L369.548 107.483C370.201 108.917 370.807 110.376 371.367 111.859L380.723 108.327ZM228.35 103.342C227.606 104.976 226.915 106.638 226.277 108.327L235.633 111.859C236.193 110.376 236.799 108.917 237.452 107.483L228.35 103.342ZM376.256 98.5069C375.403 96.9189 374.5 95.3622 373.549 93.839L365.067 99.1368C365.903 100.475 366.696 101.843 367.445 103.237L376.256 98.5069ZM233.452 93.8389C232.5 95.3622 231.597 96.9189 230.744 98.5069L239.555 103.237C240.304 101.843 241.097 100.475 241.933 99.1367L233.452 93.8389ZM370.542 89.3592C369.491 87.8983 368.393 86.4733 367.251 85.0863L359.532 91.4437C360.536 92.6632 361.501 93.9159 362.425 95.2L370.542 89.3592ZM239.749 85.0863C238.607 86.4733 237.509 87.8983 236.458 89.3592L244.575 95.1999C245.499 93.9159 246.464 92.6631 247.468 91.4437L239.749 85.0863ZM363.688 81.0368C362.457 79.7262 361.184 78.4558 359.87 77.2279L353.042 84.5333C354.197 85.6132 355.317 86.7304 356.399 87.8829L363.688 81.0368ZM247.13 77.2279C245.816 78.4558 244.543 79.7262 243.312 81.0368L250.601 87.8829C251.683 86.7304 252.803 85.6132 253.958 84.5333L247.13 77.2279ZM355.812 73.675C354.423 72.5362 352.995 71.4417 351.532 70.3938L345.71 78.5241C346.996 79.4453 348.251 80.4076 349.473 81.409L355.812 73.675ZM255.468 70.3938C254.005 71.4417 252.577 72.5362 251.188 73.675L257.527 81.409C258.749 80.4076 260.004 79.4453 261.29 78.524L255.468 70.3938ZM264.627 64.7007C263.037 65.55 261.479 66.4498 259.954 67.3977L265.233 75.8905C266.573 75.0573 267.943 74.2667 269.339 73.5205L264.627 64.7007ZM347.046 67.3978C345.521 66.4498 343.963 65.55 342.373 64.7007L337.661 73.5205C339.057 74.2667 340.427 75.0573 341.767 75.8905L347.046 67.3978ZM274.453 60.2523C272.763 60.887 271.1 61.5755 269.466 62.3155L273.59 71.4254C275.026 70.7754 276.486 70.1708 277.97 69.6135L274.453 60.2523ZM337.534 62.3155C335.9 61.5755 334.237 60.887 332.547 60.2523L329.03 69.6135C330.514 70.1708 331.974 70.7754 333.41 71.4254L337.534 62.3155ZM327.435 58.5216C325.72 58.0033 323.982 57.5392 322.222 57.1314L319.964 66.8732C321.51 67.2314 323.036 67.6389 324.542 68.0939L327.435 58.5216ZM284.778 57.1314C283.018 57.5392 281.28 58.0033 279.565 58.5216L282.458 68.0939C283.964 67.6389 285.49 67.2314 287.036 66.8732L284.778 57.1314ZM295.424 55.3901C293.623 55.5649 291.839 55.7976 290.073 56.0863L291.687 65.9552C293.238 65.7016 294.806 65.497 296.39 65.3433L295.424 55.3901ZM316.927 56.0863C315.161 55.7976 313.377 55.5649 311.576 55.3901L310.61 65.3433C312.194 65.497 313.762 65.7016 315.313 65.9552L316.927 56.0863ZM303.5 55C302.597 55 301.697 55.0145 300.8 55.0433L301.121 65.0382C301.911 65.0128 302.704 65 303.5 65C304.296 65 305.089 65.0128 305.879 65.0382L306.2 55.0433C305.303 55.0145 304.403 55 303.5 55Z" fill="#A73407"/>
                           <path d="M364 137.5C364 170.913 336.913 198 303.5 198C270.087 198 243 170.913 243 137.5C243 104.087 270.087 77 303.5 77C336.913 77 364 104.087 364 137.5Z" fill="#F05D1A"/>
                           <path fillRule="evenodd" clipRule="evenodd" d="M303.5 196C335.809 196 362 169.809 362 137.5C362 105.191 335.809 79 303.5 79C271.191 79 245 105.191 245 137.5C245 169.809 271.191 196 303.5 196ZM303.5 198C336.913 198 364 170.913 364 137.5C364 104.087 336.913 77 303.5 77C270.087 77 243 104.087 243 137.5C243 170.913 270.087 198 303.5 198Z" fill="#FCCDB8"/>
                           <circle cx="303.5" cy="137.5" r="51.5" fill="#FDF1EC"/>
                           {/* <circle cx="303.5" cy="137.5" r="51.5" fill="#FDF1EC"/> */}

                        </svg>

                     </Box>
                  </>
               )
            }
         </Box>
      </>

	);
};

export default AnimationSamplesDashboard;
