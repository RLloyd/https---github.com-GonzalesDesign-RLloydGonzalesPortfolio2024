
import { useColorModeValue } from "@chakra-ui/react";
import { create } from "zustand";

type Props = {
   cardGradBGMode: string
   setColorMode: (cardGradBGMode: string) => void
}

export const useColorValues = create<Props>()((set) => ({
   cardGradBGMode : useColorModeValue(
      "linear-gradient(to bottom, accent.100, accent.50, accent.50, primary.50)",
      "linear-gradient(to bottom, primary.400, primary.700)"),

   // designFlat: false,
   setColorMode: (cardGradBGMode: string) => set({cardGradBGMode})
}))


