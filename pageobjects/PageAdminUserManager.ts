import { Page, Locator, expect } from '@playwright/test';
import { NewUserData } from './PageAdminAddUser';

export class PageAdminUserManager {
    readonly page: Page;
    readonly inputUsername: Locator;
    readonly dropDownUserRole: Locator;
    readonly inputEmployeeName: Locator;
    readonly dropDownStatus: Locator;
    readonly buttonReset: Locator;
    readonly buttonSearch: Locator;
    readonly buttonAdd: Locator;
    readonly tableRows: Locator;
    readonly tableCells: Locator;
    readonly labelNoRecordsMessage: Locator;
    readonly buttonDeleteSelected: Locator;
    readonly buttonYesDelete: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputUsername = page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']");
        this.dropDownUserRole = page.locator("//body/div[@id='app']/div[@class='oxd-layout orangehrm-upgrade-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='oxd-table-filter']/div[@class='oxd-table-filter-area']/form[@class='oxd-form']/div[@class='oxd-form-row']/div[@class='oxd-grid-4 orangehrm-full-width-grid']/div[2]/div[1]/div[2]/div[1]/div[1]");
        this.inputEmployeeName = page.locator("//input[@placeholder='Type for hints...']");
        this.dropDownStatus = page.locator("//div[@class='oxd-select-text-input' and normalize-space()='-- Select --']");
        this.buttonReset = page.locator("//button[@type='reset' and normalize-space()='Reset']");
        this.buttonSearch = page.locator("//button[@type='submit']");
        this.buttonAdd = page.locator("//button[normalize-space()='Add']");
        this.tableRows = page.locator('.oxd-table-body .oxd-table-row');
        this.tableCells = this.tableRows.first().locator('.oxd-table-cell');
        this.labelNoRecordsMessage = page.locator("//span[normalize-space()='No Records Found']");
        this.buttonDeleteSelected = page.locator("//button[normalize-space()='Delete Selected']");
        this.buttonYesDelete = page.getByRole('button', { name: 'Yes, Delete' });
    }

    // Navigation
    /**
     * Navigate to the OrangeHRM Admin User Management page
     */
    async navigateToAdminUserManagement(url: string): Promise<void> {
        await this.page.goto(url);
    }

    /**
    * Verify that the Admin User Manager page has loaded successfully
    */
    async verifypageAdminUserManager() {
        await this.page.waitForURL('**/viewSystemUsers', { timeout: 10000 });
        await this.page.waitForLoadState('networkidle');
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
     * Fill the username input field with the provided username from user data
     * @param user - The user data containing the username
     */
    async fillUsernameFromUserData(user: NewUserData) {
        await this.inputUsername.fill(user.username);
    }

    /**
     * Fill the employee name input field with the provided name
     * @param name - The name of the employee to fill in the input field
     */
    async fillEmployeeName(name: string) {
        await this.inputEmployeeName.fill(name);

        // Wait for the suggestions to appear
        const suggestion = this.page.locator(`//div[@role='listbox']//span[normalize-space()='${name}']`);
        await suggestion.waitFor({ state: 'visible' });
        await suggestion.click();
    }

    // Dropdown Selectors
    /** 
    // Select a user role from the dropdown
    * @param roleText - The text of the user role to select
    */
    async selectUserRole(roleText: string) {
        await this.dropDownUserRole.click();
        await this.page.locator(`//div[@role='listbox']//span[normalize-space()='${roleText}']`).click();
    }

    /**
     * Select a status from the dropdown
     * @param statusText - The text of the status to select
     */
    async selectStatus(statusText: string) {
        await this.dropDownStatus.click();
        await this.page.locator(`//div[@role='listbox']//span[normalize-space()='${statusText}']`).click();
    }

    // Actions
    /**
    * Click the search button to submit the search form
    */
    async clickSearch() {
        await this.buttonSearch.click();
        await this.page.waitForLoadState('networkidle');
    }

    /**
    * Click the reset button to submit the search form 
    */
    async clickReset() {
        await this.buttonReset.click();
    }

    /**
     * Click the add button to navigate to the user creation page
     */

    async clickButtonAdd() {
        await this.buttonAdd.click();
    }

    /**
     * Click the delete selected button to delete selected users
     */
    async clickButtonDeleteSelected() {
        await this.buttonDeleteSelected.click();
    }

    /**
     * Click the "Yes, Delete" button to confirm deletion of selected users
     */
    async clickButtonYesDelete() {
        await this.buttonYesDelete.click();
        await this.page.waitForLoadState('networkidle');

    }

    // Verification
    /**
     *  Verify that the search results contain a single row with the expected values
     *  This method is used to verify that the search results contain a single row with the expected values.
     *  It checks the count of rows in the search results and verifies that the values in
     * @param expected - Expected values for the single search result
     */
    async verifySingleSearchResult(expected: {
        username: string;
        userRole: string;
        employeeName?: string;
        status: string;
    }) {
        await expect(this.tableRows).toHaveCount(1);

        await expect(this.tableCells.nth(1)).toHaveText(expected.username);
        await expect(this.tableCells.nth(2)).toHaveText(expected.userRole);
        // Optionally check employeeName if provided
        if (expected.employeeName) {
            await expect(this.tableCells.nth(3)).toHaveText(expected.employeeName);
        }
        await expect(this.tableCells.nth(4)).toHaveText(expected.status);
    }

    async verifyUserDataInTable(expected: NewUserData) {
        await expect(this.tableRows).toHaveCount(1);
        await expect(this.tableCells.nth(1)).toHaveText(expected.username);
        await expect(this.tableCells.nth(2)).toHaveText(expected.role);
        // Optionally check employeeName if needed
        // await expect(this.tableCells.nth(3)).toHaveText(expected.employeeName);
        await expect(this.tableCells.nth(4)).toHaveText(expected.status);
    }

    /**
     * Verify that there are no search results
     */
    async verifyNoSearchResults() {
        await expect(this.tableRows).toHaveCount(0);
        await expect(this.labelNoRecordsMessage).toBeVisible();
        await expect(this.labelNoRecordsMessage).toHaveText('No Records Found');
    }

    // Table Actions
    /**
    * Click the checkbox in the table row where the employee name matches the given value
    * @param name - The name of the employee to match (e.g., "Perica")
    */
    async clickTableCheckboxByName(name: string) {
        const rowLocator = this.page.locator(`//div[@role='row' and .//div[text()='${name}']]`);
        await rowLocator.waitFor({ state: 'visible' });

        // Click the span that is styled to look like a checkbox
        const styledCheckbox = rowLocator.locator('.oxd-checkbox-input');
        await styledCheckbox.click({ force: true });
    }
}