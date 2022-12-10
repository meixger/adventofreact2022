import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import presetWind from "@unocss/preset-wind";
import presetIcons from "@unocss/preset-icons";
import { presetWebFonts } from "unocss";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unocss({
      presets: [
        presetWind(),
        presetIcons({
          extraProperties: {
            display: "inline-block",
            "vertical-align": "middle",
          },
        }),
        presetWebFonts({
          fonts: {
            mono: ["Fira Code"],
            serif: ["Noto Serif"],
            sans: ["Noto Sans"],
          },
        }),
      ],
      extendTheme: (theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          green: "#42b883",
        },
      }),
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
