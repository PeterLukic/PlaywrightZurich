import { Page } from 'playwright';
import { PageLogin } from './PageLogin';
import { PageDashboard } from './PageDashboard';
import { PageAdminUserManager } from './PageAdminUserManager';
import { PageAdminAddUser } from './PageAdminAddUser';

export class PageManager {
    private readonly page: Page;
    private readonly pageLogin: PageLogin;
    private readonly pageDashboard: PageDashboard;
    private readonly pageAdminUserManager: PageAdminUserManager;
    private readonly pageAdminAddUser: PageAdminAddUser;

    constructor(page: Page) {
        this.page = page;
        this.pageLogin = new PageLogin(page);
        this.pageDashboard = new PageDashboard(page);
        this.pageAdminUserManager = new PageAdminUserManager(page);
        this.pageAdminAddUser = new PageAdminAddUser(page);
    }

    getPageLogin(): PageLogin {
        return this.pageLogin;
    }

    getPageDashboard(): PageDashboard {
        return this.pageDashboard;
    }

    getPageAdminUserManager(): PageAdminUserManager {
        return this.pageAdminUserManager;
    }

    getPageAdminAddUser(): PageAdminAddUser {
        return this.pageAdminAddUser;
    }
}