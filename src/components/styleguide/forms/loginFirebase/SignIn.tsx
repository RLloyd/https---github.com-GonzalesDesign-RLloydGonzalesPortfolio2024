import { Box, Button, Input } from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { FaLock } from 'react-icons/fa';
import { yupResolver } from "@hookform/resolvers/yup";
import { H1Header, sxErrors } from "@styles/Styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { auth } from "../../../../firebase";
import { useState } from "react";

type FormValues = {
   // username: string;
   email: string;
   password: string;
}
const validationSchema = yup.object ({
   // Rules:
   // username: yup
   //    .string()
   //    .min(2)
   //    .required("Username is required"),
   email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
   password: yup
      .string()
      .min(5)
      .required("Password is required"),
}).required()

type Props = {
   fieldWidth: string
}

/*--= SignIn Component =--*/
const SignIn = ({fieldWidth}: Props) => {
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
   const [title, setTitle] = useState("Log In")
   const [isForm, setIsForm] = useState(true);

   const onSubmit = async (data:any) => {
      try {
        const userCredential = await signInWithEmailAndPassword(
         // await signInWithEmailAndPassword(
            auth,
            data.email,
            data.password
        );
         console.log("User created:", userCredential.user);
         // Redirect or perform other actions on successful signup
        setTitle("Authenticated")
        setIsForm(false)
      }
      catch (error: any) {
         if (error.code === 'auth/invalid-email') {
            // alert("Please enter a valid email address.");
            setEmailError("Please enter a valid email address.");
         } else if (error.code === 'auth/user-not-found') {
            // alert("The email address is not found");
            setEmailError("The email address is not found.");
         } else if (error.code === 'auth/wrong-password') {
            // alert("Wrong password");
            setPasswordError("Wrong password");
            } else {
            console.error('An error occurred:', error);
            }
         }
    };
    /*-= using form hook =-*/
   const { register, handleSubmit, formState } = useForm<FormValues>(
      {
         /*-= adding default values: object =-*/
         defaultValues: {
            email: "",
            password: "",
         },
         /*-= add resolver for yup validation schema =-*/
         resolver: yupResolver(validationSchema),
         /*-= validation modes =-*/
         mode: "onBlur"
      }
   );
   /*-= de-structuring formState to get errors =-*/
   const { errors } = formState;

	return (
		<>
         <H1Header mt="2rem">{title}</H1Header>
         {isForm ?
            <form onSubmit={handleSubmit(onSubmit)}>
               <Input type="email" {...register("email")}
                  placeholder="Enter your email"
                  margin={"8px 0"}
                  width={fieldWidth}
                  autoComplete="on"
               />
               <Box sx={sxErrors} w={"90%"}>
                  {errors.email?.message || emailError}
               </Box>

               <Input type="password" {...register("password")}
                  placeholder="Enter your password"
                  margin={"8px 0"}
                  width={fieldWidth}
                  autoComplete="on"
               />
               <Box sx={sxErrors} w={"90%"}>
                  {errors.password?.message || passwordError}
               </Box>
               <Button type="submit" size="md">Log In</Button>
            </form>
            :
            <Box>Correct</Box>
         }

		</>
	);
};

export default SignIn;
