import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/triye-website/',
  server: {
    host: true,
    port: 3000,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsDir: 'assets',
    // Ensure assets are copied correctly
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  },
  // Define global constants for asset paths
  define: {
    __BASE_URL__: JSON.stringify('/triye-website/')
  },
  // Ensure public assets are handled correctly
  publicDir: 'public'
})
