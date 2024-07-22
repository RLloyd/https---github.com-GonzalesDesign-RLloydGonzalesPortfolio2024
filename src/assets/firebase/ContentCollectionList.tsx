import { Text, chakra } from "@chakra-ui/react";
import { collection } from "firebase/firestore";

import { H2Header } from "@styles/Styles";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "src/firebase";

type Props = {
	collectionPath: string;
};

const ContentCollectionList = ({ collectionPath }: Props) => {

	const collectionRef = collection(db, collectionPath);
	const [docs, loading, error] = useCollectionData(collectionRef);

   // const q = query(collectionRef, orderBy("numero", "asc"), limit(15));
	// const [docs, loading, error] = useCollectionData(q);

   // const q = query(collectionGroup(getFirestore(), collectionPath),
   //           orderBy('createdAt', 'desc'), limit(15))

   // const query = firestore.collection('docs').orderBy('id', 'desc');
   // const [docs, loading, error] = useCollectionData(query);

   // const [docs, loading, error] = useCollectionData(q);
   // console.log("docs.sort(): ", docs.sort());
   // console.log("sortDocs: ", sortDocs);
   // console.log("docs2: ", docs);
   // console.log("docs: ", docs);

	return (
      <>
         {loading && "Loading collections..."}
         <ul>
            {docs?.map((doc) => (
               <li key={Math.random()}>
                  <H2Header fontSize="32px">
                     {/* {doc.subTitle} */}
                     {doc.title}
                  </H2Header>
                  <Text>
                     <chakra.span fontWeight={"800"}>
                        {doc.id}
                        {doc.numero}
                        {doc.titleList}
                     </chakra.span>
                     {/* {doc.list} */}
                     {doc.desc}
                  </Text>
               </li>

            ))}
            {error && "Error loading data!"}
         </ul>

            {/* {subLoading && "Loading content collections..."} */}
         {/* <ul>
            {subDocs?.map((doc) => (
               <li key={Math.random()}>
                  <H2Header fontSize="32px">
                     {doc.subTitle}
                     {doc.title}
                  </H2Header>

                  <Text>
                     <chakra.span fontWeight={"800"}>
                        {doc.id}
                        {doc.numero}
                        {doc.titleList}
                     </chakra.span>
                     {doc.list}
                  </Text>
               </li>
            ))}
            {subError && "Error loading data!"}
         </ul> */}
      </>
	);
};

export default ContentCollectionList;

