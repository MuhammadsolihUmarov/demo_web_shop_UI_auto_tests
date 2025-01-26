import { test, expect } from '@playwright/test';
import MainPage from '../../pages/general/MainPage';
import ProductDetailsPage from "../../pages/shoppingFlow/ProductDetailsPage";
import ProfilePage from "../../pages/authentication/ProfilePage";
import Footer from "../../pages/general/Footer";

test.describe('VerifyProductDetails', () => {
    let mainPage;
    let footer;
    let profilePage;
    let page;

    test.beforeEach(async ({browser}) => {
        const context = await browser.newContext();
        page = await context.newPage();

        footer = new Footer(page);
        mainPage = new MainPage(page);
        profilePage = new ProfilePage(page);
        await mainPage.loginAsUser();
        await footer.clickMyAccount();
    });

    test('@regression profileShouldBeUpdatedWithCorrectDetails', async () => {
        const firstName = 'Muhammadsolih';
        const lastName = 'Umarov';
        const email = 'muhammadsolihumarov@gmail.com';

        await profilePage.selectGenderMale();
        await profilePage.enterFirstName(firstName);
        await profilePage.enterLastName(lastName);
        await profilePage.enterEmail(email);
        await profilePage.clickSaveButton();
        await mainPage.page.waitForTimeout(1000);

        const inpFirstName = await profilePage.getFirstName();
        const inpLastName = await profilePage.getLastName();
        const inpEmail = await profilePage.getEmail();

        expect(inpFirstName).toEqual(firstName);
        expect(inpLastName).toEqual(lastName);
        expect(inpEmail).toEqual(email);
    });

    test('@regression profileShouldNotBeUpdatedWithEmptyDetails', async () => {
        const firstName = '';
        const lastName = '';
        const email = '';

        await profilePage.selectGenderMale();
        await profilePage.enterFirstName(firstName);
        await profilePage.enterLastName(lastName);
        await profilePage.enterEmail(email);
        await profilePage.clickSaveButton();
        await mainPage.page.waitForTimeout(1000);

        const inpFirstName = await profilePage.getFirstName();
        const inpLastName = await profilePage.getLastName();
        const inpEmail = await profilePage.getEmail();

        expect(inpFirstName).toEqual(firstName);
        expect(inpLastName).toEqual(lastName);
        expect(inpEmail).toEqual(email);
    });


});