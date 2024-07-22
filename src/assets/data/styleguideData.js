import { collection, doc, setDoc } from "firebase/firestore";

const sectionRef = collection(db, "styleguideSection");

// await setDoc(doc(sectionRef, "SF"), {
//     name: "San Francisco", state: "CA", country: "USA",
//     capital: false, population: 860000,
//     regions: ["west_coast", "norcal"] });