/*--= Styleguide dashboard page component =--*/
import { Box, Button, Grid, GridItem, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BiStop } from "react-icons/bi";
import { BsCardImage } from "react-icons/bs";
import { FaArrowRight, FaRegClone } from "react-icons/fa";
import { GoTypography } from "react-icons/go";
import { IoColorPaletteSharp, IoLogoApple, IoRadioButtonOn } from "react-icons/io5";
import { MdAnimation } from "react-icons/md";
import { TbForms } from "react-icons/tb";
import { Link } from "react-router-dom";
import { H1Header, H2Header, HeroBoxStyle, ImageSrcStyle, PrimaryTextStyle } from "../../assets/styles/Styles";
import Layout from "../Layout";
import HeroTemplate from "../hero/HeroTemplate";
import styleguideIntroBGImage from "./../../assets/images/styleguide/backgroundStyleguide5.jpg";
// import styleguideHeroHorizontal from "./../../assets/images/styleguide/bgStyleguide-Horizontal.png";
import styleguideHeroHorizontal from "./../../assets/images/styleguide/bgStyleguidelines2.jpg";
import loginForm from "./../../assets/images/styleguide/loginForm.jpg";
import StyleguideDashCard from "./StyleguideDashCard";
/*--= FramerMotion =--*/
import { useAnimate } from 'framer-motion';
import { MotionBox, MotionFlex, easing } from "src/assets/variables/Variables";

const gridTemplateDesignUno = {
	base: `
     "one"
     "two"
     "three"
     "four"
     "five"
     "six"
     "seven"
     "eight"
     "nine"
     "ten"
   `,
	md: `
     "one one one one one one"
     "two two three three three three"
     "four four four four four four"
     "five five six six seven seven"
     "eight eight eight nine nine nine"
     "ten ten ten ten ten ten"
   `,
	lg: `
     "one one one one one one"
     "two two three three four four"
     "five five six six seven seven"
     "eight eight  nine nine ten ten"
   `,
	xl: `
     "one   one   one   one   one   one   one   one"
     "two   two   three three four  four  five  five"
     "six   six   six   six   seven seven seven seven"
     "eight eight nine nine  nine  nine  ten   ten"
   `,
	// xl: `
   //   "one one one one one one"
   //   "two two three three three three"
   //   "four four four four five five"
   //   "six six six seven seven seven"
   //   "eight eight eight eight nine nine"
   //   "ten ten ten ten ten ten"
   // `,
};

