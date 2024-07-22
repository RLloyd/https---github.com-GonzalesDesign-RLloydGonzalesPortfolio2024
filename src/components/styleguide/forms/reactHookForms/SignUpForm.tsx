import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
// import { auth } from '../firebase';
import { auth } from "../../../../firebase";

const SignUp = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const Register = (e:any) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         console.log("userCredential: ", userCredential)
      })
      .catch((error) => {
         console.log("error: ", error)
      });
   }

   return (
    <div>
      <form action="" onSubmit={Register}>
         <h1>Register</h1>
         <input type="email" placeholder='Enter you email' value={email} onChange={(e) => setEmail(e.target.value)} />
         <input type="password" placeholder='Enter you password' value={password} onChange={(e) => setPassword(e.target.value)} />
         <button type='submit'>Register</button>
      </form>

    </div>
  )
}

export default SignUp

// import { Button, Input, Select, FormControl, FormLabel, Text } from "@chakra-ui/react";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { UseFormRegister, useForm } from "react-hook-form";
// import { sxErrors } from "@styles/Styles";

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "./../../../../firebaseConfig.js";
// import { auth } from "../../../../firebase";

// type FormValues = {
//    password: string;
//    email: string;
//    country: string;
// }

// type InputProps = {
//    label: string;
//    type: string
//    register: UseFormRegister<FormValues>;
//    required: boolean;
//    email: string;
// }

// const validationSchema = yup.object ({
//    // Rules:
//    password: yup
//       .string()
//       .min(2)
//       .required("Password is required"),
//    email: yup
//       .string()
//       .required("Email is required")
//       .email("Invalid email format"),
//    // country: yup.string().required("Country is required"),
// }).required()

// const SignUpForm = () => {
// 	/*-= using form hook =-*/
// 	const { register, control, handleSubmit, formState } = useForm<FormValues>({
// 		/*-= adding default values: object =-*/
// 		defaultValues: {
// 			password: "R.Lloyd Gonzales",
// 			email: "",
// 			// country: "",
// 		},
// 		/*-= add resolver for yup validation schema =-*/
// 		resolver: yupResolver(validationSchema),
// 		/*-= validation modes =-*/
// 		mode: "onBlur",
// 	});
// 	/*-= de-structuring formState to get errors =-*/
// 	const { errors } = formState;

// 	const InputField = ({ label, type, register }: InputProps) => {
// 		return (
// 			<>
// 				<FormControl>
// 					<FormLabel htmlFor={label}>
// 						<Text p={"1rem"} textTransform="capitalize">
// 							{label}:
// 						</Text>
// 					</FormLabel>
// 					<Input m={2} type={type} id={label} placeholder={label} {...register(label)} />
// 				</FormControl>
// 				{/* <Text sx={sxErrors}>{errors.{label}?.message}</Text> */}
// 			</>
// 		);
// 	};

// 	// const onSubmit = async (data) => {
// 	const onSubmit = async (data: FormValues) => {
// 		// console.log("form submitted: ", data)
// 		// alert(`Form submitted!
//       //    Email: ${data.email}
//       //    Password: ${data.password}
//       //    `);

//       try {
//          await createUserWithEmailAndPassword(auth, data.password, data.email)
//          console.log("Account created")
//       } catch(err) {
//          // console.log("error: ", err)
//       }
// 	};
// 	return (
//       <>
//          {/* Basic HTML form */}
//          <form onSubmit={handleSubmit(onSubmit)} noValidate> {/* no browser validation & allow react hook form to validate */}

//             {/* Email field */}
//             <InputField label="email" type="text" register={register}/>
//             <Text sx={sxErrors}>{errors.email?.message}</Text>

//             {/* Password field */}
//             <InputField label="password" type="password" register={register}/>
//             <Text sx={sxErrors}>{errors.password?.message}</Text>

//             {/* Select field */}
//             {/* <div className="form-control">
//                <label htmlFor="country">Country</label>
//                <Select {...register("country")}>
//                   <option value="USA">United States of America</option>
//                   <option value="RP">Republic of the Philippines</option>
//                   <option value="JAP">Japan</option>
//                </Select>
//                <Text sx={sxErrors}>{errors.country?.message}</Text>
//             </div> */}

//             {/* Submit button */}
//             <Button type="submit">Submit</Button>
//          </form>
//       </>
//    )
// };

// export default SignUpForm;
