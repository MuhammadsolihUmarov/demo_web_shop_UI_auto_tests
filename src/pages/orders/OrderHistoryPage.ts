import {Page} from "@playwright/test";
import LoginPage from "../authentication/LoginPage";

class OrderHistoryPage {
    constructor(private page: Page) {}

    private orderPageTitle = this.page.locator('.page-title');
    private orderDetails = this.page.locator('(//input[@value="Details"])[1]');
    private orderName = this.page.locator('//h1');

    async getOrderPageTitle(): Promise<string> {
        return await this.orderPageTitle.textContent();
    }

    async getOrderName(): Promise<string> {
        return await this.orderName.textContent();
    }

    async clickOrderDetails(): Promise<void> {
        await this.orderDetails.click();
    }
}

export default OrderHistoryPage;