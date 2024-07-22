// Chakra UI: Extending themes
import { ThemeConfig, border, defineStyleConfig, extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';
// import '@fontsource-variable/open-sans';
// import '@fontsource-variable/raleway';
import '@fontsource/lora';
import '@fontsource/merriweather';
import '@fontsource/open-sans/800.css';
import '@fontsource/poppins';
import '@fontsource/raleway/400.css';
import '@fontsource/inter';
// import lightBg from "../src/assets/images/green-abstract-bg.jpeg";
import lightBg from "../src/assets/images/bokeh-light-bg.jpeg";
import darkBg from "../src/assets/images/dark-blue-blurred-bg.jpeg";
import { useGlobalStore } from "../../../hooks/GlobalStates";
// import { StyleButton } from "./assets/styles/ButtonStyles";

// :root {
//    padding={{base:"1rem", md:"2rem"}}
// }

/* Color Mode */
const config: ThemeConfig = {
   initialColorMode: 'light',
   useSystemColorMode: false,
}

const Button = defineStyleConfig({
   // const ButtonTheme = defineStyleConfig ({
   // style object for base or default style
   baseStyle: {
      fontWeight: '600',
      textTransform: 'uppercase',
      // textTransform: 'capitalize',
      borderRadius: 'full',
      // borderRadius: designFlat ? 'full' : "lg",
   },
   // styles for different sizes ("sm", "md", "lg")
   sizes: {
      xsm: {
         fontSize: '0.7rem',
         px: 2, // <-- px is short for paddingLeft and paddingRight
         py: 1, // <-- py is short for paddingTop and paddingBottom
      },
      sm: {
         fontSize: '0.9rem',
         px: 4, // <-- px is short for paddingLeft and paddingRight
         py: 3, // <-- py is short for paddingTop and paddingBottom
      },
      md: {
         fontSize: '1.125rem',
         px: 6, // <-- these values are tokens from the design system
         py: 5, // <-- these values are tokens from the design system
         my: 4, // <-- these values are tokens from the design system
      },
      lg: {
         fontSize: '2rem',
         fontWeight: '800',
         px: 8, // <-- these values are tokens from the design system
         py: 7, // <-- these values are tokens from the design system
         my: 4, // <-- these values are tokens from the design system
      },
   },
   // styles for different visual variants ("outline", "solid")
   variants: {
      primary: {
         bg: 'primary.500',
         border: '2px solid',
         borderColor: 'primary.300',
         color: 'primary.50',
         _hover: {
            bg: 'primary.200',
            borderColor: "primary.500",
            color: "primary.900",
            // fontWeight: '700',
         },
      },
      primaryLite: {
         bg: 'primary.50',
         border: '2px solid',
         borderColor: 'primary.100',
         color: 'primary.500',
         _hover: {
            bg: 'primary.100',
            borderColor: "primary.50",
            color: "primary.500",
            // fontWeight: '700',
         },
      },
      accent: {
         bg: 'accent.500',
         border: '2px solid',
         borderColor: 'accent.300',
         color: 'accent.50',
         _hover: {
            bg: 'accent.200',
            borderColor: "accent.500",
            color: "accent.900",
            // fontWeight: '700',
         },
      },
      accentLite: {
         bg: 'accent.200',
         border: '2px solid',
         borderColor: 'accent.50',
         color: 'accent.900',
         _hover: {
            bg: 'accent.500',
            borderColor: "accent.500",
            color: "accent.50",
            // fontWeight: '700',
         },
      },
      success: {
         bg: 'success.500',
         border: '2px solid',
         borderColor: 'success.300',
         color: 'success.50',
         _hover: {
            bg: 'success.300',
            borderColor: "success.500",
            color: "success.900",
            // fontWeight: '700',
         },
      },
      warning: {
         bg: 'yellow.800',
         border: '2px solid',
         borderColor: 'yellow.500',
         // color: mode('primary.900', 'brand.50')(props),
         color: 'yellow.50',
         _hover: {
            bg: 'yellow.300',
            borderColor: "yellow.500",
            color: "yellow.900",
            // fontWeight: '700',
         },
      },
      danger: {
         bg: 'danger.600',
         border: '2px solid',
         borderColor: 'danger.300',
         // color: mode('primary.900', 'brand.50')(props),
         color: 'danger.50',
         _hover: {
            bg: 'danger.300',
            borderColor: "danger.500",
            color: "danger.900",
            // fontWeight: '700',
         },
      },
      neutral: {
         bg: 'neutral.600',
         border: '2px solid',
         borderColor: 'neutral.300',
         // color: mode('primary.900', 'brand.50')(props),
         color: 'neutral.50',
         _hover: {
            bg: 'neutral.300',
            borderColor: "neutral.500",
            color: "neutral.900",
            // fontWeight: '700',
         },
      },
      link: {
         bg: 'transparent',
         // color: mode('primary.500', 'brand.50'),
         // color: mode('accent.500', 'accent.50'),
         padding: '12px',
         borderRadius: 'md',
         _hover: {
            // bg: 'primary.50',
            bg: 'transparent',
            // color: "primary.600",
            // fontWeight: '700',
         },
      },
      outline: {
         bg: 'transparent',
         border: '1px solid',
         borderColor: 'neutral.300',
         // color: mode('primary.900', 'brand.50')(props),
         color: 'primary.200',
         _hover: {
            bg: 'primary.200',
            borderColor: "none",
            color: "primary.500",
            // fontWeight: '700',
         },
      },
   },
   // default values for 'size', 'variant' and 'colorScheme'
   defaultProps: {
      size: 'md',
      variant: 'primary',
      colorScheme: 'primary',
   },
})

/*--= Chakra Tooltip =--*/
const Tooltip = defineStyleConfig({
   // style object for base or default style
   baseStyle: {
      fontWeight: '700',
      textTransform: 'uppercase',
      // textTransform: 'capitalize',
      borderRadius: 'full', // add a border radius
      border: '1px solid', // add a border
   },
   // styles for different sizes ("sm", "md", "lg")
   sizes: {
      sm: defineStyle({
         fontSize: 'sm',
         py: '1',
         px: '2',
         maxW: '200px',
      }),
      md: defineStyle({
         fontSize: 'md',
         py: '2',
         px: '6',
         // maxW: '300px',
      }),
      lg: defineStyle({
         fontSize: 'lg',
         py: '2',
         px: '4',
         maxW: '350px',
      }),
      md2: defineStyle({
         fontSize: '1rem',
         py: '2',
         px: '3',
         maxW: '300px',
       }),
   }
})

/*--= Chakra Dropdown Menu =--*/
import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
   createMultiStyleConfigHelpers(menuAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle({
   // define the part you're going to style
   button: {
      // transform: "translate3d(60px, -60px, 0px)",
      // this will style the MenuButton component
      fontWeight: 'medium',
      bg: 'transparent',
      color: 'primary.50',
      _hover: {
         bg: 'transparent',
         color: 'white',
      },
      // zIndex: '6000',
   },
   list: {
      transform: "translate3d(60px, -60px, 0px)",
      // this will style the MenuList component
      py: '4',
      borderRadius: 'md',
      border: 'none',
      bg: 'primary.500',
      // top: "-20px"

      //  bg: useGlobalStore().designFlat ?
      //    'primary.50' : 'primary.500',

      // bg: mode('primary.50', 'primary.500')
   },
   item: {
      // this will style the MenuItem and MenuItemOption components
      color: 'primary.50',
      bg: 'primary.700',
      _hover: {
         bg: 'primary.400',
      },
      _focus: {
         bg: 'primary.400',
      },
   },
   groupTitle: {
      // this will style the text defined by the title prop
      // in the MenuGroup and MenuOptionGroup components
      textTransform: 'uppercase',
      fontSize: 'lg',
      color: 'white',
      textAlign: 'left',
      letterSpacing: 'wider',
      opacity: '0.7',
   },
   command: {
      // this will style the text defined by the command
      // prop in the MenuItem and MenuItemOption components
      opacity: '0.8',
      fontFamily: 'mono',
      fontSize: 'sm',
      letterSpacing: 'tighter',
      pl: '4',
   },
   divider: {
      // this will style the MenuDivider component
      my: '4',
      borderColor: 'white',
      borderBottom: '2px dotted',
   },
})
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle })

