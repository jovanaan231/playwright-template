import { expect } from "@playwright/test";
import { timeout } from "../playwright.config";

// ========== Menu MasterData ========== //
export async function openMasterDataDropdown(page) {
  await page.locator(".toastClose > .Icon").click();
  await page.locator(".Icon").first().click();
  await page.locator("summary").click();
}

export async function openGerejaMenu(page) {
  await openMasterDataDropdown(page);
  await page.getByRole("link", { name: "Gereja" }).click();
}

export async function openProdiakonMenu(page) {
  await openMasterDataDropdown(page);
  await page.getByRole("link", { name: "Prodiakon" }).click();
}

//================================= //
