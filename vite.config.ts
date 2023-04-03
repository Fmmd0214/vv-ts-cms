import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // 插件
  plugins: [vue()],
  resolve: {
    alias: {
      // 在打包时候配置：别名, @ 指向 src
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
