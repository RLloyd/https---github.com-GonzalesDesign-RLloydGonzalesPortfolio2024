import { useColorModeValue } from "@chakra-ui/react";


export const titleBackgroundMode = useColorModeValue("accent.500", "accent.200");

export const rightNavContainer = {
   // rowSpan: 2,
   // colSpan: 3,
   // padding: "2rem 16px",
   // height: "50px",
   overflow: "hidden",
   display: { base: "none", lg: "block" },
   bg: "brand.900",
   bgGradient: 'linear(to-b, brand.300, accent.50)',
   border: "1px solid",
   borderColor: "brand.200",
   borderRadius: "1rem",
   boxShadow: "xl",
}