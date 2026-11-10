const { expect } = require('@playwright/test');

async function createUser(page) {
  const response = await page.goto('https://watch.shiververtical.com/');
  expect(response).not.toBeNull();
  expect(response.ok()).toBeTruthy();
  await expect(page).toHaveTitle(/.+/);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByText('Register').click();
  const emailInput = page.getByRole('textbox', { name: 'Email' });
  const passwordInput = page.getByRole('textbox', { name: 'Create Password' });
  let emailId = 1;
  await emailInput.fill(`test${emailId}@gmail.com`);
  await passwordInput.click();
  if (await page.getByText('You already have an account').isVisible()) {
    emailId += 1;
    await emailInput.fill(`test${emailId}@gmail.com`);
  }
  await passwordInput.fill('123456');
  await page.getByRole('button', { name: 'Continue' }).click();
  const email = `test${emailId}@gmail.com`;
  console.log(`Created account with email: ${email}`);
  return email;
}

module.exports = { createUser };
