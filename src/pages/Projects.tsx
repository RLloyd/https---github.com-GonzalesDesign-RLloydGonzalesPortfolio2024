import { Container, UnorderedList, ListItem, Box, ListIcon, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import { MdCheckCircle, MdSend } from "react-icons/md";
import { FaProjectDiagram, FaArrowRight } from "react-icons/fa";

function Projects() {
	return (
		<>
			<Layout>
				<Container className="projects">
					<Heading as={"h2"} fontSize={"4rem"} className="uppercaseX text-4xl">
						Proyektos
					</Heading>

					<UnorderedList>
						<ListItem listStyleType="none" margin={"2rem"}>
							<Button variant={"solid"} colorScheme="teal" leftIcon={<MdCheckCircle size={"30px"} color="red" />}>
								<Link to={"../typicode"}>Fetch API Data</Link>
							</Button>
						</ListItem>

						<ListItem listStyleType="none" margin={"2rem"}>
							<Button variant={"outline"} colorScheme="teal" rightIcon={<FaArrowRight />}>
								<ListIcon as={FaProjectDiagram} color="red" />
								<Link to={"../localData"}>Fetch Local Data</Link>
							</Button>
						</ListItem>

						<ListItem listStyleType="none" margin={"2rem"}>
							<Link to={"../"}>Project Dos</Link>
						</ListItem>
					</UnorderedList>
				</Container>
			</Layout>
		</>
	);
}
export default Projects;
