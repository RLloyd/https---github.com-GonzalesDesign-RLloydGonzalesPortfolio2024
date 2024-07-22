/*

https://chakra-ui.com/community/recipes/using-fonts

For the purposes of this guide, we'll use Open Sans for
the heading font and Raleway for the body font.
If you have a different font you want to use,
you can find the corresponding package on NPM or their website.
   npm install @fontsource/open-sans @fontsource/raleway

Assign these fonts to theme.fonts to use them with Chakra.
More details on theming here.

import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/open-sans';
import '@fontsource-variable/raleway';

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
})

export default theme

*/