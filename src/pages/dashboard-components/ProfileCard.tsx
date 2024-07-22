import { Flex, Grid, GridItem, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Increment from "@components/likes/Increment";
import { increment } from "firebase/firestore";
import { H2Header, ImageSrcStyle } from "../../assets/styles/Styles";
import Avatar from "../../components/profileAvatar/Avatar";
import ColorMultiDesignButtons from "../../components/welcome/ColorMultiDesignButtons";
import { useGlobalStore } from "../../hooks/GlobalStates";
import GDLogo from "./../../assets/images/GD-Logo-2024-gradient.png";

const sectionData = {
	image: GDLogo,
};

const gridTemplateDesignUno = {
	base: `
     "one one one one"
     "two two two two"
     "three three three three"
     "four four four four "
     "five five five five "
     "six six six six "
   `,
	lg: `
     "one"
     "two"
   `,
};

const ProfileCard = () => {
	const textColorMode = useColorModeValue("primary.900", "primary.300");
	const textColorLiter = useColorModeValue("primary.900", "primary.200");
	const borderColorMode = useColorModeValue("primary.50", "primary.400");
	const colorAccent = useColorModeValue("brand.90", "accent.500");
	const { colorMode, toggleColorMode } = useColorMode();
   const D1GradBGMode = useColorModeValue(
      "linear-gradient(to bottom, primary.100, primary.50, primary.50, primary.50)",
      "linear-gradient(to bottom, primary.400, primary.600)");

	const { designFlat, setDesignFlat } = useGlobalStore();
	const toggleDesign = () => {
		setDesignFlat(!designFlat);
		console.log("designFlat: ", designFlat);
	};

	const sxContentWrapper = {
		flexDirection  :  "column",
		alignItems     :  "center",
      height         :  "100%",
		justifyContent :  "space-between",
      border         :  designFlat ? {base:"1px solid", lg:"0px solid"} : undefined,
      borderColor    :  designFlat ? {base:borderColorMode, lg:undefined} : undefined,
      // borderColor    :  borderColorMode,
      borderRadius   :  "1rem",
      padding        :  ".5rem",
      // boxShadow      :  "2xl",
      // backgroundImage:  D1GradBGMode,
	};

	return (
		<Grid
			className="profileCard"
			grid-gap="10px" // /* shorthand for grid-row-gap and grid-column-gap *
			margin="0"
         // height={"100%"}
         // border={"1px solid orange"}
		>
			<GridItem
				className="contentContainer"
				display={"flex"}
				flexDirection={"column"}
				alignItems={"center"}
				alignContent={"center"}
            justifyContent={"center"}
				// padding={"1rem 3rem"}
			>
				<Flex className="contentWrapper" sx={sxContentWrapper}>

					<Flex className="logoContainer"
                  flexDirection={"column"}
                  alignItems={"center"}
               >
						{/* GD Logo */}
						<ImageSrcStyle
							src={sectionData.image}
							opacity={"1"}
							width={"50%"}
							// width={"130px"}
							height={"auto"}
							objectFit={"contain"}
							margin={"0"}
							// left={"-10px"}
							// border={"1px solid"}
							// z-index="50"
						/>

						{/* GonzalesDesign */}
						<H2Header
                     position={"relative"}
                     fontSize={designFlat ? "2rem" : "1.2rem" }
                     fontWeight={"700"}
                     top={"-20px"}
                     letterSpacing={"-1px"}
                     color={textColorMode}
                     backgroundColor="transparent"
                     >
							GonzalesDesignX
						</H2Header>
					</Flex>

               {/* Avatar & settings */}
               <Flex className="avatarLikeButtonsContainer"
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  height={"220px"}
                  border={"1px solid yellow"}
                  >
                  <Avatar/>
                  {/* <LikesButton /> */}
                  {/* <Increment feto="home"/> */}
                  {/* <Increment subCollection="likes/id_thumbs_up" feto="home"/> */}
                  {/* <LikesButton like={`${home}`} /> */}
                  <Increment fieldValue={{ home: increment(1) }} likesRef="home" />

                  <ColorMultiDesignButtons showMultiDesignButtons={true}/>
               </Flex>

                  {/* TEST */}
               {/* <Text>Orientation: {designFlat ? "Horizontal" : "Vertical"}</Text> */}

				</Flex>
			</GridItem>
		</Grid>
	);
};

export default ProfileCard;
