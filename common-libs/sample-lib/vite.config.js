import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPathsPlugin from 'vite-tsconfig-paths'
const tsconfigPaths = tsconfigPathsPlugin({
  projects: [resolve('tsconfig.json')],
})

const isDev = process.env.NODE_ENV === 'development'
export default defineConfig({
  plugins: [tsconfigPaths],
  build: {
    emptyOutDir: false,
    outDir: 'dist',
    sourcemap: isDev? true : false,
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      fileName: "lib",
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: ["chroma-js"],
    },
  },
});
