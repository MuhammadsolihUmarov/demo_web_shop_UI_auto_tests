import { Page } from '@playwright/test';
import OrderPage from "../orders/OrderPage";

class ProductDetailsPage {
    constructor(private page: Page) {}

    private recipientName = this.page.locator('#giftcard_2_RecipientName');
    private recipientEmail = this.page.locator('#giftcard_2_RecipientEmail');
    private recipientMessage = this.page.locator('#giftcard_2_Message');
    private addToCartRecipientBasedProduct = this.page.locator('#add-to-cart-button-2');
    private addToCartConfigurationBasedProduct = this.page.locator('#add-to-cart-button-72');
    private processorSpeed = this.page.locator('#product_attribute_72_5_18_52');
    private processorRAM = this.page.locator('#product_attribute_72_6_19_91');
    private processorHDD = this.page.locator('#product_attribute_72_3_20_58');
    private software = this.page.locator('#product_attribute_72_8_30_93');
    private otherSuite = this.page.locator('#product_attribute_72_8_30_94');
    private otherOfficeSuite = this.page.locator('#product_attribute_72_8_30_95');
    private wishlistButton = this.page.locator('#add-to-wishlist-button-2');
    private emailFriendButton = this.page.locator('.email-a-friend');
    private compareProductsButton = this.page.locator('.compare-products');
    private productName = this.page.locator('//h1[@itemprop="name"]');
    private productDescription = this.page.locator('.short-description');
    private productFullDescription = this.page.locator('.full-description');
    private productReviewDetails = this.page.locator('.product-review-links');
    private productDataTable = this.page.locator('.data-table');
    private productTags = this.page.locator('//a[@href and @class="producttag"]');

    async isProductNameVisible(): Promise<boolean> {
        return await this.productName.isVisible();
    }

    async isProductDescriptionVisible(): Promise<boolean> {
        return await this.productDescription.isVisible();
    }

    async isProductFullDescriptionVisible(): Promise<boolean> {
        return await this.productFullDescription.isVisible();
    }

    async isProductReviewDetailsVisible(): Promise<boolean> {
        return await this.productReviewDetails.isVisible();
    }

    async isProductDataTableVisible(): Promise<boolean> {
        return await this.productDataTable.isVisible();
    }

    async areProductTagsVisible(): Promise<boolean> {
        const tagsCount = await this.productTags.count();
        if (tagsCount > 0) {
            return await this.productTags.first().isVisible();
        }
        return false;
    }

    async clickEmailFriendButton() {
        await this.emailFriendButton.click();
    }

    async isEmailFriendButtonIsVisible() {
        return await this.emailFriendButton.isVisible();
    }

    async clickCompareProductsButton() {
        await this.compareProductsButton.click();
    }

    async isCompareProductsButtonIsVisible() {
        return await this.compareProductsButton.isVisible();
    }

    async configureProduct(): Promise<void> {
        await this.selectProcessorSpeed();
        await this.selectProcessorRAM();
        await this.selectProcessorHDD();
        await this.selectSoftware();
        await this.selectOtherSuite();
        await this.selectOtherOfficeSuite();
    }

    async selectProcessorSpeed(): Promise<void> {
        await this.processorSpeed.check();
    }

    async clickAddToWishListButton() {
        await this.wishlistButton.click();
    }

    async selectProcessorRAM(): Promise<void> {
        await this.processorRAM.check();
    }

    async selectProcessorHDD(): Promise<void> {
        await this.processorHDD.check();
    }

    async selectSoftware(): Promise<void> {
        await this.software.check();
    }

    async selectOtherSuite(): Promise<void> {
        await this.otherSuite.check();
    }

    async selectOtherOfficeSuite(): Promise<void> {
        await this.otherOfficeSuite.check();
    }

    async fillRecipientDetails(name: string, email: string, message: string): Promise<void> {
        await this.setRecipientName(name);
        await this.setRecipientEmail(email);
        await this.setRecipientMessage(message);
    }

    async setRecipientName(name: string): Promise<void> {
        await this.recipientName.fill(name);
    }

    async setRecipientEmail(email: string): Promise<void> {
        await this.recipientEmail.fill(email);
    }

    async setRecipientMessage(message: string): Promise<void> {
        await this.recipientMessage.fill(message);
    }

    async clickAddToCartRecipientBasedProduct(): Promise<void> {
        await this.addToCartRecipientBasedProduct.click();
    }

    async clickAddToCartConfigurationBasedProduct(): Promise<void> {
        await this.addToCartConfigurationBasedProduct.click();
    }
}

export default ProductDetailsPage;