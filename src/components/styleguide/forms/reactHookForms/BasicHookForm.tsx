import { Box, Button, Collapse, Flex, FormControl, FormLabel, Input, Select, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import CodeBlockContainer from "@components/hilights/CodeBlockContainer";
import { DevTool } from "@hookform/devtools";
import { H2Header, sxErrors } from "@styles/Styles";
import { UseFormRegister, useForm } from "react-hook-form";

type FormValues = {
   username: string;
   email: string;
   country: string;
   // adding nested objects:s1
   // social: {
   //    twitter: string;
   //    facebook: string;
   // }
}

type InputProps = {
   label: string;
   type: string
   register: UseFormRegister<FormValues>;
   required: boolean;
   email: string
}



const BasicHookForm = () => {
	const { isOpen, onToggle } = useDisclosure();
   const formColorMode = useColorModeValue("primary.50", "primary.500");

   /*-= using form hook & destructuring useForm =-*/
   // const form = useForm<FormValues>(
   const { register, control, handleSubmit, formState } = useForm<FormValues>(
      {
         /*-= adding default values: object =-*/
         defaultValues: {
            username: "R.Lloyd Gonzales",
            email: "",
            country: "",
            // adding nested objects:s2
            // social: {
            //    twitter: "",
            //    facebook: ""
            // }
         },
         /*-= validation modes =-*/
         mode: "onBlur"
      }
   );

   /*-= de-structuring formState to get errors =-*/
   const { errors } = formState;

   const onSubmit = (data:FormValues) => {
      // console.log("form submitted: ", data)
      alert(`Form submitted!
         Username: ${data.username}
         Email: ${data.email}
         Country: ${data.country}`);
   }

   // const InputField = ({label, type, register, required}: InputProps) => {
   //    return(
   //       <FormControl className="form-control">
   //          <FormLabel htmlFor={label}>
   //             <Box pl={4} textTransform="capitalize">{label}:</Box>
   //          </FormLabel>
   //          <Input mb={8} type={type} id={label} placeholder={label}
   //             {...register(label, {required})}/>
   //       </FormControl>
   //    )
   // }

   /*--= Code Blocks Wrapper Function =--*/
   // const CodeBlockContainer = (props: any) => {
   //    const { header, codesBlock } = props;
   //    const [codeHeight, setHeight] = useState(true);
   //    const toggleHeight = () => {
   //       setHeight(!codeHeight)
   //    }
   //    return (
   //       <Box {...props}>
   //          {/* Title: outside code container */}
   //          <H3Header margin={"4rem 1rem 1rem"}>{header}</H3Header>
   //          {/* Code container */}
   //          <Box className={"highlightContainer overflow-auto rounded-2xl text-base p-4 max-h-[1300px] bg-[#282c34]"}
   //             border={"1rem solid #282c34"} >
   //             <HStack justifyContent={"flex-end"} position={"absolute"} right={"150px"}>
   //                {/* Button: Copy code to clipboard */}
   //                <Copy2Clipboard codeBlock={codesBlock} background="primary.500" buttonLabel="Copy Code" />
   //                {/* Button: Trigger to adjust container height */}
   //                <Button onClick={toggleHeight}
   //                   variant={"outline"}
   //                   background="primary.500"
   //                   size={"sm"}
   //                   borderRadius={"6px"}
   //                   zIndex={10}
   //                   _active={{
   //                      bg: "accent.500",
   //                      color: "primary.50",
   //                   }}
   //                   >
   //                      {/* Button Label */}
   //                   {codeHeight ? "Expand Container" : "Shrink Container"}
   //                </Button>
   //             </HStack>
   //             {/* Container height based on codeHeight */}
   //             <Box  height={codeHeight ? "300px" : "auto"}
   //                width={{ base: "100px", lg: "auto" }}>
   //                {/* Call Codeblock component */}
   //                <CodeHilite codeBlock={codesBlock} />
   //             </Box>
   //          </Box>
   //       </Box>
   //    )
   // }

	return (
		<>
			<Box padding={"1rem"} margin={"2rem 0 "}
            borderRadius={"1rem"}
            border={"1px solid"}
            borderColor={"primary.400"}
            >
               <Flex>
                  <H2Header fontSize="28px" margin="0 0 1rem">
                     Basic hook form:XXX
                  </H2Header>
                  <Button variant={"accent"} fontWeight={"500"} size="sm" onClick={onToggle} ml="1rem" mt="0rem" textTransform={"capitalize"}>
                     Show {isOpen ? "Less" : "Sample"}
                  </Button>
               </Flex>
               <Box>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quam recusandae laboriosam dignissimos provident magni numquam dolore accusantium veniam iste!
               </Box>

               <Collapse in={isOpen} unmountOnExit>
                  {/************************************************************************************************/}
                  {/* Basic HTML form */}
                  <Box m={"2rem 0"} p={"2rem 1rem 1rem"}
                     bg={formColorMode}
                     border={"1px solid"} borderColor={"primary.300"}
                     borderRadius={"1rem"}
                     >

                     <form onSubmit={handleSubmit(onSubmit)} noValidate>

                        {/* Username field */}
                        <FormControl>
                           <FormLabel htmlFor="username" pl={4}>UsernameXXX</FormLabel>
                           <Input type="username" id="username" mb={2}
                              {...register("username",
                              { required: { value:true, message: "Username is required" }
                           })}/>
                        </FormControl>
                        <Box sx={sxErrors}>{errors.username?.message}</Box>

                        {/* Email field */}
                        <FormControl>
                           <FormLabel htmlFor="email" pl={4}>Email</FormLabel>
                           <Input type="email" id="email" mb={2}
                              {...register("email",
                              { required: { value:true, message: "Email is required" },
                              /*-= pattern validation using regex =-*/
                              pattern: {
                                 value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                 message: "Invalid email format",
                              }
                           })}/>
                        </FormControl>
                        <Box sx={sxErrors}>{errors.email?.message}</Box>

                        {/* County field */}
                        <FormControl>
                           <FormLabel htmlFor="country" pl={4}>Country:</FormLabel>
                           <Select {...register("country")} mb={8}>
                           {/* <Select {...register("country")} placeholder="Select option" mb={8}> */}
                           {/* <Select name="country" id="country" placeholder="Select option"> */}
                              <option value="USA">United States of America</option>
                              <option value="RP">Republic of the Philippines</option>
                              <option value="JAP">Japan</option>
                           </Select>
                        </FormControl>
                        <Box sx={sxErrors}>{errors.country?.message}</Box>

                        {/* Nested objects: s3 =---------------------------*/}
                        {/* <div className="form-control">
                           <label htmlFor="twitter">Twitter</label>
                           <input type="text" id="twitter" {...register("social.twitter")}/>
                        </div>
                        <div className="form-control">
                           <label htmlFor="facebook">Facebook</label>
                           <input type="text" id="facebook" {...register("social.facebook")}/>
                        </div> */}
                        {/*-------------------------------------------------*/}

                        {/* Submit button */}
                        <Button type="submit">Submit</Button>
                     </form>
                  </Box>

                  <DevTool control={control}/> {/* in the browser, click on the little magenta square on top right */}

                  {/************************************************************************************************/}
                  {/***| CODES BLOCK |******************************************************************************/}
                  {/* Basic code block wrapper */}
                  <Box mt={"4rem"}>
                     <CodeBlockContainer header="React Hook Form : Basic" codesBlock={BasicHookFormCodeBlock}/>
                     {/* <CodeBlockContainer flexDir="column" header="React Hook Form : Basic" codesBlock={BasicHookFormCodeBlock}/> */}
                  </Box>

                  {/* Validation code block wrapper */}
                  <Box mt={"4rem"}>
                     <CodeBlockContainer flexDir="row" header="React Hook Form : Validation" codesBlock={BasicHookFormValidationCodeBlock}/>
                  </Box>

                  {/************************************************************************************************/}

               </Collapse>
			</Box>
		</>
	);
};

export default BasicHookForm;

const BasicHookFormCodeBlock = `
// Installation:
npm install react-hook-form

// More info:
https://react-hook-form.com/

// Basic hook form code:
import { useForm } from "react-hook-form";

type FormValues = {
   username: string;
   email: string;
   country: string;
}

const sxErrors = {
   color :  "danger.400",
   margin:  "0 0 1rem",
}

const BasicHookForm = () => {
   /*-= using form hook & destructuring useForm =-*/
   const {
      register,
      handleSubmit,
      formState } = useForm<FormValues>(
      {
         /*-= adding default values: object =-*/
         defaultValues: {
            username: "R.Lloyd Gonzales",
            email: "",
            country: "",
         }
      }
   );
   /*-= de-structuring formState to get errors =-*/
   const { errors } = formState;

   const onSubmit = (data:FormValues) => {
      // console.log("form submitted: ", data)
      alert(\`Form submitted!
         Username: \${data.username}
         Email: \${data.email}
         Password: \${data.country}\`);
   }

   return (
		{/* Basic HTML form */}
      <Box m={"2rem 0"} p={"2rem 1rem 1rem"}
         bg={formColorMode}
         border={"1px solid"} borderColor={"primary.300"}
         borderRadius={"1rem"}>

         <form onSubmit={handleSubmit(onSubmit)} noValidate>

            {/* Username field */}
            <FormControl>
               <FormLabel htmlFor="username">Username</FormLabel>
               <Input type="username" id="username"
                  {...register("username")}/>
            </FormControl>

            {/* Email field */}
            <FormControl>
               <FormLabel htmlFor="email">Email</FormLabel>
               <Input type="email" id="email"
                  {...register("email")}/>
            </FormControl>

            {/* County field */}
            <FormControl>
               <FormLabel htmlFor="country" pl={4}>Country:</FormLabel>
               <Select {...register("country")}
                  placeholder="Select option" mb={8}>
                  <option value="USA">United States</option>
                  <option value="PHI">Philippines</option>
                  <option value="JAP">Japan</option>
               </Select>
            </FormControl>

            {/* Submit button */}
            <Button type="submit">Submit</Button>
         </form>
      </Box>
   )
`;

const BasicHookFormValidationCodeBlock = `
import { ... } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const BasicHookForm = () => {
	const { isOpen, onToggle } = useDisclosure();
   const formColorMode = useColorModeValue("primary.50", "primary.500");

   /*-= using form hook & destructuring useForm =-*/
   const { register, control, handleSubmit, formState } =
      useForm<FormValues>({

      /*-= adding default values: object =-*/
      defaultValues: {
         username: "R.Lloyd Gonzales",
         email: "",
         country: ""
      },

      /*-= validation modes =-*/
      mode: "onBlur"
   });

   /*-= de-structuring formState to get errors =-*/
   const { errors } = formState;

   const onSubmit = (data:FormValues) => {
      alert(\`Form submitted!
         Username: \${data.username}
         Email: \${data.email}
         Password: \${data.country}\`);
   }

   return (
      {/* Basic HTML form */}
      <Box m={"2rem 0"} p={"2rem 1rem 1rem"}
         bg={formColorMode}
         border={"1px solid"} borderColor={"primary.300"}
         borderRadius={"1rem"}
         >

         <form onSubmit={handleSubmit(onSubmit)} noValidate>

            {/* Username field */}
            <FormControl>
               <FormLabel htmlFor="username">Username</FormLabel>
               <Input type="username" id="username"
                  {...register("username",
                  { required:
                     {  value:true,
                        message: "Username is required"
                     }
               })}/>
            </FormControl>
            <Box sx={sxErrors}>{errors.username?.message}</Box>

            {/* Email field */}
            <FormControl>
               <FormLabel htmlFor="email">Email</FormLabel>
               <Input type="email" id="email"
                  {...register("email",
                  { required: { value:true, message: "Email is required" },
                  /*-= pattern validation using regex =-*/
                  pattern: {
                     value: /^[a-zA-Z0-9.!#$%&'*+/=?^_
                        \`{|}~-]+@[a-zA-Z0-9-]+(?:
                           \.[a-zA-Z0-9-]+)*$/,
                     message: "Invalid email format",
                  }
               })}/>
            </FormControl>
            <Box sx={sxErrors}>{errors.email?.message}</Box>

            {/* County field */}
            <FormControl>
               <FormLabel htmlFor="country" pl={4}>Country:</FormLabel>
               <Select {...register("country")}
                  placeholder="Select option" mb={8}>
                  <option value="USA">United States</option>
                  <option value="PHI">Philippines</option>
                  <option value="JAP">Japan</option>
               </Select>
            </FormControl>

            {/* Submit button */}
            <Button type="submit">Submit</Button>
         </form>
      </Box>
   )
`;

const BasicHookFormDevToolCodeBlock = `
import { DevTool } from "@hookform/devtools";
import { Button } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { ReactComponentElement } from 'react';
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
   const { register, control, handleSubmit } = form ; //de-sructuring form

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

const BasicHookFormErrorCodeBlock = `
const BasicHookForm = () => {
   /*-= using form hook =-*/
   const form = useForm<FormValues>();
   const { register, control, handleSubmit, formState } = form;
   const { errors } = formState; //de-structuring formState to get errors

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
               <p className="errors">{errors.username?.message}</p>
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
               <p className="errors">{errors.email?.message}</p>
            </div>

            {/* Channel field */}
            <div className="form-control">
               <label htmlFor="channel">Channel</label>
               <input type="text" id="channel" {...register("channel",
                  // add required message
                  { required: "Channel is required" }
               )}/>
               {/* Error paragraph w/ optional chaining */}
               <p className="errors">{errors.channel?.message}</p>
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
   const { errors } = formState; //de-structuring formState to get errors

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
            <p className="errors">{errors.email?.message}</p>
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


