/*-=  Lesson url:
      https://members.codewithmosh.com/courses/ultimate-react-part1-1/lectures/45916282


/:-=| Installing Chakra |=-:/
Info: Chakra: Styling library for React
Installation: go to Chakra website and select Vite
   npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

   Chakra color chips: https://chakra-ui.com/docs/styled-system/theme

   Customize theme: https://chakra-ui.com/docs/styled-system/customize-theme

   Add a provider:
/=--------------------------------------------------------------------------------------------------------------=:/
/:-= main.tsx =-:/
/:=-------------------------------------------------------------------------------------------------------------=*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <ChakraProvider>
      <App />
   </ChakraProvider>
  </React.StrictMode>,
)



/*=-------------------------------------------------------------------------------------------------------------=:/

/:--= COMMIT =-----------------=
xxx
=------------------------------:*/

