import { Then } from '../../support/fixtures';
import { PageManager } from '../../../pageobjects/PageManager';
import { PageDashboard } from '../../../pageobjects/PageDashboard';

type FixtureContext = {
    pageManager: PageManager;
};


const pagDashboard = (pageManager: PageManager): PageDashboard => pageManager.getPageDashboard();

Then('I should be redirected to the page dashboard', async ({ pageManager }: FixtureContext) => {
    await pagDashboard(pageManager).assertDashboardPage();
})