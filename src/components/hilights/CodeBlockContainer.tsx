import { Box, Button, Flex, HStack } from '@chakra-ui/react';
import { H3Header } from '@styles/Styles';
import { ReactElement, useState } from 'react';
import CodeHilite from './CodeHilite';
import Copy2Clipboard from './Copy2Clipboard';

// type Props<T> = {
//    header: string;
//    codesBlock: string
//    buttonLabel: string;
//    // flexDir: string;
//    // flexDir: React.CSSProperties;
//    // flexDir: React.HTMLAttributes<T>;
//    flexDir?: T;
//    isButtonHorizontal: boolean
// }

/*--= Code Blocks Wrapper Function =--*/
// const CodeBlockContainer = ({ header, codesBlock, buttonLabel="Copy Code", flexDir, isButtonHorizontal }: Props<ReactElement>) => {
const CodeBlockContainer = (props: any) => {
   const { header, codesBlock, buttonLabel="Copy Code", isButtonHorizontal } = props;
   // const { header, codesBlock, buttonLabel="Copy Code", flexDir, isButtonHorizontal } = props;
   // const  isButtonHorizontal  = useState(true)
   // const  isButtonHorizontal  = true;

   const [codeHeight, setHeight] = useState(true);
   const toggleHeight = () => {
      setHeight(!codeHeight)
   }
   return (
      // <Box>
      <Box {...props}>
         {/* Title: outside code container */}
         <H3Header
            // margin={"4rem 1rem 1rem"}
            >{header}</H3Header>
         {/* Code container */}
         <Box className={"highlightContainer overflow-auto rounded-2xl text-base p-4 max-h-[2000px] bg-[#282c34]"}
            border={"1rem solid #282c34"}
            >
            {/* Button group: Copy code & Expand/Shrink container */}
            <Box className="buttonGroup"
               display={"flex"}
               gap={3}
               // flexDirection={flexDir}
               flexDirection={"column"}
               // justifyContent={"flex-end"}
               alignItems={"flex-end"}
               // position={"sticky"}
               // position={"absolute"}
               // margin={"0 auto"}
               // right={"0px"}
               // width={"50%"}
               height={"fit-content"}
               // border={"10px solid yellowGreen"}
               // bg={"grey"}
               // zIndex={"100"}
               >
                  <Box position={"absolute"} textAlign={"right"}>
                     <Copy2Clipboard codeBlock={codesBlock}
                        background="primary.500"
                        buttonLabel={buttonLabel}
                     />
                     <Box mt={2}>
                        { !isButtonHorizontal &&
                           // Button: Trigger to adjust container height
                           <Button onClick={toggleHeight}
                              variant={"outline"}
                              background="primary.500"
                              size={{base:"xsm", lg:"sm"}}
                              borderRadius={"6px"}
                              zIndex={10}
                              _active={{
                                 bg: "accent.500",
                                 color: "primary.50",
                              }}
                              >
                              {/* Button Label */}
                              {codeHeight ? "Expand Container" : "Shrink Container"}
                           </Button>
                        }
                     </Box>
                  </Box>
               </Box>
               {/* <Box height={"100px"} border={"1px solid"}>X</Box> */}
            {/* <Box className="buttonGroupX"
               width={"auto"}
               height={"100px"}
               border={"10px solid yellow"} zIndex={"100"}>
               <Box gap={4}
                  flexDirection={flexDir}
                  justifyContent={"flex-end"}
                  alignItems={"flex-end"}
                  // position={"relative"}
                  position={"absolute"}
                  // right={{base:"25%", md:"20%", lg:"15%", xl:"20%"}}
                  // left={{sm:"0px", md:"250px", lg:"500px"}}
                  // width={"200px"}
                  border={"1px solid red"}
                  >
                  <Copy2Clipboard codeBlock={codesBlock}
                     background="primary.500"
                     buttonLabel={buttonLabel}
                  />
                  { !isButtonHorizontal &&
                     // Button: Trigger to adjust container height
                     <Button onClick={toggleHeight}
                        variant={"outline"}
                        background="primary.500"
                        size={"sm"}
                        borderRadius={"6px"}
                        zIndex={10}
                        _active={{
                           bg: "accent.500",
                           color: "primary.50",
                        }}
                        >
                        {codeHeight ? "Expand Container" : "Shrink Container"}
                     </Button>
                  }
               </Box>
            </Box> */}
            {/* Container height based on codeHeight */}
            <Box  height={codeHeight ? "300px" : "auto"}
               width={{ base: "100px", lg: "auto" }}>
               {/* Call Codeblock component */}
               <CodeHilite codeBlock={codesBlock} />
            </Box>
         </Box>
      </Box>
   )
}

export default CodeBlockContainer
