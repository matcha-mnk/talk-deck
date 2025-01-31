import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: '../backend/dist'
  },
  plugins: [react()],
  resolve: {
    alias: {
      react: require.resolve('react'),
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
