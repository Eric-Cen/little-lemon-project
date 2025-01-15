import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom", // Use jsdom for DOM-related tests
  moduleDirectories: ["node_modules", "src"], // Allow imports from 'src' without relative paths
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"], // Support these file types
  testMatch: ["**/__tests__/**/*.(ts|tsx)", "**/?(*.)+(spec|test).(ts|tsx)"], // Match test files
  collectCoverage: true, // Collect test coverage
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"], // Include only TS/TSX files
  coverageDirectory: "coverage", // Output directory for coverage reports
};

export default config;
