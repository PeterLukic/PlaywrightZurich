import { Given, When, Then } from '../../support/fixtures';
import { PageManager } from '../../../pageobjects/PageManager';
import { PageAdminUserManager } from '../../../pageobjects/PageAdminUserManager';
import { getStoredUserData } from '../../steps/ui/stepsAdminAddUser';
import data from '../../../utils/data.json';

type FixtureContext = {
    pageManager: PageManager;
};

const pageAdminUserManager = (pageManager: PageManager): PageAdminUserManager => pageManager.getPageAdminUserManager();

Given('I navigate to the Admin User Management page', async ({ pageManager }: FixtureContext) => {
    await pageAdminUserManager(pageManager).navigateToAdminUserManagement(data.ui.url + "web/index.php/admin/viewSystemUsers");
})
When('I fill the username input field with {string}', async ({ pageManager }: FixtureContext, username: string) => {
    await pageAdminUserManager(pageManager).fillUsername(username);
})


Then('I fill the username input field with New Randndom User', async ({ pageManager }: FixtureContext) => {
    const storedUser = getStoredUserData();
    if (!storedUser || !storedUser.username) {
        throw new Error("Stored user data is missing or incomplete.");
    }
    await pageAdminUserManager(pageManager).fillUsername(storedUser.username);
})


When('I select {string} as the user role', async ({ pageManager }: FixtureContext, userRole: string) => {
    await pageAdminUserManager(pageManager).selectUserRole(userRole);
})

When('I enter {string} as the employee name', async ({ pageManager }: FixtureContext, employeeName: string) => {
    await pageAdminUserManager(pageManager).fillEmployeeName(employeeName);
})

Given('I select {string} as the status', async ({ pageManager }: FixtureContext) => {
    await pageAdminUserManager(pageManager).selectStatus("Enabled");
})

Given('I click the Search button', async ({ pageManager }: FixtureContext) => {
    await pageAdminUserManager(pageManager).clickSearch();
    
})

Then('I verify that the search result contains:', async ({ pageManager }: FixtureContext, dataTable) => {
    const expected = dataTable.rowsHash();
    await pageAdminUserManager(pageManager).verifySingleSearchResult({
        username: expected.username,
        userRole: expected.userRole,
        employeeName: expected.employeeName,
        status: expected.status
    });
})

Then('I verify If random user is added', async ({ pageManager }: FixtureContext)  => {
    const storedUser = getStoredUserData();
    if (!storedUser) {
        throw new Error("Stored user data is missing or incomplete.");
    }
    await pageAdminUserManager(pageManager).verifyUserDataInTable(storedUser);
    console.log('Verified user data in table:', storedUser);
})



Then('I should see a message indicating that no records were found', async ({ pageManager }: FixtureContext) => {
    await pageAdminUserManager(pageManager).verifyNoSearchResults();
})

Then('I click the Add User button', async ({ pageManager }: FixtureContext) => {
    await pageAdminUserManager(pageManager).clickButtonAdd();
})

Then('I should be redirected to the page admin user managment', async ({ pageManager }: FixtureContext) => {
    await pageAdminUserManager(pageManager).verifypageAdminUserManager();
})

Then('I click the checkbox for user {string}', async ({ pageManager }: FixtureContext, userName: string)  => {
     await pageAdminUserManager(pageManager).clickTableCheckboxByName(userName);
})

Then('I click the Delete Selected button', async ({ pageManager }: FixtureContext) => {
  await pageAdminUserManager(pageManager).clickButtonDeleteSelected();
})

Then('I confirm the deletion in the dialog', async ({ pageManager }: FixtureContext) => {
    await pageAdminUserManager(pageManager).clickButtonYesDelete();
})






