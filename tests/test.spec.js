import { test, expect } from "@playwright/test";

const pages = [
  {
    pageName: "Home",
    pageUrl: "index.html",
  },
  {
    pageName: "About",
    pageUrl: "about.html",
  },
  {
    pageName: "Contact",
    pageUrl: "contact.html",
  },
];

for (const [index, currentPage] in pages.entries()) {
  test(`Тестируем ${currentPage.pageUrl} ${index}`, async ({ page }) => {
    await page.goto(`http://127.0.0.1:3000/${pageName}.html`);
    await expect(page).toHaveTitle(currentPage.pageName);

    const homeLocator = await page.getByRole("link", { name: currentPage.pageName });
    const homeHref = await homeLocator.getAttribute("href");
    expect(homeHref).toBe(currentPage.pageUrl);
    await homeLocator.click();
    await expect(page).toHaveTitle(currentPage.pageName);

    await page.goto(`http://127.0.0.1:3000/${currentPage.pageUrl}`);
    await expect(page).toHaveTitle(currentPage.pageName);

    const aboutLocator = await page.getByRole("link", { name: currentPage.pageName });
    const aboutHref = await aboutLocator.getAttribute("href");
    expect(aboutHref).toBe(currentPage.pageUrl);
    await aboutLocator.click();
    await expect(page).toHaveTitle(currentPage.pageName);

    await page.goto(`http://127.0.0.1:3000/${currentPage.pageUrl}`);
    await expect(page).toHaveTitle(currentPage.pageName);

    const contactLocator = await page.getByRole("link", { name: currentPage.pageName });
    const contactHref = await contactLocator.getAttribute("href");
    expect(contactHref).toBe(currentPage.pageUrl);
    await contactLocator.click();
    await expect(page).toHaveTitle(currentPage.pageName);
  });
}
