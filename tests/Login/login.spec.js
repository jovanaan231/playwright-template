import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";

export default function loginCase() {
  test("ERL001 - Login with valid credential", async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.navigateUrl();
    await Login.login("user", "Passw0rd1");
  });

  test("ERL002 - Login invalid with wrong username", async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.navigateUrl();
    await Login.login("user", "Password1");

    // Modal Error message
    const errorMessageLocator = page.locator(".toastMessages");
    await expect(errorMessageLocator).toHaveText(
      "Your username or password is incorrect. Please try again",
      { timeout: 3000 }
    );
  });

  test("ERL003 - Login with invalid with wrong password", async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.navigateUrl();
    await Login.login("user", "Passw0rd123");

    // Modal Error message
    const errorMessageLocator = page.locator(".toastMessages");
    await expect(errorMessageLocator).toHaveText(
      "Your username or password is incorrect. Please try again",
      { timeout: 3000 }
    );
  });
}
