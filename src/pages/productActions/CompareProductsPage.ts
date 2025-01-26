import { Page } from '@playwright/test';

class CompareProductsPage {
    constructor(private page: Page) {}

    private removeProductButton = this.page.locator('//input[@value="Remove"]');
    private productName = this.page.locator('//tr[@class="product-name"]//a');
    private clearListButton = this.page.locator('.clear-list');
    private productsList = this.page.locator('//tr[@class="overview"]/td');

    async removeProduct(index: number): Promise<void> {
        await this.page.locator(`(//input[@value="Remove"])[${index}]`).click();
    }

    async countProductsInOverviewRow(): Promise<number> {
        return await this.productsList.count() - 1;
    }

    async getProductName(): Promise<string> {
        return await this.productName.textContent();
    }

    async clearCompareList(): Promise<void> {
        await this.clearListButton.click();
    }
}

export default CompareProductsPage;