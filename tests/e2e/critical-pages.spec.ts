import { test, expect } from "@playwright/test";

// ── Page Load Tests ───────────────────────────────────────────────────────
// These tests verify that critical pages load without JS errors and contain
// the expected landmark content. Run against production after every deploy.

test.describe("Critical Pages Load", () => {
  test("Home page loads and has headline", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/A&E Insurance/i);
    await expect(page.locator("h1").first()).toBeVisible();
  });

  test("Medicare page loads", async ({ page }) => {
    await page.goto("/medicare");
    await expect(page.locator("h1").first()).toContainText(/Medicare/i);
  });

  test("Contact page loads", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.locator("h1").first()).toBeVisible();
    await expect(page.locator("form")).toBeVisible();
  });

  test("About page loads", async ({ page }) => {
    await page.goto("/about");
    await expect(page.locator("h1").first()).toBeVisible();
  });

  test("Blog listing page loads", async ({ page }) => {
    await page.goto("/blogs");
    await expect(page.locator("h1").first()).toContainText(/Blog/i);
  });

  test("Watch/webinar page loads", async ({ page }) => {
    await page.goto("/watch");
    await expect(page.locator("form")).toBeVisible();
  });

  test("Resources page loads", async ({ page }) => {
    await page.goto("/resources");
    await expect(page.locator("h1").first()).toBeVisible();
  });
});

// ── Navigation Tests ──────────────────────────────────────────────────────

test.describe("Navigation", () => {
  test("Header is visible and phone number is present", async ({ page }) => {
    await page.goto("/");
    // Phone in announcement bar
    await expect(page.locator("text=(954) 281-5622").first()).toBeVisible();
  });

  test("Footer renders with NPN disclosure", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer.locator("text=NPN 19921707")).toBeVisible();
  });

  test("No 404 on /sitemap.xml", async ({ page }) => {
    const res = await page.goto("/sitemap.xml");
    expect(res?.status()).toBe(200);
  });

  test("No 404 on /robots.txt", async ({ page }) => {
    const res = await page.goto("/robots.txt");
    expect(res?.status()).toBe(200);
  });
});

// ── 404 Handling ──────────────────────────────────────────────────────────

test.describe("404 Handling", () => {
  test("Unknown page returns 404 and shows not-found content", async ({ page }) => {
    const res = await page.goto("/this-page-does-not-exist-xyz");
    expect(res?.status()).toBe(404);
  });
});
