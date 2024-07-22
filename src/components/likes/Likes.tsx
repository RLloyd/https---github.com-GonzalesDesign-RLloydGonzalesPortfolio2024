import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
// Firebase
import { getFirestore, collection, getDocs, onSnapshot, increment } from "firebase/firestore"
import { db } from "src/firebase";


/*-= Collection reference =-*/
// const likesRef = collection(db, "likes");
const likesCount = () => Number(localStorage.getItem("likes")) || 0;

// var washingtonRef = db.collection('cities').doc('DC');
// washingtonRef.update({
//    population: firebase.firestore.FieldValue.increment(50)
// });

// const incrementx = FieldValue.increment(1);

type Props = {
   like?: string
}

const LikesButton = ({ like }: Props) => {
   // Firebase
   const homeLikes = 0
   const [count, setCount] = useState([]);
   // useEffect(() => {
   //    onSnapshot(collection(db, "likes"), (snapshot) => {
   //       // console.log("Likes.tsx: snapshot.docs: ", snapshot.docs.map((doc) => doc.data().home))
   //       // setCount(snapshot.docs.map((doc) => doc.data().like))
   //       setCount(snapshot.docs.map((doc) => doc.data().anim_image_carousel))
   //    });
   // }, [])

   // useEffect(() => {
   //    onSnapshot(collection(db, "likes"), (snapshot) =>
   //       setCount(snapshot.docs.map((doc) => doc.data().home)))
   // }, []);

   // Local storage
	// const [likes, setLikes] = useState(likesCount());
	// useEffect(() => {
	// 	localStorage.setItem("likes", likes);
	// }, [likes]);

	// const handleClick = () => {
	// 	// setLikes(likes + 1);
	// 	setCount(count + 1);
	// };

	return (
		<Button
			// onClick={handleClick}
			// variant={"link"}
			variant={"ghost"}
			bg={"purple"}
         _hover={{
            bg: "none",
            textDecoration: "none",
            cursor: "pointer",
         }}
		>
         {/* Container */}
         <Flex
            alignItems={"center"}
            >
            {/* Circle Thumbs Container */}
            <Flex
               alignItems={"center"}
               // zIndex={"10"}
               >
               {/* Circle Thumbs Up */}
               <Box className="thumbsUp"
                  border={"3px solid"}
                  borderColor={"accent.200"}
                  borderRadius={"full"}
                  width={"40px"}
                  height={"40px"}
                  bg={"accent.500"}
                  boxShadow={"lg"}
                  zIndex={"10"}
                  _hover={{ bg: 'primary.300' }}
                  >
                  {/* Thumbs Container */}
                  <Box position={"relative"}
                     left={"7px"}
                     top={"5px"}
                     color={"accent.50"}
                     fontSize={"1.2rem"}
                     boxShadow={"lg"}
                     >
                     {/* Thumbs */}
                     <FaThumbsUp />
                  </Box>
               </Box>

            </Flex>
            {/* Counter */}
            <Box>
               <Text
                  position={"relative"}
                  fontSize={"sm"}
                  color={"primary.600"}
                  // bg={"accent.100"}
                  // bgImage={"accent.100"}
                  bgGradient='linear(to-r, accent.100, accent.50)'
                  height={"24px"}
                  left={"-10px"}
                  paddingTop={"3px"}
                  paddingLeft={"15px"}
                  paddingRight={"15px"}
                  borderRadius={"md"}
                  boxShadow={"lg"}
                  >
                  {/* Likes  */}
                  {/* {likes} */}
                  {count}
               </Text>
            </Box>
         </Flex>

		</Button>
	);
};

export default LikesButton;

/*-- Explanation:
The LikesButton component

This component renders a button that allows users to like something.

It takes no inputs.

It outputs a button with a thumbs up icon and text showing the current number of likes.

When the button is clicked, it increments the 'likes' state variable by 1. This causes the component to re-render and show the updated likes count.

The likes count is persisted in localStorage, so it remains if the page is reloaded. When the component first loads, it checks localStorage for any existing likes count, and uses that as the initial 'likes' state value.

Each time the likes state changes, it saves the new value into localStorage to keep it updated.

The main logic flow is:

Initialize state from localStorage
Render button showing current likes count
When button clicked, increment state
Save updated state to localStorage
Re-render component with new state
This allows the component to display a dynamic likes count that persists across page loads, by reading and writing the count to localStorage whenever it changes.
--*/
