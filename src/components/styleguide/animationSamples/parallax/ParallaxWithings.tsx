import { useScroll, useTransform } from "framer-motion";
import { Children, useRef } from "react";
// import { H1Header, H2Header, H3Header, ImageSrcStyle, LinkButton, PrimaryAccentButton, GridContentTemplate } from "@styles/Styles";
// import { ImageSrcStyle } from "../../../../assets/styles/Styles";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import Layout from "@components/Layout";
import StyleguideSubMenus from "@components/styleguide/StyleguideSubMenus";
import { H1Header, ImageSrcStyle, LinkButton } from "@styles/Styles";
import { MotionBox } from "src/assets/variables/Variables";
import Carousel from "../carousel/Carousel";
import ParallaxCinco from "./components/ParallaxCinco";
import ParallaxDos from "./components/ParallaxDos";
import ParallaxTres from "./components/ParallaxTres";
import ParallaxUno from "./components/ParallaxUno";

import CodeHilite from "@components/hilights/CodeHilite";
import Copy2Clipboard from "@components/hilights/Copy2Clipboard";
import carousel01 from "@images/styleguide/Carousel/carousel-filipinas/carousel-filipinas-01.webp";
import carousel02 from "@images/styleguide/Carousel/carousel-filipinas/carousel-filipinas-02.webp";
import carousel03 from "@images/styleguide/Carousel/carousel-filipinas/carousel-filipinas-03.webp";
import carousel04 from "@images/styleguide/Carousel/carousel-filipinas/carousel-filipinas-04.webp";
import carousel05 from "@images/styleguide/Carousel/carousel-filipinas/carousel-filipinas-05.webp";
import carousel07 from "@images/styleguide/Carousel/carousel-filipinas/carousel-filipinas-07.webp";
import carousel08 from "@images/styleguide/Carousel/carousel-filipinas/carousel-filipinas-08.webp";

const parallaxCodeBlock = `
   // Parallax.tsx
   /*-=Sample code=-*/
   const Parallax = () => {
      const containerRef = useRef(null);
      const {scrollYProgress} = useScroll({
         target: containerRef,
         offset: ["start end", "end start"],
      })
      const yPos1 =  useTransform(scrollYProgress, [0, 1], ["100px", "-200px"]);
      const yPos2 =  useTransform(scrollYProgress, [0, 1], ["220px", "-400px"]);
      const yPos3 =  useTransform(scrollYProgress, [0, 1], ["950px", "-2000px"]);

      return (
         <Box className="mainContainer"
            position = {"relative"}
            height = {"4000px"}
            width = {"90%"}
            margin = {"0 auto"}
            >
            <Box className="parallaxGroupContainer"
               position={"relative"}
               height={"1600px"}
               zIndex={"10"}
               >
               <MotionBox className={"image1Wrapper"}
                  style={{ y:yPos1 }}
                  position={"sticky"}
                  top={"50px"}
                  zIndex={"1"}
                  >
                  <Component1/>
               </MotionBox>
               <MotionBox
                  style={{y:yPos2}}
                  position={"sticky"}
                  top={"70px"}
                  zIndex={"2"}
                  >
                  <Component2/>
               </MotionBox>
               <MotionBox
                  style={{y:yPos3, scale:sImg3}}
                  position={"sticky"}
                  top={"0px"}
                  zIndex={"3"}
                  >
                  <Component3/>
               </MotionBox>
            </Box>
         </Box>
      )
   }
`;

const carouselImages = [
   {image: carousel01},
   {image: carousel02},
   {image: carousel03},
   {image: carousel04},
   {image: carousel05},
   // {image: carousel07},
   // {image: carousel08},
];

