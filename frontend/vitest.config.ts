import path from 'path'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    Vue(),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '../frontend'),
      '@': path.resolve(__dirname, '../frontend')
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom'
  }
})
