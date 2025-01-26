import {Page} from "@playwright/test";

class ProfilePage {
    constructor(private page: Page) {}
    private gender = this.page.locator('#gender-male');
    private firstName = this.page.locator('#FirstName');
    private lastName = this.page.locator('#LastName');
    private email = this.page.locator('#Email');
    private saveButton = this.page.locator('//input[@name="save-info-button"]');

    async selectGenderMale(): Promise<void> {
        await this.gender.check();
    }

    async enterFirstName(name: string): Promise<void> {
        await this.firstName.fill(name);
    }

    async enterLastName(name: string): Promise<void> {
        await this.lastName.fill(name);
    }

    async enterEmail(email: string): Promise<void> {
        await this.email.fill(email);
    }

    async clickSaveButton(): Promise<void> {
        await this.saveButton.click();
    }

    async getFirstName(): Promise<string> {
        return await this.firstName.inputValue();
    }

    async getLastName(): Promise<string> {
        return await this.lastName.inputValue();
    }

    async getEmail(): Promise<string> {
        return await this.email.inputValue();
    }
}

export default ProfilePage;