import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;
  readonly successTitle: Locator;
  readonly successText: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.errorMessage = page.locator('#error');
    this.successTitle = page.locator('.post-title');
    this.successText = page.locator('.has-text-align-center');
    this.logoutButton = page.getByRole('link', { name: 'Log out' });
  }

  async goto(): Promise<void> {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async fillUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async clickSubmit(): Promise<void> {
    await this.submitButton.click();
  }

  async login(username: string, password: string): Promise<void> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickSubmit();
  }

  async assertSuccessfulLogin(): Promise<void> {
    await expect(this.page).toHaveURL(/logged-in-successfully/);
    await expect(this.successTitle).toContainText('Logged In Successfully');
    await expect(this.successText).toContainText('Congratulations');
    await expect(this.logoutButton).toBeVisible();
  }

  async assertInvalidUsernameError(): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText('Your username is invalid!');
  }

  async assertInvalidPasswordError(): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText('Your password is invalid!');
  }

  async logout(): Promise<void> {
    await this.logoutButton.click();
  }
}