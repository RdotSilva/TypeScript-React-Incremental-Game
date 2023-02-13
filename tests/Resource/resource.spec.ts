import { test, expect } from "@playwright/test";

const resourceOneIconSelector = ".Icon1-stat";

test("check default state", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  page.locator(resourceOneIconSelector).click();
  await expect(page.locator(resourceOneIconSelector)).toHaveText("0");
});

test.fixme("check stat increase on click", async ({ page }) => {});

test.fixme("check upgrade buttons", async ({ page }) => {});
