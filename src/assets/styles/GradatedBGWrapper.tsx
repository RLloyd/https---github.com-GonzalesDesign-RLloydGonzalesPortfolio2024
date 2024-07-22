import { Box, useColorModeValue } from "@chakra-ui/react";


type GrayGradatedBGWrapperProps = {
   // title: string
   children: React.ReactNode
}
export const GrayGradatedBGWrapper = ({
   // title,
   children
}: GrayGradatedBGWrapperProps) => {
   const D1GradBGMode = useColorModeValue(
      "linear-gradient(to bottom, neutral.100, neutral.50, neutral.50, neutral.50)",
      "linear-gradient(to bottom, neutral.400, neutral.700)");

   return (
      <Box backgroundImage={D1GradBGMode}>
         {children}
      </Box>
   )
}
