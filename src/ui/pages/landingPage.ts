import { Locator, Page } from "@playwright/test";

export class LandingPage {
    page: Page;
    readonly mainHeading: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly consentAccept: Locator;

    constructor(page: Page) { 
        this.page = page;
        this.consentAccept = page.getByLabel('Consent', { exact: true });
        this.mainHeading = page.locator('div.container > h2');
        this.firstNameInput = page.locator('input[placeholder="First Name"]');
        this.lastNameInput = page.getByPlaceholder('Last Name');
    }

    async acceptConsent() {
        if (await this.consentAccept.isVisible()) {
            await this.consentAccept.click();
        }
    }
}
