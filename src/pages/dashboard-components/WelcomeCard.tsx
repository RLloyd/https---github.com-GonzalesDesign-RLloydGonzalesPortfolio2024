import { Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Increment from "@components/likes/Increment";
import { increment } from "firebase/firestore";
import { H1Header, H4Header } from "../../assets/styles/Styles";
import Avatar from "../../components/profileAvatar/Avatar";
import ColorMultiDesignButtons from "../../components/welcome/ColorMultiDesignButtons";
import { useGlobalStore } from "../../hooks/GlobalStates";

const WelcomeCard = () => {
   const headerColor = useColorModeValue("primary.500", "primary.200");
   const bgColorMode = useColorModeValue("primary.100", "primary.600");
   const { colorMode, toggleColorMode } = useColorMode();
   const colorAccent = useColorModeValue("primary.50", "accent.300");

   const { designFlat, setDesignFlat } = useGlobalStore();
	const toggleDesign = () => {
		setDesignFlat(!designFlat);
	};

   // const [count, setCount] = useState([]);

   // useEffect(() => {
	// 	onSnapshot(
	// 		collection(db, `likes`),
	// 		(snapshot) =>
	// 			setCount(snapshot.docs.map((doc) => doc.data().home))
	// 	);
	// }, []);


	return (
		<>
			{/* Header */}
			<Flex className="WelcomeContainer" gap={5}
            flexDirection={{base:"column", xl:"row"}}
            // flexDirection={designFlat ? {base:"column", xl:"row"} : {base:"column", xl:"row"}}
            justifyContent={{base:"center", lg:"space-between"}}
            alignItems={"center"}
            // position={"relative"}
            // top={"0px"}
            // flexWrap={"nowrap"}
            // flexWrap={{base:"wrap", lg:"nowrap"}}
            // alignItems={"center"}
            // alignContent={"center"}
            position={"relative"}
            top={"-30px"}
            // top={"160px"}
            zIndex="1000"
            // left={"100px"}
            // border={"1px solid"}
            >
            <Flex className="WelcomeText"
               flexDirection={{base:"column", lg:"row"}}
               alignItems={{lg:"baseline"}}
               position={"relative"}
               top={"-10px"}
               gap={0}
               >
               <H1Header className={"h1Header"}
                  fontSize={{ base: 40, md: 50, lg: 60 }}
                  fontWeight={"400"}
                  textAlign={{base:"center", md:"left"}}
                  margin={{sm:"1rem 0 0", lg:"2rem 0 1.2rem"}}
                  color={designFlat ? headerColor : "primary.50"}
                  >
                  Portfolio Dashboard
                  <Text
                     fontSize={{base:"1.5rem", md:"2.5rem"}}
                     fontWeight={"700"}
                     color={"accent.300"}
                     letterSpacing={".15px"}
                     textTransform={"capitalize"}
                     textShadow={"2px 2px black"}
                     >
                     {designFlat ? "vertical" : "GonzalesDesign"}
                     {/* {colorMode === "light" ? "vertical" : "horizontal"} */}
                  </Text>
               </H1Header>
               <H4Header className={"h4Header"}
                  fontSize       =  "1rem"
                  fontWeight     =  "400"
                  textTransform  =  "uppercase"
                  color          =  {headerColor}
                  background     =  {bgColorMode}
                  padding        =  {".4rem 1rem"}
                  position       =  {"relative"}
                  top            =  {"-10px"}
                  >
                  W/:<Text as={"span"} fontSize="1.2rem" fontWeight="700"> React & Chakra UI + TW</Text></H4Header>
            </Flex>

            {/* Buttons & Avatar */}
            {/* Avatar & settings */}
            {designFlat ? undefined : (
               <Flex className="avatarLikeButtonsContainer"
                  flexDirection  =  {"row-reverse"}
                  justifyContent =  {"space-between"}
                  alignItems     =  {"center"}
                  position       =  {"relative"}
                  top            =  {{base:"20px", md:"70px", lg:"-50px", xl:"0px"}}
                  // border={"1px solid red"}
                  // height={"220px"}
                  >
                     <Avatar/>
                     {/* <LikesButton /> */}
                     {/* <Increment subCollection="likes/id_thumbs_up" feto="home"/> */}
                     {/* <Increment fieldValue={{ home: increment(1) }} likesRef="home" /> */}
                     <Increment fieldValue={{ home: increment(1) }} likesRef="home" />

                     <ColorMultiDesignButtons showMultiDesignButtons={true}/>
               </Flex>
            )}
            {/* {designFlat ? undefined :
            <Flex className="WelcomeButtons"
               alignItems={"center"}
               gap={5}
               position={"relative"}
               top={"-36px"}
               // border={"1px solid"}
               >
               <Box className="colorModeButton"
                  // margin={"2rem 0 0"}
               >
                  <TooltipStyle label={colorMode === "light" ? "Dark Mode" : "Light Mode"} placement="top">
                     <Button className="colorModeButton"
                        variant={"link"}
                        fontSize={"2rem"}
                        fontWeight={"400"}
                        color={colorAccent}
                        width={"50px"}
                        height={"50px"}
                        border={"1px solid"}
                        borderColor={colorAccent}
                        borderRadius={"full"}
                        background={"primary.500"}
                        onClick={toggleColorMode}
                        _hover={{
                           color: "accent.100",
                           borderColor: "accent.100",
                           bg: "none",
                           textDecoration: "none",
                           cursor: "pointer",
                        }}
                     >
                        <MdLightMode />
                     </Button>
                  </TooltipStyle>
               </Box>

               <Box className="multipleDesignsButton">
                  <Tooltip hasArrow
                  // Muliple Designs Toggle
                     label="Changing layout design on the fly: Click here to toggle between two layouts"
                     // label={colorMode === "light" ? "Dark Mode" : "Light Mode"}
                     bg="brand.50" color="brand.900" placement="top" >
                     <Button
                        variant={"ghost"}
                        // variant={"outline"}
                        // borderRadius={"sm"}
                        // size={"sm"}
                        fontSize={"1.5rem"}
                        top={"-2px"}
                        padding={"0px"}
                        color={colorAccent}
                        width={"50px"}
                        height={"50px"}
                        border={"1px solid"}
                        borderColor={colorAccent}
                        borderRadius={"full"}
                        background={"primary.500"}
                        onClick={toggleDesign}
                        _hover={{
                           color: "accent.100",
                           borderColor: "accent.100",
                           bg: "none",
                           textDecoration: "none",
                           cursor: "pointer",
                        }}
                     >
                        <GrMultiple />
                     </Button>
                  </Tooltip>
               </Box>

               <LikesButton />

               <Avatar/>


            </Flex> } */}


			</Flex>
		</>
	);
};

export default WelcomeCard;
