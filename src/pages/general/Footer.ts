import {expect, Page} from '@playwright/test';

class Footer {
    constructor(private page: Page) {
    }

    private copyRight = this.page.locator('.footer-disclaimer');
    private siteMap = this.page.locator('//div[contains(@class, "information")]//a[@href="/sitemap"]');
    private shippingAndReturns = this.page.locator('//div[contains(@class, "information")]//a[@href="/shipping-returns"]');
    private privacyPolicy = this.page.locator('//div[contains(@class, "information")]//a[@href="/privacy-policy"]');
    private conditionsOfUse = this.page.locator('//div[contains(@class, "information")]//a[@href="/conditions-of-use"]');
    private aboutUs = this.page.locator('//div[contains(@class, "information")]//a[@href="/about-us"]');
    private contactUs = this.page.locator('//div[contains(@class, "information")]//a[@href="/contactus"]');
    private news = this.page.locator('//div[contains(@class, "customer-service")]//a[@href="/news"]');
    private blog = this.page.locator('//div[contains(@class, "customer-service")]//a[@href="/blog"]');
    private newProducts = this.page.locator('//div[contains(@class, "customer-service")]//a[@href="/newproducts"]');
    private myAccount = this.page.locator('//div[contains(@class, "my-account")]//a[@href="/customer/info"]');
    private orders = this.page.locator('//div[contains(@class, "my-account")]//a[@href="/customer/orders"]');
    private addresses = this.page.locator('//div[contains(@class, "my-account")]//a[@href="/customer/addresses"]');
    private facebook = this.page.locator('//div[contains(@class, "follow-us")]//a[@href="http://www.facebook.com/nopCommerce"]');
    private twitter = this.page.locator('//div[contains(@class, "follow-us")]//a[@href="https://twitter.com/nopCommerce"]');
    private rss = this.page.locator('//div[contains(@class, "follow-us")]//a[@href="/news/rss/1"]');
    private youtube = this.page.locator('//div[contains(@class, "follow-us")]//a[@href="http://www.youtube.com/user/nopCommerce"]');
    private google = this.page.locator('//div[contains(@class, "follow-us")]//a[@href="https://plus.google.com/+nopcommerce"]');
    private siteAd = this.page.locator('//div[contains(@class, "footer-poweredby")]//a[@href="http://www.nopcommerce.com/"]')

    async clickMyAccount() {
        await this.myAccount.click();
    }

    async clickOrders() {
        await this.orders.click();
    }
    async verifyFooterLinksExist(): Promise<void> {
        const locators = [
            this.copyRight, this.siteMap, this.shippingAndReturns, this.privacyPolicy, this.conditionsOfUse,
            this.aboutUs, this.contactUs, this.news, this.blog, this.newProducts, this.myAccount, this.orders,
            this.addresses, this.facebook, this.twitter, this.rss, this.youtube, this.google, this.siteAd
        ];

        for (const locator of locators) {
            await expect(locator).toBeVisible();
        }
    }
}


export default Footer;