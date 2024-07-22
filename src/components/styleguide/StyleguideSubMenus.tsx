import { Text, Flex, ListItem, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { IoColorPaletteSharp, IoLogoApple, IoRadioButtonOn } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { GoTypography } from "react-icons/go";
import { MdAnimation } from "react-icons/md";
import { BsCardImage } from "react-icons/bs";
import { BiStop } from "react-icons/bi";
import { FaRegClone } from "react-icons/fa";


const menus = [
	{
		id: 0,
		icon: <IoLogoApple />,
		label: "Brand Logo",
		link: "/brandlogo",
	},
	{
		id: 1,
		icon: <GoTypography />,
		label: "Typography",
		link: "/typography",
	},
	{
		id: 2,
		icon: <IoColorPaletteSharp />,
		label: "Color Palette",
		link: "/colorpalette",
	},
	{
		id: 3,
		icon: <IoRadioButtonOn />,
		label: "Buttons",
		link: "/buttons",
	},
	{
		id: 4,
		icon: <MdAnimation />,
		label: "Animations",
		link: "/animations",
	},
	{
		id: 5,
		icon: <IoMdLogIn />,
		label: "Forms",
		link: "/forms",
	},
	{
		id: 6,
		icon: <BiStop />,
		label: "Dashboard Card",
		link: "/card",
	},
	{
		id: 7,
		icon: <BsCardImage />,
		label: "Hero Banner",
		link: "/hero",
	},
	{
		id: 8,
		icon: <FaRegClone />,
		label: "Modal",
		link: "/modal",
	},

];

const StyleguideSubMenus = () => {
	const D1GradBGMode = useColorModeValue("linear-gradient(to bottom, primary.100, primary.50, primary.50, primary.50)", "linear-gradient(to bottom, primary.400, primary.700)");
   const backgroundColorMode = useColorModeValue("primary.100", "primary.600");

	const menuList = menus.map((menu: any, index) => (
		<ListItem
			display={"inline-block"}
			key={index}
			listStyleType={"none"}
			fontSize={{base:"10px", md:".8rem"}}
			fontWeight={"bold"}
			textAlign={"center"}
			textTransform={"uppercase"}
			// width={"full"}
			padding={"1rem"}
			border={"1px solid"}
			borderColor={"primary.400"}
         bg={backgroundColorMode}
		>
			<NavLink
				to={menu.link}
				style={({ isActive }) => {
					return {
						fontWeight: isActive ? "bold" : "",
						color: isActive ? "#eb6200" : "primary.50",
						background: isActive ? "#eb6200" : "primary.50",
						// backgroundImage: isActive ? D1GradBGMode : D1GradBGMode,
					};
				}}
				// className={"hover:#eb6200"}
				className={"hover:text-orange-500"}
            // _hover={{
            //    bg: "none",
            //    textDecoration: "none",
            //    cursor: "pointer",
            //    color:"accent.500"
            // }}
            >
				<Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
					<Text fontSize={{base:"1rem", md:"2rem"}}
               >{menu.icon}</Text>
					{menu.label}
				</Flex>
			</NavLink>
		</ListItem>
	));

	return (
		<>
			<UnorderedList
				display={"inline-block"}
				// display={"flex"}
				justifyContent={"center"}
				// width={"60%"}
				// justifyContent={"space-between"}
				// gap={10}
				width={"auto"}
				padding={"1rem"}
				margin={"1rem 0"}
				// border={"1px solid yellow"}
			>
				{menuList}
			</UnorderedList>
		</>
	);
};

export default StyleguideSubMenus;
