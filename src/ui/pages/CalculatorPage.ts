import { Page } from '@playwright/test';

export class CalculatorPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openCalculator(url: string) {
    await this.page.goto(url);
  }

  async enterNumber(number: string) {
    for (let char of number) {
      await this.page.click(`button[data-value="${char}"]`);
    }
  }

  async clickOperation(operation: string) {
    await this.page.click(`button[data-value="${operation}"]`);
  }

  async clickEquals() {
    await this.page.click('button.equals');
  }

  async getResult() {
    const result = await this.page.inputValue('input#display');
    return result;
  }

  async clear() {
    await this.page.click('button.clear');
  }

  async close() {
    await this.page.close();
  }
}
