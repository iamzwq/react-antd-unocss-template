import { defineConfig, presetUno, presetIcons } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      // scale: 1.2, // 默认图标大小
      warn: true // 当没有匹配到图标时发出警告
    })
  ],
  rules: [
    [
      "animation-hue",
      {
        animation: "hue 3s linear infinite"
      }
    ]
  ],
  shortcuts: {
    "flex-center": "flex items-center justify-center",
    "wh-full": "w-full h-full",
    "gradient-text":
      "bg-clip-text text-transparent animation-hue bg-gradient-to-r from-pink-500 to-purple-500"
  }
  // theme: {
  //   animation: {
  //     keyframes: {
  //       hue: `{
  //           from: {
  //             filter: "hue-rotate(0)",
  //           },
  //           to: {
  //             filter: "hue-rotate(-1turn)",
  //           }
  //         }`,
  //     },
  //     durations: {
  //       hue: "1s",
  //     },
  //     timingFns: {
  //       hue: "linear",
  //     },
  //     counts: {
  //       hue: "infinite",
  //     },
  //   },
  // },
});
