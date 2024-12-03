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
    // This ensures the assets are placed in the correct folder
    assetsDir: 'assets',
    // If you want hashed filenames for cache busting (optional)
    chunkFileNames: 'assets/[name].[hash].js',
    entryFileNames: 'assets/[name].[hash].js',
  },
});
