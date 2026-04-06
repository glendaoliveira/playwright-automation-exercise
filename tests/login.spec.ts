import { test } from '../fixtures/login.fixture';

test.describe('Practice Test Automation - Login', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('should login successfully with valid credentials', async ({
    loginPage,
    validUser,
  }) => {
    await loginPage.login(validUser.username, validUser.password);
    await loginPage.assertSuccessfulLogin();
  });

  test('should show an error message for invalid username', async ({
    loginPage,
    invalidUser,
  }) => {
    await loginPage.login(invalidUser.username, invalidUser.password);
    await loginPage.assertInvalidUsernameError();
  });

  test('should show an error message for invalid password', async ({
    loginPage,
    invalidPassword,
  }) => {
    await loginPage.login(
      invalidPassword.username,
      invalidPassword.password
    );
    await loginPage.assertInvalidPasswordError();
  });
});