const dashboardData = {
	shortIntro  : "A set of standards for UX & Dev Teams",
	title       : "Mini Style Guide",
	description : "A brand style guide is indispensable for maintaining pattern consistency, professionalism, and clarity in brand communication.",
	imageIntro  : styleguideIntroBGImage,
	content     : [
		{
			gridArea: "two",
			yStart: 0,
         yEnd: 0,
         xStart: -400,
         xEnd: 0,
         duration: .5,
         delay: 0,
         classname: "styleguide-DashLogo",
			title: "Brand Logo",
			description: "A branding logo is a unique symbol, design, or emblem that represents a company, product, service, or organization.",
			isImage: false,
			image: "none",
         icon: <IoLogoApple />,
         color: "accent.300",
			imageSize: "220px",
			buttonLabel: "Details",
			buttonLink: "/brandLogo",
			linkTarget: "_self",
		},
		{
			gridArea: "three",
			yStart: 0,
         yEnd: 0,
         xStart: 200,
         xEnd: 0,
         duration: .75,
         delay: 0,
         classname: "styleguide-DashTypography",
			title: "Typography",
			description: "Typography is an essential component of a style guide as it ensures consistency, reinforces brand identity...",
			isImage: false,
			image: "none",
         icon: <GoTypography />,
         color: "success.300",
			imageSize: "220px",
			buttonLabel: "Details",
			buttonLink: "/typography",
			linkTarget: "_self",
		},
		{
			gridArea: "four",
			yStart: 0,
         yEnd: 0,
         xStart: -200,
         xEnd: 0,
         duration: 1,
         delay: .5,
         classname: "styleguide-DashColorPalette",
			title: "Color Palette",
			description: "A color palette is a crucial element of a style guide for several reasons...",
			isImage: false,
			image: "none",
         icon: <IoColorPaletteSharp />,
         color: "primary.200",
			imageSize: "220px",
			buttonLabel: "Details",
			buttonLink: "/colorpalette",
			linkTarget: "_self",
		},
		{
			gridArea: "five",
			yStart: 0,
         yEnd: 0,
         xStart: -200,
         xEnd: 0,
         duration: 1,
         delay: 1.25,
         classname: "styleguide-DashButtons",
			title: "Buttons",
			description: "Buttons are essential elements in style guides, dictating their design, size, color, and behavior...",
			isImage: false,
			image: "none",
         icon: <IoRadioButtonOn />,
         color: "danger.300",
			imageSize: "220px",
			buttonLabel: "Details",
			buttonLink: "/buttons",
			linkTarget: "_self",
		},
		{
			gridArea: "six",
			yStart: 0,
         yEnd: 0,
         xStart: -400,
         xEnd: 0,
         duration: 1,
         delay: 1,
         classname: "styleguide-DashAnimations",
			title: "Animations",
			description: "Animations play a vital role in enhancing user experience by providing feedback, guiding navigation, increasing engagement...",
			isImage: false,
			image: "none",
         icon: <MdAnimation />,
         color: "warning.300",
			imageSize: "220px",
			buttonLabel: "Details",
			buttonLink: "/animations",
			linkTarget: "_self",
		},
		{
			gridArea: "seven",
			yStart: 200,
         yEnd: 0,
         xStart: 0,
         xEnd: 0,
         duration: 1,
         delay: .75,
         classname: "styleguide-DashLoginForm",
			title: "Forms",
			description: "Build, test, and deploy modern web apps rapidly right from your browser with the industry’s most open, enterprise-grade low-code Rapid application development platform.",
			isImage: false,
			// isImage: true,
			image: loginForm,
         icon: <TbForms />,
         color: "accent.300",
			imageSize: "420px",
			buttonLabel: "Details",
			buttonLink: "/forms",
			linkTarget: "_self",
		},
		{
			gridArea: "eight",
			yStart: 0,
         yEnd: 0,
         xStart: -200,
         xEnd: 0,
         duration: 1,
         delay: .75,
         classname: "styleguide-DashCard",
			title: "Cards",
			description: "Cards have become an integral part of user interface design, offering a visually appealing and organized way to present information.",
			isImage: false,
			image: "none",
         icon: <BiStop />,
         color: "neutral.300",
			imageSize: "220px",
			buttonLabel: "Details",
			buttonLink: "/card",
			linkTarget: "_self",
		},
		{
			gridArea: "nine",
			yStart: 0,
         yEnd: 0,
         xStart: 400,
         xEnd: 0,
         duration: 1,
         delay: 1.25,
         classname: "styleguide-DashHero",
			title: "Hero",
			description: "A hero banner serves as the first visual encounter for users, offering an immediate impression of the brand's aesthetics, values, and identity.",
			isImage: false,
			image: "none",
         icon: <BsCardImage />,
         color: "success.300",
			imageSize: "220px",
			buttonLabel: "Details",
			buttonLink: "/hero",
			linkTarget: "_self",
		},
		{
			gridArea: "ten",
			yStart: 400,
         yEnd: 0,
         xStart: 0,
         xEnd: 0,
         duration: 1,
         delay: .95,
         classname: "styleguide-DashModal",
			title: "Modal",
			description: "Build, test, and deploy modern web apps rapidly right from your browser with the industry’s most open, enterprise-grade low-code Rapid application development platform.",
			isImage: false,
			image: "none",
         icon: <FaRegClone />         ,
         color: "danger.300",
			imageSize: "220px",
			buttonLabel: "Details",
			buttonLink: "/modal",
			linkTarget: "_self",
		},
	],
};

