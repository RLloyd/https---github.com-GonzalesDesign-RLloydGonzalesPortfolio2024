// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBDIwi0jY_CPCGlv_v_wxJqbc96gisDJt4",
//   authDomain: "rlloydgonzalesportfolio2024.firebaseapp.com",
//   projectId: "rlloydgonzalesportfolio2024",
//   storageBucket: "rlloydgonzalesportfolio2024.appspot.com",
//   messagingSenderId: "525213208598",
//   appId: "1:525213208598:web:316e1273344653997fe537",
//   measurementId: "G-X5T3H87CJV"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
// export { app, auth }


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
   // // apiKey:            import.meta.env.VITE_API_KEY,
   // authDomain:        import.meta.env.VITE_AUTH_DOMAIN,
   // // projectId:         import.meta.env.VITE_PROJECT_ID,
   // storageBucket:     import.meta.env.VITE_STORAGE_BUCKET,
   // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
   // // appId:             import.meta.env.VITE_APP_ID,
   // measurementId:     import.meta.env.VITE_MEASUREMENT_ID,

   apiKey:              "AIzaSyBDIwi0jY_CPCGlv_v_wxJqbc96gisDJt4",
   authDomain:          "rlloydgonzalesportfolio2024.firebaseapp.com",
   projectId:           "rlloydgonzalesportfolio2024",
   storageBucket:       "rlloydgonzalesportfolio2024.appspot.com",
   messagingSenderId:   "525213208598",
   appId:               "1:525213208598:web:316e1273344653997fe537",
   measurementId:       "G-X5T3H87CJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
// export const auth = getAuth(app);
const auth = getAuth(app);

export { app, auth }
