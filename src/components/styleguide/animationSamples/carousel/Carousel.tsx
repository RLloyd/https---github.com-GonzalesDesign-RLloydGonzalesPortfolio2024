import { Button } from "@chakra-ui/button";
import { Box, Flex } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { MotionFlex } from "src/assets/variables/Variables";

// move to variables
const SPRING_OPTIONS = {
	type: "spring",
	mass: 3,
	stiffness: 150,
	damping: 50,
};

type Props = {
	children: any;
	// children: ReactNode | null | any;
	// imahes: any | null;
	autoSlide: boolean;
	autoSlideInterval: number;
};

// const Carousel = ({ children: imahes, autoSlide = false, autoSlideInterval = 3000 }: Props) => {
// const Carousel = ({  autoSlide = false, autoSlideInterval = 3000 }) => {
// const Carousel = ({ children: imahes, autoSlide = false, autoSlideInterval = 3000 }) => {
// const Carousel = ({ images, autoSlide = false, autoSlideInterval = 3000 }:Props) => {
const Carousel = ({ children, autoSlide = false, autoSlideInterval = 3000 }:Props) => {
	// (autoSlide = false), (autoSlideInterval = 3000);

	const [current, setCurrent] = useState(0);
	const { colorMode, toggleColorMode } = useColorMode();

	// move to variables
	const carouselAnimVariant = {
		hidden: { translateX: 0 },
		visible: { translateX: `-${current * 100}%`, transition: { SPRING_OPTIONS } },
	};

	const prev = () => {
		setCurrent((current) => (current === 0 ? children.length - 1 : current - 1));
	};
	const next = () => {
		setCurrent((current) => (current === children.length - 1 ? 0 : current + 1));
		// console.log("imahes.length & current: ", imahes.length, current)
	};

	useEffect(() => {
		if (!autoSlide) return;
		const slideInterval = setInterval(next, autoSlideInterval);
		return () => clearInterval(slideInterval);
	}, []);

	return (
		<Flex
			className="carouselContainer"
			overflow={"hidden"}
			position={"relative"}
			width={"auto"}
			maxWidth={"640px"}
			height={"auto"}
			borderRadius={".75rem"}
			//  border={"1px solid"}
			//  borderColor={"primary.200"}
		>
			{/* <div className="flex">{imgs}</div> */}
			<MotionFlex gap={"0rem"} className={"carouselWrapper"} variants={carouselAnimVariant} initial="hidden" animate="visible">
				{children}
				{/* {imahes} */}
			</MotionFlex>

			{/*--= Button Group =--*/}
			<Flex
				className="buttonsWrapper"
				// className="buttonsWrapper absolute inset-0 flex items-center justify-between p-4"
				position={"absolute"}
				alignItems={"center"}
				justifyContent={"space-between"}
				padding={"1rem"}
				inset={"0"}
				// border={"1px solid magenta"}
			>
				<Button
					onClick={prev}
					variant={colorMode === "light" ? "primary" : "accent"}
					padding={"0px"}
					borderRadius={"full"}
					border={"0px solid"}
					// className="p-0 rounded-full shadow bg-white/75 text-gray-800 hover:bg-white"
				>
					<BiChevronLeft size={40} />
				</Button>

				<Button
					onClick={next}
					variant={colorMode === "light" ? "primary" : "accent"}
					padding={"0px"}
					borderRadius={"full"}
					border={"0px solid"}
					// className="p-0 rounded-full shadow bg-white/75 text-gray-800 hover:bg-white"
				>
					<BiChevronRight size={40} />
				</Button>
			</Flex>

			{/*--= Bottom dots =--*/}
			<Box className="dotsContainer" position={"absolute"} bottom={"1rem"} right={"0px"} left={"0px"}>
				{/* className="absolute bottom-4 right-0 left-0"> */}
				<Flex className="dotsWrapper" alignItems={"center"} justifyContent={"center"} gap={2}>
					{/* className="flex items-center justify-center gap-2" */}
					{/* {imahes.map((xspace: any, index: any) => ( */}
					{children.map((xspace: any, index: any) => (
						<div key={index} className={`transition-all w-3 h-3 bg-white rounded-full ${current === index ? "p-3" : "bg-opacity-50"}`} />
					))}
				</Flex>
			</Box>
		</Flex>
	);
};

export default Carousel;
