import { Box, Button, Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { CommonButton, H1Header, PrimaryButtonStyle } from "@styles/Styles";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MotionFlex } from "src/assets/variables/Variables";
import { useGlobalStore } from "src/hooks/GlobalStates";

type Props = {
   // children: React.ReactNode;
   // HoveredText: React.ReactNode;
   designName: string;
   notHoveredText: string;
   title: string;
   description: string;
}
// const HoveredText = ()=>{
//    return (

//    )
// }



const ExpandableTags = ({designName, title, description, notHoveredText}:Props) => {
	const [isHovering, SetIsHovering] = useState(false);
   const { designFlat, setDesignFlat } = useGlobalStore()
   const { colorMode, toggleColorMode } = useColorMode();
   const primaryFontColor = useColorModeValue("primary.50", "primary.100");
	const primaryBGColor = useColorModeValue("primary.50", "primary.600");

   const sxDesignUnoWrapper = {
      position:"absolute",
      flexDirection : "column",
      padding: "2rem",
      maxWidth: "80%",
      bg: primaryBGColor,
      border: "1px solid",
      borderColor: "primary.50",
      borderRadius: "1.25rem",
   }
   const designUnoWrapperNotHovered = {
      position:"absolute",
      flexDirection : "column",
      padding: "1rem",
      maxWidth: "80%",
      bg: primaryBGColor,
      border: "1px solid",
      borderColor: "primary.500",
      borderRadius: ".5rem",
   }

   const sxHeader = {
      fontSize : "1.5rem",
      fontWeight: "700",
      letterSpacing: "0px"
   }

   const Layout = {
      design: [
         {
            name: designName,
            title:title,

         }
      ]
   }
	return (
		<>
			<Flex flexDirection={"column"} alignItems={"center"}>
				<Text>Hover on the tag to expand the full content</Text>
				<Flex className="layoutContainer"
               justifyContent={"flex-start"}
               // justifyContent={"center"}
               gap={4}
               // p={4}
               width={"100%"}
               border={"1px solid magenta"}
               >
               <LayoutGroup>
                  <MotionFlex className="layoutWrapper"
                     layout={true}
                     // style={{borderRadius: 8}}
                     borderRadius={"4rem"}
                     // inline-block rounded-3xl text-gray-300 bg-gray-900 whitespace-nowrap"
                     onMouseEnter={() => SetIsHovering(true)}
                     onMouseLeave={() => SetIsHovering(false)}
                     border={"1px solid yellow"}
                     height={"20px"}
                     >
                     <AnimatePresence mode={"wait"} initial={false}>{/* {onload animation = false} */}
                        <motion.span className="spanWrapper"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           // transition={{ duration: .5 }}
                           key={isHovering ? "hovering" : "unhovering"}
                        >
                           {isHovering && Layout.design[0].name === "DesignUno" ?
                              <MotionFlex className="designUnoWrapper" sx={sxDesignUnoWrapper}
                                 initial={{width: "200px"}}
                                 animate={{width: "600px"}}
                                 // initial={{transform:"scale(1)"}}
                                 // animate={{transform:"scale(2)"}}
                                 // initial={{ opacity: 0, y: 500, transform:"scale(.75)" }}
                                 // animate={{ opacity: 1 }}
                                 // exit={{ opacity: 0 }}
                                 // transition={{ duration: .5 }}
                                 >
                                 <Flex
                                    justifyContent={"space-between"}
                                    flexDirection={{base:"column", md:"row"}}
                                    gap={"2rem"}
                                    >
                                    <Flex className="textWrapper"
                                       flexDirection={"column"}
                                       alignItems={{base:"center", md:"flex-start"}}
                                       // margin={"0 2rem 0 0"}
                                       >
                                       <H1Header sx={sxHeader}>{title}</H1Header>
                                       <Box textAlign={{base:"center", md:"left"}}>{description}</Box>
                                    </Flex>

                                    {/* <CommonButton  border="0px solid" margin={"auto"}> */}
                                          <Button
                                             size={"sm"}
                                             borderRadius={"full"}
                                             // padding={"5px 20px"}
                                             // top={designFlat ? "10px" : "10px"}
                                             variant={colorMode === "light" ? "primary" : "accent"}
                                             // variant={colorMode === "light" ? "success" : "success"}
                                             rightIcon={<FaArrowRight/>}
                                             textTransform={"capitalize"}
                                             margin={"auto"}
                                          >
                                             {"Read more"}
                                          </Button>
                                    {/* </CommonButton> */}

                                    {/* <Button
                                       size={"sm"}
                                       // padding={"5px 20px"}
                                       // top={designFlat ? "10px" : "10px"}
                                       variant={colorMode === "light" ? "primary" : "accent"}
                                       // variant={colorMode === "light" ? "success" : "success"}
                                       rightIcon={<FaArrowRight/>}
                                       textTransform={"capitalize"}
                                       margin={"auto"}
                                       >
                                       {"Read more"}
                                    </Button> */}

                                 </Flex>
                              </MotionFlex>
                              :
                              <Flex className="designUnoWrapperNotHovered"
                                 sx={designUnoWrapperNotHovered}
                                 >
                                 <Flex justifyContent={"space-between"}>
                                    <Flex className="textWrapper"
                                       flexDirection={"column"}
                                       alignItems={"flex-start"}
                                       // margin={"0 1rem 0 0"}
                                    >
                                       <H1Header sx={sxHeader}>{notHoveredText}</H1Header>
                                       {/* <Box>{description}</Box> */}
                                    </Flex>
                                    {/* <Button
                                       size={"sm"}
                                       // top={designFlat ? "10px" : "10px"}
                                       variant={colorMode === "light" ? "primary" : "accent"}
                                       // variant={colorMode === "light" ? "success" : "success"}
                                       rightIcon={<FaArrowRight/>}
                                       textTransform={"capitalize"}
                                       margin={"auto"}
                                       >
                                       {"Read more"}
                                    </Button> */}
                                 </Flex>
                              </Flex>
                              // <Flex className="designUnoWrapper" position={"absolute"}>
                              //    <Flex justifyContent={"space-between"}>
                              //       <Flex className="textWrapper"
                              //          flexDirection={"column"}
                              //          alignItems={"center"}
                              //          margin={"0 1rem 0 0"}
                              //       >
                              //          <H1Header sx={sxHeader}>{notHoveredText}</H1Header>
                              //       </Flex>
                              //       </Flex>
                              // </Flex>
                           }

                        </motion.span>
                     </AnimatePresence>
                  </MotionFlex>
               </LayoutGroup>
				</Flex>
			</Flex>
		</>
	);
};

export default ExpandableTags;
