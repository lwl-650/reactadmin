import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    //服务器主机名
    host: "localhost",
    //端口号
    port: 3002,// 不知为何更改会有问题
    //设为 true 时若端口已被占用则会直接退出，
    //而不是尝试下一个可用端口
    strictPort: true,
    cors: true, // 默认启用并允许任何源
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    //https.createServer()配置项
    https: false,
    //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
    proxy: {
      '/api': {
        target: 'http://localhost:8088',   //代理接口
        // target: 'http://go.lwlsl.top:8088', 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
})
