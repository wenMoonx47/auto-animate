import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  root: "./",
  plugins: [vue()],
  ssgOptions: {
    includeAllRoutes: true,
  },
  assetsInclude: ["**/*.svg", "**/*.png"],
})
