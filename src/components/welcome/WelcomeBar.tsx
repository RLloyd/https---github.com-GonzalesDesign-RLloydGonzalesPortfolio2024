import { Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Increment from "@components/likes/Increment";
import { increment } from "firebase/firestore";
import { H1Header, H4Header } from "../../assets/styles/Styles";
import { useGlobalStore } from "../../hooks/GlobalStates";
import Avatar from "../profileAvatar/Avatar";
import ColorMultiDesignButtons from "./ColorMultiDesignButtons";

const WelcomeBar = () => {
	const headerColor = useColorModeValue("primary.500", "primary.100");
	const bgColorMode = useColorModeValue("primary.100", "primary.600");
	const { colorMode, toggleColorMode } = useColorMode();
	const colorAccent = useColorModeValue("primary.50", "accent.300");

	const { designFlat, setDesignFlat } = useGlobalStore();
	const toggleDesign = () => {
		setDesignFlat(!designFlat);
	};

	return (
		<Flex
			className="WelcomeContainer"
			gap={5}
			flexDirection={{ base: "column", xl: "row" }}
			// flexDirection={designFlat ? {base:"column", xl:"row"} : {base:"column", xl:"row"}}
			justifyContent={{ base: "center", lg: "space-between" }}
			alignItems={{ base:"center", lg: "flex-start" }}
         // alignItems={"center"}
			// position={"relative"}
			// top={"0px"}
			// flexWrap={"nowrap"}
			// flexWrap={{base:"wrap", lg:"nowrap"}}
			// alignItems={"center"}
			// alignContent={"center"}
			position={"relative"}
			top={"0px"}
			// top={"160px"}
			zIndex="1000"
			// left={"100px"}
			border={"1px solid yellow"}
		>
			<Flex className="WelcomeText"
            flexDirection={{ base: "column", lg: "column" }}
            alignItems={{ base:"center", lg: "flex-start" }}
            position={"relative"}
            left="0px"
            // left={{base:"0px", lg:"-40px"}}
            // border={"1px solid"}
            top={{base:"-50px", lg:"0px"}}
            gap={0}
            >
               <H1Header className={"h1Header"}
                  fontSize={{ base: 40, md: 50, lg: 60 }}
                  fontWeight={"400"}
                  textAlign={{ base: "center", md: "left" }}
                  margin={{ sm: "1rem 0 0", lg: "0" }}
                  // margin={{ sm: "1rem 0 0", lg: "2rem 0 1.2rem" }}
                  color={designFlat ? headerColor : "primary.50"}
                  // border={"1px solid"}
                  width={"max-content"}>
                  Portfolio DashboarV
                  {/* <Text fontSize={"2rem"}>
                     {designFlat ? "vertical" : "horizontal"}
                  </Text> */}
               </H1Header>
               <H4Header
                  className={"h4Header"}
                  fontSize="1rem"
                  fontWeight="400"
                  textTransform="uppercase"
                  // color={designFlat ? headerColor : "primary.50"}
                  color={headerColor}
                  background={bgColorMode}
                  // background={"primary.500"}
                  padding={".4rem 1rem"}
                  position={"relative"}
                  top={"-10px"}
               >
					W/:
					<Text as={"span"} fontSize="1.2rem" fontWeight="700">
						{" "}
						React & Chakra UI + TW XX
					</Text>
				</H4Header>
			</Flex>

			{/* Buttons & Avatar */}
			{/* Avatar & settings */}
			{designFlat ? undefined : (
				<Flex className="avatarLikeButtonsContainer"
               flexDirection={"row-reverse"}
               justifyContent={"space-between"}
               alignItems={"center"}
               height={"220px"}
               // border={"1px solid red"}
               >
                  <Avatar />
                  {/* <LikesButton /> */}
                  <Increment fieldValue={{ home: increment(1) }} likesRef="home" />
                  <ColorMultiDesignButtons showMultiDesignButtons={true}/>
				</Flex>
			)}
		</Flex>
	);
};

export default WelcomeBar;
