import { test as base, createBdd } from 'playwright-bdd';
import { PageManager } from '../../pageobjects/PageManager';

type PageManagerFixture = {
  pageManager: PageManager;
};

export const methods = base.extend<PageManagerFixture>({
  pageManager: async ({ page }, use) => {
    const pageManager = new PageManager(page);
    await use(pageManager);
  },
});

export const { Given, Then, When, Before } = createBdd(methods);