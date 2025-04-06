import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: '../backend/dist'
  },
  plugins: [react()],
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules/react'),
    },
  },
  server: {
    proxy: process.env.NODE_ENV === 'development' ? {
      '/backend': {
        target: 'http://localhost:5000',
      },
    } : undefined,
  },
});
