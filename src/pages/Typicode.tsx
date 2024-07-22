import { Box, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PhotoData from "../assets/data/photo-data.json";

const Typicode = () => {
	//!----------------------------------------------------=

	//* Using an API:

	const [posts, setPosts] = useState<any[]>([]);

	/*
   //* Using Fetch API
	// const fetchPosts = () => {
	// 	fetch("https://jsonplaceholder.typicode.com/posts")
	// 		.then((res) => res.json())
	// 		.then((data: any[]) => setPosts(data));
	// };
   */

	//* Using Axios API
	const fetchPosts = async () => {
		console.log("photoData: ", PhotoData);
		const responsePosts = await axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((response) => setPosts(response.data.slice(0, 10)))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<Layout>
			{posts.map((post: any, index) => (
				<Box key={index}
               p={10}
               border="1px solid hsla(0, 100%, 50%, 0.25)"
               className="flex flex-col items-center gap-5">

               <Heading as={"h4"} fontSize={"1.5rem"}>
						{post.id}: {post.title}
					</Heading>
               <Text fontSize='2xl'>
                  {post.body}
               </Text>
					{/* <img className="card-image h-20 w-[40rem]" src={post.thumbnailUrl} alt="" /> */}
				</Box>

			))}
		</Layout>
	);

	//!----------------------------------------------------=

	//* Using local data: moved to LocalData.tsx
	// https://www.youtube.com/watch?v=aJgAwjP20RY

	// return (
	// 	<Layout>
	// 		{PhotoData.map((post: any, index) => (
	// 			<Box key={index} p={3} border="1px solid #ccc" className="flex flex-col items-center gap-5">
	// 				<Heading as={"h4"} fontSize={"1.5rem"}>
	// 					{post.id}: {post.title}
	// 				</Heading>
	// 				<img className="card-image h-20 w-[40rem]" src={post.thumbnailUrl} alt="" />
	// 			</Box>
	// 		))}
	// 	</Layout>
	// );
};
//!----------------------------------------------------=

export default Typicode;

// https://www.youtube.com/watch?v=43aFTbyQtgo
