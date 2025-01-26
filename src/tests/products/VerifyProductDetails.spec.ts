import { test, expect } from '@playwright/test';
import MainPage from '../../pages/general/MainPage';
import ProductDetailsPage from "../../pages/shoppingFlow/ProductDetailsPage";

test.describe('VerifyProductDetails', () => {
    let mainPage;
    let productDetailsPage;
    let page;

    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();

        mainPage = new MainPage(page);
        productDetailsPage = new ProductDetailsPage(page);
        await mainPage.openHomePage();
        await mainPage.clickProductName(2);
    });

    test('@regression productDetailsShouldBeVisible', async () => {
        await mainPage.page.waitForTimeout(1000);

        const isNameVisible = await productDetailsPage.isProductNameVisible();
        const isDescriptionVisible = await productDetailsPage.isProductDescriptionVisible();
        const isFullDescriptionVisible = await productDetailsPage.isProductFullDescriptionVisible();
        const isReviewDetailsVisible = await productDetailsPage.isProductReviewDetailsVisible();
        const isDataTableVisible = await productDetailsPage.isProductDataTableVisible();
        const areTagsVisible = await productDetailsPage.areProductTagsVisible();
        expect(isNameVisible).toBe(true);
        expect(isDescriptionVisible).toBe(true);
        expect(isFullDescriptionVisible).toBe(true);
        expect(isReviewDetailsVisible).toBe(true);
        expect(isDataTableVisible).toBe(true);
        expect(areTagsVisible).toBe(true);
    });

});
