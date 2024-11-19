import {defineConfig} from 'tsup'

const env = process.env.NODE_ENV

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  target: 'es2020',
  sourcemap: env === 'production',
  minify: env === 'production',
  bundle: env === 'production',
  watch: env === 'development',
  clean: true,
  splitting: true,
  dts: true,
  skipNodeModulesBundle: true,
})
