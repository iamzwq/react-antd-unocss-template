import { create } from "zustand";

export const useHomeStore = create(set => ({
  name: "home",
  setName: (name: string) => set({ name })
}));
