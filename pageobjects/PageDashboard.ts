import { Page, Locator, expect } from '@playwright/test';

export class PageDashboard {
    readonly page: Page;
    readonly titleDashboard: Locator;
    readonly tableTimeAtWork: Locator;
    readonly tableMyActions: Locator;
    readonly tableQuickLaunch: Locator;
    readonly tableBuzzLatestPosts: Locator;
    readonly tableEmployeeDistributionBySubUnit: Locator;
    readonly tableEmployeeDistributionByLocation: Locator;


    constructor(page: Page) {
        this.page = page;
        this.titleDashboard = page.locator('h6.oxd-text--h6.oxd-topbar-header-breadcrumb-module');
        this.tableTimeAtWork = page.locator('p.oxd-text.oxd-text--p', { hasText: 'Time at Work' });
        this.tableMyActions = page.locator('p.oxd-text.oxd-text--p', { hasText: 'My Actions' });
        this.tableQuickLaunch = page.locator('p.oxd-text.oxd-text--p', { hasText: 'Quick Launch' });
        this.tableBuzzLatestPosts = page.locator('p.oxd-text.oxd-text--p', { hasText: 'Buzz Latest Posts' });
        this.tableEmployeeDistributionBySubUnit = page.locator('p.oxd-text.oxd-text--p', { hasText: 'Employee Distribution by Sub Unit' });
        this.tableEmployeeDistributionByLocation = page.locator('p.oxd-text.oxd-text--p', { hasText: 'Employee Distribution by Location' });

    }

    /**
     * Assert that the dashboard page is loaded and all key widgets are visible with correct text.
    */
    async assertDashboardPage(): Promise<void> {
        await expect(this.titleDashboard).toHaveText('Dashboard');

        //await expect(this.tableTimeAtWork).toBeVisible();
        //await expect(this.tableTimeAtWork).toHaveText('Time at Work');

        await expect(this.tableMyActions).toBeVisible();
        await expect(this.tableMyActions).toHaveText('My Actions');

        await expect(this.tableQuickLaunch).toBeVisible();
        await expect(this.tableQuickLaunch).toHaveText('Quick Launch');

        //await expect(this.tableBuzzLatestPosts).toBeVisible();
        //await expect(this.tableBuzzLatestPosts).toHaveText('Buzz Latest Posts');

        await expect(this.tableEmployeeDistributionBySubUnit).toBeVisible();
        await expect(this.tableEmployeeDistributionBySubUnit).toHaveText('Employee Distribution by Sub Unit');

        await expect(this.tableEmployeeDistributionByLocation).toBeVisible();
        await expect(this.tableEmployeeDistributionByLocation).toHaveText('Employee Distribution by Location');
    }
}