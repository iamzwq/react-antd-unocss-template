import { defineConfig, presetUno } from "unocss";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  shortcuts: {
    "flex-center": "flex items-center justify-center",
  },
});
