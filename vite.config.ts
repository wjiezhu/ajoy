
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 强制使用相对路径，这是静态托管（如 GitHub Pages）不白屏的关键
  base: './', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // 确保清空旧文件
    emptyOutDir: true,
    // 如果想要调试，可以开启，但生产环境通常关闭
    sourcemap: false,
    rollupOptions: {
      output: {
        // 确保 JS 文件名没有特殊字符，增加兼容性
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
