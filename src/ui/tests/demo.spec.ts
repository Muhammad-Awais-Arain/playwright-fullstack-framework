import { expect } from "@playwright/test";
import { test } from "../../fixtures/fixture";
import { generateDynamicData } from "../../global/global";

test.describe('DEMO REGISTER TESTS', () => {

    let testData;
    test.beforeEach('Visit URL and Generate Test Data', async ({ page, settings, landingPage }) => {
        await page.goto(settings.demoUrl);
        await landingPage.acceptConsent();
        testData = generateDynamicData();
        console.log(testData);
    });
    
    test('VERIFY HEADING and Input Names @DEMO', async ({ page, settings, landingPage }) => {
        const heading = await landingPage.mainHeading.textContent();
        expect(heading).toBe('Register'); // hard assertion
        expect.soft(heading).toBe('Register'); // soft assertion
        console.log(heading);
        await landingPage.firstNameInput.fill(testData.firstName);
        await landingPage.lastNameInput.fill(testData.lastName);
    });
      
    test('REGISTER @DEMO', async ({ page, settings, landingPage }) => {
        await landingPage.firstNameInput.fill(testData.firstName);
        await landingPage.lastNameInput.fill(testData.lastName);
    });
    
});