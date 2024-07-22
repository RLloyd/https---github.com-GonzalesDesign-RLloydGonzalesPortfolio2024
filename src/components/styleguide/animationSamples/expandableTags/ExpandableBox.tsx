import { Box, Button, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { H3Header } from '@styles/Styles';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MotionBox, MotionFlex } from 'src/assets/variables/Variables';

type Props = {
   title: string;
   hoveredText: string;
   isButton: boolean,
   buttonLabel: string;
   unHoveredText: string;
   durationTime: number;
}

const ExpandableBox = ({title, hoveredText, isButton, buttonLabel, unHoveredText, durationTime}:Props) => {
   const [isHovering, setIsHovering] = useState(false);
   const { colorMode } = useColorMode();
   const xWidth = useRef(0)
   const widthRef = useRef<HTMLDivElement>(null)
   // const durationTime = 1;
   // const [unhoveredWidth, setUnhoveredWidth] = useState(0);
   // const unhoveredWidth = 0;
   const fontColor = useColorModeValue("primary.900", "primary.100");
   const bgColor = useColorModeValue("primary.50", "primary.500");

   return (
      <LayoutGroup> {/* LayoutGroup & layout allows to animate everything inside as one */}
         <MotionFlex
            className="layoutGroupWrapper"
            style={{minWidth: xWidth.current}} //applies the captured xWidth as minWidth: this work.
            cursor={"pointer"}
            width={"fit-content"}

            /* move the trigger here & add a ref to capture un-hovered state width to avoid the flickering effect. it only flickers when the un-hovered state is wider that the hovered state width */
            /* use framer-motion onHover... instead to address all devices better */
            onHoverStart={() => {
               if(!isHovering){
                  xWidth.current = widthRef.current!.offsetWidth; //capture the width of the un-hovered state
               }
               setIsHovering(true)
            }}

            onHoverEnd={() => {
               if(isHovering){
                  // console.log("widthRef.current:HoverEnd ", widthRef.current!.offsetWidth)
               }
               setIsHovering(false)
            }}
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
               // className="inline-block text-gray-300 bg-gray-900 px-4 py-1.5 uppercase tracking-wider text-sm font-medium whitespace-nowrap border"
               style={{ borderRadius:"6px" }} //this works!
               //borderRadius={"6px"} //this doesn't work!

               // onMouseEnter={() => setIsHovering(true)}
               // onMouseLeave={() => setIsHovering(false)}
               transition={{duration:durationTime}}
            >
               <AnimatePresence initial={false} mode={'wait'}> {/* AnimatePresence is needed for the exit prop to work */}
               {/* <AnimationVariant>
                  {isHovering ? hoveredText : unHoveredText}
               </AnimationVariant> */}
                  <MotionBox as={"span"}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{duration:durationTime}}
                     key={isHovering ? "hovering" : "unhovering"}
                     >
                     { isHovering ?
                        <Flex className="hoveredContainer"
                           flexDirection={"row"}
                           alignItems={"flex-start"}
                           justifyContent={"space-between"}
                           gap={4}
                           >
                           <Flex className="hoveredWrapper"
                              flexDirection={"column"}
                              alignItems={"flex-start"}
                              style={{textWrap:"balance"}}
                              >
                              {title &&
                                 <H3Header
                                    margin={".5rem 0 .25rem 0"}
                                    padding={"0px"}
                                    textTransform="capitalize"
                                    >
                                    {title}
                                 </H3Header>
                              }
                              <Box
                                 // margin={".25rem 0 .5rem 0"}
                                 textTransform="initial"
                                 // textTransform="capitalize"
                                 // text-wrap={"balance"}
                                 // overflowWrap={"normal"}
                                 >
                                 {hoveredText}
                              </Box>
                              {/* </Flex> */}
                              {isButton &&
                                 <Button
                                    size={"sm"}
                                    borderRadius={"full"}
                                    variant={colorMode === "light" ? "primary" : "accent"}
                                    rightIcon={<FaArrowRight/>}
                                    textTransform={"capitalize"}
                                    margin={"1rem 0 "}
                                    >
                                    {buttonLabel}
                                 </Button>
                              }
                           </Flex>
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

export default ExpandableBox
