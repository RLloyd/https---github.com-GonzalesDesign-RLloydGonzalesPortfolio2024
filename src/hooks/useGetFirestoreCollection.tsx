import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "src/firebase";

type Props = {
   docName: string
   id: string;
}

// const useGetFirestoreCollection = ({collectionName}: any) => {
// const useGetFirestoreCollection = ({id}: any) => {
   // const useGetFirestoreCollection = ({id}: Props) => {
const useGetFirestoreCollection = (id?: any) => {
	const [section, setSection] = useState([id || ""]);
   // const [section, setSection] = useState([{ title: "Loading...", id: "initial id" || "" }]);
   /*-----------------------------------------------------*/
   const getDocList = async (db:any, collectionName:any, id:string) => {
      try{
         const dataRef = doc(db, collectionName, id);
         const dataDoc = await getDoc(dataRef);
         setSection([dataDoc.data()]);
      } catch {
         setError("Something went wrong")
      } finally {
         // setSection(["Finally"])
      }
   }
   /*=-------------------=*/
   useEffect(() => {
      getDocList(db, "styleguideSection", id);
   }, [id]);
   /*-----------------------------------------------------*/
   // useEffect(() =>
   //    onSnapshot(collection(db, collectionName), (snaphot) =>
   //       setSection(snaphot.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
   //    ),
   // []);
   /*-----------------------------------------------------*/

	return [section];
};

export default useGetFirestoreCollection;

function setError(arg0: string) {
   throw new Error("Function not implemented.");
}

