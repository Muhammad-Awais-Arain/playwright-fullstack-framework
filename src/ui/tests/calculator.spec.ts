import { expect } from "@playwright/test";
import { test } from "../../fixtures/fixture";
import { CalculatorPage } from "../pages/CalculatorPage";
import testData from "../../data/testData.json";

let calculatorPage: CalculatorPage;
test.describe("Calculator Tests @calculator", () => {
  
  test.beforeEach("Initialization", async ({ page, settings, calculatorPage }) => {
    await calculatorPage.openCalculator(settings.calculatorUrl);
    console.log("Calculator page opened");
  });

  test.afterAll("Teardown", async ( { page, settings, calculatorPage}) => {
    if (calculatorPage) {
      await calculatorPage.close();
    }
  });

  testData.forEach((data: any) => {
    test(`${data.testCaseID} - ${data.scenario}: ${data.description}`, async ({ page, calculatorPage }) => {
      await calculatorPage.clear();
      await calculatorPage.enterNumber(data.input1);
      await calculatorPage.clickOperation(data.operator);
      if (data.input2 !== "") {
        await calculatorPage.enterNumber(data.input2);
      }
      await calculatorPage.clickEquals();
      const result = await calculatorPage.getResult();
      expect(result).toBe(data.expected);
    });
  });
});
