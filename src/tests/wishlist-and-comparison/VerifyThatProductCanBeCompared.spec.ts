import { test, expect } from '@playwright/test';
import MainPage from '../../pages/general/MainPage';
import ProductDetailsPage from "../../pages/shoppingFlow/ProductDetailsPage";
import CompareProductsPage from "../../pages/productActions/CompareProductsPage";

test.describe('VerifyThatProductCanBeCompared', () => {
    let mainPage;
    let compareProductsPage;
    let productDetailsPage;
    let page;

    test.beforeEach(async ({browser}) => {
        const context = await browser.newContext();
        page = await context.newPage();

        mainPage = await new MainPage(page);
        compareProductsPage = await new CompareProductsPage(page);
        productDetailsPage = await new ProductDetailsPage(page);

        await mainPage.loginAsUser();
        await mainPage.clickProductName(1);
    });

    test("@regression shouldAddTwoProductsToCompareList", async() => {
        await productDetailsPage.clickCompareProductsButton();
        await mainPage.clickLogo();
        await mainPage.clickProductName(2);
        await productDetailsPage.clickCompareProductsButton();

        const productCount = await compareProductsPage.countProductsInOverviewRow();
        expect(productCount).toEqual(2);
    });

    test("@regression shouldAddThreeProductsToCompareList", async() => {
        await productDetailsPage.clickCompareProductsButton();
        await mainPage.clickLogo();
        await mainPage.clickProductName(2);
        await productDetailsPage.clickCompareProductsButton();
        await mainPage.clickLogo();
        await mainPage.clickProductName(3);
        await productDetailsPage.clickCompareProductsButton();

        const productCount = await compareProductsPage.countProductsInOverviewRow();
        expect(productCount).toEqual(3);
    });

    test.afterEach(async () => {
        await compareProductsPage.clearCompareList();
    });
});