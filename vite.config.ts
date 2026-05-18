import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import VitePluginSitemap from 'vite-plugin-sitemap';
export default defineConfig({
  plugins: [
    react(),
    VitePluginSitemap({
      hostname: 'https://frostfieldtech.co.ke',
      routes: [
        '/',
        '/services',
        '/portfolio',
        '/pricing',
        '/contact',
        '/blog',
        '/about',
      ],
      outDir: './dist',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})