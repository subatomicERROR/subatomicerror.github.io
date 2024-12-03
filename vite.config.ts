import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',  // Specifies the output directory
    rollupOptions: {
      input: 'src/main.tsx',  // Ensure the correct entry point
    },
  },
});
