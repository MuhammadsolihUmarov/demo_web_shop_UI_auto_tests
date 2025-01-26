import { test, expect } from '@playwright/test';
import ShoppingCartPage from '../../pages/shoppingFlow/ShoppingCartPage';
import MainPage from '../../pages/general/MainPage';
import CheckoutPage from "../../pages/shoppingFlow/CheckoutPage";
import OrderPage from "../../pages/orders/OrderPage";
import ProductDetailsPage from "../../pages/shoppingFlow/ProductDetailsPage";

test.describe('VerifyProductCanBeBought', () => {
    let mainPage;
    let shoppingCartPage;
    let checkoutPage;
    let orderPage;
    let productDetailsPage;
    let page;

    test.beforeEach(async ({browser}) => {
        const context = await browser.newContext();
        page = await context.newPage();
        mainPage = await new MainPage(page);
        shoppingCartPage = await new ShoppingCartPage(page);
        checkoutPage = await new CheckoutPage(page);
        orderPage = await new OrderPage(page);
        productDetailsPage = await new ProductDetailsPage(page);

        await mainPage.loginAsUser();
    });

    test('@regression shouldVerifyThatProductIsAddedToCart', async () => {
        await mainPage.clickAddToCardButton(2);
        const productAddMessage = await mainPage.getProductAddMessage();
        expect(productAddMessage).toBe('The product has been added to your shopping cart');

        const expectedProductName = await mainPage.getProductName(2);
        await mainPage.clickShoppingCart();
        const actualProductName = await shoppingCartPage.getProductName(2);
        expect(actualProductName).toEqual(expectedProductName.trim());
    })

    test('@regression shouldBuyOneSimpleProduct', async () => {
        await mainPage.clickAddToCardButton(2);
        await mainPage.clickShoppingCart();

        await shoppingCartPage.clickTermsAndServiceButton();
        await shoppingCartPage.clickCheckoutButton();

        await checkoutPage.clickBillingAddress();
        await checkoutPage.chooseTheFirstBillingOption();
        await checkoutPage.clickBillingContinueButton();
        await checkoutPage.clickPickUpInStoreButton();
        await checkoutPage.clickShippingContinueButton();
        await checkoutPage.clickPaymentWithCash();
        await checkoutPage.clickPaymentContinueButton();
        await checkoutPage.clickPaymentInfoContinueButton();
        await checkoutPage.clickConfirmOrderButton();

        await orderPage.page.waitForTimeout(1000);
        const successOrderMessage = await orderPage.getSuccessOrderMessage();
        expect(successOrderMessage).toEqual("Thank you")
        await orderPage.clickContinueButton();
    });

    test('@regression shouldBuyTwoSimpleProducts', async () => {
        await mainPage.clickAddToCardButton(2);
        await orderPage.page.waitForTimeout(1000);
        await mainPage.clickAddToCardButton(2);
        await orderPage.page.waitForTimeout(1000);
        await mainPage.clickShoppingCart();

        const numberOfItems = await shoppingCartPage.getNumberOfOrdersInProduct();
        expect(numberOfItems).toEqual("2");

        await shoppingCartPage.clickTermsAndServiceButton();
        await shoppingCartPage.clickCheckoutButton();

        await checkoutPage.clickBillingAddress();
        await checkoutPage.chooseTheFirstBillingOption();
        await checkoutPage.clickBillingContinueButton();
        await checkoutPage.clickPickUpInStoreButton();
        await checkoutPage.clickShippingContinueButton();
        await checkoutPage.clickPaymentWithCash();
        await checkoutPage.clickPaymentContinueButton();
        await checkoutPage.clickPaymentInfoContinueButton();
        await checkoutPage.clickConfirmOrderButton();

        await orderPage.page.waitForTimeout(1000);
        const successOrderMessage = await orderPage.getSuccessOrderMessage();
        expect(successOrderMessage).toEqual("Thank you")
        await orderPage.clickContinueButton();
    });

    test('@regression shouldBuyRecipientDirectedProduct', async () => {
        await mainPage.clickAddToCardButton(1);
        await productDetailsPage.fillRecipientDetails("Muhammadsolih", "muhammadsolih_umarov@epam.com", "This is a gift for you");
        await productDetailsPage.clickAddToCartRecipientBasedProduct();

        await orderPage.page.waitForTimeout(1000);
        await mainPage.clickShoppingCart();

        await shoppingCartPage.clickTermsAndServiceButton();
        await shoppingCartPage.clickCheckoutButton();

        await checkoutPage.clickBillingAddress();
        await checkoutPage.chooseTheFirstBillingOption();
        await checkoutPage.clickBillingContinueButton();
        await checkoutPage.clickPaymentWithCash();
        await checkoutPage.clickPaymentContinueButton();
        await checkoutPage.clickPaymentInfoContinueButton();
        await checkoutPage.clickConfirmOrderButton();

        await orderPage.page.waitForTimeout(3000);
        const successOrderMessage = await orderPage.getSuccessOrderMessage();
        expect(successOrderMessage).toEqual("Thank you")
        await orderPage.clickContinueButton();
    });

    test('@regression shouldBuyConfigurationNeededProduct', async () => {
        await mainPage.clickAddToCardButton(3);
        await productDetailsPage.configureProduct();
        await productDetailsPage.clickAddToCartConfigurationBasedProduct();

        await orderPage.page.waitForTimeout(1000);
        await mainPage.clickShoppingCart();

        await shoppingCartPage.clickTermsAndServiceButton();
        await shoppingCartPage.clickCheckoutButton();

        await checkoutPage.clickBillingAddress();
        await checkoutPage.chooseTheFirstBillingOption();
        await checkoutPage.clickBillingContinueButton();
        await checkoutPage.clickPickUpInStoreButton();
        await checkoutPage.clickShippingContinueButton();
        await checkoutPage.clickPaymentWithCash();
        await checkoutPage.clickPaymentContinueButton();
        await checkoutPage.clickPaymentInfoContinueButton();
        await checkoutPage.clickConfirmOrderButton();

        await orderPage.page.waitForTimeout(3000);
        const successOrderMessage = await orderPage.getSuccessOrderMessage();
        expect(successOrderMessage).toEqual("Thank you")
        await orderPage.clickContinueButton();
    });
});