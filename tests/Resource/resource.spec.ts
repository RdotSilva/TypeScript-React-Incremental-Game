import { test, expect } from "@playwright/test";

const resourceOneIconSelector = ".Icon1-stat";
const doubleStatUpgradeButtonSelector = 'button:text("x2 per click")';

test("check default state", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.locator(resourceOneIconSelector)).toHaveText("0");
});

test("check stat increase by 1 on click when no upgrades are purchased", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");
  await page.locator(resourceOneIconSelector).click();
  await expect(page.locator(resourceOneIconSelector)).toHaveText("1");
  await page.locator(resourceOneIconSelector).click();
  await expect(page.locator(resourceOneIconSelector)).toHaveText("2");
  await page.locator(resourceOneIconSelector).click();
  await expect(page.locator(resourceOneIconSelector)).toHaveText("3");
});

test("check upgrade buttons", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.locator(resourceOneIconSelector).click();
  await page.locator(resourceOneIconSelector).click();
  await page.locator(resourceOneIconSelector).click();
  await page.locator(resourceOneIconSelector).click();
  await page.locator(resourceOneIconSelector).click();
  await page.locator(resourceOneIconSelector).click();
  await page.locator(resourceOneIconSelector).click();
  await page.locator(resourceOneIconSelector).click();
  await page.locator(resourceOneIconSelector).click();
  await page.locator(resourceOneIconSelector).click();

  await expect(
    page.getByRole("button", { name: "X2 PER CLICK" })
  ).toBeVisible();
});
