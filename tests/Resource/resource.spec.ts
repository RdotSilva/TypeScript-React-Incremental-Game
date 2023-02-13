import { test, expect } from "@playwright/test";

const resourceOneIconSelector = ".Icon1-stat";

test("check default state", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  page.locator(resourceOneIconSelector).click();
  await expect(page.locator(resourceOneIconSelector)).toHaveText("0");
});

test("check stat increase by 1 on click when no upgrades are purchased", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");
  page.locator(resourceOneIconSelector).click();
  await expect(page.locator(resourceOneIconSelector)).toHaveText("1");
  page.locator(resourceOneIconSelector).click();
  await expect(page.locator(resourceOneIconSelector)).toHaveText("2");
  page.locator(resourceOneIconSelector).click();
  await expect(page.locator(resourceOneIconSelector)).toHaveText("3");
});

test.fixme("check upgrade buttons", async ({ page }) => {});
