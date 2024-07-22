import { Card, CardBody, Flex, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { H1Header, H3Header, H4Header } from "../../assets/styles/Styles";

type Props<T> = {
	className?: string;
	imgSrc?: string;
	sxImage?: {} | string; //props for image
	imgBox?: {} | string;
	textTransform?: string;
	shortIntro: string;
	cardTitle: string;
	subTitle: string;
	description: string;
	sxContent?: string;
	background: string;
	backgroundImage?: string;
	buttonLabel: string;
	buttonLink?: {};
	linkTarget?: string;
	buttonLeftIcon?: T;
	buttonRightIcon?: T;
	colorScheme?: string;
	butttonColor?: string;
	buttonBackground?: string;
	buttonHoverColor?: string;
	margin?: string;
	sxCardDesign?: {} | string;
};

const CardTemplate2 = (props: any) => {
	const { imgSrc, sxImage } = props;
	const textColor = useColorModeValue("primary.900", "primary.200");
	const headerColor = useColorModeValue("primary.900", "primary.50");

	return (
		<>
			<Card border={"1px solid"} borderRadius={"1rem"} padding={"5px"} background={"orange"}>
				<CardBody border={"1px solid"} borderRadius={"2rem"} background={"gray"}>
					<Stack border={"1px solid"} borderRadius={"2rem"} background={"red"}>
						{/* Image */}
						<Image src={imgSrc} sx={sxImage} />

						{/* Content */}
						<Flex border={"1px solid"}>
							{/* Card Short Intro */}
							<H4Header>H4 Header</H4Header>
							{/* Card Title */}
							<H1Header>H1 Header</H1Header>
							{/* Card Sub-Tile */}
							<H3Header>H3 Header</H3Header>
							{/* Card Description */}
							<Text>Text</Text>
						</Flex>

						{/* Card button & link */}
						{/* <Link to={buttonLink} target={linkTarget}>
							<StiloButton label={buttonLabel} leftIcon={buttonLeftIcon} rightIcon={buttonRightIcon} background={buttonBackground} color={butttonColor} hoverColor={buttonHoverColor} />
						</Link> */}
					</Stack>
				</CardBody>
			</Card>
		</>
	);
};

export default CardTemplate2;
