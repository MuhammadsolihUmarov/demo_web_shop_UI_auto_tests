import { Page } from '@playwright/test';

class CompareProductsPage {
    constructor(private page: Page) {}

    private clearListButton = this.page.locator('.clear-list');
    private productsList = this.page.locator('//tr[@class="overview"]/td');

    async countProductsInOverviewRow(): Promise<number> {
        return await this.productsList.count() - 1;
    }

    async clearCompareList(): Promise<void> {
        await this.clearListButton.click();
    }
}

export default CompareProductsPage;