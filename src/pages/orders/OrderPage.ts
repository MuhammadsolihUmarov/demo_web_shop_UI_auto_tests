import { Page } from '@playwright/test';

class OrderPage {
    constructor(private page: Page) {}

    private successOrderMessage = this.page.locator('//h1');
    private orderNumber = this.page.locator('//ul[@class="details"]/li[1]');
    private orderDetailsLink = this.page.locator('//ul[@class="details"]/li[2]');
    private continueButton = this.page.locator('//input[@type="button"]');

    async getSuccessOrderMessage(): Promise<string> {
        return await this.successOrderMessage.textContent();
    }

    async clickContinueButton(): Promise<void> {
        await this.continueButton.click();
    }
}

export default OrderPage;