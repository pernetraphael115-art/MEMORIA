import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/MEMORIA/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: true,
  },
});
