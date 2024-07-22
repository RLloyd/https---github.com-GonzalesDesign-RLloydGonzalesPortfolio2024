import { Text } from "@chakra-ui/react";
import { H2Header } from "@styles/Styles";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "src/firebase";

type Props = {
	collectionPath: string;
};

const IntroCollectionList = ({ collectionPath }: Props) => {
	const query = collection(db, collectionPath);
	const [docs, loading, error] = useCollectionData(query);
   // console.log("docs2: ", docs);
   // console.log("collectionPath: ", collectionPath);

	return (
		<ul>
         {loading && "Loading sub-collections..."}
			{docs?.map((doc) => (

				// <li key={i}>
				<li key={Math.random()}>

               <H2Header fontSize="32px">{doc.introTitle}</H2Header>

               <Text>{doc.introText}</Text>

            </li>

			))}

         {error && "Error loading data!"}

         {/* Add new document */}
         {/* <Box
            m={"2rem 0 "}
            // w={"50%"}
            // border={"1px solid"}
            >
            <AddNew collectionPath={collectionPath}
               buttonLabel="Submit"
               inputLabel="Add new version"
            />
         </Box> */}
		</ul>
	);
};

export default IntroCollectionList;

