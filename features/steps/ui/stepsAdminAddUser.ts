import { Then } from '../../support/fixtures';
import { PageManager } from '../../../pageobjects/PageManager';
import { PageAdminAddUser } from '../../../pageobjects/PageAdminAddUser';
import { generateRandomUser, UserModel } from '../../../utils/randomUser';

import data from '../../../utils/data.json';

let storedUserData: UserModel | null = null;

type FixtureContext = {
    pageManager: PageManager;
};

const pageAdminAddUser = (pageManager: PageManager): PageAdminAddUser => pageManager.getPageAdminAddUser();

Then('I select {string} as the new user role', async ({ pageManager }: FixtureContext, userRole: string) => {
    await pageAdminAddUser(pageManager).selectUserRole(userRole);
})

Then('I enter {string} as the new employee name', async ({ pageManager }: FixtureContext, employeeName: string) => {
    await pageAdminAddUser(pageManager).fillEmployeeName(employeeName);
})

Then('I enter {string} as the new first suggestion employee name', async ({ pageManager }: FixtureContext, employeeName: string) => {
    await pageAdminAddUser(pageManager).fillFirstSuggestionEmployeeName(employeeName);
})

Then('I select {string} as the new status', async ({ pageManager }: FixtureContext, status: string) => {
    await pageAdminAddUser(pageManager).selectStatus(status);
})

Then('I enter new username from data json file', async ({ pageManager }: FixtureContext) => {
    await pageAdminAddUser(pageManager).fillUsername(data.ui.newUser.username);
})

Then('I enter new password from data json file', async ({ pageManager }: FixtureContext) => {
    await pageAdminAddUser(pageManager).fillPassword(data.ui.newUser.password);
})

Then('I confirm new password from data json file', async ({ pageManager }: FixtureContext) => {
    await pageAdminAddUser(pageManager).fillConfirmPassword(data.ui.newUser.confirmPassword);
})

Then('I click the Save button', async ({ pageManager }: FixtureContext) => {
    await pageAdminAddUser(pageManager).clickButtonSave();
})

Then('I add a new admin user with random data', async ({ pageManager }: FixtureContext) => {
    const userData = generateRandomUser();
    storedUserData = userData;
    console.log('Generated user data:', userData);
    await pageAdminAddUser(pageManager).addNeUser(userData);
})

export const getStoredUserData = (): UserModel | null => storedUserData;



