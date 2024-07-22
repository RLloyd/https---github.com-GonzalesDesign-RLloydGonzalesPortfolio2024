import { Box, Flex, Grid, GridItem, Stack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FadeTitle, H1Header, H2Header, ImageSrcStyle, XSmallTextStyle } from "../../assets/styles/Styles";
import Layout from "../Layout";
import StyleguideSubMenus from "./StyleguideSubMenus";
import heroBanner from "./../../assets/images/styleguide/HeroBanner.png";
import heroLeftBanner from "./../../assets/images/styleguide/HeroLeftImg.png";
import { cubicBezier, motion } from "framer-motion";

const sectionData = {
	title: "Hero Banner",
	subTitle: "Attention Everyone!",
   leftColumn: {
      image: heroLeftBanner,
      text: "",
   },
	intro: {
		introTitle: "Why is hero banner important?",
		introText: "A hero banner serves as the first visual encounter for users, offering an immediate impression of the brand's aesthetics, values, and identity.",
		image: heroBanner,
	},

	content: [
		{
			id: 1,
			subTitle: "Elevating brand presence: The hero banner advantage",
			description: [
				{ id: "1.", titleList: "First Impressions: ",   list: "It's the first visual element users see on a webpage, app, or document, making it crucial for leaving a positive initial impression." },
				{ id: "2.", titleList: "Brand Identity: ",      list: "It sets the tone for the brand's visual identity, conveying its personality, values, and aesthetics through color, imagery, and typography." },
				{ id: "3.", titleList: "User Engagement: ",     list: "A captivating hero banner can attract and engage users, encouraging them to explore further and interact with the content." },
				{ id: "4.", titleList: "Communicating Messages: ", list: "It provides a space to communicate important messages, such as promotions, announcements, or brand stories, effectively capturing the audience's attention." },
				{ id: "5.", titleList: "Navigation Aid: ",      list: "In websites and apps, hero banners often include navigational elements or call-to-action buttons, guiding users to explore specific sections or take desired actions." },
				{ id: "6.", titleList: "Consistency: ",         list: "By maintaining consistent branding elements across hero banners, brands reinforce their identity and help users recognize and remember them more easily." },
				{ id: "",   titleList: "Overall, ",             list: "hero banners play a crucial role in branding, user experience, and communication strategies, making them an essential component of websites and apps design." },
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
      <H2Header
         fontWeight={"500"}
         margin={"3rem 0 .5rem"}
      >
         {content.subTitle}
      </H2Header>

      {/* <Box> */}
      {content.description?.map((item, index) => (
         <Box key={index} marginBottom={"1rem"}>
            <Stack direction={"row"}>
               <Box fontSize={{base:"14px", md:"1.125rem"}} fontWeight={"700"}>{item.id} </Box>
               <Box>
                  <Box as={"span"} fontSize={{base:"14px", md:"1.125rem"}} fontWeight={"700"}>
                     {item.titleList}
                  </Box>
                  <Box as={"span"} fontSize={{base:"14px", md:"1.125rem"}}>{item.list}</Box>
               </Box>
            </Stack>
         </Box>
      ))}
   </li>
));

const HeroBanner = () => {
   const backgroundColor = useColorModeValue("primary.50", "primary.600");
	const { colorMode, toggleColorMode } = useColorMode();
	const BorderColorStyle = useColorModeValue("primary.100", "primary.300");
   const MotionFlex = motion(Flex)
   const easing = cubicBezier(0.35, 0.27, 0.3, 0.83)

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
            <GridItem area="one"
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
               <Box className    =  "dashboardCard"
                  display        =  {{base:"none", lg:"flex"}}
                  flexDirection  =  {"column"}
                  marginBottom   =  {"5rem"}
                  gap            =  {"70px"}
                  // border={"1px solid"}
               >
                  <MotionFlex className = {"leftColContainerAnimation"}
                     initial={{opacity:0, y:500}}
                     animate={{opacity:1, y:0}}
                     transition={{type:"spring", stiffness:80, damping:20}}
                     // transition={{type:"tween", duration:1, ease:"easeInOut"}}
                     >
                     <ImageSrcStyle
                        src={sectionData.leftColumn.image}
                        // src={colorMode === "light" ? GDLogoDark : GDLogoLight}
                        top      =  {"1rem"}
                        width    =  {"300px"}
                        height   =  {"420px"}
                        margin   =  {"12px 12px 0 0"}
                        objectFit=  {"contain"}
                        // border={"1px solid"}
                     />
                  </MotionFlex>
               </Box>
            </GridItem>

            {/*--= Intro & Image =--*/}
            <GridItem area="three"
               fontSize={"1.1rem"}
               textAlign={"left"}
               padding={"2rem 2rem 0"}
               borderLeft={"10px solid"}
               borderColor={BorderColorStyle}
               // border={"1px solid yellow"}
               >
               {/*--= Intro description =--*/}
               <MotionFlex className = {"headerIntroWrapper"}
                  flexDirection={"column"}
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{ease:easing, duration:1, delay:0}}
                  >
                  <H2Header fontSize="32px">{sectionData.intro.introTitle}</H2Header>
                  <Box fontSize={{base:"16px",md:"20px"}}>
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
                  background={"primary.400"}
                  height={"auto"}
                  >
                  {/*--= Dashboard image =--*/}
                  <ImageSrcStyle
                     // key={index}
                     src={sectionData.intro.image}
                     objectFit={"contain"}
                     padding={"1rem"}
                  />
               </MotionFlex>
            </GridItem>

            {/*--= Brand content =--*/}
            <GridItem area="four"
               fontSize={"1.1rem"}
               textAlign={"left"}
               padding={"2rem"}
               borderLeft={"1px solid"}
               borderColor={BorderColorStyle}
               // borderColor={"primary.100"}
               >
               <MotionFlex
                  initial={{opacity:0, y:500}}
                  animate={{opacity:1, y:0}}
                  transition={{ease:easing, duration:.5, delay:.75}}
                  >
                  <ul>{brandContent}</ul>
               </MotionFlex>
            </GridItem>
         </Grid>

		</Layout>
	);
};

export default HeroBanner;