const ParallaxWithings = () => {
   const unoHeight = useRef(0);
   const heightRef = useRef<HTMLDivElement>(null)
   const containerRef = useRef(null);

   const {scrollYProgress} = useScroll({
      target: containerRef,
      offset: ["start end", "end start"],
   })
   const yImg1 =  useTransform(scrollYProgress, [0, 1],   ["100px", "-200px"]);
   const yImg2 =  useTransform(scrollYProgress, [0, 1],   ["220px", "-400px"]);
   const oImg2 =  useTransform(scrollYProgress, [0, 1],   ["0", "1.75"]);
   const yImg3 =  useTransform(scrollYProgress, [0, 1],   ["950px", "-2000px"]);
   const sImg3 =  useTransform(scrollYProgress, [.05, 1], [.15, 2.25]);

   const yImg4 =  useTransform(scrollYProgress, [0, 1],   ["1800px", "-2800px"]);
   const yImg5 =  useTransform(scrollYProgress, [0, 1],   ["-100px", "-1000px"]);
   const yImg6 =  useTransform(scrollYProgress, [0, 1],   ["-50px", "-1000px"]);
   const yImg7 =  useTransform(scrollYProgress, [0, 1],   ["-0px", "-1000px"]);

   const sm    =  useTransform(scrollYProgress, [0, 1],   ["0px", "100px"]);
   const md    =  useTransform(scrollYProgress, [0, 1],   ["5000px", "-12000px"]);
   const birdsX = useTransform(scrollYProgress, [0, 1],   [0, 7000])
   const birdsY = useTransform(scrollYProgress, [0, 1],   [0, 1000])

   const { colorMode } = useColorMode();

   return (
      <Layout>
         <MotionBox className={"subMenuWrapper"}
            position =  {"sticky"}
            top      =  {"-34px"}
            zIndex   =  {"5000"}
            // border={"1px solid yellow"}
            // bg={"primary.50"}
            >
            <StyleguideSubMenus />
         </MotionBox>

         <Box className="mainContainer"
            // ref={containerRef}
            // className={styles.container}
            // style={{height:"5000px"}}
            position = {"relative"}
            height = {"4000px"}
            width = {"90%"}
            margin = {"0 auto"}
            // border={"1px solid magenta"}
            >
            <Box className="parallaxGroup1Container"
               // className={styles.images}
               position={"relative"}
               height={"1600px"}
               // height={"1600px"}
               // width={"90%"}
               // border={"4px solid cyan"}
               zIndex={"10"}
               >
               {/* <h1>Render Count: {unoHeight.current}</h1> */}
               {/* Image 01 */}
               <MotionBox className={"image1Wrapper"}
                  // className={styles.img01}
                  // ref={unoHeight}
                  // height = {unoHeight.current}
                  // height={"auto"}
                  // width={"80%"}
                  style={{ y:yImg1 }}
                  // {unoHeight.current = heightRef.current!.offsetHeight}

                  // style={{y:yImg1}}
                  position={"sticky"}
                  top={"50px"}
                  zIndex={"1"}
                  >
                  <ParallaxUno/>
                  {/* <ImageSrcStyle src={ParImg01}/> */}
               </MotionBox>

               {/* Image 02 */}
               <MotionBox
                  // className={styles.img02}
                  style={{y:yImg2}}
                  // style={{y:yImg2, opacity:oImg2}}
                  // opacity={"0px"}
                  position={"sticky"}
                  top={"70px"}
                  zIndex={"2"}
                  >
                  <ParallaxDos/>
                  {/* <ImageSrcStyle src={ParImg02}/> */}
               </MotionBox>

               {/* Image 03 */}
               <MotionBox
                  // className={styles.img03}
                  style={{y:yImg3, scale:sImg3}}
                  position={"sticky"}
                  top={"0px"}
                  zIndex={"5"}
                  >
                  <ParallaxTres/>
                  {/* <ImageSrcStyle src={ParImg03}/> */}
               </MotionBox>
            </Box>

            <Box className="parallaxGroup2Container"
               // border={"2px solid yellow"}
               >

               <Box  className="parallaxGroup2Wrapper"
                  bg={"primary.50"}
                  padding={"1rem"}
                  borderRadius={"1rem"}
                  // border={"4px solid grey"}
                  >

                  <Box className={"caroParaGroupWrapper"}
                     display={"flex"}
                     flexDirection={{base:"column", lg:"row"}}
                     gap={4}
                     position={"relative"}
                     height={"auto"}
                     // height={"2000px"}
                     // top={"200px"}
                     // padding={"1rem"}
                     // zIndex={"15"}
                     // bg={"primary.50"}
                     // borderRadius={"1rem"}
                     // border={"4px solid red"}
                  >
                     <MotionBox className={"carouselWrapper"}
                        position={{base:"relative", lg:"sticky"}}
                        height={"fit-content"}
                        // style={{y:yImg5}}
                        top={{base:"0px", lg:"50vh"}}
                        // top={{base:"0px", lg:"650px"}}
                        // zIndex={"5000"}
                        // border={"4px solid yellowgreen"}
                        // bg={"primary.50"}
                        >
                        <H1Header
                           // fontWeight={"600"}
                           fontWeight={"light"}
                           textAlign={"left"}
                           color={"primary.500"}
                           >
                           Carousel
                        </H1Header>

                        <Carousel autoSlide={true} autoSlideInterval={5000}>
                           {carouselImages.map((img, index) => (
                              <ImageSrcStyle key={Math.random()} src={img.image} />),
                              // <ImageSrcStyle key={index} src={img.image} />),
                           )}
                        </Carousel>
                     </MotionBox>

                     <MotionBox className={"rightLayoutWrapper"}
                        position={"relative"}
                        textAlign={"left"}
                        width={{base:"auto", md:"500px"}}
                        top={"0px"}
                        color={"primary.900"}
                        // zIndex={"5000"}
                        // border={"1px solid orange"}
                        // bg={"primary.50"}
                        >
                        <H1Header color={"primary.400"} fontSize="1.5rem" letterSpacing="1px" textTransform="uppercase" margin="3rem 0 1rem">Multi Column Parallax</H1Header>
                        <GridContentTemplate numero="1" title="Position" buttonLabel="Parallax is the apparent shift in the position of an object."/>
                        <GridContentTemplate numero="2" title="Observation" buttonLabel="Observed by looking at an object first with one eye closed, then with the other."/>
                        <GridContentTemplate numero="3" title="Astronomy" buttonLabel="In astronomy, parallax measures the distance of nearby stars from Earth."/>
                        <Box margin={"0 0 10rem"}>
                           <ImageSrcStyle src={carousel07}/>
                        </Box>
                        <GridContentTemplate numero="4" title="Distance" buttonLabel="Earth's orbit allows calculation of its distance based on the angle of apparent shift."/>
                        <GridContentTemplate numero="5" title="Imaging" buttonLabel="Parallax is crucial in 3D imaging and photography."/>
                        <GridContentTemplate numero="6" title="Illusion" buttonLabel="It creates the illusion of depth by presenting slightly different images to each eye."/>
                        <Box margin={"0 0 0"}>
                           <ImageSrcStyle src={carousel08}/>
                        </Box>
                     </MotionBox>
                  </Box>

                  <Box margin={"5rem 0 0"}>
                     <ParallaxCinco/>
                  </Box>

                  <Box className="hiliteContainer" margin={"5rem 0 0"}>
                     <MotionBox className="hiliteWrapper" textAlign={"left"}>
                        <MotionBox className={"highlightBox overflow-auto rounded-2xl text-base p-4 max-h-[550px] bg-[#282c34]"}
                           >
                           <Copy2Clipboard codeBlock={parallaxCodeBlock} buttonLabel="copy"/>
                           <CodeHilite codeBlock={parallaxCodeBlock}/>
                        </MotionBox>
                     </MotionBox>
                  </Box>
               </Box>
            </Box>
         </Box>
      </Layout>
  )
}

export default ParallaxWithings

const GridContentTemplate = (props :any) => {
   const { colorMode } = useColorMode();
   const { numero, title, buttonLabel } = props;
   return (
      <Flex gap={2} margin={"1rem 0 6rem"} paddingTop={".6rem"} borderTop={"1px solid"} borderColor={"primary.100"}>
         <Box
            fontSize={{base:"2rem", md:"3rem"} }
            fontWeight={"light"} width={"4rem"} lineHeight={1} border={"0px solid"}>{numero}</Box>
         <Box>
            <Text fontSize={".75rem"} textTransform={"uppercase"}>{title}</Text>
            <LinkButton
               textAlign={"left"}
               fontSize={"1.65rem"}
               fontWeight={"light"}
               textwrap={"balance"}
               // textWrap={"balance"}
               textTransform={"none"}
               padding={"0"}
               margin={"0"}
               style={{textWrap:"balance"}}
               label={buttonLabel}
               />
         </Box>
      </Flex>
   )
}
