import { defineConfig } from 'vitest/config';
import angular from '@analogjs/vite-plugin-angular';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [angular(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['src/**/*.{spec,test}.{ts,tsx}'],
    reporters: ['default'],
  },
});
