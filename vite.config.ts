import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // Giả sử microservice API chạy ở cổng 5000
      '/api': 'http://localhost:5000'
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
}) 