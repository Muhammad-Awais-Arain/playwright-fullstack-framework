
# Getting Started

Welcome to the framework! Follow these steps to set up and run your tests effectively.

---

## Pre-Installation for New Framework  
*(Not recommended here, as this framework is already built)*

To install the required packages for a new framework, use the following commands:  
```bash
npm install allure-commandline allure-playwright  
npm install -D dotenv zod
```

---

## Step 1: Install Project Dependencies  
Install all necessary dependencies for the project:  
```bash
npm install
```

---

## Step 2: Install Playwright Chromium Browser  
Install the Chromium browser for Playwright:  
```bash
npx playwright install chromium
```

---

## Run Tests  

- **Default Test Run (UI Project):**  
  ```bash
  npx playwright test --project=ui
  ```  

- **Run API Automation Tests:**  
  ```bash
  npx playwright test --project=ApiAutomation
  ```

- **Run API Automation Tests by Tag (`@Companies`):**  
  ```bash
  npx playwright test --project=ApiAutomation --grep="@Companies"
  ```

- **Run API Automation Tests by Name (`GET /Companies`):**  
  ```bash
  npx playwright test --project=ApiAutomation --g "GET /Companies"
  ```

---

## Run Tests in Different Modes  

- **Headed Mode:**  
  ```bash
  npx playwright test --project=ui --headed
  ```

- **Debug Mode:**  
  ```bash
  npx playwright test --project=ui --debug
  ```

- **Debug Mode with Headed Mode:**  
  ```bash
  npx playwright test --project=ui --debug --headed
  ```

- **Debug Mode with Headed Mode and Slow Motion (500ms):**  
  ```bash
  npx playwright test --project=ui --debug --headed --slowMo=500
  ```

---

## Allure Reporting on Local  

Generate and view Allure reports with the following commands:  

- **Generate Allure Report:**  
  ```bash
  npx allure generate ./allure-results --clean
  ```

- **Open Allure Report:**  
  ```bash
  npx allure open ./allure-report
  ```

---
