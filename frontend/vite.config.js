import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server:{
    proxy:{
      "/api":{
        target:"http://localhost:5000" //whenever we will write /api it always assumes "http://localhost:5000" as a prifix 
      }
    }
  }
})
