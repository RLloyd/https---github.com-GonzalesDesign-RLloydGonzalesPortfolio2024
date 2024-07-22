import { Box, Button, Flex, Heading, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { Highlight, themes } from "prism-react-renderer";
import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaRegClone } from "react-icons/fa";

// type Props = {
// 	// children: React.ReactNode;
// 	title?: string;
// 	buttonLabel?: string;
// 	codeBlock?: string;
//    image?: string;
//    imageStyle?: {};
// };

// const ModalTemplateBasic = ({ title, buttonLabel, codeBlock, image, imageStyle }: Props) => {
const ModalTemplateBasic = ( props: any ) => {
   const {
      title,
      buttonLabel,
      codeBlock,
      borderRadius} = props;
	const { isOpen, onOpen, onClose } = useDisclosure(); //modal
   const { colorMode, toggleColorMode } = useColorMode();
   const [scrollBehavior, setScrollBehavior] = React.useState('inside')
	// const [size, setSize] = React.useState("2xl"); //modal size
	// const textColorScheme = useColorModeValue("brand.1000", "brand.300");
   // const [text, setText] = useState(''); //copy to clipboard
   /*------------------------------------------------------------------*/
   const OverlayOne = () => (
      <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(8px) hue-rotate(10deg)'
      />
   )
   const [overlay, setOverlay] = React.useState(<OverlayOne />)
   /*------------------------------------------------------------------*/

	return (
		<>
         {/* Modal exterior trigger button */}
         <Button
            size={"sm"}
            borderRadius={borderRadius}
            // top={designFlat ? "10px" : "10px"}
            // variant={colorMode === "light" ? "primary" : "accent"}
            variant={colorMode === "light" ? "primary" : "accent"}
            rightIcon={<FaRegClone/>}
            // onClick={onOpen}
            onClick={() => {
               setOverlay(<OverlayOne />)
               onOpen()
             }}
            >
            {buttonLabel}
         </Button>

         {/* Modal Pop-Up */}
			<Modal
				isCentered
				onClose={onClose}
				isOpen={isOpen}
				motionPreset="slideInBottom"
				// size={size}
				size={{ base:"full", lg:"2xl" }}
				// size={{ base:"full", md:"2xl" }}
            // scrollBehavior={scrollBehavior}
         >
            {overlay}
				<ModalOverlay />

				<ModalContent className="modalContentWrapper"
               position={"absolute"}
               top={{base: "0px", lg:"calc(20vh/2)"}}
               // top={{base: "calc(100vh-500px)"}}
					color={"primary.100"}
					// bg={"#282c34"}
					bg={"primary.500"}
					// backgroundImage={"linear-gradient(to bottom, hsla(0, 0%, 10%, 0.750), hsla(0, 0%, 10%, 0.50), hsla(50, 50%, 50%, 0.250))"}
					padding={5}
            >
					<ModalHeader className="modalHeaderWrapper"
                  display={"flex"}
                  justifyContent={"space-between"}
                  height={"550px"}
                  // border={"1px solid"}
                  >
                  <Flex
                     flexDirection={"column"}
                     // border={"1px solid"}
                     >
                     <Heading as={"h2"}
                        fontSize={"1.5rem"}
                        textTransform={"uppercase"}
                        color={"primary.50"}
                        >
                        {title}
                     </Heading>
                     <Box fontSize={"14px"}
                        fontWeight={"normal"}
                        color="primary.200"
                        >
                        {/* {subTitle} */}
                        styled with Chakra
                     </Box>
                  </Flex>

                  {/* Likes Button */}
                  {/* <Box><LikesButton/></Box> */}

               </ModalHeader>

               {/* modal body area */}
					<ModalBody className="modalBodyPopUpWrapper"
                  bg={"#282c34"}
                  padding={"1rem"}
                  // border={"1px solid yellow"}
                  borderRadius={"xl"}
                  boxShadow={"xl"}
                  >

                  {/* Code snippets */}
						<Box
                     textAlign="left"
                     fontSize={"sm"}
                     height={"400px"}
                     // border={"1px solid orange"}
                     >

                     {/* Copy to clipboard component */}
                     <Box
                        textAlign={"right"}
                        // border={"1px solid"}
                        >
                        <CopyToClipboard text={codeBlock}>
                           <Button className="copyButton"
                              position={"absolute"}
                              right={"30px"}
                              variant={"outline"}
                              size={"sm"}
                              borderRadius={"6px"}
                              leftIcon= {<FaRegClone />}
                              transform={"scale(.75)"}
                              _active={{
                                 bg:'accent.500',
                                 color: "primary.50",
                              }}
                              >
                              copy
                           </Button>
                        </CopyToClipboard>
                     </Box>

							<Highlight
								theme={themes.oneDark}
								code={codeBlock}
								language="tsx"
							   >
								{({ className, style, tokens, getLineProps, getTokenProps }) => (
									<pre style={style}>
										{tokens.map((line, i) => (
											<div key={i} {...getLineProps({ line })}>
												{/* <span>{i + 1}</span> */}
												{line.map((token, key) => (
													<span key={key} {...getTokenProps({ token })} />
												))}
											</div>
										))}
									</pre>
								)}
							</Highlight>
                  </Box>
					</ModalBody>

					<ModalFooter>
						<Button
                     variant={"accent"}
                     onClick={onClose}
                     >
							Close
						</Button>
						{/* <Button variant='ghost'>Secondary Action</Button> */}
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalTemplateBasic;


