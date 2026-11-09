const { test } = require('@playwright/test');
const { createUser } = require('../TestCases/CreateUser.spec');

test('homepage responds successfully', async ({ page }) => {
  await createUser(page);
});
