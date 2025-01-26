import { test, expect } from '@playwright/test';
import MainPage from '../../pages/general/MainPage';
import Footer from '../../pages/general/Footer';

test.describe('VerifyFooterElements', () => {
    let mainPage;
    let footer;
    let page;

    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();

        mainPage = new MainPage(page);
        footer = new Footer(page);
        await mainPage.openHomePage();
    });

    test('@regression verifyAllFooterElements', async () => {
        await footer.verifyFooterLinksExist();
    });
});
