import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-gw",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "jsm-gw",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "jsm-gw",
    project: "apple-website"
  })],

  build: {
    sourcemap: true
  }
})