const sxImage = {
   // boxSize     : {content.imageSize},
   boxSize     : "300px",
   borderRadius: "md",
   // border      : "2px solid",
   // borderColor : borderModeV,
   // borderColor : "yellow", //designFlat ? {borderModeV} : {borderModeH},
   boxShadow   : "xl",
   margin      : "2rem auto",
   // margin    : "2rem 0",
   position    : "relative",
   // left        : designFlat ? {base:"0", md:"40px"} : { base: "0px", lg: "0px" },
   // top         : "30px",
   objectPosition : "-2px",
   // background     : cardBGMode,
   // backgroundImage: cardGradBGMode,
   zIndex         : "10",
};

const sxHeroBodyContainer = {
   display        :  "flex",
   flexDirection  :  "column",
   // alignItems     :  "flex-start",
   width          :  {base:"100%", md:"85%", lg:"75%"},
   background     :  "#05242db4",
   padding        :  "2rem",
   borderRadius   :  "1rem",
   position       :  "relative",
   margin         :  "0 auto",
   top            :  {base:"-360px", lg:"-400px"},
   border         :  "1px solid",
   borderColor    :  "primary.500",
}

const sxShortIntro = {
   fontSize       :  {base: "1rem", lg: "1.2rem"},
   fontWeight     :  "semibold",
   color          :  "primary.50",
   textAlign      :  {base:"center", md:"left"},
   textTransform  :  "capitalize",
   paddingLeft    :  {base: 0, lg: 14},
   marginBottom   :  {base:0, md:-1, lg:-3},
}

const sxTitle = {
   fontSize       :  { base: "2.5rem", lg: "4.5rem" },
   textAlign      :  {base:"center", md:"left"},
   textTransform  :  "capitalize",
   marginBottom   :  5,
   color          :  "primary.100",
   /*-= gradated text =-*/
   bgGradient     :  "linear(to-r, success.200 10%, accent.400 50%, yellow.300 95%)",
   bgClip         :  "text"
}
const sxDescription = {
   fontSize    :  { base: "1rem", md: "1.25rem", lg: "1.5rem" },
   textAlign      :  {base:"center", md:"left"},
   color       :  "primary.50",
   lineHeight  :  1.3,
   textShadow  :  "2px 2px 4px black",
   // border      :  "1px solid",
}



