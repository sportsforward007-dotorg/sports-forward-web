import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sports-forward-web/', // <-- CHANGE THIS! Use relative paths
  build: {
    outDir: 'dist',
  },
})