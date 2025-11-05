// vite.config.js

import { defineConfig } from 'vite'
// Change: Import the SWC version that is actually installed in your project
import react from '@vitejs/plugin-react-swc' 

export default defineConfig({
  plugins: [react()],
  // Add base path for GitHub Pages deployment (Highly Recommended)
  base: "./", 
})