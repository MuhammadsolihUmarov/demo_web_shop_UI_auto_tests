import { test, expect } from '@playwright/test';
import MainPage from '../../pages/general/MainPage';

test.describe('VerifyThatOnlyRegisteredUsersCanVoteCommunityPoll', () => {
    let mainPage;
    let page;

    test.beforeEach(async ({browser}) => {
        const context = await browser.newContext();
        page = await context.newPage();
        mainPage = await new MainPage(page);
        await mainPage.openHomePage();
    });

    test('@regression shouldVerifyThatOnlyRegisteredUsersCanVoteCommunityPoll', async () => {
        await mainPage.chooseCommunityVoteOption();
        await mainPage.clickCommunityVote();
        await mainPage.page.waitForTimeout(1000);

        const errorMessage = await mainPage.getErrorMessageCommunityVote();
        expect(errorMessage.trim()).toEqual("Only registered users can vote.")
    });
});