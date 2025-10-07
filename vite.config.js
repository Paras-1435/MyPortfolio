import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
   server: {
    host: true,   // 👈 exposes to your network (so your phone can access)
    port: 5175    // 👈 optional, keeps port fixed
  }
})
