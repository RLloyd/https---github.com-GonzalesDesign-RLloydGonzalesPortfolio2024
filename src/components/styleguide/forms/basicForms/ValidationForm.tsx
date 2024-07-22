import { Text, Box, Input, Button, Collapse, useDisclosure } from '@chakra-ui/react';
import CodeHilite from '@components/hilights/CodeHilite';
import Copy2Clipboard from '@components/hilights/Copy2Clipboard';
import { H2Header, H4Header } from '@styles/Styles';
import React, { useState } from 'react'
import { MotionBox } from 'src/assets/variables/Variables';

const validationFormCodeBlock = `
function ValidationForm() {
   const [inputValue, setInputValue] = useState('');
   const [error, setError] = useState('');

   const handleChange = (event: any) => {
      setInputValue(event.target.value);
   };

   const handleSubmit = (event: any) => {
      event.preventDefault();
      if (inputValue.trim() === '') {
         setError('Input cannot be empty');
      } else {
         setError('');
         alert(\`Submitted value: \${inputValue}\`);
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <Input type="text" value={inputValue}
            onChange={handleChange} />
         {error && <p style={{ color: 'red' }}>
            {error}</p>}
         <Button type="submit">Submit</Button>
      </form>
   );
}
`;

/*---= Validation Form Input =---*/
function ValidationFormInput() {
   const [inputValue, setInputValue] = useState('');
   const [error, setError] = useState('');

   const handleChange = (event: any) => {
     setInputValue(event.target.value);
   };

   const handleSubmit = (event: any) => {
     event.preventDefault();
     if (inputValue.trim() === '') {
       setError('Input cannot be empty');
     } else {
       setError('');
       alert(`Submitted value: ${inputValue}`);
     }
   };

   return (
     <form onSubmit={handleSubmit}>
       {/* <label>
         Input: */}
         <Input type="text" value={inputValue} placeholder="Input text here..." onChange={handleChange} />
       {/* </label> */}
       {error && <p style={{ color: 'red' }}>{error}</p>}
       <Button type="submit">Submit</Button>
     </form>
   );
}

const ValidationForm = () => {
   const { isOpen, onToggle } = useDisclosure();
   const [name, setName] = useState("");
   const handleSubmit = (event: any) => {
		event.preventDefault();
		alert(`The name you entered was: ${name}`);
	};
  return (
    <>
      <Box padding={"1rem"} margin={"4rem 0 "} borderRadius={"1rem"} border={"1px solid"} borderColor={"neutral.600"}>
         <H2Header fontSize="28px" margin="0 0 1rem">
            Validation form:
            <Button variant={"accent"} fontWeight={"500"} size="sm" onClick={onToggle} ml="1rem" mt="0rem" textTransform={"capitalize"}>
               Show {isOpen ? "Less" : "Sample"}
            </Button>
         </H2Header>
         <Text margin={"1rem 0"}>Uncontrolled components rely on the DOM to manage the form data. React refs are used to access the form values directly.</Text>

         <Collapse in={isOpen} unmountOnExit>
            <Box padding={"1rem"} border={"1px solid"} borderColor={"neutral.600"}>
               <ValidationFormInput />
            </Box>

            {/* Code block container */}
            <MotionBox>
               <H4Header margin={"2rem 1.5rem 1rem"}>Validation form code block:</H4Header>
               <MotionBox className={"highlightContainer overflow-auto rounded-2xl text-base p-4 max-h-[700px] bg-[#282c34]"}>
                  <Copy2Clipboard codeBlock={validationFormCodeBlock} buttonLabel="copy" />
                  <Box width={{ base: "100px", lg: "auto" }}>
                     <CodeHilite codeBlock={validationFormCodeBlock} />
                  </Box>
               </MotionBox>
            </MotionBox>
         </Collapse>
      </Box>
    </>
  )
}

export default ValidationForm
