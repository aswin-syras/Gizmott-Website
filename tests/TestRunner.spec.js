const { test } = require('@playwright/test');
const { createUser } = require('../TestCases/CreateUser.spec');
const { loginUser } = require('../TestCases/Login.spec');

test.describe.serial('User account workflow', () => {
  let createdEmail;

  test('create a user', async ({ page }) => {
    createdEmail = await createUser(page);
  });

  test('sign in with the created user', async ({ page }) => {
    await loginUser(page, createdEmail, '123456');
  });
});
