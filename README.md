# Getting Started

# Pre-Installation for New Framework (Not Recommended here as this framework is already built)
`npm install allure-commandline allure-playwright`
`npm install -D dotenv zod`

# Step 1: Install project dependencies
npm install

# Step 2: Install Playwright Chromium browser
npx playwright install chromium

# Run tests
`npx playwright test --project=ui`
`npx playwright test --project=ApiAutomation`
`npx playwright test --project=ApiAutomation --grep="@Companies"`
`npx playwright test --project=ApiAutomation --g "GET /Companies"`

# Run tests in headed mode
`npx playwright test --project=ui --headed`
# Run tests in debug mode
`npx playwright test --project=ui --debug`
# Run tests in debug mode with headed mode
`npx playwright test --project=ui --debug --headed`
# Run tests in debug mode with headed mode and slow mo
`npx playwright test --project=ui --debug --headed --slowMo=500`

## Allure Reporting on local

`npx allure generate ./allure-results --clean`
`npx allure open ./allure-report`