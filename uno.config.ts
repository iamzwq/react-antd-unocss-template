import { defineConfig, presetUno } from "unocss";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      warn: true, // 当没有匹配到图标时发出警告
    }),
  ],
  shortcuts: {
    "flex-center": "flex items-center justify-center",
    "wh-full": "w-full h-full",
  },
});
