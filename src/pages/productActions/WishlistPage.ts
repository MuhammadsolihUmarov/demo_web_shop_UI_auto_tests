import { Page } from '@playwright/test';

class WishlistPage {
    constructor(private page: Page) {}
    private wishListContentWhenEmpty = this.page.locator('.wishlist-content');
    private wishListedProductName = this.page.locator('//td[@class="product"]/a');

    async isWishlistEmpty(): Promise<boolean> {
        const content = await this.wishListContentWhenEmpty.textContent();
        return content?.trim() === 'The wishlist is empty!';
    }

    async getWishlistedProductName(): Promise<string> {
        return await this.wishListedProductName.textContent();
    }

    async clickWishlistedProduct(productName: string): Promise<void> {
        await this.page.locator(`//td[@class="product"]/a[text()="${productName}"]`).click();
    }
}


export default WishlistPage;