import {Page} from "@playwright/test";
import LoginPage from "../authentication/LoginPage";

class MainPage {
    constructor(private page: Page) {}

    private giftCardsMenu = this.page.locator('//ul[@class="top-menu"]//a[@href="/gift-cards"]')
    private jeweleryMenu = this.page.locator('//ul[@class="top-menu"]//a[@href="/jewelry"]')
    private digitalDownloadsMenu = this.page.locator('//ul[@class="top-menu"]//a[@href="/digital-downloads"]')
    private appealShoesMenu = this.page.locator('//ul[@class="top-menu"]//a[@href="/apparel-shoes"]')
    private electronicsMenu = this.page.locator('//ul[@class="top-menu"]//a[@href="/electronics"]')
    private cameraPhotoMenu = this.page.locator('//ul[@class="top-menu"]//a[@href="/camera-photo"]')
    private cellPhonesMenu = this.page.locator('//ul[@class="top-menu"]//a[@href="/cell-phones"]')
    private computersMenu = this.page.locator('//ul[@class="top-menu"]//a[@href="/computers"]')
    private desktopsMenu = this.page.locator('//ul[@class="top-menu"]//a[@href="/desktops"]')
    private notebooksMenu = this.page.locator('//ul[@class="top-menu"]//a[@href="/notebooks"]')
    private accessoriesMenu = this.page.locator('//ul[@class="top-menu"]//a[@href="/accessories"]')
    private booksMenu = this.page.locator('//ul[@class="top-menu"]//a[@href="/books"]')
    private booksCategory = this.page.locator('//div[contains(@class, "block-category-navigation")]//a[@href="/books"]');
    private computersCategory = this.page.locator('//div[contains(@class, "block-category-navigation")]//a[@href="/computers"]');
    private electronicsCategory = this.page.locator('//div[contains(@class, "block-category-navigation")]//a[@href="/electronics"]');
    private shoesCategory = this.page.locator('//div[contains(@class, "block-category-navigation")]//a[@href="/apparel-shoes"]');
    private digitalDownloads = this.page.locator('//div[contains(@class, "block-category-navigation")]//a[@href="/digital-downloads"]');
    private jewelery = this.page.locator('//div[contains(@class, "block-category-navigation")]//a[@href="/jewelry"]');
    private giftCards = this.page.locator('//div[contains(@class, "block-category-navigation")]//a[@href="/gift-cards"]');
    private tricentisManufacturer = this.page.locator('//div[contains(@class, "block-manufacturer-navigation")]//a[@href="/tricentis"]');
    private popularTags = this.page.locator('//div[contains(@class, "block-popular-tags")]//li');
    private userEmail = this.page.locator('//div[@class="header-links"]//a[@class="account"]');
    private loginButton = this.page.locator('//a[@class="ico-login"]');
    private addCardText = this.page.locator('//p[@class="content"]');
    private shoppingCardButton = this.page.locator('//span[@class="cart-qty"]');
    private recentlyViewedProductsTitle = this.page.locator('//div[contains(@class, "block-recently-viewed-products")]//strong');
    private logo = this.page.locator('//img[@alt="Tricentis Demo Web Shop"]');
    private communityVoteOption = this.page.locator('#pollanswers-2');
    private communityVoteSubmit = this.page.locator('#vote-poll-1');
    private communityVoteErrorMessage = this.page.locator('#block-poll-vote-error-1');
    private newsLetterBlog = this.page.locator('//div[contains(@class, "block-newsletter")]//strong');
    private newsLetterEmail = this.page.locator('#newsletter-email');
    private newsLetterSubscribe = this.page.locator('#newsletter-subscribe-button');
    private newsLetterSuccessMessage = this.page.locator('#newsletter-result-block');
    private wishListButton = this.page.locator('.wishlist-qty');
    private toscaSpeedPage = this.page.locator('(//div[@id="nivo-slider"]/a[@style="display: block;"])[1]');
    private toscaAcedemy = this.page.locator('(//div[@id="nivo-slider"]/a[@style="display: block;"])[2]');
    private welcomeText = this.page.locator('.topic-html-content-body');
    private logoutButton = this.page.locator('.ico-logout');
    private searchBar = this.page.locator('#small-searchterms');
    private searchBoxButton = this.page.locator('.search-box-button');
    private productNameFromRecentlyViewed(index: number): string {
        return `(//a[@class="product-name"])[${index}]`;
    }
    private productName(index: number): string {
        return `(//div[@data-productid]//h2[@class="product-title"])[${index}]`;
    }
    private addToCardButton(index: number): string {
        return `(//div[@data-productid]//input[@type="button"])[${index}]`;
    }

    async clickGiftCardsMenu(): Promise<void> {
        await this.giftCardsMenu.click();
    }

    async clickJeweleryMenu(): Promise<void> {
        await this.jeweleryMenu.click();
    }

    async clickDigitalDownloadsMenu(): Promise<void> {
        await this.digitalDownloadsMenu.click();
    }

    async clickAppealShoesMenu(): Promise<void> {
        await this.appealShoesMenu.click();
    }

