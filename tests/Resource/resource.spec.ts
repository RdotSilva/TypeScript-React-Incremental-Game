import { test, expect } from "@playwright/test";

const resourceOneIconSelector = ".Icon1-stat";

test("check default state", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.locator(resourceOneIconSelector)).toHaveText("0");
});
