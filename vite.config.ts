import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import pkg from './package.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    {
      name: 'style',
      renderChunk(code) {
        return {
          code: code.replace(/\.scss.es.js/g, '.css')
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['es'],
      name: pkg.name,
      fileName: (format, entryName) => `${entryName}.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(pkg.dependencies)],
      output: {
        dir: './dist',
        preserveModules: true,
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    },
    cssMinify: false,
    cssCodeSplit: true,
    emptyOutDir: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
    // postcss: {
    //   plugins: [autoprefixer()]
    // }
  }
})
