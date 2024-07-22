import { Avatar, Box, Button, Flex, Heading, Image, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsMedium, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import gdLoogo from "../assets/images/GD-Logo.png";
import owlFooter from "../assets/images/owl-footer.png";
import React from "react";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);

	return (
		<>
			<Flex
				w={"full"}
				className="footer
            flex-col items-center gap-2 mt-5
            "
			>
				{/* border border-red-200 border-solid */}

				{/* Footer */}
				{/* <Flex className="flex flex-col items-center justify-center m-2 gap-5 border"> */}

				{/* Logo */}
				<Box className="footer-logo">
					{/* <Box className="footer-logo flex items-center justify-center"> */}
					<Image
						src={owlFooter}
						position={"absolute"}
						margin={{ base: "-50px -50px", md: "100px 170px", lg: "-50px 0px" }}
						// left={"0px"} top={"-50px"}
						boxSize={{ base: "150px", sm: "300px", md: "110px", lg: "200px" }}
						// border={"1px solid hsla(10, 100%, 70%, 0.95)"}
						borderRadius={"full"}
						// background={"transparent"}
						// zIndex={"0"}
						// className="
						//    m-[0, -10px]
						//    md:m-[100px, 170px]"
					/>
				</Box>

				{/* Footer Main Content */}
				<Flex
					// w-[560px] md:w-[920px] lg:w-[1080px]
					// zIndex={"10"}
					// position={"absolute"}
					className="
                  flex-col
                  md:flex-row justify-between
                  "
					// gap-10
					// md:gap-20
					// w-[100%]
					width={"inherit"}
					// border={"1px solid red"}
				>
					{/* <Flex w={"6xl"} className="flex-row justify-between border"> */}
					{/* <Flex className="flex-row justify-between border"> */}

					{/* Footer Links */}
					<Flex
						className="
                     flex-col
                     md:flex-row
                     gap-5 borderX p-2"
					>
						{/* About Us */}
						<Flex className="flex-col items-start text-left gap-3 borderX">
							<Heading as={"h4"} size={"sm"}>
								API Helpers
							</Heading>
							<ul className="flex flex-col items-start list-none gap-2">
								<li className="uppercaseX font-poppins text-xs font-bold text-slate-400 hover:text-gray-200">
									<Link to={"/"}>Typicode</Link>
								</li>
								<li className="uppercaseX font-poppins text-xs font-bold text-slate-400 hover:text-gray-200">
									<Link to={"projects"}>Images API</Link>
								</li>
							</ul>
						</Flex>

						{/* Our Products */}
						<Flex className="flex-col items-start text-left gap-3 borderX">
							<Heading as={"h4"} size={"sm"}>
								Learn React
							</Heading>
							<ul className="flex flex-col items-start list-none gap-2">
								<li className="uppercaseX font-poppins text-xs font-bold text-slate-400 hover:text-gray-200">
									<Link to={"/"}>Robotic Automation</Link>
								</li>
								<li className="uppercaseX font-poppins text-xs font-bold text-slate-400 hover:text-gray-200">
									<Link to={"projects"}>Our AI Software Platform</Link>
								</li>
								<li className="uppercaseX font-poppins text-xs font-bold text-slate-400 hover:text-gray-200">
									<Link to={"projects"}>Our AI Software Platform</Link>
								</li>
							</ul>
						</Flex>

						{/* Our Services */}
						<Flex className="flex-col items-start text-left gap-3 borderX">
							<Heading as={"h4"} size={"sm"}>
								Job Links
							</Heading>
							<ul className="flex flex-col items-start list-none gap-2">
								<li className="uppercaseX font-poppins text-xs font-bold text-slate-400 hover:text-gray-200">
									<Link to={"/"}>1211 Scheduled Maintenance</Link>
								</li>
								<li className="uppercaseX font-poppins text-xs font-bold text-slate-400 hover:text-gray-200">
									<Link to={"projects"}>Auto Software Updates</Link>
								</li>
								<li className="uppercaseX font-poppins text-xs font-bold text-slate-400 hover:text-gray-200">
									<Link to={"projects"}>24 hours Call Center</Link>
								</li>
								<li className="uppercaseX font-poppins text-xs font-bold text-slate-400 hover:text-gray-200">
									<Link to={"projects"}>International In-Person Trouble Shooting</Link>
								</li>
							</ul>
						</Flex>
					</Flex>

					{/* Footer Stay Connected */}
					<Flex className="flex-col borderX p-2">
						{/* Stay Connected */}
						<Flex className="flex-col items-start gap-3 borderX">
							<Heading as={"h4"} size={"sm"}>
								Enter Password
							</Heading>
							<Flex>
								<InputGroup size="md">
									<Input pr="4.5rem" type={show ? "text" : "password"} placeholder="Enter Password" />
									<InputRightElement width="4.5rem">
										<Button h="1.75rem" size="sm" onClick={handleClick}>
											{show ? "Hide" : "Show"}
										</Button>
									</InputRightElement>
								</InputGroup>
							</Flex>
						</Flex>
						<Flex justifyContent={"space-between"} marginTop={3} fontSize={"xl"}>
							<Box color={"cyan.500"}>
								<BsLinkedin />
							</Box>
							<Box color={"orange.500"}>
								<BsGithub />
							</Box>
							<BsTwitter />
							<Box color={"blue.500"}>
								<BsFacebook />
							</Box>
							<Box color={"yellow.500"}>
								<BsInstagram />
							</Box>
							<Box color={"red.500"}>
								<BsYoutube />
							</Box>
							<Box color={"red.500"}>
								<FaPinterest />
							</Box>
						</Flex>
					</Flex>
				</Flex>
				{/* End: Footer Main Content */}
				{/* </Flex> */}

				{/* <Avatar size={"sm"} background={"hsla(0, 100%, 50%, 0.95)"} className="m-3">
					<Link to={"profile"}></Link>
				</Avatar> */}
			</Flex>
		</>
	);
};

export default Footer;
