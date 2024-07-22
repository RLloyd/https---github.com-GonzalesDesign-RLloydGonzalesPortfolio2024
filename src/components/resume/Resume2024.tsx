import { Box, Flex, chakra } from "@chakra-ui/react";
import Layout from "@components/Layout";
import { H2Header } from "@styles/Styles";
import { collection, getFirestore, limit, orderBy, query } from "firebase/firestore";
import React from "react";
import { useCollection, useCollectionData } from "react-firebase-hooks/firestore";
import { app, db } from "src/firebase";
import useGetFirestoreCollection from "src/hooks/useGetFirestoreCollection";

const Resume2024 = () => {
	// Firebase:
	/*-----------------------------------------------------*/
	// const docName = "BrandLogo";
	// const [section] = useGetFirestoreCollection(docName);

	/*-1----------------------------------------------------*/
	// const collectionName = "Contact";
	// const collectionPath = `resume2024/${collectionName}/`;
	const collectionPath = "resume2024/";
	const collectionRef = collection(db, collectionPath);
	const [docs, loading, error] = useCollectionData(collectionRef);

   const subCollectionPath = "resume2024/Experience/children";
	const subCollectionRef = collection(db, subCollectionPath);
	// const [subDocs, subLoading, subError] = useCollectionData(subCollectionRef);
   /*-5: sorting----------------------------------------------------*/
   const q = query(subCollectionRef, orderBy("id", "desc"), limit(3));
	const [subDocs, subLoading, subError] = useCollectionData(q);
   // console.log("q: ", q);
   // console.log("subCollectionRef: ", subCollectionRef);
	/*-2----------------------------------------------------*/
   // const subCollectionPath = "resume2024/Experience/children";
	// const subQuery = collection(db, subCollectionPath);
	// // const [subDocs, subLoading, subError] = useCollectionData(subQuery);
	// const [subDocs, subLoading, subError] = useCollection(
   //    query(
   //       collection(getFirestore(app), collectionPath, "Experience/children"),
   //       orderBy("numero", "asc")
   //    )
   // )

	/*-3----------------------------------------------------*/
   // const [subDocs, subLoading, subError] = useCollection(
   // // const [value, dataLoading, dataError] = useCollection(
   //    query(
   //       collection(getFirestore(db, subCollectionPath),
   //       // collection(getFirestore(app), "channels", channelId, "messages"),
   //       orderBy("timestamp", "asc")
   //    )
   // );
   /*-4----------------------------------------------------*/
   // const [values, loading, error] = useCollectionData(
   //    // subQuery).orderBy('name', 'asc')
   //    db.collection('items').orderBy('name', 'asc') // Sort by 'name' in ascending order
   //  );

   //  if (loading) return <p>Loading...</p>;
   //  if (error) return <p>Error: {error.message}</p>;

   /*-----------------------------------------------------*/

	return (
		<Layout>
			<Box
            textAlign={"left"}
            w={"50%"}
            m={"4rem 8rem"}
            // border={"1px solid"}
            >
            <ul>
               {loading && "Loading content collections..."}
               {docs?.map((doc) => (
                  // <li key={doc.id}>
                  <li key={Math.random()}>
                     <H2Header fontSize="32px">{doc.name}</H2Header>
                     <H2Header fontSize="24px">{doc.title}</H2Header>
                     <Box fontSize={"1rem"} fontWeight={"500"}>{doc.email}</Box>
                     <Box fontSize={"1rem"} fontWeight={"500"}>{doc.phone}</Box>
                     <Box fontSize={"1rem"} fontWeight={"500"} mt={2}>{doc.street}</Box>
                     <Box fontSize={"1rem"} fontWeight={"500"}>{doc.city} {doc.state} {doc.zip}</Box>
                  </li>
               ))}
            </ul>

            <ul>
               {subLoading && "Loading sub collections..."}
               {subDocs?.map((doc:any) => (
                  <li key={doc.id}>
                  {/* <li key={Math.random()}> */}
                     <Flex flexDirection={"column"} >
                        <Box fontSize={"1.5rem"} fontWeight={"600"}>{doc.company}</Box>
                        <Box fontSize={"1.25rem"} fontWeight={"600"}>{doc.position}</Box>
                        <Box fontSize={"1.15rem"} >{doc.platform}</Box>
                        <Box >{doc.year}</Box>
                        <Box>{doc.duties_1}</Box>
                        <Box mt={4}>{doc.duties_2}</Box>
                        <Box mt={4}>{doc.duties_3}</Box>
                        <Box mb={"1rem"}/>
                     </Flex>

                  </li>
               ))}
            </ul>
         </Box>
		</Layout>
	);
};

export default Resume2024;
