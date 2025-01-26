import { test, expect } from '@playwright/test';
import MainPage from '../../pages/general/MainPage';
import ProductDetailsPage from "../../pages/shoppingFlow/ProductDetailsPage";
import WishlistPage from "../../pages/productActions/WishlistPage";

test.describe('VerifyThatProductCanBeAddedToWishlist', () => {
    let mainPage;
    let productDetailsPage;
    let page;
    let productName;
    let wishlistPage;

    test.beforeEach(async ({browser}) => {
        const context = await browser.newContext();
        page = await context.newPage();
        mainPage = await new MainPage(page);
        wishlistPage = await new WishlistPage(page);
        productDetailsPage = await new ProductDetailsPage(page);
        await mainPage.loginAsUser();
        productName = await mainPage.getProductName(1);
        await mainPage.clickProductName(1);
    });

    test("@regression shouldVerifyThatProductCanBeAddedToWishlist", async () => {
        await productDetailsPage.fillRecipientDetails("Muhammadsolih", "muhammadsolih_umarov@epam.com", "This is a gift for you");
        await productDetailsPage.clickAddToWishListButton();
        await mainPage.clickWishListButton();
        const wishlistedProductName = await wishlistPage.getWishlistedProductName();

        expect(wishlistedProductName.trim()).toEqual(productName.trim());
    });
})