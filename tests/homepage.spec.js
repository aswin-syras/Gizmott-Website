const { test, expect } = require('@playwright/test');

test('homepage responds successfully', async ({ page }) => {
  const response = await page.goto('https://christianmoviesplus.gizmott.com/');
  expect(response).not.toBeNull();
  expect(response.ok()).toBeTruthy();
  await expect(page).toHaveTitle(/.+/);
  page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByText('Register').click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test123456@gmail.com');
  await page.getByRole('textbox', { name: 'Create Password' }).click();
  await page.getByRole('textbox', { name: 'Create Password' }).fill('123456');
  await page.getByRole('button', { name: 'Continue' }).click();
});