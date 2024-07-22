import { Text, Box, Button, FormLabel } from '@chakra-ui/react'
import { H1Header, LinkButton } from '@styles/Styles'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../../../firebase";
// import { auth } from "./firebase";
import { Input } from '@chakra-ui/react';
import { color } from 'framer-motion';

type FormValues = {
   password: string;
   email: string;
}

const SignUpFirebase = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleSubmit = async (e:any) => {
      // console.log("handleSubmit")
   // const handleSubmit = (e) => {
   // const handleSubmit = async (e) => {
   // const handleSubmit = async (e:FormValues) => {
      e.preventDefault()
      await createUserWithEmailAndPassword(auth, password, email)
      // signInWithEmailAndPassword(auth, password, email)
         .then((userCredential) => {
            console.log("userCredential: ", userCredential)
         })
         .catch((error) => {
            console.log("error: ", error)
         });

      // try {
      //    // createUserWithEmailAndPassword(auth, password, email)
      //    // await createUserWithEmailAndPassword(auth, password, email)
      //    console.log("Account created")
      // } catch(err) {
      //    // console.log("error: ", err)
      // }
   };
   // const onSubmit = async (data: FormValues) => {
		// console.log("form submitted: ", data)
		// alert(`Form submitted!
      //    Email: ${data.email}
      //    Password: ${data.password}
      //    `);

   //    try {
   //       await createUserWithEmailAndPassword(auth, data.password, data.email)
   //       console.log("Account created")
   //    } catch(err) {
   //       // console.log("error: ", err)
   //    }
	// };

  return (
    <Box className='signupContainer' p={"1rem"}>
      <form className="signup-form" onSubmit={handleSubmit}>
      {/* <form onSubmit={handleSubmit(onSubmit)} noValidate> */}
         <H1Header margin={"0 0 0rem"} color="primary.50">Sign Up</H1Header>
         <Text margin={"0 0 1rem"} color="primary.50">SignUpFirebase</Text>

         <FormLabel htmlFor="email">
            Email:
            <Input type="email"
               placeholder='Enter your email'
               value={email}
               onChange={(e) => setEmail(e.target.value)}/>
            {/* <Input type="email" placeholder='Enter your email' value={email}/> */}
         </FormLabel>

         <FormLabel htmlFor="password">
            Password:
            <Input type="type"
               placeholder='Enter your password'
               value={password}
               onChange={(e) => setPassword(e.target.value)}/>
            {/* <Input type="password" placeholder='Enter your password' value={password}/> */}
            {/* <input type="password" onChange={(e) => setPassword(e.target.value)}/> */}

         </FormLabel>

         <LinkButton
            label    =  {"Sign Up X"}
            link     =  {"/login"}
            target   =  {"_self"}
            icon     =  {""}
            textTransform={"capitalize"}
         />

         {/* Submit button */}
         <Box>
            <Button type="submit">Submit</Button>
         </Box>

         <p>Already Registered? <a>Login</a> </p>

      </form>

    </Box>
  )
}

export default SignUpFirebase
