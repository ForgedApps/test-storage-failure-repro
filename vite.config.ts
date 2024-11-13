
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: './',

  plugins: [
    viteTsconfigPaths(),
  ],

  server: {
    open: true,
    port: 3001,
  },

  build: {
    sourcemap: true,
  },
})
