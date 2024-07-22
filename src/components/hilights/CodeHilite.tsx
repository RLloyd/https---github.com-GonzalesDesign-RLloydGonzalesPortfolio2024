import { Highlight, themes } from "prism-react-renderer";
import { Box, Text } from '@chakra-ui/react';

type Props = {
   codeBlock: string;
}

const TickMark = ({ children }:any) => {
   return (
      <span className="tick-mark">
         {children}
      </span>
   );
};

const CodeHilite = ({codeBlock}: Props) => {
	return (

		<Highlight
         theme={themes.oneDark}
         code={codeBlock}
         language="tsx"
         // components={{
         //    TickMark,
         //  }}
         >
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				// <pre style={style}>
            /* className="tailwind class*/
            <pre style={style} className=" relative -top-10 text-left">
               <Box
                  fontSize={{ base: "12px", lg: "1rem" }}
                  lineHeight={{ base: "1rem", lg: "1.5rem" }}
                  >
                  {tokens.map((line, i) => (
                     <div key={i} {...getLineProps({ line })}>
                        {line.map((token, key) => (
                           <span key={key} {...getTokenProps({ token })} />
                        ))}
                     </div>
                  ))}
               </Box>
				</pre>
			)}
		</Highlight>
	);
};

export default CodeHilite;
