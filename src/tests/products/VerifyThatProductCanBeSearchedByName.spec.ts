import { test, expect } from '@playwright/test';
import MainPage from '../../pages/general/MainPage';
import SearchPage from "../../pages/general/SearchPage";

test.describe('VerifyThatProductCanBeSearchedByName', () => {
    let mainPage;
    let page;
    let searchPage;

    test.beforeEach(async ({browser}) => {
        const context = await browser.newContext();
        page = await context.newPage();

        mainPage = await new MainPage(page);
        searchPage = await new SearchPage(page);
        await mainPage.openHomePage();
    });

    test("@regression shouldSearchByExistingName", async () => {
        const keyword = "computer";
        await mainPage.searchItemInSearchBar(keyword);

        const productInTitle = await searchPage.isKeywordInProductTitles(keyword);
        expect(productInTitle).toBe(true);
        const searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle).toEqual("Search");
    });

    test("@regression shouldSearchByNonExistingName", async () => {
        const keyword = "fchuecbhjfejhb";
        await mainPage.searchItemInSearchBar(keyword);

        const searchResult = await searchPage.getEmptySearchResult();
        expect(searchResult.trim()).toEqual("No products were found that matched your criteria.");
        const searchTitle = await searchPage.getSearchTitle();
        expect(searchTitle).toEqual("Search");
    });

    test("@regression shouldSearchByEmptyName", async () => {
        const keyword = "";
        await mainPage.searchItemInSearchBar(keyword);
        await searchPage.handlePopup();
    });
});