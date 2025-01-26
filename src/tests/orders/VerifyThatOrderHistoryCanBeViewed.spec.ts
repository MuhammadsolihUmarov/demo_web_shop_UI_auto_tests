import { test, expect } from '@playwright/test';
import MainPage from '../../pages/general/MainPage';
import Footer from "../../pages/general/Footer";
import OrderHistoryPage from "../../pages/orders/OrderHistoryPage";

test.describe('VerifyProductDetails', () => {
    let mainPage;
    let footer;
    let orderHistoryPage;
    let page;

    test.beforeEach(async ({browser}) => {
        const context = await browser.newContext();
        page = await context.newPage();

        footer = new Footer(page);
        mainPage = new MainPage(page);
        orderHistoryPage = new OrderHistoryPage(page);
        await mainPage.loginAsUser();
        await footer.clickOrders();
    });

    test('@regression verifyOrderHistoryTitle', async () => {
        const title = await orderHistoryPage.getOrderPageTitle();
        expect(title.trim()).toEqual("My account - orders");
    });

    test('@regression verifyOrderHistoryButtonDirectsToOrderDetails', async () => {
        await orderHistoryPage.clickOrderDetails();
        const title = await orderHistoryPage.getOrderName();
        expect(title.trim()).toEqual("Order information");
    });
});