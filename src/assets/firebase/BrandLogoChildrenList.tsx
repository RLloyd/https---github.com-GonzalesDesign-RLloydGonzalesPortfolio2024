import { Text } from "@chakra-ui/react";
import { H1Header, H2Header } from "@styles/Styles";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "src/firebase";

type Props = {
	collectionPath: string;
};

const BrandLogoChildrenList = ({ collectionPath }: Props) => {
	const query = collection(db, collectionPath);
	const [docs, loading, error] = useCollectionData(query);
   // console.log("docs2: ", docs);
   console.log("collectionPath: ", collectionPath);

	return (
		<ul>
         {loading && "Loading sub-collections..."}
			{docs?.map((doc) => (
				// <li key={doc.id}>
				<li key={Math.random()}>
               <H2Header fontSize="32px">{doc.introTitle}</H2Header>
               <Text>{doc.introText}</Text>
               <H1Header>{doc.titolo}</H1Header>
            </li>
			))}
		</ul>
	);
};

export default BrandLogoChildrenList;

