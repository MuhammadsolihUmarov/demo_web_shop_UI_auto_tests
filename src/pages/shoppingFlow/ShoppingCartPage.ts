import {Page} from "@playwright/test";

class ShoppingCartPage {
    constructor(private page: Page) {}

    private productName = this.page.locator('//a[@class="product-name"]');
    private termsAndServiceButton = this.page.locator('#termsofservice');
    private checkoutButton = this.page.locator('#checkout');
    private numberOfOrdersOfProduct = this.page.locator('//input[contains(@class, "qty-input")]');
    private orderQuantity = this.page.locator('.qty-input');
    private discountCodeInput = this.page.locator('.discount-coupon-code')
    private discountCodeButton = this.page.locator('.apply-discount-coupon-code-button');
    private giftCardInput = this.page.locator('.gift-card-coupon-code');
    private giftCardButton = this.page.locator('.apply-gift-card-coupon-code-button')
    private countryCode = this.page.locator('//select[@id="CountryId"]');
    private stateCode = this.page.locator('#StateProvinceId');
    private estimateShippingButton = this.page.locator('//input[@name="estimateshipping"]');
    private estimatedShipping = this.page.locator('.shipping-results');
    private updateShoppingCartButton = this.page.locator('.update-cart-button');

    async clickUpdateShoppingCart() {
        await this.updateShoppingCartButton.click();
    }
    async clickEstimatedShippingButton() {
        await this.estimateShippingButton.click();
    }

    async isEstimatedShippingVisible(): Promise<boolean> {
        return await this.estimatedShipping.isVisible();
    }

    async selectStateByValue(value: string): Promise<void> {
        await this.stateCode.selectOption(value);
    }

    async selectCountryByValue(value: string): Promise<void> {
        await this.countryCode.selectOption(value);
    }

    async enterDiscountCode(code: string): Promise<void> {
        await this.discountCodeInput.fill(code);
    }

    async applyDiscountCode(): Promise<void> {
        await this.discountCodeButton.click();
    }

    async enterGiftCardCode(code: string): Promise<void> {
        await this.giftCardInput.fill(code);
    }

    async applyGiftCardCode(): Promise<void> {
        await this.giftCardButton.click();
    }

    async setOrderQuantity(newQuantity: string) {
        await this.orderQuantity.fill(newQuantity);
    }

    async getOrderQuantity() {
        return this.orderQuantity.inputValue();
    }

    async getProductName() {
        return await this.productName.textContent();
    }

    async clickTermsAndServiceButton() {
        await this.termsAndServiceButton.check();
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }

    async getNumberOfOrdersInProduct() {
        return await this.numberOfOrdersOfProduct.inputValue();
    }
}

export default ShoppingCartPage;