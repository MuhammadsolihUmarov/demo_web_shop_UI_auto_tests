import { test, expect } from '@playwright/test';
import MainPage from '../../pages/general/MainPage';
import Footer from '../../pages/general/Footer';
import ShoppingCartPage from "../../pages/shoppingFlow/ShoppingCartPage";

test.describe('VerifyThatShippingCanBeEstimated', () => {
    let mainPage;
    let shoppingCartPage;
    let footer;
    let page;

    test.beforeEach(async ({browser}) => {
        const context = await browser.newContext();
        page = await context.newPage();

        mainPage = new MainPage(page);
        footer = new Footer(page);
        shoppingCartPage = new ShoppingCartPage(page);
        await mainPage.openHomePage();
        await mainPage.clickAddToCardButton(2);
        await mainPage.page.waitForTimeout(1000);
        await mainPage.clickShoppingCart()
    });

    test("@regression shouldBeAbleTOEstimateShippingDetails", async() => {
        await shoppingCartPage.selectCountryByValue("1");
        await shoppingCartPage.selectStateByValue("1");
        await shoppingCartPage.clickEstimatedShippingButton();

        const shippingVisible = await shoppingCartPage.isEstimatedShippingVisible();
        expect(shippingVisible).toBe(true);
    })
});