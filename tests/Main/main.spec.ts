import { test, expect } from "@playwright/test";

const totalStatsDisplaySelector = ".total-stats";
const currentBonusDisplaySelector = ".current-bonus";
const resourceOneIconSelector = ".Icon1-stat";

test.describe("Main application", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("has correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Incremental Game/);

    // Check default values when new game is started
    await expect(page.locator(totalStatsDisplaySelector)).toHaveText("0");
    await expect(page.locator(currentBonusDisplaySelector)).toHaveText(
      "Current Bonus: None"
    );
    await expect(page.locator(resourceOneIconSelector)).toHaveText("0");
  });

  test("has correct default values when starting a new game", async ({
    page,
  }) => {
    await expect(page).toHaveTitle(/Incremental Game/);

    // Check default values when new game is started
    await expect(page.locator(totalStatsDisplaySelector)).toHaveText("0");
    await expect(page.locator(currentBonusDisplaySelector)).toHaveText(
      "Current Bonus: None"
    );
    await expect(page.locator(resourceOneIconSelector)).toHaveText("0");
  });
});
