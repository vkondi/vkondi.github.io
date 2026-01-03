// vitest.config.ts - Vitest configuration for the project
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    // Include test files
    include: ["src/**/*.test.{ts,tsx}"],
    // Enable coverage collection
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      exclude: [
        "src/assets/**",
        "**/index.ts", // Barrel export files
        "**/*.d.ts", // Type definition files
      ],
      // Coverage thresholds
      // Note: branches threshold is lower due to MUI responsive styling branches
      // which require viewport changes to test effectively
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 75,
        statements: 90,
      },
    },
    // Setup files for jest-dom matchers
    setupFiles: ["./src/test-setup.tsx"],
  },
});
