import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("/");
});

test("has title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Careibu/);
});

test("clicking login link goes to login page", async ({ page }) => {
    // Click the get started link.
    await page.getByRole("link", { name: "Log in" }).click();

    // Expects URL to redirect to login.
    await expect(page).toHaveURL(/.*login/);
});
