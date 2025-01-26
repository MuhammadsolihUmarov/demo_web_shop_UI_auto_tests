import { test, expect } from '@playwright/test';
import MainPage from '../../pages/general/MainPage';

test.describe('VerifyLogoutFunctionality', () => {
    let mainPage;
    let page;

    test.beforeEach(async ({browser}) => {
        const context = await browser.newContext();
        page = await context.newPage();

        mainPage = await new MainPage(page);
        await mainPage.loginAsUser();
    });

    test("@regression shouldLogout", async () => {
        await mainPage.clickLogout();
        const isLoggedIn = await mainPage.isLoggedOut();
        expect(isLoggedIn).toBe(true);
    });
});