import { test, expect } from '@playwright/test';
import MainPage from '../../pages/general/MainPage';
import Footer from '../../pages/general/Footer';
import ShoppingCartPage from "../../pages/shoppingFlow/ShoppingCartPage";

test.describe('VerifyOrderQuantityCanBeChanged', () => {
    let mainPage;
    let shoppingCartPage;
    let footer;
    let page;

    test.beforeEach(async ({ browser }) => {
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

    test('@regression shouldBeAbleToAdjustOrderNumberToTwo', async () => {
        await shoppingCartPage.clickUpdateShoppingCart();
        await shoppingCartPage.setOrderQuantity("2");
        await shoppingCartPage.clickUpdateShoppingCart();

        const orderQuantity = await shoppingCartPage.getOrderQuantity();

        expect(orderQuantity).toEqual("2");
    });

    test('@regression shouldBeAbleToAdjustOrderNumberTo5', async () => {
        await shoppingCartPage.clickUpdateShoppingCart();
        await shoppingCartPage.setOrderQuantity("5");
        await shoppingCartPage.clickUpdateShoppingCart();

        const orderQuantity = await shoppingCartPage.getOrderQuantity();

        expect(orderQuantity).toEqual("5");
    });
});
