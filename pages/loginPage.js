// @ts-check
import { expect } from "@playwright/test";

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator("#username");
    this.passwordField = page.locator("#password");
    this.loginButton = page.locator("[data-testid='button-0']");
    this.usernameErrorMessage = page.locator('[data-testid="errorMsg"]');
    this.passwordErrorMessage = page.locator('[data-testid="errorPwd"]');
    this.dashboard = page.locator("#id-headline");
  }

  async navigateUrl() {
    await this.page.goto("https://erpc-lan.concise.co.id/login");
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async invalidLogin(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
  }

  async wrongUsernameErrorMessage() {
    await expect(this.usernameErrorMessage).toHaveText("Username is required", {
      timeout: 3000,
    });
  }
  // async passwordValidateErrorMessage() {
  //   await expect(this.passwordErrorMessage).toHaveText(
  //     "8 Characters or longer. At least one uppercase, one lowercase, and one number",
  //     { timeout: 3000 }
  //   );
  // }
};
