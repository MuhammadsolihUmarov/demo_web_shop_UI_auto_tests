import { test, expect } from '@playwright/test';
import MainPage from '../../pages/general/MainPage';

test.describe('VerifyThatNewsLatterCanBeSubscribed', () => {
    let mainPage;
    let page;

    test.beforeEach(async ({browser}) => {
        const context = await browser.newContext();
        page = await context.newPage();
        mainPage = await new MainPage(page);
        await mainPage.openHomePage();
    });

    test('@regression checkNewsLetterIsVisible', async () => {
        await mainPage.isNewsLetterBlockVisible();
    });

    test('@regression shouldShowSuccessMessageWhenSubscribedToNewsLetterWithCorrectEmail', async () => {
        await mainPage.isNewsLetterBlockVisible();
        await mainPage.enterEmailToNewsLetterEmail("muhammadsolihumarov@gmail.com");
        await mainPage.clickSubscribeToNewsLetter();
        await mainPage.page.waitForTimeout(1000);

        const successMessage = await mainPage.getNewsLetterSuccessMessage();
        expect(successMessage.trim()).toEqual("Thank you for signing up! A verification email has been sent. We appreciate your interest.");
    });
});