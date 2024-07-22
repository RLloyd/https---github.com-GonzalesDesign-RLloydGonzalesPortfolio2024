import {
   Box, Button, Drawer, DrawerBody, DrawerCloseButton,
   DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay,
   Flex, Heading, Input, Modal, ModalBody, ModalContent,
   ModalFooter, ModalHeader, ModalOverlay,
   useColorMode, useColorModeValue,
   useDisclosure
} from "@chakra-ui/react";
import CodeBlockContainer from "@components/hilights/CodeBlockContainer";
import Increment from "@components/likes/Increment";
import { increment } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { H1Header, H4Header } from '../../assets/styles/Styles';
import CodeHilite from "../hilights/CodeHilite";

/*-=••• Grouping props •••=-*/
const ModalTemplateAdvanced = ({modalTriggerProps, linkTypeProps, modalSettingProps }: any) => {
   const {
         title,
         iconSize,
         buttonIcon
         } = modalTriggerProps;
   const {
         isModal,
         isDrawer=false,
         link,
         } = linkTypeProps;
   const {
         modalSize,
         sampleInsert,
         transform, top, left,
         height, width,
         codeBlock, marginSpace,
         } = modalSettingProps;
   /*--=•••••••••••••••••••••••••••••••=--*/
   const { isOpen, onOpen, onClose } = useDisclosure(); //modal
   const btnRef = React.useRef(null);
	const [size, setSize] = React.useState("2xl"); //modal size
	const textColorScheme = useColorModeValue("brand.1000", "brand.300");
   const { colorMode, toggleColorMode } = useColorMode();
   const [scrollBehavior, setScrollBehavior] = React.useState('outside')
   // const [scrollBehavior, setScrollBehavior] = React.useState('inside')
   const [text, setText] = useState(''); //copy to clipboard
   // const [isModal] = useState(false)
   /*------------------------------------------------------------------*/
   const navigate = useNavigate();
   const openLink = () => navigate(link);

   const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
   const scrollToBottom = () => {
      onClose();
      window.scrollTo(0, 2000);
    };
   /*------------------------------------------------------------------*/
   /* Modal background effect */
   const OverlayOne = () => (
      <ModalOverlay
         bg='blackAlpha.300'
         backdropFilter='blur(8px) hue-rotate(10deg)'
      />
   )
   const [overlay, setOverlay] = React.useState(<OverlayOne />)
   // const prev = () => {
   //    setCurrent((current) => (current === 0 ? images.length - 1 : current - 1))
   // }
   /*------------------------------------------------------------------*/
   const openModal = () => {
      // console.log("isModal: ", isModal)
      // console.log("isDrawer: ", isDrawer)
      setOverlay(<OverlayOne />)
      onOpen()
   }

   const openDrawer = () => {
      console.log("isModal: ", isModal)
      console.log("isDrawerX: ", isDrawer)
      onOpen()
   }

	return (
		<>
         {/* Icon: trigger */}
         {/* ternary with else-if: a ? b : (c ? d : e) */}
         <Box className="iconButtonWrapper"
            fontSize={iconSize}
            borderRadius={"full"}
            onClick={() => {
               {isModal ?
                  openModal()  //if
                  :
                  (isDrawer ? openDrawer() : //else if : else
                     openLink(),
                     scrollToTop()
                  )
               }
            }}
            _hover={{
               color:"primary.50",
               bg:"primary.500",
               // border:"1px solid red"
            }}
            >
            {buttonIcon}
         </Box>

         {/* Modal: pop-up */}
         {isModal &&
            <Modal
               isCentered
               onClose={onClose}
               isOpen={isOpen}
               motionPreset="slideInBottom"
               // size={{ base:"full", lg:"2xl" }}
               size={modalSize}
               scrollBehavior={"inside"}
               // scrollBehavior={"outside"}
               // scrollBehavior={scrollBehavior}
            >
               {overlay}
               <ModalOverlay />

               <ModalContent className="modalContentWrapper"
                  position={"absolute"}
                  top={{base: "0px", lg:"calc(20vh/2)"}}
                  color={"primary.100"}
                  bg={"primary.500"}
                  padding={5}
               >
                  <ModalHeader className="modalHeaderWrapper"
                     display={"flex"}
                     justifyContent={"space-between"}
                     // height={"550px"}
                     margin={marginSpace}
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
                           styled with Chakra xxx
                        </Box>
                     </Flex>

                     <Box className="likesButtonWrapper"
                        //Likes Button
                        >
                        {/* <LikesButton/> */}
                        <Increment fieldValue={{ sg_carousel: increment(1) }} likesRef={"sg_carousel"} />
                     </Box>
                  </ModalHeader>

                  <ModalBody
                     // bg={"#282c34"}
                     // borderColor={"primary.100"}
                     // borderRadius={"xl"} boxShadow={"xl"}
                     // border={"1px solid yellow"}
                  >
                     <Box className="AnimationSamplesDashboardTest"
                     // Sample Insert Wrapper
                        display        =  {"flex"}
                        justifyContent =  {"center"}
                        position       =  {"relative"}
                        top            =  {top}
                        left           =  {left}
                        height         =  {height}
                        width          =  {width}
                        transform      =  {transform}
                        borderRadius   =  {"1rem"}
                        // overflow={"hidden"}
                        // border={"1px solid cyan"}
                     >
                        {sampleInsert}
                     </Box>

                     <CodeBlockContainer codesBlock={codeBlock} buttonLabel="Copy" isButtonHorizontal="false"/>
                     {/* <Box className="codeSnippetsWrapper text-left text-[14px] h-[400px]"
                        bg={"#282c34"}
                        borderColor={"primary.400"}
                        borderRadius={"1rem"}
                        boxShadow={"xl"}
                        margin={"2rem 0 0"}
                        padding={"1rem"}
                        overflow={"auto"}
                        // border={"1px solid"}
                     >
                        <Copy2Clipboard codeBlock={codeBlock} buttonLabel="copy"/>
                        <CodeHilite codeBlock={codeBlock}/>
                     </Box> */}


                  </ModalBody>

                  <ModalFooter>
                     <Button
                        variant={"accent"}
                        onClick={scrollToBottom}
                        // onClick={onClose}
                        >
                        Close
                     </Button>
                  </ModalFooter>
               </ModalContent>
            </Modal>
         }

         {/* Drawer: pop-up */}
         {isDrawer &&
            <Drawer
               // https://v0.chakra-ui.com/drawer
               isOpen={isOpen}
               placement="right"
               onClose={onClose}
               size={"xl"}
               finalFocusRef={btnRef}
               >
               <DrawerOverlay />
               <DrawerContent>
                  <DrawerCloseButton onClick={scrollToBottom}/>
                  <DrawerHeader>
                     <H1Header>
                        Drawer Component
                     </H1Header>
                     <H4Header margin={".25rem 0"} fontSize={"1rem"} fontWeight={"500"}>
                        styled with Chakra-UI
                     </H4Header>
                     </DrawerHeader>

                  <DrawerBody>
                     <Input placeholder="Type here..." />
                     <Box margin={"4rem 1rem 2rem"}>
                        <CodeHilite codeBlock={drawerCodeBlock}/>
                     </Box>
                  </DrawerBody>

                  <DrawerFooter>
                     <Button variant="outline" mr={3} onClick={scrollToBottom}>
                        Cancel
                     </Button>
                     <Button color="primary.50">Save</Button>
                  </DrawerFooter>
               </DrawerContent>
            </Drawer>
         }

		</>
	);
};

export default ModalTemplateAdvanced;


const drawerCodeBlock = `
   // DrawerPopup.tsx
   <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size={"xl"}
      finalFocusRef={btnRef}
      >
      <DrawerOverlay />
      <DrawerContent>
         <DrawerCloseButton />

         <DrawerHeader>
            <H1Header>
               Drawer Component
            </H1Header>
            <H4Header margin={".25rem 0"} fontSize={"1rem"} fontWeight={"500"}>
               styled with Chakra-UI
            </H4Header>
         </DrawerHeader>

         <DrawerBody>
            <Input placeholder="Type here..." />
            <Box margin={"4rem 1rem 2rem"}>
               <CodeHilite codeBlock={parallaxCodeBlock}/>
            </Box>
         </DrawerBody>

         <DrawerFooter>
            <Button variant="outline" mr={3} onClick={scrollToBottom}>
               Cancel
            </Button>
            <Button color="primary.50">Save</Button>
         </DrawerFooter>

      </DrawerContent>
   </Drawer>
`;