const Styleguide = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const cardContainerBGMode = useColorModeValue("primary.100", "primary.300");
	const cardContainerBorderMode = useColorModeValue("primary.50", "primary.200");
	const cardHeaderColorMode = useColorModeValue("primary.900", "primary.50");

   const [scope, animate] = useAnimate();

   // const handleAnimate = () => {
   const handleAnimate = async () => {
      // alert("animate");
      // animate(scope.current, {opacity:0} );
      // animate(scope.current, {opacity:0} );
      // await animate(scope.current, { x: 150 });
      // await animate(scope.current, { rotate: "360deg" }, { duration: 1 });
      await animate(".icon2", { x: 150 });
      await animate(".icon2", { rotate: "360deg" }, { duration: 1 });
      // animate("Typography", {opacity:0} );
      // {dashboardData.content.map((content) => (
      //    animate(content.title, {opacity:0} ))
      // )
   }

   /*--= Test: =--*/
   // const [hasLoaded, setHasLoaded] = useState(false);

   //  useEffect(() => {
      //      setTimeout(() => {
         //        setHasLoaded(true);
         //      }, 2000);
         //    }, []);

   // const [isLoading, setIsLoading] = useState(true);
   // useEffect(() => {
   //    setTimeout(() => {
   //      setIsLoading(false);
   //    }, 6500)});

	return (

		<Layout>
      {/*--= FramerMotion =--*/}
      {/* <MotionFlex
         width= "210px"
         height= "210px"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
      /> */}

			{/* Hero Template as Composition: Style guide */}
         <HeroTemplate
            image={
               /*-= Background image =-*/
               <MotionFlex
                  // width= "210px"
                  // height= "210px"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: .35 }}
                  transition={{
                     type: "tween",
                     duration: 1,
                     ease: "easeInOut",
                     // delay: 2000
                   }}
                  //  transition={{ ease: easing, duration: 1, delay: 2000 }}
                  >
                  <HeroBoxStyle
                     backgroundImage      =  {styleguideHeroHorizontal}
                     backgroundRepeat     =  "no-repeat"
                     backgroundSize       =  "cover"
                     backgroundPosition   =  {{base:"-220px 0px", md:"-120px 0px", lg:"0px 0px"}}
                     borderRadius         =  "1rem"
                  />
               </MotionFlex>
            }

            content = {
               <>
                  <MotionBox className="styleguide-HeroBodyContainer" sx={sxHeroBodyContainer}
                     initial={{ opacity: 0, x: 1200 }}
                     animate={{ opacity: 1, x: 0 }}
                     // transition={{
                     //    type: "tween",
                     //    duration: 1,
                     //    ease: "easeInOut",
                     // }}
                     transition={{ ease: easing, duration: 1, delay: 1 }}
                  >

                     {/* Short Intro */}
                     <PrimaryTextStyle className="styleguide-ShortIntro" sx={sxShortIntro} >
                        {dashboardData.shortIntro}
                     </PrimaryTextStyle>

                     {/* Hero Title */}
                     <H1Header className="styleguide-Title" sx={sxTitle} >
                        {dashboardData.title}
                     </H1Header>

                     {/* Desription */}
                     <PrimaryTextStyle className="styleguide-Description" sx={sxDescription} >
                        {dashboardData.description}
                     </PrimaryTextStyle>

                  </MotionBox>
               </>
            }
         />


         {/* Grid Container */}
			<Box className="styleguide-GridContainer"
            // ref         =  {scope}
            pos         =  {"relative"}
            top         =  {{base:"-370px", sm:"-350px", lg:"-390px", xl:"-370px"}}
            padding     =  {{base:"1rem", lg:"0rem 1rem 1rem"}}
            margin      =  {"0 auto"}
            width       =  {"90%"}
            border      =  {"1px solid"}
            borderColor =  {cardContainerBorderMode}
            borderRadius=  {"1rem"}
            background  =  {cardContainerBGMode}
            boxShadow   =  {"xl"}
            >

				{/* Grid Layout */}
				<Grid templateAreas={gridTemplateDesignUno} gap={5}
               ref={scope}
               >
					{dashboardData.content.map((content, index) => (
						<GridItem key={index} area={content.gridArea} className={content.classname} height={"100%"}>

                     <MotionBox
                        initial={{opacity:0, y:content.yStart, x:content.xStart}}
                        animate={{opacity:1, y:content.yEnd, x:content.xEnd}}
                        transition={{ease:easing, duration:content.duration, delay:content.delay}}
                        height={"inherit"}
                        >
							<StyleguideDashCard
                        icon  = {content.icon}
                        color  = {content.color}
                        content  =  {
                           <>
                              <H1Header
                                 fontSize={"1.25rem"}
                                 fontWeight={"400"}
                                 color={cardHeaderColorMode}
                                 textAlign={"left"}
                                 padding={"1rem 0 0rem 1.2rem"}
                                 // border="1px solid"
                                 >
                                 {content.title}
                              </H1Header>
                              {content.isImage ? <ImageSrcStyle src={content.image} sx = {sxImage} /> : undefined}
                              <Text margin={".75rem 1rem 0 1.2rem"} fontSize={".9rem"} fontWeight={"normal"} textAlign={"left"}>
                                 {content.description}
                              </Text>
                           </>
                        }
                        action = {
                           <Link to={content.buttonLink} target={content.linkTarget}>
                              <Button
                                 display={"flex"}
                                 size={"sm"}
                                 margin={"2rem 0 2rem 1rem"}
                                 // top="10px"
                                 variant={colorMode === "light" ? "primaryLite" : "outline"}
                                 rightIcon={<FaArrowRight />}
                                 >
                                 {content.buttonLabel}
                              </Button>
                           </Link>
                        }
                     />

                     </MotionBox>

						</GridItem>
					))}
				</Grid>
			</Box>


		</Layout>

	);
};

export default Styleguide;
