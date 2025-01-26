import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/authentication/LoginPage';
import MainPage from '../../pages/general/MainPage';

test.describe('Login Feature', () => {
    let loginPage;
    let mainPage;
    let page;

    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        mainPage = new MainPage(page);

        await mainPage.openHomePage();
        await mainPage.navigateToLoginPage();
    });

    test('@regression shouldLogInWithValidCredentials', async () => {
        await loginPage.login('muhammadsolihumarov@gmail.com', '1+2=3Muhammadsolih');
        const isLoggedIn = await mainPage.isLoggedIn();
        expect(isLoggedIn).toBe(true);
    });

    test('@regression shouldNotLogInWithInvalidCredentials', async () => {
        await loginPage.login('incorrect@gmail.com', 'kkk');
        const errorMessage = await loginPage.getErrorMessageLogin();
        expect(errorMessage).toBe(
            'Login was unsuccessful. Please correct the errors and try again.'
        );
    });

    test('@regression shouldResetPassword', async () => {
        await loginPage.clickResetPassword();
        await loginPage.fillEmail('muhammadsolihumarov@gmail.com');
        await loginPage.clickRecoverButton();

        const informativeMessage = await loginPage.emailSendMessage();
        expect(informativeMessage.trim()).toBe(
            'Email with instructions has been sent to you.'
        );
    });

    test('@regression shouldNotResetPasswordWithWrongEmail', async () => {
        await loginPage.clickResetPassword();
        await loginPage.fillEmail('incorredfct@gmail.com');
        await loginPage.clickRecoverButton();

        const errorMessage = await loginPage.getErrorMessageResetPassword();
        expect(errorMessage.trim()).toBe(
            'Email not found.'
        );
    });
});
