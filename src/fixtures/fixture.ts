import { test as base } from "@playwright/test";
import { settings } from "./settings";
import { LandingPage } from "../ui/pages/landingPage";
import { CalculatorPage } from "../ui/pages/CalculatorPage";

export type TestFixtures = {
    settings: settings;
    calculatorPage: CalculatorPage;
    landingPage: LandingPage;
};

export const test = base.extend<TestFixtures>({
    settings: async ({ }, use) => {
        await use(new settings());
    },
    calculatorPage: async ({ page }, use) => {
        await use(new CalculatorPage(page));
    },
    landingPage: async ({ page }, use) => {
        await use(new LandingPage(page));
    },
});