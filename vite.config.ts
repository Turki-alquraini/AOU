import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Setting base to './' ensures assets are loaded relatively.
  // This is critical for GitHub Pages where the site is often served from a subdirectory.
  base: './',
});
