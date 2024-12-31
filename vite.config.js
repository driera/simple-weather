import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssPresetEnv from "postcss-preset-env";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
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
