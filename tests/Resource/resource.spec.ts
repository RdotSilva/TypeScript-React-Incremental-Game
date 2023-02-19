import { test, expect } from "@playwright/test";

const resourceOneIconSelector = ".Icon1-stat";
const doubleStatUpgradeButtonSelector = 'button:text("x2 per click")';

test.describe("Resource", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });
  test("check default state", async ({ page }) => {
    await expect(page.locator(resourceOneIconSelector)).toHaveText("0");
  });

  test("check stat increase by 1 on click when no upgrades are purchased", async ({
    page,
  }) => {
    await page.locator(resourceOneIconSelector).click();
    await expect(page.locator(resourceOneIconSelector)).toHaveText("1");
    await page.locator(resourceOneIconSelector).click();
    await expect(page.locator(resourceOneIconSelector)).toHaveText("2");
    await page.locator(resourceOneIconSelector).click();
    await expect(page.locator(resourceOneIconSelector)).toHaveText("3");
  });

  test("check upgrade buttons", async ({ page }) => {
    await page.getByRole("img", { name: "Icon1" }).click({
      clickCount: 10,
    });

    await expect(page.locator(resourceOneIconSelector)).toHaveText("10");

    await expect(
      page.getByRole("button", { name: "X2 PER CLICK" })
    ).toHaveCount(1);

    await page.getByRole("img", { name: "Icon1" }).click({
      clickCount: 90,
    });

    await expect(page.locator(resourceOneIconSelector)).toHaveText("100");

    await expect(
      page.getByRole("button", { name: "X2 PER CLICK" })
    ).toHaveCount(2);

    // TODO: Refactor this using clickCount (tried this before and it was buggy)
    await page.getByRole("img", { name: "Icon1" }).click();
    await page.getByRole("img", { name: "Icon1" }).click();
    await page.getByRole("img", { name: "Icon1" }).click();
    await page.getByRole("img", { name: "Icon1" }).click();
    await page.getByRole("img", { name: "Icon1" }).click();
    await page.getByRole("img", { name: "Icon1" }).click();
    await page.getByRole("img", { name: "Icon1" }).click();
    await page.getByRole("img", { name: "Icon1" }).click();
    await page.getByRole("img", { name: "Icon1" }).click();
    await page.getByRole("img", { name: "Icon1" }).click();

    await expect(page.locator(resourceOneIconSelector)).toHaveText("110");

    await expect(page.getByRole("button", { name: "AUTO CLICK" })).toHaveCount(
      1
    );
  });

  test("check upgrade buttons increase stat per click", async ({ page }) => {
    // Click resource 10 times until first upgrade button is shown
    await page.getByRole("img", { name: "Icon1" }).click({
      clickCount: 10,
    });

    await expect(page.locator(resourceOneIconSelector)).toHaveText("10");

    // Activate upgrade
    await page.getByRole("button", { name: "X2 PER CLICK" }).click();

    await page.getByRole("img", { name: "Icon1" }).click();

    // Check that stat per click is increased
    await expect(page.locator(resourceOneIconSelector)).toHaveText("12");

    await page.getByRole("img", { name: "Icon1" }).click({
      clickCount: 44,
    });

    await expect(page.locator(resourceOneIconSelector)).toHaveText("100");

    // Activate upgrade
    await page.getByRole("button", { name: "X2 PER CLICK" }).click();

    await page.getByRole("img", { name: "Icon1" }).click();

    // Check that stat per click is increased again
    await expect(page.locator(resourceOneIconSelector)).toHaveText("104");
  });
});
