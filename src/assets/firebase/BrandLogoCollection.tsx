import { Box, Text } from "@chakra-ui/react";
import { H1Header, H2Header } from '@styles/Styles';
import { collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from 'src/firebase';
import BrandLogoChildrenList from "./BrandLogoChildrenList";

const BrandLogoCollection = () => {
   const query = collection(db, "styleguideSection");
	const [docs, loading, error] = useCollectionData(query);
	console.log("docs: ", docs);

  return (
   <>
   <H1Header>Brand Logo Firebase Collection</H1Header>
   <Text color={"accent.500"}>BrandLogoCollection</Text>
   {loading && "Loading..."}

   <Box m={4}>
      <ul>
         {docs?.map((doc) => (
            <div key={Math.random()}>
               {/* <> */}
               {/* <li key={Math.random()}>{doc.name}</li> */}
               <li>
                  <H2Header margin="2rem 0 .1rem 0">{doc.title}</H2Header>
                  <Text>{doc.subTitle}</Text>
               </li>
               <BrandLogoChildrenList collectionPath={`styleguideSection/BrandLogo/children`} />
               {/* <BrandLogoChildrenList collectionPath={`styleguideSection/${doc.BrandLogo}/children`} /> */}
            </div>
         ))}

      </ul>
   </Box>
</>
  )
}

export default BrandLogoCollection
