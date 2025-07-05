import { When, Then } from '../../support/fixtures';
import { PageManager } from '../../../pageobjects/PageManager';
import { PageLogin } from '../../../pageobjects/PageLogin';
import data from '../../../utils/data.json';

type FixtureContext = {
    pageManager: PageManager;
};

const pageLogin = (pageManager: PageManager): PageLogin => pageManager.getPageLogin();

When('I enter username {string}', async ({ pageManager }: FixtureContext, userName: string) => {
    await pageLogin(pageManager).fillUsername(userName);
});

When('I enter password {string}', async ({ pageManager }: FixtureContext, password: string) => {
    await pageLogin(pageManager).fillPassword(password);
})

When('I click the login button', async ({ pageManager }: FixtureContext) => {
    await pageLogin(pageManager).clickButtonLogin();
})

When('I login with the demo credentials', async ({ pageManager }: FixtureContext, userName: string, password: string) => {
    await pageLogin(pageManager).loginWithCredentials(data.ui.username, data.ui.password);
})

Then('I should see an error message', async ({ pageManager }: FixtureContext) => {
    await pageLogin(pageManager).assertErrorMessage("Invalid credentials");
})



