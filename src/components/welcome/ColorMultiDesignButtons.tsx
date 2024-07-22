import { Box, Button, Flex, Tooltip, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { GrMultiple } from "react-icons/gr";
import { MdLightMode } from "react-icons/md";
import { TooltipStyle } from "../../assets/styles/Styles";
import { useGlobalStore } from "../../hooks/GlobalStates";

type Props = {
   showMultiDesignButtons: boolean;
}

/*---= Color mode & multi design layout buttons group component =---*/
const ColorMultiDesignButtons = ({showMultiDesignButtons}: Props) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const colorAccent = useColorModeValue("primary.700", "accent.500");
	// const buttonBGColormode = useColorModeValue("#d1e7ed100", "#07404e95");
	const buttonBGColormode = useColorModeValue("primary.50", "#07404e95");

	const { designFlat, setDesignFlat } = useGlobalStore();
	const toggleDesign = () => {
		setDesignFlat(!designFlat);
		console.log("designFlat: ", designFlat);
	};

	return (
		<Flex justifyContent={"center"} alignItems={"center"} gap={5}>
			{/* Color Mode */}
			<Box
				className="colorModeButtonContainer"
				// margin={"2rem 0 0"}
			>
				<TooltipStyle label={colorMode === "light" ? "Dark Mode" : "Light Mode"} placement="top">
					<Button
						className="colorModeButton"
						// variant={"ghost"}
						variant={"link"}
						// variant={"outline"}
						borderRadius={"full"}
                  width={"30px"}
                  height={"40px"}
						fontSize={"1.25rem"}
						fontWeight={"400"}
						// padding={"50px 0 25px"}
						// bottom={"0px"}
						color={colorAccent}
                  background={buttonBGColormode}
						border={"1px"}
						onClick={toggleColorMode}
						_hover={{
							bg: "none",
							textDecoration: "none",
							cursor: "pointer",
                     color:"accent.500"
						}}
					>
						<MdLightMode />
					</Button>
				</TooltipStyle>
			</Box>

			{/* Muliple Designs Toggle */}
         {showMultiDesignButtons ?
			<Tooltip hasArrow className="multipleDesignsButtonContainer" label="Toggle between two design layouts" bg="brand.50" color="black" placement="top">
			{/* <Tooltip hasArrow className="multipleDesignsButtonContainer" label="Changing layout design on the fly: Click here to toggle between two layouts" bg="brand.50" color="black" placement="right"> */}
				<Button
					className="multipleDesignsButton"
					variant={"ghost"}
					// variant={"outline"}
					borderRadius={"full"}
               width={"30px"}
               height={"40px"}
					fontSize={"1.25rem"}
					top={"-2px"}
					padding={"0px"}
					color={colorAccent}
               background={buttonBGColormode}
					border={"1px"}
					// onClick={toggleColorMode}
					onClick={toggleDesign}
               _hover={{
                  bg: "none",
                  textDecoration: "none",
                  cursor: "pointer",
                  color:"accent.500"
               }}
				>
					<GrMultiple />
				</Button>
			</Tooltip>
          : undefined}
		</Flex>
	);
};

export default ColorMultiDesignButtons;
