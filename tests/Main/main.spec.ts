import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Expect a title "to contain" a substring
  await expect(page).toHaveTitle(/Incremental Game/);

  // TODO: Check default score set to 0

  // TODO: Check current bonus default None

   // TODO: Check only first resource is displayed
  
   // TODO: Check first resource score is defaulted to 0
});
