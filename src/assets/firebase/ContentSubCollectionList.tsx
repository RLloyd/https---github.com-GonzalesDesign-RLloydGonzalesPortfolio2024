//  same as "ContentCollectionList" for sub collection with sorting

import { Text, chakra } from "@chakra-ui/react";
import {
   limit,
   orderBy,
   query
} from '@firebase/firestore';
import { collection } from "firebase/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "src/firebase";

type Props = {
	collectionPath: string;
};

const ContentSubCollectionList = ({ collectionPath }: Props) => {

	const collectionRef = collection(db, collectionPath);

   const q = query(collectionRef, orderBy("numero", "asc"), limit(15));
	const [docs, loading, error] = useCollectionData(q);;

	return (
      <>
         {/* {loading && "Loading collections..."} */}
         <ul>
            {docs?.map((doc) => (
               <li key={Math.random()}>
                  {/* <H2Header fontSize="32px">
                     {doc.subTitle}
                     {doc.title}sax
                  </H2Header> */}
                  <Text pb={"1rem"}>
                     <chakra.span fontWeight={"800"}>
                        {doc.id}
                        {doc.numero}
                        {doc.titleList}
                     </chakra.span>
                     {doc.list}
                     {doc.desc}
                  </Text>
               </li>

            ))}
            {error && "Error loading data!"}
         </ul>

      </>
	);
};

export default ContentSubCollectionList;

