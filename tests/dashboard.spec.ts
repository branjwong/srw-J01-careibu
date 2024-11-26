import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("/dashboard");
});

test("logout", async ({ page }) => {
    // Click the logout link.
    await page.getByTestId("user-head").click();
    await page.getByTestId("user-nav-Logout").click();

    // Expects URL to redirect to dashboard.
    await page.waitForURL("/");
});
