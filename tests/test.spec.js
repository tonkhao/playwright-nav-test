import { test, expect } from "@playwright/test";

test("Тестируем index.html", async ({ page }) => {
  //тестируем ссылку Home
  await page.goto(`http://127.0.0.1:3000/index.html`);
  await expect(page).toHaveTitle("Home");

  const homeLocator = await page.getByRole("link", { name: "Home" });
  const homeHref = await homeLocator.getAttribute("href");
  expect(homeHref).toBe("index.html");
  await homeLocator.click();
  await expect(page).toHaveTitle("Home");

  //тестируем ссылку About
  await page.goto(`http://127.0.0.1:3000/index.html`);
  await expect(page).toHaveTitle("Home");

  const aboutLocator = await page.getByRole("link", { name: "About" });
  const aboutHref = await aboutLocator.getAttribute("href");
  expect(aboutHref).toBe("about.html");
  await aboutLocator.click();
  await expect(page).toHaveTitle("About");

  //тестируем ссылку Contact
  await page.goto(`http://127.0.0.1:3000/index.html`);
  await expect(page).toHaveTitle("Home");

  const contactLocator = await page.getByRole("link", { name: "Contact" });
  const contactHref = await contactLocator.getAttribute("href");
  expect(contactHref).toBe("contact.html");
  await contactLocator.click();
  await expect(page).toHaveTitle("Contact");
});

test("Тестируем about.html", async ({ page }) => {
  //тестируем ссылку Home
  await page.goto(`http://127.0.0.1:3000/about.html`);
  await expect(page).toHaveTitle("About");

  const homeLocator = await page.getByRole("link", { name: "Home" });
  const homeHref = await homeLocator.getAttribute("href");
  expect(homeHref).toBe("index.html");
  await homeLocator.click();
  await expect(page).toHaveTitle("Home");

  //тестируем ссылку About
  await page.goto(`http://127.0.0.1:3000/about.html`);
  await expect(page).toHaveTitle("About");

  const aboutLocator = await page.getByRole("link", { name: "About" });
  const aboutHref = await aboutLocator.getAttribute("href");
  expect(aboutHref).toBe("about.html");
  await aboutLocator.click();
  await expect(page).toHaveTitle("About");

  //тестируем ссылку Contact
  await page.goto(`http://127.0.0.1:3000/about.html`);
  await expect(page).toHaveTitle("About");

  const contactLocator = await page.getByRole("link", { name: "Contact" });
  const contactHref = await contactLocator.getAttribute("href");
  expect(contactHref).toBe("contact.html");
  await contactLocator.click();
  await expect(page).toHaveTitle("Contact");
});

test("Тестируем contact.html", async ({ page }) => {
  //тестируем ссылку Home
  await page.goto(`http://127.0.0.1:3000/contact.html`);
  await expect(page).toHaveTitle("Contact");

  const homeLocator = await page.getByRole("link", { name: "Home" });
  const homeHref = await homeLocator.getAttribute("href");
  expect(homeHref).toBe("index.html");
  await homeLocator.click();
  await expect(page).toHaveTitle("Home");

  //тестируем ссылку About
  await page.goto(`http://127.0.0.1:3000/contact.html`);
  await expect(page).toHaveTitle("Contact");

  const aboutLocator = await page.getByRole("link", { name: "About" });
  const aboutHref = await aboutLocator.getAttribute("href");
  expect(aboutHref).toBe("about.html");
  await aboutLocator.click();
  await expect(page).toHaveTitle("About");

  //тестируем ссылку Contact
  await page.goto(`http://127.0.0.1:3000/contact.html`);
  await expect(page).toHaveTitle("Contact");

  const contactLocator = await page.getByRole("link", { name: "Contact" });
  const contactHref = await contactLocator.getAttribute("href");
  expect(contactHref).toBe("contact.html");
  await contactLocator.click();
  await expect(page).toHaveTitle("Contact");
});