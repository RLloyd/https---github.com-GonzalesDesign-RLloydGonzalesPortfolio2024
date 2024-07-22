import { Button } from "@chakra-ui/react";
import { ReactElement } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaRegClone } from "react-icons/fa";

type Props = {
   codeBlock: string;
   buttonLabel: string;
   background?: string;
}

const Copy2Clipboard = ({codeBlock, buttonLabel, background="transparent"}:Props) => {
	return (
			<CopyToClipboard text={codeBlock}>
				<Button className="copyButton"
					variant={"outline"}
               bg={background}
					size={{base:"xsm", lg:"sm"}}
               width={"fit-content"}
					borderRadius={"6px"}
					leftIcon={<FaRegClone />}
					// transform={"scale(.75)"}
               zIndex={"100"}
					_active={{
						bg: "accent.500",
						color: "primary.50",
					}}
				>
					{buttonLabel}
				</Button>
			</CopyToClipboard>
	);
};

export default Copy2Clipboard;
