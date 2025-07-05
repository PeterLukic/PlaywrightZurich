import { Page, Locator } from '@playwright/test';


export type NewUserData = {
    role: string;
    employeeName: string;
    status: string;
    username: string;
    password: string;
};

export class PageAdminAddUser {
    readonly page: Page;
    readonly dropDownUserRole: Locator;
    readonly inputEmployeeName: Locator;
    readonly dropDownStatus: Locator;
    readonly inputUsername: Locator;
    readonly inputPassword: Locator;
    readonly inputConfirmPassword: Locator;
    readonly buttonSave: Locator;
    readonly buttonCancel: Locator;


    constructor(page: Page) {
        this.page = page;
        this.dropDownUserRole = page.locator("//label[text()='User Role']/ancestor::div[contains(@class,'oxd-input-group')]//div[contains(@class,'oxd-select-text-input') and text()='-- Select --']");
        this.inputEmployeeName = page.locator("//input[@placeholder='Type for hints...']");
        this.dropDownStatus = page.locator("//label[text()='Status']/ancestor::div[contains(@class,'oxd-input-group')]//div[contains(@class,'oxd-select-text-input') and normalize-space()='-- Select --']");
        this.inputUsername = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]");
        this.inputPassword = page.locator("(//input[@type='password'])[1]");
        this.inputConfirmPassword = page.locator("(//input[@type='password'])[2]");
        this.buttonSave = page.locator("(//button[normalize-space()='Save'])[1]");
        this.buttonCancel = page.locator("//button[normalize-space()='Cancel']");
    }

    // Navigation
    /**
     * Navigate to the OrangeHRM Admin User Management page
     * @param url - The URL to navigate to the OrangeHRM Admin User Management page
    */
    async navigateToAdminUserManagement(url: string) {
        await this.page.goto(url);
    }

    // Form Fillers
    /**
     * Fill the username input field with the provided username
     * @param username - The username to fill in the input field
    */
    async fillUsername(username: string) {
        await this.inputUsername.fill(username);
    }

    /**
     * Fill the password input field with the provided password
     * @param password - The password to fill in the input field
    */
    async fillPassword(password: string) {
        await this.inputPassword.fill(password);
    }

    /**
     * Fill the confirm password input field with the provided password
     * @param confirmPassword - The password to fill in the confirm password input field
    */
    async fillConfirmPassword(confirmPassword: string) {
        await this.inputConfirmPassword.fill(confirmPassword);
    }

    /**
    * Fill the employee name input field with the provided name
    * @param name - The name of the employee to fill in the input field
    */
    async fillEmployeeName(name: string) {
        await this.inputEmployeeName.fill(name);

        const suggestionList = this.page.locator("//div[@role='listbox']");
        await suggestionList.waitFor({ state: 'visible', timeout: 5000 });

        const suggestions = suggestionList.locator('span');
        const count = await suggestions.count();

        for (let i = 0; i < count; i++) {
            console.log('Suggestion:', await suggestions.nth(i).textContent());
        }

        const suggestion = suggestionList.locator(`span:has-text("${name}")`);
        await suggestion.waitFor({ state: 'visible', timeout: 5000 });
        await suggestion.click();
    }

    /**
 * Fill the employee name input field with the provided name
 * and select the first suggestion from the list
 * @param name - The name of the employee to fill in the input field
 */
    async fillFirstSuggestionEmployeeName(name: string) {
        await this.inputEmployeeName.fill(name);

        const suggestionList = this.page.locator("//div[@role='listbox']");
        await suggestionList.waitFor({ state: 'visible', timeout: 5000 });

        const suggestions = suggestionList.locator('span');
        const firstSuggestion = suggestions.first();
        await firstSuggestion.waitFor({ state: 'visible', timeout: 5000 });

        console.log('First suggestion:', await firstSuggestion.textContent());
        await firstSuggestion.click();
    }

    // Dropdown Selectors
    /**
     * Select a user role from the dropdown
     * @param role - The user role to select from the dropdown
    */
    async selectUserRole(role: string) {
        await this.dropDownUserRole.click();
        await this.page.locator(`.oxd-select-dropdown .oxd-select-option:has-text("${role}")`).click();
    }

    /**
     * Select a status from the dropdown
     * @param status  - The status to select from the dropdown
    */
    async selectStatus(status: string) {
        await this.dropDownStatus.click();
        await this.page.locator(`.oxd-select-dropdown .oxd-select-option:has-text("${status}")`).click();
    }

    // Actions
    /**
     * Click the search button to submit the search form
    */
    async clickButtonSave() {
        await this.buttonSave.click();
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Click the cancel button to discard changes
    */
    async clickButtonCancel() {
        await this.buttonCancel.click();

    }

    /**
    * Fill the Add User form with the provided user data and save
    * @param user - An object containing all the necessary user details
    */
    async addNeUser(user: NewUserData) {
        await this.selectUserRole(user.role);
        await this.fillFirstSuggestionEmployeeName(user.employeeName);
        await this.selectStatus(user.status);
        await this.fillUsername(user.username);
        await this.fillPassword(user.password);
        await this.fillConfirmPassword(user.password);
        await this.clickButtonSave();
    }
}

