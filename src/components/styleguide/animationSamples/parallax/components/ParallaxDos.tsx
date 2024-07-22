import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { H1Header, ImageSrcStyle } from "@styles/Styles";
import { color } from 'framer-motion';

const ParallaxDos = () => {
   const fontColor = useColorModeValue("primary.50", "primary.800");
   const bgColor = useColorModeValue("primary.50", "primary.800");
   const bgPrimAccntColor = useColorModeValue("primary.500", "accent.500");

	return (
		<>
			<Flex className="parallaxDosContainer"
            flexDirection={"column"}
            alignItems={"center"}
            height={"650px"}
            bg={bgColor}
            // color={fontColor}
            borderRadius={"1rem"}

            >
				<Text
               fontSize={"1rem"}
               textTransform={"uppercase"}
               margin={"2rem 0 1rem"}
               letterSpacing={"5px"}>
					Parallax
				</Text>
				<H1Header
					fontSize={{base:"2.5rem", md:"4rem"}}
					fontWeight={"800"}
					width={"600px"}
					lineHeight={"1.2"}
					// border={"1px solid"}
				>
					Visual Appeal
				</H1Header>
				<Text
					fontSize={{base:"2rem", md:"2.75rem", lg:"3.25rem"}}
					fontWeight={"normal"}
               // letterSpacing={"1px"}
					width={"80%"}
					// width={{base:"80%", lg:"800px"}}
					lineHeight={"1.3"}
					// border={"1px solid"}
				>
					By moving different layers of content at different speeds as the user scrolls, it creates an illusion of depth, making the interface feel immersive and interactive.
				</Text>
				{/* <ImageSrcStyle src={loaderImg} width={"300px"} height={"300px"} margin={"2rem"} border={"1px solid"} borderColor={"primary.400"} /> */}
			</Flex>
		</>
	);
};

export default ParallaxDos;
