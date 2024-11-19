/// <reference types="vitest" />

import path from 'node:path'
import {defineConfig} from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      //"@components": path.resolve(__dirname, "./src/components"),
      //"@lib": path.resolve(__dirname, "./src/lib")
    },
  },

  test: {
    //globals: true,
    environment: 'node',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
})
