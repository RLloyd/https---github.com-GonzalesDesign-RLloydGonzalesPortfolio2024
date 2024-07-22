import React, { useRef, useState } from "react";
import { Box, Button, Collapse, Input, useDisclosure } from "@chakra-ui/react";
import CodeHilite from "@components/hilights/CodeHilite";
import Copy2Clipboard from "@components/hilights/Copy2Clipboard";
import { H2Header, H4Header } from "@styles/Styles";
import { MotionBox } from "src/assets/variables/Variables";

const formBasicCodeBlock = `
   <form onSubmit={handleSubmit}>
      <label>Enter your name:
         <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
      </label>
   </form>
   <Button type="submit">Submit</Button>
`;

const BasicForm = () => {
	const { isOpen, onToggle } = useDisclosure();

   const [name, setName] = useState("");
   const handleSubmit = (event: any) => {
		event.preventDefault();
		alert(`The name you entered was: ${name}`);
	};

   return (

		<>
			<Box padding={"1rem"} margin={"2rem 0 "} borderRadius={"1rem"} border={"1px solid"} borderColor={"neutral.600"}>
				<H2Header fontSize="28px" margin="0 0 1rem">
					Basic form:
					<Button variant={"accent"} fontWeight={"500"} size="sm" onClick={onToggle} ml="1rem" mt="0rem" textTransform={"capitalize"}>
						Show {!isOpen ? "Less" : "Sample"}
					</Button>
				</H2Header>

				<Collapse in={!isOpen} unmountOnExit>
					<Box padding={"1rem"} border={"1px solid"} borderColor={"neutral.600"}>
						<form onSubmit={handleSubmit}>
							<label>
								Enter your name:
								<Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
							</label>
						</form>

						<Box>
							<Button type="submit">Submit</Button>
						</Box>
					</Box>
					{/* Code block */}
					<MotionBox>
						<H4Header margin={"2rem 1.5rem 1rem"}>Basic form code block:</H4Header>
						<MotionBox className={"highlightContainer overflow-auto rounded-2xl text-base p-4 max-h-[300px] bg-[#282c34]"}>
							<Copy2Clipboard codeBlock={formBasicCodeBlock} buttonLabel="copy" />
							<Box width={{ base: "100px", lg: "auto" }}>
								<CodeHilite codeBlock={formBasicCodeBlock} />
							</Box>
						</MotionBox>
					</MotionBox>
				</Collapse>
			</Box>
		</>
	);
};

export default BasicForm;
