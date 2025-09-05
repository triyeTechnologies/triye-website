import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/triye-website/',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
