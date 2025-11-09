import { test, expect } from '@playwright/test';

test('Тестируем index.html', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/index.html');
  await expect(page).toHaveTitle("Home");
});

test('Тестируем about.html', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/about.html');
  await expect(page).toHaveTitle("About");
});

test('Тестируем contact.html', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/contact.html');
  await expect(page).toHaveTitle("Contact");
});