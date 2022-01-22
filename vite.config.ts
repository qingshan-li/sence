import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import { apply } from 'call-bind'
import { resolve } from 'path'

const isProduction = process.env.NODE_ENV === 'production'


// https://vitejs.dev/config/
export default defineConfig({
  base: isProduction ? './' : '',
  publicDir: 'public',  // 静态资源服务的文件夹, 默认"public"
  resolve: {
    alias: {
      '@modules': resolve(__dirname, './packages/@modules'),
      '@themes': resolve(__dirname, './packages/@themes'),
      '@components': resolve(__dirname, './packages/@components'),
      '@projects': resolve(__dirname, './packages/@projects'),
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true // 使用 less 编写样式的 UI 库（如 antd）时建议加入这个设置
      }
    }
  },
  plugins: [
    vue(),
    {
      ...legacy({
        targets: ['defaults', 'not IE 11']
      }),
      apply: 'build'
    }
  ],
  server: {
    open: true,
    port: 8080,
    force: true, // 强制依赖预构建
    proxy: {
      '/api': {
        target: 'www.baidu.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})