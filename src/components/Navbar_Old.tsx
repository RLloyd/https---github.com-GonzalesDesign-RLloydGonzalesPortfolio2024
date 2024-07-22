import { Box, Flex, IconButton, Image, ListItem, UnorderedList, useBreakpoint, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import gdLogo from "../assets/images/GD-Logo.png";
import { TooltipStyle } from "../assets/styles/Styles";
import "../assets/styles/styles.css";
import { useGlobalStore } from "../hooks/GlobalStates";
import ColorMultiDesignButtons from "./welcome/ColorMultiDesignButtons";


import { useEffect, useState } from "react";
import Avatar from "./profileAvatar/Avatar";

// gsap.registerPlugin(useGSAP);

const menus = [
	{
		id: 0,
		label: "Home",
		link: "/",
		// subMenu: [
		// 	{
		// 		label: null,
		// 		link: null,
		// 	},
		// ],
	},
	// {
	// 	id: 1,
	// 	label: "Projects",
	// 	link: "/projects",
	// 	// subMenu: [
	// 	// 	{
	// 	// 		label: null,
	// 	// 		link: null,
	// 	// 	},
	// 	// 	{
	// 	// 		label: null,
	// 	// 		link: null,
	// 	// 	},
	// 	// ],
	// },
	// {
	// 	id: 2,
	// 	label: "Snippets",
	// 	link: "/snippets",
	// 	subMenu: [
	// 		{
	// 			label: null,
	// 			link: null,
	// 		},
	// 		{
	// 			label: null,
	// 			link: null,
	// 		},
	// 	],
	// },
	{
		id: 3,
		label: "Style Guide",
		// link: null,
		link: "/styleguide",
		// subMenu: [
		// 	{
		// 		label: "Brand Logo",
		// 		link: "/brandlogo",
		// 	},
		// 	{
		// 		label: "Typography",
		// 		link: "/typography",
		// 	},
		// ],
	},
];

const property = {
	imageAlt: "GonzalesDesign",
};
const burgerZIndex = "5000";
const burgerXPosition = 10;

// function Navbar() {
const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const [display, changeDisplay] = useState("none");

	const bg = useColorModeValue("accent.500", "accent.200");
	const colorAccent = useColorModeValue("brand.50", "accent.500");
	const border = useColorModeValue("primary.50", "primary.500");
	const navBg = useColorModeValue("hsla(0, 80%, 98%, 0.125)", "hsla(0, 80%, 98%, 0.05)");
	const fontColor = useColorModeValue("primary.900", "primary.100");
	const burgerMenuBg = useColorModeValue("primary.100", "primary.700");
	// const burgerMenuBg = useColorModeValue("hsla(0, 80%, 98%, 0.5)", "hsla(0, 80%, 98%, 0.95)");
	const D1GradBGMode = useColorModeValue("linear-gradient(to bottom, primary.500, primary.400, #dae9f100)", "linear-gradient(to bottom, primary.50, primary.200, primary.100, #dae9f100)");

	const { designFlat, setDesignFlat } = useGlobalStore();
	const toggleDesign = () => {
		setDesignFlat(!designFlat);
		console.log("designFlat: ", designFlat);
	};

	const breakpoint = useBreakpoint();

	const [isBurgerMenu, SetBurgerMenu] = useState(true);

	const [isDisplay, SetDisplay] = useState(true);

	const TopNavBarMenu = () => (
      <Flex
         className="topNavbarContainer"
         alignItems={"center"}
         justifyContent={"space-between"}
         w={"full"}
         padding={"0 1rem"}
         borderBottom={"1px solid"}
         borderRadius={"1rem 1rem 0 0"}
         height={"80px"}
         background={navBg}
         borderColor={border}
         boxShadow={"lg"}
         // className="navbar flex-row justify-between items-center gap-5 borderX"
      >
         {/* GD Logo */}
         <TooltipStyle label="GonzalesDesign 2024" placement="top">
            <Box className="navbar-logo">
               <Image
                  borderRadius={"full"}
                  boxSize={"65px"}
                  // border={"1px solid hsla(10, 100%, 70%, 0.95)"}
                  // background={"#aaa"}
                  background={"transparent"}
                  left={"0px"}
                  position={"relative"}
                  // src={property.imageUrl}
                  src={gdLogo}
                  alt={property.imageAlt}
               />
            </Box>
            {/* </Tooltip> */}
         </TooltipStyle>

         {/* Menu */}
         <Flex className="topMenuULContainer" flexDirection={"column"}>
            <UnorderedList
               display={"flex"}
               justifyContent={"space-between"}
               gap={10}
               // border={"1px solid"}
            >
               {menuList}
            </UnorderedList>
         </Flex>
         <Flex className="flex flex-row items-center justify-center gap-10">
            <Flex
               className="avatarLikeButtonsContainer"
               flexDirection={"row-reverse"}
               justifyContent={"space-between"}
               alignItems={"center"}
               // height={"220px"}
               gap={10}
            >
               <Avatar />
               {/* <LikesButton /> */}
               <ColorMultiDesignButtons showMultiDesignButtons={false} />
            </Flex>
         </Flex>
      </Flex>
   )

	const BurgerMenu = () => (
		/*--= Hamburger Menu =--*/
		// <Box>
			<Box
				className="burgerMenuBox"
				// display={"none"}
				position={"relative"}
				zIndex={burgerZIndex}
			>
				<Flex
					className="burgerMenuContainer"
					flexDirection={"column"}
               alignItems={"center"}
					gap={5}
					position={"fixed"}
					left={burgerXPosition}
               top={"80px"}
					// left={minusBurgerXPosition}
					// alignItems={"center"}
					// w={"full"}
					width={"200px"}
					// height={"80px"}
					height={"auto"}
					padding={"1rem 1rem 2rem"}
					// borderBottom={"1px solid"}
               border={"1px solid"}
					borderColor={border}
					borderRadius={"1rem"}
					background={burgerMenuBg}
					// backgroundImage={D1GradBGMode}
					// boxShadow={"lg"}
					zIndex={burgerZIndex}
					// overflow={"hidden"}
					// className="navbar flex-row justify-between items-center gap-5 borderX"
				>
					<TooltipStyle label="GonzalesDesign 2024" placement="top">
						<Box className="navbarLogo">
							<Image
								borderRadius={"full"}
								boxSize={"65px"}
								// border={"1px solid hsla(10, 100%, 70%, 0.95)"}
								// background={"#aaa"}
								background={"transparent"}
								position={"relative"}
								// left={"170px"}
								// src={property.imageUrl}
								src={gdLogo}
								alt={property.imageAlt}
							/>
						</Box>
					</TooltipStyle>

					<Flex className="burgerMenuULContainer" flexDirection={"column"}>
						<UnorderedList
							className="menuULWrapper"
							display={"flex"}
							flexDirection={"column"}
							justifyContent={"space-between"}
							gap={4}
							margin={"0px"}
							// border={"1px solid"}
							// position={"relative"}
							// top={"70px"}
							// left={"-90px"}
							// background={"#f0fcff75"}
							// background={"red"}
							// height={"1200px"}
							zIndex={burgerZIndex}
						>
							{menuList}
						</UnorderedList>
					</Flex>
					<Flex
						className="testContainer"
						zIndex={"6000"}
						// className="flex flex-row items-center justify-center gap-10"
					>
						<Flex
							className="avatarLikeButtonsContainer"
							flexDirection={"row-reverse"}
							justifyContent={"space-between"}
							alignItems={"center"}
							// height={"220px"}
							gap={5}
							// zIndex={"2000"}
						>
							<Box>
								<Avatar />
							</Box>

							<ColorMultiDesignButtons showMultiDesignButtons={false} />
						</Flex>
					</Flex>
				</Flex>
			</Box>
		// </Box>
   )
   const BurgerMenuButton = () => (
      <Flex className="burgerMenuButton" justify="flex-start" position={"fixed"} zIndex={"10"}>
         <TooltipStyle label={isDisplay === true ? "Open Menu" : "Close Menu"} placement="right">
            <IconButton className="burgerIconMenuButton"
               aria-label="Open Menu"
               size="md"
               mr={2}
               icon = {isDisplay === true ? <GiHamburgerMenu /> : <VscChromeClose />}
               // icon={<GiHamburgerMenu />}
               onClick={() => toggleDisplay()}
               />
         </TooltipStyle>
      </Flex>
   )

	const toggleBurgerMenu = () => {
		SetBurgerMenu(!isBurgerMenu);
		console.log("isBurgerMenu: ", isBurgerMenu);
	};

	const toggleDisplay = () => {
		SetDisplay(!isDisplay);
		console.log("isDisplay: ", isDisplay);
	};

	useEffect(() => {
		if (breakpoint === "base" || breakpoint === "sm")
         SetBurgerMenu(true);
		// if ((breakpoint === "base" && isBurgerMenu) || breakpoint === "sm") SetBurgerMenu(true);
		else if (breakpoint === "md" || breakpoint === "lg" || breakpoint === "xl" || breakpoint === "2xl")
         SetBurgerMenu(false);
		// console.log("isBurgerMenu: ", isBurgerMenu);
		// console.log("breakpoint: ", breakpoint);
	}, [breakpoint]);

	// const box = useRef();
	// const [endX, setEndX] = useState(300)

	// useGSAP(() => {
	//    // gsap.to(menuList, {x: 360})
	//    // gsap.to("menuListItem", {x:360, duration:3, repeat:-1, ease:"none"})
	//    gsap.to(".burgerMenuBox", {x:endX, duration:1, repeat:0, ease:"sine.inOut"})
	// },{dependencies:[endX], revertOnUpdate:true})

	const menuList = menus.map((menu: any, index) => (
		<ListItem className="menuListItem"
         key={index}
         listStyleType={"none"}
         textTransform={"uppercase"}
         fontSize={"1.2rem"}
         fontWeight={"600"}
         textAlign={"center"}
         color={fontColor}
         // width={"full"}
         width={"150px"}
         >
			<NavLink
				to={menu.link}
				style={({ isActive }) => {
					return {
						fontWeight: isActive ? "bold" : "",
						color: isActive ? "#eb6200" : "primary.50",
					};
				}}
				className={"hover:text-orange-500"}
			>
				{menu.label}
			</NavLink>
		</ListItem>
	));



	return (
		<>

         {isBurgerMenu === true ?
            BurgerMenuButton()
            :
            // BurgerMenu()
            TopNavBarMenu()
            }

			{!isDisplay === true ?
            // BurgerMenuButton()
            BurgerMenu()
            :
            undefined
            // TopNavBarMenu()
            }

		</>
	);
};

export default Navbar;
