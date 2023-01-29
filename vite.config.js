import { resolve } from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: [
      {
        find: '@images',
        replacement: resolve(__dirname, 'src/assets/images'),
      },
    ],
  },
});
