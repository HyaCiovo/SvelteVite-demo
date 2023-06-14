import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "./",
  server: {
    host: "0.0.0.0",
    open: "/",
    port: 3000,
    proxy: {},
  },
  build: {
    // build目录名称，默认为"dist"
    outDir: "build",
    // 静态资源存放目录名称，默认为"assets"
    assetsDir: "static",
    // 生成map文件，默认为false（不建议设置）
    sourcemap: false,
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
    // 对css的行为进行配置
    preprocessorOptions: {
      // key + config key代表预处理器的名
      less: {
        // 整个的配置对象都会最终给到less的执行参数（全局参数）中去
        // 在webpack里就给less-loader去配置就好了
        math: "always",
        globalVars: {
          // 全局变量
          mainColor: "red",
        },
      },
    },
  },
});
