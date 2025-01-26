import { test, expect } from '@playwright/test';
import MainPage from '../../pages/general/MainPage';
import SearchPage from "../../pages/general/SearchPage";

test.describe('VerifyThatCategoriesDirectToTheSpecifiedPage', () => {
    let mainPage;
    let searchPage;
    let page;

    test.beforeEach(async ({browser}) => {
        const context = await browser.newContext();
        page = await context.newPage();

        mainPage = await new MainPage(page);
        searchPage = await new SearchPage(page);
        await mainPage.openHomePage();
    });

    test("@regression shouldOpenBooksPage", async () => {
        await mainPage.clickBooksCategory();
        await mainPage.page.waitForTimeout(1000);
        let searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle.trim()).toEqual("Books");
    });

    test("@regression shouldOpenComputersPage", async () => {
        await mainPage.clickComputersCategory();
        await mainPage.page.waitForTimeout(1000);
        let searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle.trim()).toEqual("Computers");
    });

    test("@regression shouldOpenElectronicsPage", async () => {
        await mainPage.clickElectronicsCategory();
        await mainPage.page.waitForTimeout(1000);
        let searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle.trim()).toEqual("Electronics");
    });

    test("@regression shouldOpenShoesPage", async () => {
        await mainPage.clickShoesCategory();
        await mainPage.page.waitForTimeout(1000);
        let searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle.trim()).toEqual("Apparel & Shoes");
    });

    test("@regression shouldOpenDigitalDownloadPage", async () => {
        await mainPage.clickDigitalDownloadsCategory();
        await mainPage.page.waitForTimeout(1000);
        let searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle.trim()).toEqual("Digital downloads");
    });

    test("@regression shouldOpenJeweleryPage", async () => {
        await mainPage.clickJeweleryCategory();
        await mainPage.page.waitForTimeout(1000);
        let searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle.trim()).toEqual("Jewelry");
    });

    test("@regression shouldOpenGiftCardsPage", async () => {
        await mainPage.clickGiftCardsCategory();
        await mainPage.page.waitForTimeout(1000);
        let searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle.trim()).toEqual("Gift Cards");
    });
});