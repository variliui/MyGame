import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     vueJsx(),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   },
//   server: {
//     host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
//     open: true,
//   },
// })

export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      // dev 独有配置
      resolve: {
        alias: {
          "@/": fileURLToPath(new URL('./src', import.meta.url)),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            // additionalData: `@use "~/styles/element/index.scss" as *;`,
          },
        },
      },
      plugins: [
        vue(),
        vueJsx(),
      ],

      server: {
        open: true,
        port: 9521,
        proxy: {
          // Using the proxy instance
          "/api": {
            target: "https://localhost:44327",
            ws: true,
            log: "debug",
            secure: false,
            changeOrigin: true,
            // rewrite: (path) => path.replace(/^\/api/, '/api')
          },
        },
        hmr: true,
      },
    };
  } else {
    // command === 'build'
    return {
      // build 独有配置
      resolve: {
        alias: {
          "@/": fileURLToPath(new URL('./src', import.meta.url)),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            // additionalData: `@use "~/styles/element/index.scss" as *;`,
          },
        },
      },
      plugins: [
        vue(),
        vueJsx(),
      ],

      build: {
        outDir: "dist",
        // 9月更新
        assetsDir: "assets", //指定静态资源存放路径
        sourcemap: false, //是否构建source map 文件
        terserOptions: {
          // 生产环境移除console
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
        },
      },
    };
  }
});