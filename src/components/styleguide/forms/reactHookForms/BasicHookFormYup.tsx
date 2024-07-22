import { Box, Button, Collapse, FormControl, FormLabel, Input, Select, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import CodeBlockContainer from "@components/hilights/CodeBlockContainer";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { H2Header, sxErrors } from "@styles/Styles";
import { UseFormRegister, useForm } from "react-hook-form";
import * as yup from "yup";
import "./basicHookForm.css";

type FormValues = {
   username: string;
   email: string;
   country: string;
   // password: any;
}

type InputProps = {
   label: any;
   type: string
   register: UseFormRegister<FormValues>;
   // required: boolean;
   // email: string
}

const validationSchema = yup.object ({
   // Rules:
   username: yup
      .string()
      .min(2)
      .required("Username is required"),
   email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
   country: yup.string().required("Country is required XXX"),
   // password: yup.string().min(5).required("Password is required"),
   // country: yup.string().required("Please select a country"),
}).required()

const BasicHookFormYup = () => {
	const { isOpen, onToggle } = useDisclosure();
   const formColorMode = useColorModeValue("primary.50", "primary.500");

   /*-= using form hook =-*/
   const { register, control, handleSubmit, formState } = useForm<FormValues>(
      {
         /*-= adding default values: object =-*/
         defaultValues: {
            username: "R.Lloyd Gonzales",
            email: "",
            country: "",
         },
         /*-= add resolver for yup validation schema =-*/
         resolver: yupResolver(validationSchema),
         /*-= validation modes =-*/
         mode: "onBlur"
      }
   );
   /*-= de-structuring formState to get errors =-*/
   const { errors } = formState;

   const InputField = ({label, type, register}: InputProps) => {
      return(
         <>
            <FormControl>
               <FormLabel htmlFor={label}>
                  <Text p={"1rem"} textTransform="capitalize">{label}:</Text>
               </FormLabel>
               <Input m={2} type={type} id={label} placeholder={label} {...register(label)}/>
            </FormControl>
            {/* <Text sx={sxErrors}>{errors.{label}?.message}</Text> */}
         </>
      )
   }

   const onSubmit = (data:FormValues) => {
      // console.log("form submitted: ", data)
      alert(`Form submitted!
         Username: ${data.username}
         Email: ${data.email}
         Country: ${data.country}`);
   }

	return (
		<>
			<Box padding={"1rem"} margin={"2rem 0 "} borderRadius={"1rem"} border={"1px solid"} borderColor={"neutral.600"}>
				<H2Header fontSize="28px" margin="0 0 1rem">
					React hook form with Yup: XXX
					<Button variant={"accent"} fontWeight={"500"} size="sm" onClick={onToggle} ml="1rem" mt="0rem" textTransform={"capitalize"}>
						Show {isOpen ? "Less" : "Sample"}
					</Button>
				</H2Header>
				<Collapse in={isOpen} unmountOnExit>

               {/************************************************************************************************/}
					<Box p="1.25rem" bg="primary.700" border="1px solid" borderColor={"primary.400"} borderRadius={"1rem"}>

                  {/* Basic HTML form */}
                  <form onSubmit={handleSubmit(onSubmit)} noValidate> {/* no browser validation & allow react hook form to validate */}

                     {/* Username field */}
                     <InputField label="username" type="text" register={register}/>
                     <Text sx={sxErrors}>{errors.username?.message}</Text>

                     {/* Email field */}
                     <InputField label="email" type="email" register={register}/>
                     <Text sx={sxErrors}>{errors.email?.message}</Text>

                     {/* Select field */}
                     <div className="form-control">
                        <label htmlFor="country">Country</label>
                        {/* <Select name="country" id="country" placeholder="Select option"> */}
                        <Select {...register("country")}>
                           <option value="USA">United States of America</option>
                           <option value="RP">Republic of the Philippines</option>
                           <option value="JAP">Japan</option>
                        </Select>
                        {/* Error paragraph w/ optional chaining */}
                        <Text sx={sxErrors}>{errors.country?.message}</Text>
                     </div>

                     {/* Submit button */}
                     <Button type="submit">Submit</Button>
                  </form>
               </Box>

               {/* in the browser, click on the little magenta square on top right */}
               <DevTool control={control}/>

            {/************************************************************************************************/}
            {/***| CODES BLOCK |******************************************************************************/}
            {/* Basic code block wrapper */}
            <Box mt={"4rem"}>
               <CodeBlockContainer header="React Hook Form : Basic" codesBlock={BasicHookFormCodeBlock}/>
            </Box>

            {/* Basic code block wrapper */}
            <Box mt={"4rem"}>
               <CodeBlockContainer header="React Hook Form : Basic" codesBlock={BasicHookFormCodeBlock}/>
            </Box>

            {/* Basic code block wrapper */}
            {/* <MotionBox>
               <H4Header margin={"2rem 1rem 1rem"}>Basic hook form code block:</H4Header>
               <MotionBox className={"highlightContainer overflow-auto rounded-2xl text-base p-4 max-h-[300px] bg-[#282c34]"}
               border={"1rem solid #282c34"}>
                  <Copy2Clipboard codeBlock={BasicHookFormCodeBlock} buttonLabel="copy" />
                  <Box width={{ base: "100px", lg: "auto" }}>
                     <CodeHilite codeBlock={BasicHookFormCodeBlock} />
                  </Box>
               </MotionBox>
            </MotionBox> */}

            {/* Devtool code block wrapper */}
            {/* <MotionBox>
               <H4Header margin={"2rem 1rem 1rem"}>Devtool code block:</H4Header>
               <MotionBox className={"highlightContainer overflow-auto rounded-2xl text-base p-4 max-h-[300px] bg-[#282c34]"}
               border={"1rem solid #282c34"}>
                  <Copy2Clipboard codeBlock={BasicHookFormDevToolCodeBlock} buttonLabel="copy" />
                  <Box width={{ base: "100px", lg: "auto" }}>
                     <CodeHilite codeBlock={BasicHookFormDevToolCodeBlock} />
                  </Box>
               </MotionBox>
            </MotionBox> */}

            {/* Submission code block wrapper */}
            {/* <MotionBox>
               <H4Header margin={"2rem 1rem 1rem"}>Submission code block:</H4Header>
               <MotionBox className={"highlightContainer overflow-auto rounded-2xl text-base p-4 max-h-[300px] bg-[#282c34]"}
               border={"1rem solid #282c34"}>
                  <Copy2Clipboard codeBlock={BasicHookFormSubmissionCodeBlock} buttonLabel="copy" />
                  <Box width={{ base: "100px", lg: "auto" }}>
                     <CodeHilite codeBlock={BasicHookFormSubmissionCodeBlock} />
                  </Box>
               </MotionBox>
            </MotionBox> */}

            {/* Validation code block wrapper */}
            {/* <MotionBox>
               <H4Header margin={"2rem 1rem 1rem"}>Validation code block:</H4Header>
               <MotionBox className={"highlightContainer overflow-auto rounded-2xl text-base p-4 max-h-[300px] bg-[#282c34]"}
               border={"1rem solid #282c34"}>
                  <Copy2Clipboard codeBlock={BasicHookFormValidationCodeBlock} buttonLabel="copy" />
                  <Box width={{ base: "100px", lg: "auto" }}>
                     <CodeHilite codeBlock={BasicHookFormValidationCodeBlock} />
                  </Box>
               </MotionBox>
            </MotionBox> */}

            {/* Errors: code block wrapper */}
            {/* <MotionBox>
               <H4Header margin={"2rem 1rem 1rem"}>Errors code block:</H4Header>
               <MotionBox className={"highlightContainer overflow-auto rounded-2xl text-base p-4 max-h-[300px] bg-[#282c34]"}
               border={"1rem solid #282c34"}>
                  <Copy2Clipboard codeBlock={BasicHookFormErrorCodeBlock} buttonLabel="copy" />
                  <Box width={{ base: "100px", lg: "auto" }}>
                     <CodeHilite codeBlock={BasicHookFormErrorCodeBlock} />
                  </Box>
               </MotionBox>
            </MotionBox> */}

            {/* Custom errors: code block wrapper */}
            {/* <MotionBox>
               <H4Header margin={"2rem 1rem 1rem"}>Custom errors code block:</H4Header>
               <MotionBox className={"highlightContainer overflow-auto rounded-2xl text-base p-4 max-h-[300px] bg-[#282c34]"}
               border={"1rem solid #282c34"}>
                  <Copy2Clipboard codeBlock={BasicHookFormCustomErrorsCodeBlock} buttonLabel="copy" />
                  <Box width={{ base: "100px", lg: "auto" }}>
                     <CodeHilite codeBlock={BasicHookFormCustomErrorsCodeBlock} />
                  </Box>
               </MotionBox>
            </MotionBox> */}

				</Collapse>
			</Box>
		</>
	);
};

export default BasicHookFormYup

const BasicHookFormCodeBlock = `
import { useForm } from "react-hook-form";

type FormValues = {
   username: string;
   email: string;
   channel: string;
}

const BasicHookForm = () => {
   /*-= using form hook =-*/
   const form = useForm<FormValues>();
   const { register } = form ; //de-sructuring form

   /*-= de-structuring register that can be used
         for the username field =-*/
   // const { name, ref, onChange, onBlur } = register("username");

	return (
      <>
         {/* Basic HTML form */}
         <form>
            {/* Username field */}
            <label htmlFor="username">Username</label>

            {/* assigning props to start tracking username state */}
            {/* <input type="text" id="username"
               name={name} ref={ref}
               onChange={onChange} onBlur={onBlur} /> */}
            {/* This is convoluted way of doing to track a field */}
            {/* A better way is to use spread operator */}
            <input type="text" id="username"
               {...register("username")}/>

            {/* Email field */}
            <label htmlFor="email">Email</label>
            <input type="text" id="email" {...register("email")}/>

            {/* Channel field */}
            <label htmlFor="channel">Channel</label>
            <input type="text" id="channel" {...register("channel")}/>

            {/* Submit button */}
            <button>Submit</button>
         </form>
      </>
	);
};
`;

const BasicHookFormDevToolCodeBlock = `
import { DevTool } from "@hookform/devtools";
const BasicHookForm = () => {
   /*-= using form hook =-*/
   const form = useForm<FormValues>();
   const { register, control } = form ; //de-sructuring form

	return (
      <>
         {/* Basic HTML form */}
         <form>
            ...
         </form>

         <DevTool control={control}/>
         {/* In the browser page,
            click on the little magenta square on top right */}

      </>
	);
};
`;

const BasicHookFormSubmissionCodeBlock = `
const BasicHookForm = () => {
   /*-= using form hook =-*/
   const form = useForm<FormValues>();
   const { register, control, handleSubmit } = form ;
   //de-sructuring form

	return (
      <>
         {/* Basic HTML form */}
         <form onSubmit={handleSubmit(onSubmit)}>
            ...
            {/* Submit button */}
            <button>Submit</button>
         </form>
      </>
	);
};
`;

const BasicHookFormValidationCodeBlock = `
const BasicHookForm = () => {
   /*-= using form hook =-*/
   const form = useForm<FormValues>();
   const { register, control, handleSubmit } = form ;

	return (
      <>
         {/* Basic HTML form */}
         <form onSubmit={handleSubmit(onSubmit)}
            noValidate> {/* no browser validation &
               allow react hook form to validate */}
            {/* Username field */}
            <label htmlFor="username">Username</label>
            <input type="text" id="username"
               {...register("username",
               // add required message as an object
               { required:
                  { value: true,
                     message: "Username is required"
                  }
               })}/>

            {/* Email field */}
            <label htmlFor="email">Email</label>
            <input type="text" id="email"
               {...register("email",
               // pattern validation using regex
               { pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_
                     \`{|}~-]+@[a-zA-Z0-9-]+(?:
                        \.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email format",
                  },
               })}/>

            {/* Channel field */}
            <label htmlFor="channel">Channel</label>
            <input type="text" id="channel"
               {...register("channel")}/>

            {/* Submit button */}
            <button>Submit</button>
         </form>
      </>
	);
};
`;

const BasicHookFormErrorCodeBlock = `
const BasicHookForm = () => {
   /*-= using form hook =-*/
   const form = useForm<FormValues>();
   const { register, control, handleSubmit, formState } = form;
   const { errors } = formState;
   //de-structuring formState to get errors

	return (
      <>
         {/* Basic HTML form */}
         <form onSubmit={handleSubmit(onSubmit)}
            noValidate> {/* no browser validation &
               allow react hook form to validate */}

            {/* Username field */}
            <div className="form-control">
               <label htmlFor="username">Username</label>
               <input type="text" id="username"
                  {...register("username",
                     // add required message as an object
                     { required:
                        { value: true,
                           message: "Username is required"
                        }
                     }
                  )}
               />
               {/* Error paragraph w/ optional chaining */}
               <Text sx={sxErrors}>{errors.username?.message}</Text>
            </div>

            {/* Email field */}
            <div className="form-control">
               <label htmlFor="email">Email</label>
               <input type="email" id="email"
                  {...register("email",
                  { required: {
                     value:true,
                     message: "Email is required",
                  },
                  /*-= pattern validation using regex =-*/
                  pattern:
                     {  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_
                           \`{|}~-]+@[a-zA-Z0-9-]+(?:
                           \.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email format",
                     },
                  }
               )}/>
               {/* Error paragraph w/ optional chaining */}
               <Text sx={sxErrors}>{errors.email?.message}</Text>
            </div>

            {/* Channel field */}
            <div className="form-control">
               <label htmlFor="channel">Channel</label>
               <input type="text" id="channel" {...register("channel",
                  // add required message
                  { required: "Channel is required" }
               )}/>
               {/* Error paragraph w/ optional chaining */}
               <Text sx={sxErrors}>{errors.channel?.message}</Text>
            </div>

            {/* Submit button */}
            <button>Submit</button>
         </form>
      </>
	);
};
`;

const BasicHookFormCustomErrorsCodeBlock = `
const BasicHookForm = () => {
   /*-= using form hook =-*/
   const form = useForm<FormValues>();
   const { register, control, handleSubmit, formState } = form;
   const { errors } = formState;
   //de-structuring formState to get errors

	return (
      <>
         {/* Basic HTML form */}
         <form onSubmit={handleSubmit(onSubmit)} noValidate>

            {/* Username field */}
            <div className="form-control">
               <label htmlFor="username">Username</label>
               ...
            </div>

            {/* Email field */}
            <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email"
               {...register("email",
               { required: {
                  value:true,
                  message: "Email is required",
               },
               /*-= pattern validation using regex =-*/
               pattern:
               {  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_
                     \`{|}~-]+@[a-zA-Z0-9-]+(?:
                     \.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email format",
               },
               /*-= adding custom validations =-*/
               validate: {
                  private: (fieldValue) => {
                     return (
                        fieldValue !== "admin@web.com" ||
                        "Use another email"
                     );
                  },
                  blackListed: (fieldValue) => {
                     return (
                        !fieldValue.endsWith("darkweb.com") ||
                        "This domain is not supported"
                     )
                  },
                  required: (fieldValue) => {
                     return (
                        fieldValue === " " || "Email is required"
                     )
                  },
               },
            })}/>
            {/* Error paragraph w/ optional chaining */}
            <Text sx={sxErrors}>{errors.email?.message}</Text>
         </div>

            {/* Channel field */}
            <div className="form-control">
               <label htmlFor="channel">Channel</label>
               ...
            </div>

            {/* Submit button */}
            <button>Submit</button>
         </form>
      </>
	);
};
`;


