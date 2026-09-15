import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// Multi-page app: each division/page is its own static HTML entry, so
// Cloudflare Pages' built-in "pretty URL" resolution (/technology ->
// technology/index.html) gives every route real per-page <title>/meta tags
// and native direct-URL + refresh support with zero extra routing library.
export default defineConfig({
  plugins: [react()],
  // 'mpa' disables Vite's SPA history-fallback middleware in dev/preview, so
  // local testing accurately reflects a real static host: /technology only
  // resolves if technology/index.html actually exists, same as production.
  appType: 'mpa',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        technology: resolve(__dirname, 'technology/index.html'),
        delivery: resolve(__dirname, 'delivery/index.html'),
        capabilities: resolve(__dirname, 'capabilities/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
      },
    },
  },
})
