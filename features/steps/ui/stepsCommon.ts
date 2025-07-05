import { Given, When, Then } from '../../support/fixtures';
import data from '../../../utils/data.json';
import { PageManager } from '../../../pageobjects/PageManager';
import { PageLogin } from '../../../pageobjects/PageLogin';

type FixtureContext = {
    pageManager: PageManager;
};

const pageLogin = (pageManager: PageManager): PageLogin => pageManager.getPageLogin();

Given('I navigate to the OrangeHRM login page', async ({ pageManager }: FixtureContext) => {
    await pageLogin(pageManager).goto(data.ui.url);
})


Given('the login page is loaded successfully', async ({ pageManager }: FixtureContext) => {
    await pageLogin(pageManager).isLoginPageLoaded();
})








