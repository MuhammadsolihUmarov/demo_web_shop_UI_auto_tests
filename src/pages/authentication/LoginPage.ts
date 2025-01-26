import { Page } from '@playwright/test';

class LoginPage {
    constructor(private page: Page) {}

    private emailInput = this.page.locator('#Email');
    private passwordInput = this.page.locator('#Password');
    private loginButton = this.page.locator('//input[@value="Log in"]');
    private errorMessageWhenLoginFailed = this.page.locator('//div[@class="validation-summary-errors"]/span');
    private resetPasswordButton = this.page.locator('//span[@class="forgot-password"]/a');
    private passwordRecoverButton = this.page.locator('//input[@value="Recover"]');
    private emailSendMessageText = this.page.locator('//div[@class="result"]');
    private errorMessageWhenResetPasswordFailed = this.page.locator('//div[@class="result"]');

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async clickResetPassword() {
        await this.resetPasswordButton.click();
    }

    async fillEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async clickRecoverButton() {
        await this.passwordRecoverButton.click();
    }

    async emailSendMessage() {
        return await this.emailSendMessageText.textContent();
    }

    async getErrorMessageResetPassword() {
        return this.errorMessageWhenResetPasswordFailed.textContent();
    }

    async getErrorMessageLogin(): Promise<string | null> {
        return this.errorMessageWhenLoginFailed.textContent();
    }
}

export default LoginPage;