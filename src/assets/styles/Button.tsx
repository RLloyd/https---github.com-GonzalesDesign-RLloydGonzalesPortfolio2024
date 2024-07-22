import React, { ButtonHTMLAttributes } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
	children: React.ReactNode;
	width: string;
	boxShadow: string;
	variant: string;
	colorScheme: string;
	borderRadius: string;
	border: string;
   buttonType?:React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
   ;
};

const ButtonComponent = (
   {
      children,
      width,
      boxShadow,
      variant,
      colorScheme,
      borderRadius,
      border,
      buttonType="button"
   }: Props) => {

      return (
         <Button
            type={buttonType}
            w={width}
            boxShadow={boxShadow}
            variant={variant}
            colorScheme={colorScheme}
            borderRadius={borderRadius}
            border={border} >
            {children}
         </Button>
	);
};

export default ButtonComponent;
