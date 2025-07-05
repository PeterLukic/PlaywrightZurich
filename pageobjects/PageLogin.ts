import { Page, Locator, expect } from '@playwright/test';

export class PageLogin {
    // Locators
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly loginTitle: Locator;
    readonly demoCredentials: Locator;
    readonly forgotPasswordLink: Locator;
    readonly socialAuthButton: Locator;
    readonly errorMessage: Locator;
    readonly csrfToken: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]:has-text("Login")');
        this.loginTitle = page.locator('h5.orangehrm-login-title');
        this.demoCredentials = page.locator('.orangehrm-demo-credentials');
        this.forgotPasswordLink = page.locator('.orangehrm-login-forgot-header');
        this.socialAuthButton = page.locator('.orangehrm-auth-button');
        this.errorMessage = page.locator('p.oxd-text.oxd-text--p.oxd-alert-content-text');
        this.csrfToken = page.locator('input[name="_token"]');
    }


    /**
     * Navigate to the OrangeHRM login page
    */
    async goto(url: string): Promise<void> {
        await this.page.goto(url);
    }

    /**
     * Wait for page to load completely
    */
    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
        await expect(this.loginTitle).toBeVisible();
    }

    // Form Actions
    async fillUsername(username: string): Promise<void> {
        await this.usernameInput.fill(username);
    }

    async fillPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    async clickButtonLogin(): Promise<void> {
        await this.loginButton.click();
    }

    async clearInputs(): Promise<void> {
        await this.usernameInput.clear();
        await this.passwordInput.clear();
    }

    async clickForgotPassword(): Promise<void> {
        await this.forgotPasswordLink.click();
    }

    async clickSocialAuth(): Promise<void> {
        await this.socialAuthButton.click();
    }

    // Composite Actions
    async loginWithCredentials(username: string, password: string): Promise<void> {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickButtonLogin();
    }

    async loginWithDemoCredentials(): Promise<void> {
        await this.loginWithCredentials('Admin', 'admin123');
    }

    // Verification Methods
    async isLoginPageLoaded(): Promise<boolean> {
        await expect(this.loginTitle).toBeVisible();
        await expect(this.usernameInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();
        return true;
    }

    async verifyPageTitle(): Promise<void> {
        await expect(this.page).toHaveTitle('OrangeHRM');
    }

    async verifyLoginTitle(): Promise<void> {
        await expect(this.loginTitle).toHaveText('Login');
    }

    async verifyDemoCredentialsVisible(): Promise<void> {
        await expect(this.demoCredentials).toBeVisible();
        await expect(this.demoCredentials).toContainText('Username : Admin');
        await expect(this.demoCredentials).toContainText('Password : admin123');
    }

    async verifyAllElementsPresent(): Promise<void> {
        await expect(this.usernameInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();
        await expect(this.loginTitle).toBeVisible();
        await expect(this.demoCredentials).toBeVisible();
        await expect(this.forgotPasswordLink).toBeVisible();
    }

    // Error Handling
    async isErrorMessageVisible(): Promise<boolean> {
        return await this.errorMessage.isVisible();
    }

    async getErrorMessageText(): Promise<string> {
        return await this.errorMessage.textContent() || '';
    }

    async assertErrorMessage(expectedText: string): Promise<void> {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText(expectedText);
    }

    // Utility Methods
    async getDemoCredentialsText(): Promise<string> {
        return await this.demoCredentials.textContent() || '';
    }

    async isLoginButtonEnabled(): Promise<boolean> {
        return await this.loginButton.isEnabled();
    }

    async getUsernamePlaceholder(): Promise<string> {
        return await this.usernameInput.getAttribute('placeholder') || '';
    }

    async getPasswordPlaceholder(): Promise<string> {
        return await this.passwordInput.getAttribute('placeholder') || '';
    }

    async getCsrfToken(): Promise<string> {
        return await this.csrfToken.getAttribute('value') || '';
    }
}