import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { credentials } from '../tests/auth/credentials';

type UserCredentials = {
  username: string;
  password: string;
};

type LoginFixtures = {
  loginPage: LoginPage;
  validUser: UserCredentials;
  invalidUser: UserCredentials;
  invalidPassword: UserCredentials;
};

export const test = base.extend<LoginFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  validUser: async ({}, use) => {
    await use(credentials.validUser);
  },

  invalidUser: async ({}, use) => {
    await use(credentials.invalidUser);
  },

  invalidPassword: async ({}, use) => {
    await use(credentials.invalidPassword);
  },
});

export { expect } from '@playwright/test';