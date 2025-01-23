import { defineConfig, devices } from '@playwright/test';
import * as os from "node:os";

switch (process.env.ENV) {
  case "production":
    console.log("production environment");
    require("dotenv").config({ path: "config/production.env" });
    break;
  case "staging":
    console.log("staging environment");
    require("dotenv").config({ path: "config/staging.env" });
    break;
  case "dev":
    console.log("dev environment");
    require("dotenv").config({ path: "config/dev.env" });
    break;
  default:
    console.log("default dev environment");
    require("dotenv").config({ path: "config/dev.env" });
    break;
}

export default defineConfig({
  testDir: './src',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["line"],
    ["html"],
    [
      "allure-playwright",
      {
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
        },
      },
    ],
  ],

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'ApiAutomation',
      testDir: './src/apis/tests',
      use: { ...devices['Desktop Chrome'],
        headless: process.env.ENV === 'default' ? false : true,
        video: 'on-first-retry',
        screenshot:'only-on-failure',
        trace: 'on-first-retry',
       },
    },
    {
      name: 'ui',
      testDir: './src/ui/tests',
      use: { ...devices['Desktop Chrome'],
        headless: process.env.ENV === 'default' ? false : true,
        video: 'on-first-retry',
        screenshot:'only-on-failure',
        trace: 'on-first-retry',
       },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
