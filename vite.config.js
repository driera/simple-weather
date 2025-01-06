import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssPresetEnv from "postcss-preset-env";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true
      },
      include: "**/*.svg"
    })
  ],
  css: {
    modules: {
      localsConvention: "camelCase"
    },
    postcss: {
      plugins: [
        postcssPresetEnv({
          stage: 2,
          features: {
            "nesting-rules": true
          }
        })
      ]
    }
  },
  build: {
    cssCodeSplit: false
  }
});
