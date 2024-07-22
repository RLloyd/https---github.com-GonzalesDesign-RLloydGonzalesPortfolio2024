
// Portfolio styles

import { position, useColorModeValue } from "@chakra-ui/react"
import { color } from "framer-motion";
import { MdOpenInNew } from 'react-icons/md';

// const btnBg = useColorModeValue("brand.500", "accent.1000");
// const btnColor = useColorModeValue("brand.500", "accent.1000");

export const portfolioContainer = {
   direction:       { base:"column", lg:"row" },
   justifyContent:  "center",
   alignItems:      "center",
   left:            "20px",
//    gap:             { base:"10px", lg:"20px", xl:"0px" },
}

export const imgStyle = {
   // boxSize:    { base:"100%", lg:"60%" },
   boxSize:    "100%",
   border:     "1px solid hsla(150, 50%, 70%, 0.75)",
   // borderRadius: "xl",
   // boxShadow:  "5px 10px 16px hsla(150, 60%, 50%, 0.5)",
   // background: "hsla(0, 0%, 0%, 0.85)"
}

export const infoContainer = {
   position:      "relative",
   top:           { base:-10, lg:0 },
   bg:            "brand.50",
   color:         "brand.900",
   padding:       10,
   borderRadius:  "xl"
}

// export const buttonStyle = {
//    variant:       "solid",
//    colorScheme:   "brand",
//    // color: "red",
//    // color:         {btnColor},
//    // background:    {btnBg},
//    borderRadius:  "md",
//    border:        "1px solid",
//    size:          "lg",
//    padding:       "24px",
//    fontSize:      "lg",
//    boxShadow:     "xl",
//    // mt:            "15px"
// }