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
     * 配置代理 https://juejin.cn/book/6966551262766563328/section/6967228597979316262
     * 解决了大家老大难的跨域问题
     * 坑: baseURL 作为变量 import { baseURL } from 'src/api/axios.js' 时 直接编译报错,故只能声明在此文件内
     */
    proxy: {
      '/api': { // api 不要改
        // 当遇到 /api 路径时，将其转换成 target 的值
        target: baseURL,
        changeOrigin: true
        // rewrite: path => path.replace(/^\/api/, '') // 将 /api 重写为空,因 axios.js 里 为 axios.defaults.baseURL 赋值了
      }
    }
  }
})
