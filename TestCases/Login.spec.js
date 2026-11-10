const { expect } = require('@playwright/test');

async function loginUser(page, email, password) {
  const response = await page.goto('https://watch.shiververtical.com/');
  expect(response).not.toBeNull();
  expect(response.ok()).toBeTruthy();
  await expect(page).toHaveTitle(/.+/);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: /password/i }).fill(password);
  await page.click('text=Sign‑In');
}

module.exports = { loginUser };
