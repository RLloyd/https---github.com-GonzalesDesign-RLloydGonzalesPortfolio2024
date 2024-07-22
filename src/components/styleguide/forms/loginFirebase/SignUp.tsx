import { Box, Button, Input } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { H1Header, sxErrors } from "@styles/Styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { UseFormRegister, useForm } from "react-hook-form";
import { auth } from "src/firebase";
import * as yup from "yup";

type FormValues = {
   username: string;
   email: string;
   password: string;
}

type InputProps = {
   label: string;
   type: string
   register: UseFormRegister<FormValues>;
   required: boolean;
   email: string
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
      // .test('unique-email', 'Email already exists', async (value) => {
      //    const response = await fetch(`/api/check-email?email=${value}`);
      //    const data = await response.json();
      //    return !data.exists;
      //  }),
   password: yup
      .string()
      .min(6)
      .required("Password is required")
}).required()

type Props = {
   fieldWidth: string
}

/*--= SignUp Component =--*/
const SignUp = ({fieldWidth}: Props) => {
   const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
   const [title, setTitle] = useState("Sign Up")
   const [isForm, setIsForm] = useState(true);

   const onSubmit = async (data:any) => {
      try {
      //   const userCredential = await createUserWithEmailAndPassword(
        await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
      //   console.log("User created:", userCredential.user);
        // Redirect or perform other actions on successful signup
        setTitle("Authenticated")
        setIsForm(false)
      }
      catch (error: any) {
         if (error.code === 'auth/invalid-email') {
            setEmailError("Please enter a valid email address.");
         } else if (error.code === 'auth/email-already-in-use') {
            setEmailError("The email address is already in use");
         } else {
            console.error('An error occurred:', error);
         }
      }
   };

   /*-= using form hook & yupResolver =-*/
   // https://github.com/react-hook-form/resolvers/issues/575
   // const { register, handleSubmit, formState: { errors }, } = useForm<FormValues>(
   // const { register, handleSubmit, formState } = useForm<FormValues>(
   const { register, handleSubmit, formState } = useForm<{email: string; password:string}>(
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
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                  {errors.password?.message}
               </Box>

               <Button type="submit"
                  size="md"
                  // onClick={Register}
                  >
                  Rehistro
               </Button>
            </form>
         :
            <Box>Pasok!</Box>
         }
		</>
	);
};

export default SignUp;
