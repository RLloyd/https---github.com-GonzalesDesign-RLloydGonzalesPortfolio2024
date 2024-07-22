import { Box, Button, Flex } from "@chakra-ui/react";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { db } from "src/firebase";

type Props = {
	fieldValue: any;
	likesRef: any;
   // count: any;
};

const subCollection = "likes/id_thumbs_up";

const Increment = ({fieldValue, likesRef}: Props) => {
// const Increment = (props:any) => {

   const [count, setCount] = useState(0);
   // const [count, setCount] = useState([0]);
   // const { fieldValue, likesRef} = props;

   const handleClick = async () => {
      const subColRef = doc(db, subCollection)
      await updateDoc(subColRef, fieldValue)
      // await updateDoc(subColRef, { home: increment(1) })
   };

	useEffect(() => {
		onSnapshot(
			collection(db, `likes`),
			(snapshot:any) =>
            // Refactor the following!
            {  likesRef === "home" ? setCount( snapshot.docs.map( (doc:any) => doc.data().home ))
               : likesRef === "uxuisa" ? setCount( snapshot.docs.map( (doc:any) => doc.data().uxuisa ))
               : setCount( snapshot.docs.map( (doc:any) => doc.data().sg_carousel ))
            }
      );
	}, []);

   const num = 123456.789;
   const options = {  maximumFractionDigits: 2  }
   const formattedNumber = Intl.NumberFormat("en-US", options).format(count);
   // const formattedNumber = Intl.NumberFormat("en-US", options).format(num);

   // Try this library for number formatting
   // https://www.npmjs.com/package/react-number-format

	return (
		<Button
			onClick={handleClick}
			variant={"ghost"}
			_hover={{
				bg: "none",
				textDecoration: "none",
				cursor: "pointer",
			}}
      >
			{/* Container */}
			<Flex alignItems={"center"}>

				{/* Circle Thumbs Container */}
				<Flex alignItems={"center"}>

               {/* Circle Thumbs Up */}
					<Box className="thumbsUp"
                  width={"40px"} height={"40px"}
                  bg={"accent.500"}
                  boxShadow={"lg"}
                  zIndex={"10"}
                  border={"3px solid"} borderColor={"accent.200"} borderRadius={"full"}
                  _hover={{ bg: "primary.300" }}
                  >
                  {/* Thumbs Container */}
						<Box position={"relative"}
                     fontSize={"1.2rem"}
                     left={"7px"} top={"5px"}
                     color={"accent.50"}
                     boxShadow={"lg"}
                     >
							{/* Thumbs */}
							<FaThumbsUp />
						</Box>
					</Box>
				</Flex>

				{/* Display counter */}
				<Box
               position={"relative"}
               fontSize={"sm"}
               color={"primary.600"}
               bgGradient="linear(to-r, accent.100, accent.50)"
               height={"24px"}
               left={"-10px"}
               paddingTop={"3px"}
               paddingLeft={"15px"}
               paddingRight={"15px"}
               borderRadius={"md"}
               boxShadow={"lg"}
            >
               {/* {count} */}
               {formattedNumber}

				</Box>
			</Flex>

		</Button>
	);
};

export default Increment;
