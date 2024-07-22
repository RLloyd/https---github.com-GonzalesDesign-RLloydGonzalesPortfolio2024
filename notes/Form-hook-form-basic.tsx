// npm install react-hook-form

import React from "react";
import "./basicHookForm.css";
import { Box, Button, Collapse, useDisclosure } from "@chakra-ui/react";
import { H2Header } from "@styles/Styles";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const BasicHookForm = () => {
	const { isOpen, onToggle } = useDisclosure();

   /*-= using form hook =-*/
   const form = useForm();
   const { register, control } = form ; //de-sructuring form

   //de-structuring register that can be used for the username field
   // const { name, ref, onChange, onBlur } = register("username");


	return (
		<>
			<Box padding={"1rem"} margin={"2rem 0 "} borderRadius={"1rem"} border={"1px solid"} borderColor={"neutral.600"}>
				<H2Header fontSize="28px" margin="0 0 1rem">
					Basic hook form:
					<Button variant={"accent"} fontWeight={"500"} size="sm" onClick={onToggle} ml="1rem" mt="0rem" textTransform={"capitalize"}>
						Show {!isOpen ? "Less" : "Sample"}
					</Button>
				</H2Header>
				<Collapse in={!isOpen} unmountOnExit>

					{/* Basic HTML form */}
					<form action="">
						{/* Username field */}
						<label htmlFor="username">Username</label>

                  {/* assigning props to start tracking username state */}
						{/* <input type="text" id="username" name={name} ref={ref} onChange={onChange} onBlur={onBlur} /> */}
                  {/* This is convoluted way of doing to track a field */}
                  {/* A better way is to use spread operator*/}
                  <input type="text" id="username" {...register("username")}/>

						{/* Email field */}
						<label htmlFor="email">Email</label>
						<input type="text" id="email" {...register("email")}/>

						{/* Channel field */}
						<label htmlFor="channel">Channel</label>
						<input type="text" id="channel" {...register("channel")}/>

						{/* Submit button */}
						<button>Submit</button>
					</form>

               {/* To verify form */}
               <DevTool control={control}/> {/* in the browser, click on the little magenta square on top right */}

				</Collapse>
			</Box>
		</>
	);
};

export default BasicHookForm;

/*--=
//To verify form install the devl tool ofr react-form
npm install -D @hookform/devtools //got can't find file error
npm install @hookform/devtools

//add control from form
const { register, control } = form ; //de-sructuring form
=--*/