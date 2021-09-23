import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import styleImport from 'vite-plugin-style-import'
import path from 'path'

const baseURL = 'https://che.medi-plus.com.cn/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    styleImport(
      {
        libs: [
          {
            libraryName: 'zarm',
            esModule: true,
            resolveStyle: (name) => {
              return `zarm/es/${name}/style/css`
            }
          }
        ]
      }
    )],
  css: {
    modules: {
      localsConvention: 'dashesOnly'
    },
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // src 路径
    }
  },
  server: {
    /**
     * 开发环境需要这个配置 正式打包不需要 https://juejin.cn/book/6966551262766563328/section/6967228597979316262
     * 坑: baseURL 作为变量 import { baseURL } from 'src/api/axios.js' 时 直接编译报错,故放弃此功能
     */
    // proxy: {
    //   '/baseURL': {
    //     // 当遇到 /baseURL 路径时，将其转换成 target 的值
    //     target: baseURL,
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/baseURL/, '') // 将 /baseURL 重写为空
    //   }
    // }
    proxy: {
      '/api': {
        // 当遇到 /baseURL 路径时，将其转换成 target 的值
        target: baseURL,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 将 /api 重写为空
      }
    }
  }
})
