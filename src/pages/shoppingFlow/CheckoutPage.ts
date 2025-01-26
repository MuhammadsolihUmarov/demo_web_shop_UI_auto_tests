import { Page } from '@playwright/test';

class CheckoutPage {
    constructor(private page: Page) {}
    private billingAddress = this.page.locator('#billing-address-select');
    private billingContinueButton = this.page.locator('//div[@id="billing-buttons-container"]/input');
    private pickUpInStoreButton = this.page.locator('#PickUpInStore');
    private shippingContinueButton = this.page.locator('//div[@id="shipping-buttons-container"]/input');
    private paymentWithCashButton = this.page.locator('//input[@value="Payments.CashOnDelivery"]');
    private paymentContinueButton = this.page.locator('//div[@id="payment-method-buttons-container"]/input');
    private paymentInfoContinueButton = this.page.locator('//input[@onclick="PaymentInfo.save()"]');
    private confirmOrderButton = this.page.locator('//div[@id="confirm-order-buttons-container"]/input');

    async clickBillingAddress() {
        await this.billingAddress.click();
    }

    async chooseTheFirstBillingOption() {
        await this.billingAddress.selectOption({ index: 0 });
    }

    async clickBillingContinueButton() {
        await this.billingContinueButton.click();
    }

    async clickPickUpInStoreButton() {
        await this.pickUpInStoreButton.click();
    }

    async clickShippingContinueButton() {
        await this.shippingContinueButton.click();
    }

    async clickPaymentWithCash() {
        await this.paymentWithCashButton.click();
    }

    async clickPaymentContinueButton() {
        await this.paymentContinueButton.click();
    }

    async clickPaymentInfoContinueButton() {
        await this.paymentInfoContinueButton.click();
    }

    async clickConfirmOrderButton() {
        await this.confirmOrderButton.click();
    }
}

export default CheckoutPage;