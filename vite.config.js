import { defineConfig } from 'vite'



export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 4173,
    strictPort: true
  }
})
