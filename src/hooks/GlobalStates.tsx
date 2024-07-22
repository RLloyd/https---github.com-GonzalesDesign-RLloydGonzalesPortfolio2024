import { create } from "zustand";

type GlobalStates = {
   designFlat: boolean
   setDesignFlat: (designFlat: boolean) => void
}

export const useGlobalStore = create<GlobalStates>()((set) => ({
   designFlat: false,
   setDesignFlat: (designFlat: boolean) => set({designFlat})
}))