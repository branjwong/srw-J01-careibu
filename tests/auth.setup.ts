import { test, expect } from "@playwright/test";
import path from "path";

const authFile = path.join(__dirname, "../playwright/.auth/user.json");

test("has title", async ({ page }) => {
    await page.goto("/auth/login");
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Login/);
});

[
    "/dashboard",
    "/dashboard/onboarding",
    "/dashboard/onboarding/background",
    "/dashboard/onboarding/personal",
].forEach((pageUrl) => {
    test(`redirects ${pageUrl} if not authenticated`, async ({ page }) => {
        await page.goto(pageUrl);

        // Expects URL to redirect to dashboard.
        await expect(page).toHaveURL("/auth/login");
    });
});

test("login failure", async ({ page }) => {
    await page.goto("/auth/login");
    await page.getByLabel("email").fill("branjwong@hey.com");
    await page.getByLabel("password").fill("idk");

    // Click the sign in link.
    // await page.locator('button[type=submit]').click();
    await page.getByRole("button", { name: "Log In" }).click();

    // Expects URL to stay.
    await expect(page).toHaveURL(/.*login/);
});

test("login success", async ({ page }) => {
    // Perform authentication steps. Replace these actions with your own.
    await page.goto("/auth/login");
    await page.getByLabel("email").fill("branjwong@hey.com");
    await page.getByLabel("password").fill("1234test");

    // Click the sign in link.
    // await page.locator('button[type=submit]').click();
    await page.getByRole("button", { name: "Log In" }).click();

    // Wait until the page receives the cookies.
    //
    // Sometimes login flow sets cookies in the process of several redirects.
    // Wait for the final URL to ensure that the cookies are actually set.
    await page.waitForURL("./dashboard");

    // End of authentication steps.
    await page.context().storageState({ path: authFile });
});
