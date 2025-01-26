import { Page } from '@playwright/test';

class EmailFriendPage {
    constructor(private page: Page) {}

    private friendsEmail = this.page.locator('#FriendEmail');
    private personalMessage = this.page.locator('#PersonalMessage');
    private sendEmailButton = this.page.locator('//input[@name="send-email"]');
    private successMessage = this.page.locator('.result');

    async enterFriendsEmail(email: string): Promise<void> {
        await this.friendsEmail.fill(email);
    }

    async enterPersonalMessage(message: string): Promise<void> {
        await this.personalMessage.fill(message);
    }

    async getSuccessMessage() {
        return this.successMessage.textContent();
    }

    async clickSendEmailButton(): Promise<void> {
        await this.sendEmailButton.click();
    }
}

export default EmailFriendPage;