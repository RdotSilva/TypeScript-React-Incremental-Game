import { test, expect } from "@playwright/test";

test.describe("Main application", () => {
  test("has correct title", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await expect(page).toHaveTitle(/Incremental Game/);

    // Check default values when new game is started
    await expect(page.locator(".total-stats")).toHaveText("0");
    await expect(page.locator(".current-bonus")).toHaveText(
      "Current Bonus: None"
    );
    await expect(page.locator(".Icon1-stat")).toHaveText("0");
  });

  test("has correct default values when starting a new game", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");
    await expect(page).toHaveTitle(/Incremental Game/);

    // Check default values when new game is started
    await expect(page.locator(".total-stats")).toHaveText("0");
    await expect(page.locator(".current-bonus")).toHaveText(
      "Current Bonus: None"
    );
    await expect(page.locator(".Icon1-stat")).toHaveText("0");
  });
});
