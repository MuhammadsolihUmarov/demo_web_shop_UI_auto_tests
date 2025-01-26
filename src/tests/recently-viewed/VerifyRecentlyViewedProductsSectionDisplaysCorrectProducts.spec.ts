import { test, expect } from '@playwright/test';
import MainPage from '../../pages/general/MainPage';

test.describe('VerifyRecentlyViewedProductsSectionDisplaysCorrectProducts', () => {
    let mainPage;
    let page;

    test.beforeEach(async ({browser}) => {
        const context = await browser.newContext();
        page = await context.newPage();
        mainPage = await new MainPage(page);
        await mainPage.openHomePage();
        await collectEnoughReviews(4);
    });

    test('@regression shouldVerifyRecentlyViewedSectionIsVisible', async () => {
        const title = await mainPage.getRecentlyViewedProducts();
        expect(title.trim()).toEqual("Recently viewed products")
    });

    test('@regression shouldVerifyRecentlyViewedProductIsRecorded', async() => {
        const productName = await mainPage.getProductName(5);
        await mainPage.clickProductName(5);
        await mainPage.clickLogo();
        const viewedProductName = await mainPage.getProductNameFromRecentlyViewed(1);
        expect(viewedProductName.trim()).toEqual(productName.trim());
    })

    test('@regression shouldVerifyRecentlyViewed2ProductsAreRecorded', async() => {
        const productName1 = await mainPage.getProductName(5);
        const productName2 = await mainPage.getProductName(4);
        await mainPage.clickProductName(4);
        await mainPage.clickLogo();
        await mainPage.clickProductName(5);
        await mainPage.clickLogo();
        const viewedProductName1 = await mainPage.getProductNameFromRecentlyViewed(1);
        const viewedProductName2 = await mainPage.getProductNameFromRecentlyViewed(2);
        expect(viewedProductName1.trim()).toEqual(productName1.trim());
        expect(viewedProductName2.trim()).toEqual(productName2.trim());
    })

    async function collectEnoughReviews(numItems: number) {
        for (let i = 1; i <= numItems; i++) {
            await mainPage.clickProductName(i);
            await mainPage.clickLogo();
        }
    }
});