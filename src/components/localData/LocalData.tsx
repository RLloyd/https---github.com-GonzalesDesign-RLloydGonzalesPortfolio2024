import { Box, Heading } from "@chakra-ui/react";
import Layout from "../Layout";
import PhotoData from "../../assets/data/photo-data.json"

const LocalData = () => {
	//* Using local data:
	// https://www.youtube.com/watch?v=aJgAwjP20RY

	return (
		<Layout>
			{PhotoData.map((post: any, index) => (
				<Box key={index} p={3} border="1px solid #ccc" className="flex flex-col items-center gap-5">
					<Heading as={"h4"} fontSize={"1.5rem"}>
						{post.id}: {post.title}
					</Heading>
					<img className="card-image h-20 w-[40rem]" src={post.thumbnailUrl} alt="" />
				</Box>
			))}
		</Layout>
	);
};

export default LocalData;