    async clickElectronicsMenu(): Promise<void> {
        await this.electronicsMenu.click();
    }

    async hoverAndClickCameraPhoto(): Promise<void> {
        await this.electronicsMenu.hover();
        await this.cameraPhotoMenu.click();
    }

    async hoverAndClickCellPhones(): Promise<void> {
        await this.electronicsMenu.hover();
        await this.cellPhonesMenu.click();
    }

    async clickComputersMenu(): Promise<void> {
        await this.computersMenu.click();
    }

    async hoverAndClickDesktops(): Promise<void> {
        await this.computersMenu.hover();
        await this.desktopsMenu.click();
    }

    async hoverAndClickNotebooks(): Promise<void> {
        await this.computersMenu.hover();
        await this.notebooksMenu.click();
    }

    async hoverAndClickAccessories(): Promise<void> {
        await this.computersMenu.hover();
        await this.accessoriesMenu.click();
    }

    async clickBooksMenu(): Promise<void> {
        await this.booksMenu.click();
    }

    async clickBooksCategory(): Promise<void> {
        await this.booksCategory.click();
    }

    async clickComputersCategory(): Promise<void> {
        await this.computersCategory.click();
    }

    async clickElectronicsCategory(): Promise<void> {
        await this.electronicsCategory.click();
    }

    async clickShoesCategory(): Promise<void> {
        await this.shoesCategory.click();
    }

    async clickDigitalDownloadsCategory(): Promise<void> {
        await this.digitalDownloads.click();
    }

    async clickJeweleryCategory(): Promise<void> {
        await this.jewelery.click();
    }

    async clickGiftCardsCategory(): Promise<void> {
        await this.giftCards.click();
    }

    async clickTricentisManufacturer(): Promise<void> {
        await this.tricentisManufacturer.click();
    }

    async searchItemInSearchBar(itemName: string) {
        await this.searchBar.fill(itemName);
        await this.searchBoxButton.click();
    }
    async clickLogout() {
        await this.logoutButton.click();
    }

    async isWelcomeTextVisible() {
        return this.welcomeText.isVisible();
    }
    async isToscaSpeedPageVisible(): Promise<boolean> {
        await this.toscaSpeedPage.waitFor({ state: "visible", timeout: 10000 });
        return await this.toscaSpeedPage.isVisible();
    }

    async isToscaAcademyVisible(): Promise<boolean> {
        await this.toscaAcedemy.waitFor({ state: "visible", timeout: 10000 });
        return await this.toscaAcedemy.isVisible();
    }

    async clickWishListButton() {
        await this.wishListButton.click()
    }
    async enterEmailToNewsLetterEmail(email: string) {
        await this.newsLetterEmail.fill(email);
    }

    async getNewsLetterSuccessMessage() {
        return this.newsLetterSuccessMessage.textContent();
    }

    async clickSubscribeToNewsLetter() {
        await this.newsLetterSubscribe.click();
    }

    async getErrorMessageCommunityVote() {
        return this.communityVoteErrorMessage.textContent();
    }

    async clickCommunityVote() {
        await this.communityVoteSubmit.click();
    }

    async chooseCommunityVoteOption() {
        await this.communityVoteOption.check();
    }

    async clickLogo() {
        await this.logo.click();
    }

    async openHomePage() {
        await this.page.goto('https://demowebshop.tricentis.com/');
    }

    async loginAsUser() {
        const loginPage = new LoginPage(this.page);
        await this.openHomePage();
        await this.navigateToLoginPage();
        await loginPage.login('muhammadsolihumarov@gmail.com', '1+2=3Muhammadsolih');
    }

    async isLoggedIn() {
        const emailText = await this.userEmail.textContent();
        return emailText === "muhammadsolihumarov@gmail.com";
    }

    async isLoggedOut() {
        return await this.loginButton.isVisible();
    }

    async navigateToLoginPage() {
        await this.loginButton.click();
    }

    async clickAddToCardButton(index: number) {
        const locator = this.addToCardButton(index);
        const addToCardButton = this.page.locator(locator);
        await addToCardButton.click();
    }

    async clickShoppingCart() {
        await this.shoppingCardButton.click();
    }

    async getProductAddMessage() {
         return await this.addCardText.textContent();
    }

    async getProductName(productIndex: number) {
        const locator = this.productName(productIndex);
        return this.page.locator(locator).textContent();
    }

    async clickProductName(productIndex: number) {
        const locator = this.productName(productIndex);
        await this.page.locator(locator).click();
    }

    async getRecentlyViewedProducts() {
        await this.recentlyViewedProductsTitle.waitFor({ state: 'visible' });
        return await this.recentlyViewedProductsTitle.textContent();
    }

    async getProductNameFromRecentlyViewed(rowIndex: number) {
        const locator = this.productNameFromRecentlyViewed(rowIndex);
        return this.page.locator(locator).textContent();
    }

    async isNewsLetterBlockVisible() {
        return await this.newsLetterBlog.isVisible();
    }
}

export default MainPage;