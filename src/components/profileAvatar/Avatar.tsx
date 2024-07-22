import { Box, Menu, MenuButton, MenuList, MenuGroup, MenuItem, Image, Button } from "@chakra-ui/react";

import React from "react";
import { SiAboutdotme } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";
import myAvatar from "./../../assets/images/myAvatar.jpeg";
import emailIcon from "./../../assets/images/profile-email-icon.png";
import resumeIcon from "./../../assets/images/profile-resume-icon.png";
import { ImageSrcStyle } from "../../assets/styles/Styles";
import { NavLink } from "react-router-dom";

const menu = [
	{
		// id: 0,
		// icon: <IoLogoApple />,
		label: "Resume",
		link: "/resume",
	}
]

const Avatar = () => {
	// const { designFlat, setDesignFlat } = useGlobalStore();
	// const toggleDesign = () => {
	// 	setDesignFlat(!designFlat);
	// 	console.log("designFlat: ", designFlat);
	// };
	return (
		//  {/* Avatar • Name • Email */}
		<Box
			className="avatarContainer"
         display={"flex"}
			padding={"0px"}
			// border={"1px solid"}
         // position={"relative"}
         // top={"11px"}
         zIndex={"6000"}
		>
			<Menu>
				<MenuButton>
					<Box className="avatarImageContainer"
                  // width={"70px"}
                  // height={"70px"}
                  >
						<Image
							src={myAvatar}
							// position={"relative"}
							// top={"50px"}
							// left={"-30px"}
							// sizes="50px"
							// top={"-50px"}
							//  width={"70px"}
							//  height={"70px"}
							border={"1px solid"}
							borderColor={"primary.100"}
							borderRadius={"full"}
							// zIndex={"10"}
							//  onClick={toggleDesign}
						/>
					</Box>
				</MenuButton>
				{/* <MenuList> */}
				<MenuList
               position={"relative"}
               // top={"-20px"}
               >
					<MenuGroup title="PROFILEX:">

						<MenuItem>
							{/* <MenuItem onClick={toggleDesign}> */}
							<Box color={"accent.500"} marginRight={".5rem"}>
								{/* <SiAboutdotme /> */}
                        <ImageSrcStyle src={resumeIcon} height={"40px"} />
							</Box>
                     {/* <NavLink to={menu.link}> */}
                     <NavLink to={"/resume"}>
                        Resume xxx
                     </NavLink>
                     {/* <Button variant={"link"} onClick={handleClick}>ResumeXXX</Button> */}

						</MenuItem>

						<MenuItem>
							<Box color={"accent.500"} marginRight={".5rem"}>
								{/* <MdAlternateEmail /> */}
								{/* <TfiEmail /> */}
                        <ImageSrcStyle src={emailIcon} height={"40px"} />
							</Box>
							Email Me
						</MenuItem>
					</MenuGroup>
					{/* <MenuDivider />
          <MenuGroup title='Help'>
             <MenuItem>Docs</MenuItem>
             <MenuItem>FAQ</MenuItem>
          </MenuGroup> */}
				</MenuList>
			</Menu>
		</Box>
	);
};

export default Avatar;
