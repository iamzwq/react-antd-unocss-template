import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GlobalState {
  lang: string;
  setLang: (lang: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  colorPrimary: string;
  setColorPrimary: (colorPrimary: string) => void;
  token: string;
  setToken: (token: string) => void;
}

const useGlobalStore = create<GlobalState>()(
  persist(
    set => ({
      lang: "zh",
      setLang: lang => set({ lang }),
      collapsed: false,
      setCollapsed: collapsed => set({ collapsed }),
      colorPrimary: "#1677ff",
      setColorPrimary: colorPrimary => set({ colorPrimary }),
      token: "",
      setToken: token => set({ token }),
    }),
    {
      name: "globalStore",
    }
  )
);

export default useGlobalStore;
