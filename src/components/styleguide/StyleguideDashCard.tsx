import { Box, Text, border, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useAnimate } from "framer-motion";
import { ReactNode } from "react";

type Props = {
	icon?: ReactNode;
	content?: ReactNode;
	action?: ReactNode;
	color?: string;
};

const StyleguideDashCard = ({
	icon,
	content,
	action,
	color,
}: // color="primary.100"
Props) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const cardBorderMode = useColorModeValue("primary.200", "primary.900");
	const cardBGMode = useColorModeValue("primary.50", "primary.500");
	const [scope, animate] = useAnimate();

	const handleAnimate = async () => {
		await animate("#icon", { x: 150 });
		await animate("#icon", { rotate: "360deg" }, { duration: 1 });
		console.log("Mouse is over the element!");
	};

	const gradationBackgroundMode = useColorModeValue("linear-gradient(305deg, primary.200, primary.400)", "linear-gradient(305deg, primary.800, primary.500)");

	return (
		<Box
			className="styleguideDashCardWrapper"
			borderRadius={"lg"}
			// height={"20rem"}
			height={"100%"}
			minWidth={"0"}
			// padding={{base:"1rem", lg:"2rem"}}
			background={cardBGMode}
			boxShadow={"lg"}
			overflow={"hidden"}
			border={"1px solid"}
			borderColor={cardBorderMode}
			// borderColor={"red"}
		>
			{/* <Box
            // w={"100%"} h={"100%"}
            border={"1px solid"}
            > */}
			<Text
				id="icon"
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				h={"150px"}
				fontSize={"7rem"}
				fontWeight={"700"}
				textAlign={"center"}
				color={color}
				// color={"purple"}
				// bg={"primary.400"}
				backgroundImage={gradationBackgroundMode}

				// position={"relative"}
				// onMouseOver={() => handleAnimate()}
				// border={"1px solid yellow"}
			   >
				{icon}
			</Text>

			{/* </Box> */}

			{content}

			{action}
		</Box>
	);
};

export default StyleguideDashCard;
