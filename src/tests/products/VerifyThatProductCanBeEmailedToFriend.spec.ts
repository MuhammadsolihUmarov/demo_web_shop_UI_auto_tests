import { test, expect } from '@playwright/test';
import MainPage from '../../pages/general/MainPage';
import CheckoutPage from "../../pages/shoppingFlow/CheckoutPage";
import OrderPage from "../../pages/orders/OrderPage";
import ProductDetailsPage from "../../pages/shoppingFlow/ProductDetailsPage";
import EmailFriendPage from "../../pages/productActions/EmailFriendPage";

test.describe('VerifyThatProductCanBeEmailedToFriend', () => {
    let mainPage;
    let emailFriendPage;
    let checkoutPage;
    let orderPage;
    let productDetailsPage;
    let page;

    test.beforeEach(async ({browser}) => {
        const context = await browser.newContext();
        page = await context.newPage();

        mainPage = await new MainPage(page);
        emailFriendPage = await new EmailFriendPage(page);
        checkoutPage = await new CheckoutPage(page);
        orderPage = await new OrderPage(page);
        productDetailsPage = await new ProductDetailsPage(page);

        await mainPage.loginAsUser();
        await mainPage.clickProductName(1);
    });

    test("@regression shouldShowEmailToUserButton", async() => {
        await mainPage.page.waitForTimeout(1000);
        expect(await productDetailsPage.isEmailFriendButtonIsVisible()).toBe(true);
    });

    test("@regression shouldEmailToFriend", async() => {
        await productDetailsPage.clickEmailFriendButton();
        await emailFriendPage.enterFriendsEmail("muhammadsolih_umarov@epam.com");
        await emailFriendPage.enterPersonalMessage("This is a gift for you");
        await emailFriendPage.clickSendEmailButton();

        const message = await emailFriendPage.getSuccessMessage()
        expect(message.trim()).toEqual("Your message has been sent.")
    })
});