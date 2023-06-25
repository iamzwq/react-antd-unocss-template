import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  rules: [
    ["flex-center", { display: "flex", "align-items": "center", "justify-content": "center" }],
  ],
});