// const baseStyle2 = {
//    borderRadius: 'md', // add a border radius
//    fontWeight: 'normal', // change the font weight
//    border: '1px solid', // add a border
//  }

 // export the component theme
//  export const tooltipTheme = defineMultiStyleConfig({ baseStyle })
//  export const tooltipTheme = defineStyleConfig({ baseStyle })

// const { designFlat, setDesignFlat } = useGlobalStore()
// import { ClassNames } from '@emotion/react';

//? * Custom Theme Tokens: import this to main.tsx */
const theme = extendTheme({

   config,
   // StyleButton,
   components: {
      Button,
      Menu: menuTheme,
      Tooltip,
   },
   styles: {
      global: (props: StyleFunctionProps) => ({
         body: {
            fontFamily: 'body',
            color: mode('primary.900', 'brand.200')(props),
            /*---------------------------------------------*/
            //! *-= from App.css #root =-*/
            // max-width: 1280px;
            // margin: 0 auto;
            // padding: 0rem;
            padding:{base:"1rem", md:"2rem"},
            // text-align: center;
            /*---------------------------------------------*/


            // background: useGlobalStore().designFlat ? mode('primary.50', 'primary.500')(props) : mode('red', 'yellow')(props),
            // background: mode('primary.50', 'primary.500')(props),
            // background: mode('#a6d8d7', '#041d30')(props),
            // background: mode('red', 'blue')(props),

            // backgroundImage: mode(undefined, darkBg)(props),
            // backgroundImage: mode(lightBg, darkBg)(props),

            // backgroundImage: useGlobalStore().designFlat ?
            //    undefined :
            //    mode('lightBg', 'darkBg')(props),

            //?--= Setting the background colors with Light & Dark themes on multiple design layouts =--*//
            background: useGlobalStore().designFlat ?
               mode('primary.50', 'primary.500')(props) :
               mode('primary.100', 'primary.900')(props),

            // background: useGlobalStore().designFlat ? mode('primary.50', 'primary.500')(props) : mode('lightBg', 'darkBg')(props),
            // backgroundImage: designFlat ? {mode(lightBg, darkBg)(props)} : {mode(darkBg, "white")(props)},

            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            lineHeight: 'base',
            // border: designFlat ? "30px solid red" : "30px solid cyan",
         },
         '*::placeholder': {
            color: mode('gray.400', 'whiteAlpha.400')(props),
         },
         '*, *::before, &::after': {
            borderColor: mode('gray.200', 'whiteAlpha.300')(props),
            wordWrap: 'break-word',
         },
         // "*:root": {
         //    padding:"0rem",
         //    // padding:{base:"1rem", md:"2rem"},
         // },
         // components: {
         //    Button,
         //    // ButtonTheme,
         // },
      }),
   },
   fonts: {
      heading: `'Open Sans', sans-serif`,
      // heading: `'Avenir', sans-serif`,
      // heading: `'Raleway', sans-serif`,
      // heading: `'Poppins', sans-serif`,

      body: `'Open Sans', sans-serif`,
      // body: `'Avenir', sans-serif`,
      // body: `'Raleway', sans-serif`,
      // body: `'Roboto', sans-serif`,
      // body: `'Inter', sans-serif`,
      // body: `'Lora', serif`,
      // body: `'Merriweather'`,
      // body: `'Source Serif 4', serif`,
   },
   Heading: {
      // fontWeight: "600",
      // fontWeight: "800",
      baseStyle: {
         // color: mode('primary.900', 'primary.500'),
         // fontFamily: "poppins", //
         fontWeight: "800",
      },
      sizes: {
         small: { fontSize: "20px" },
         medium: { fontSize: "25px" },
         large: { fontSize: "30px" },
      },
   },
   colors: {
      primary: {
         50: "#f0fcff",
         100: "#bad2d9",
         200: "#85aab6",
         300: "#508393",
         400: "#0d5e73",
         500: "#064e60",
         600: "#07404e",
         700: "#06323e",
         800: "#05242d",
         900: "#01181e",
         1000: "#00090A"
      },
      brand: {
         50: "#ecf8f7",
         100: "#bfe9e8",
         200: "#a9d6d8",
         300: "#94c4c9",
         400: "#7fb3b9",
         500: "#6aa1aa",
         600: "#56909c",
         700: "#417f8e",
         800: "#2b6e80",
         900: "#0d5e73"
      },
      accent: {
         50:   "#fff7f5",
         100:  "#ffd5c6",
         200:  "#ffb292",
         300:  "#ff8d53",
         400:  "#ff6a00",
         500:  "#eb6200",
         600:  "#b14c11",
         700:  "#7a3815",
         800:  "#462515",
         900:  "#15110f",
      },
      success: {
         50:  "#fafffa",
         100: "#cfe5ce",
         200: "#a7cca1",
         300: "#80b275",
         400: "#5b9849",
         500: "#347e16",
         600: "#286713",
         700: "#1d510f",
         800: "#133b0b",
         900: "#0c2702",
      },
      warning: {
         50:  "#fffdfa",
         100: "#fee9cb",
         200: "#fed49e",
         300: "#fdbe72",
         400: "#fca646",
         500: "#fb8d0e",
         600: "#c3661b",
         700: "#8b441a",
         800: "#542713",
         900: "#220d00",
      },
      danger: {
         50:  "#fff5f5",
         100: "#ffcfcd",
         200: "#ffada6",
         300: "#ff877a",
         400: "#ff5644",
         500: "#ff0000",
         600: "#c80015",
         700: "#910018",
         800: "#5b0013",
         900: "#2a0000",
      },
      neutral: {
         50:  "#dae9f1",
         100: "#c2d3db",
         200: "#abbdc4",
         300: "#94a7af",
         400: "#7d9299",
         500: "#677e85",
         600: "#526a70",
         700: "#3d565d",
         800: "#294449",
         900: "#153237",
      },
   },
});

// const theme = extendTheme(overrides);

export default theme;
