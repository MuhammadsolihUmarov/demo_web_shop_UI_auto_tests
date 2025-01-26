import { test, expect } from '@playwright/test';
import MainPage from '../../pages/general/MainPage';
import SearchPage from "../../pages/general/SearchPage";

test.describe('VerifyThatTopMenusDirectToTheSpecifiedPage', () => {
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

    test("@regression shouldOpenGiftCardsPage", async() => {
        await mainPage.clickGiftCardsMenu();
        await mainPage.page.waitForTimeout(1000);
        let searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle.trim()).toEqual("Gift Cards");
    });

    test("@regression shouldOpenJeweleryPage", async() => {
        await mainPage.clickJeweleryMenu();
        await mainPage.page.waitForTimeout(1000);
        let searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle.trim()).toEqual("Jewelry");
    });

    test("@regression shouldOpenDigitalDownloadsPage", async() => {
        await mainPage.clickDigitalDownloadsMenu();
        await mainPage.page.waitForTimeout(1000);
        let searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle.trim()).toEqual("Digital downloads");
    });

    test("@regression shouldOpenShoesPage", async() => {
        await mainPage.clickAppealShoesMenu();
        await mainPage.page.waitForTimeout(1000);
        let searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle.trim()).toEqual("Apparel & Shoes");
    });

    test("@regression shouldOpenElectronicsPage", async() => {
        await mainPage.clickElectronicsMenu();
        await mainPage.page.waitForTimeout(1000);
        let searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle.trim()).toEqual("Electronics");
    });

    test("@regression shouldOpenComputersPage", async() => {
        await mainPage.clickComputersMenu();
        await mainPage.page.waitForTimeout(1000);
        let searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle.trim()).toEqual("Computers");
    });

    test("@regression shouldOpenBooksPage", async() => {
        await mainPage.clickBooksMenu();
        await mainPage.page.waitForTimeout(1000);
        let searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle.trim()).toEqual("Books");
    });

    test("@regression shouldOpenDesktopsPage", async() => {
        await mainPage.hoverAndClickDesktops();
        await mainPage.page.waitForTimeout(1000);
        let searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle.trim()).toEqual("Desktops");
    });

    test("@regression shouldOpenNotebooksPage", async() => {
        await mainPage.hoverAndClickNotebooks();
        await mainPage.page.waitForTimeout(1000);
        let searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle.trim()).toEqual("Notebooks");
    });

    test("@regression shouldOpenAccessoriesPage", async() => {
        await mainPage.hoverAndClickAccessories();
        await mainPage.page.waitForTimeout(1000);
        let searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle.trim()).toEqual("Accessories");
    });

    test("@regression shouldOpenCameraPhotoPage", async() => {
        await mainPage.hoverAndClickCameraPhoto();
        await mainPage.page.waitForTimeout(1000);
        let searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle.trim()).toEqual("Camera, photo");
    });

    test("@regression shouldOpenCellPhonesPage", async() => {
        await mainPage.hoverAndClickCellPhones();
        await mainPage.page.waitForTimeout(1000);
        let searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle.trim()).toEqual("Cell phones");
    });
});