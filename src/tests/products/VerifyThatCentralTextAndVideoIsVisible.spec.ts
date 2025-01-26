import { test, expect } from '@playwright/test';
import MainPage from '../../pages/general/MainPage';

test.describe('VerifyThatCentralTextAndVideoIsVisible', () => {
    let mainPage;
    let page;

    test.beforeEach(async ({browser}) => {
        const context = await browser.newContext();
        page = await context.newPage();

        mainPage = await new MainPage(page);
        await mainPage.openHomePage();
    });

    test("@regression toscaSpeedPageShouldBeVisible", async () => {
        const visibility = await mainPage.isToscaSpeedPageVisible();
        expect(visibility).toBe(true);
    });

    test("@regression toscaAcademyShouldBeVisible", async () => {
        const visibility = await mainPage.isToscaAcademyVisible();
        expect(visibility).toBe(true);
    });

    test("@regression welcomeTextShouldBeVisible", async() => {
        const visibility = await mainPage.isWelcomeTextVisible();
        expect(visibility).toBe(true);
    })
});
