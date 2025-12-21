// vitest.config.ts - Vitest configuration for the project
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    // Include test files
    include: ['src/**/*.test.{ts,tsx}'],
    // Enable coverage collection
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
    // Setup files for jest-dom matchers
    setupFiles: ['./src/test-setup.ts'],
  },
});
