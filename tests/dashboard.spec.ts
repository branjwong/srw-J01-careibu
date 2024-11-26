import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("/dashboard");
});

test("has title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Dashboard/);
});

test("logout", async ({ page }) => {
    // Click the logout link.
    await page.getByTestId("user-head").click();
    await page.getByTestId("user-nav-Logout").click();

    // Expects URL to redirect to dashboard.
    await page.waitForURL("/");
});
