import { defineConfig } from '@playwright/test';

// Define environment types
type Environment = 'development' | 'staging' | 'production';
const ENV: Environment = (process.env.TEST_ENV as Environment) || 'development';

// Define base URLs for different environments
const baseUrls = {
 // development: 'https://dev.reqres.in',
 // staging: 'https://staging.reqres.in',
  production: 'https://reqres.in',
};

export default defineConfig({
  use: {
    baseURL: baseUrls[ENV], // Set the base URL dynamically based on the environment
    headless: true, // Run tests in headless mode
    trace: 'on', // Enable tracing for debugging
  },
  reporter: [['list'], ['html']], // Use list and HTML reporters for test results
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'WebKit', use: { browserName: 'webkit' } },
  ],
});
