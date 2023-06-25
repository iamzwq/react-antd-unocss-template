import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import path from "node:path";
import viteEslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    UnoCSS(),
    viteEslint({
      failOnError: false,
    }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/new": {
        target: "http://www.ggapi.cn/api",
        changeOrigin: true,
      },
    },
  },
});
