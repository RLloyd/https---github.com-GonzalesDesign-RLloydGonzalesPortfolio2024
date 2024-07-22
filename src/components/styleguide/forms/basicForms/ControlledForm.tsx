import { Text, Box, Button, useDisclosure, Collapse, Input } from "@chakra-ui/react";
import CodeHilite from "@components/hilights/CodeHilite";
import Copy2Clipboard from "@components/hilights/Copy2Clipboard";
import { H2Header, H4Header } from "@styles/Styles";
import React, { useState } from "react";
import { MotionBox } from "src/assets/variables/Variables";

const controlledFormCodeBlock = `
function ControlledFormInput() {
   const [inputValue, setInputValue] = useState("");

   const handleChange = (event: any) => {
      setInputValue(event.target.value);
   };

   const handleSubmit = (event: any) => {
      event.preventDefault();
      alert(\`Submitted value: \${inputValue}\`);
   };

   return (
      <form onSubmit={handleSubmit}>
         <Input type="text" placeholder="Input text here..."
            value={inputValue} onChange={handleChange} />
         <Button type="submit">Submit</Button>
      </form>
   );
}
`;

/*---= Controlled Input =---*/
function ControlledFormInput() {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (event: any) => {
		setInputValue(event.target.value);
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		alert(`Submitted value: ${inputValue}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			{/* <label> */}
			<Input type="text" placeholder="Input text here..." value={inputValue} onChange={handleChange} />
			{/* </label> */}
			<Button type="submit">Submit</Button>
		</form>
	);
}


const ControlledForm = () => {
   const { isOpen, onToggle } = useDisclosure();
	return (
		<>
			<Box padding={"1rem"} margin={"4rem 0 "} borderRadius={"1rem"} border={"1px solid"} borderColor={"neutral.600"}>
				<H2Header fontSize="28px" margin="0 0 1rem">
					Controlled form:
					<Button variant={"accent"} fontWeight={"500"} size="sm" onClick={onToggle} ml="1rem" mt="0rem" textTransform={"capitalize"}>
						Show {isOpen ? "Less" : "Sample"}
					</Button>
				</H2Header>
				<Text margin={"1rem 0"}>In React, controlled components are those where the form data is handled by the component's state. This allows for more direct and explicit control over form elements.</Text>
            <Collapse in={isOpen} unmountOnExit>
               <Box padding={"1rem"} border={"1px solid"} borderColor={"neutral.600"}>
                  <ControlledFormInput />
               </Box>
               {/* Code block */}
               <MotionBox>
                  <H4Header margin={"2rem 1.5rem 1rem"}>Controlled form code block:</H4Header>
                  <MotionBox className={"highlightContainer overflow-auto rounded-2xl text-base p-4 max-h-[550px] bg-[#282c34]"}>
                     <Copy2Clipboard codeBlock={controlledFormCodeBlock} buttonLabel="copy" />
                     <Box width={{ base: "100px", lg: "auto" }}>
                        <CodeHilite codeBlock={controlledFormCodeBlock} />
                     </Box>
                  </MotionBox>
               </MotionBox>
            </Collapse>
         </Box>
		</>
	);
};

export default ControlledForm;
