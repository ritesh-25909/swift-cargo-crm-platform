
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages project-site path
  // https://ritesh-25909.github.io/swift-cargo-crm-platform/
  base: '/swift-cargo-crm-platform/',

  plugins: [react()],

  server: {
    host: true,
  },

  build: {
    sourcemap: true,
  },
});
