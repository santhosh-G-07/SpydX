import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // 👈 CORRECT for custom domain
  plugins: [react()],
})

