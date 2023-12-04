// vite.config.js
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ui': '/src/components/ui',
      '@screens': '/src/components/screens',
      '@layouts': '/src/components/layouts',
      '@assets': '/public/assets',
    },
  },
})
