import React from "react";
import { H1Header } from "../assets/styles/Styles";
/*-= Firebase =-*/
import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "./../firebase"







const CrudFuncts = () => {
	return (
		<>
			<H1Header></H1Header>
		</>
	);
};

export default CrudFuncts;
