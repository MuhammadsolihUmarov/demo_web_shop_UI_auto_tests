import {expect, Page} from "@playwright/test";
import LoginPage from "../authentication/LoginPage";

class SearchPage {
    constructor(private page: Page) {}

    private productTitles = this.page.locator('.product-title');
    private searchTitle = this.page.locator('//div[@class="page-title"]/h1');
    private emptySearchResult = this.page.locator('.result');

    async handlePopup() {
        this.page.on('dialog', async (dialog) => {
            expect(dialog.message()).toBe('Please enter some search keyword');
            await dialog.accept();
        });
    }
    async isKeywordInProductTitles(keyword: string): Promise<boolean> {
        const titles = await this.productTitles.allTextContents();
        return titles.some(title => title.toLowerCase().includes(keyword.toLowerCase()));
    }

    async getSearchTitle() {
        return this.searchTitle.textContent();
    }

    async getEmptySearchResult() {
        return this.emptySearchResult.textContent();
    }
}

export default SearchPage;