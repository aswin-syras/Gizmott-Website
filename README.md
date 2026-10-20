# Gizmott Website Playwright Tests

## Setup

Install the dependencies and the Chromium browser:

```sh
npm install
npx playwright install chromium
```

Start the website locally, then run the smoke test:

```sh
npm run test:e2e
```

By default, tests use `http://127.0.0.1:3000`. Set `BASE_URL` to test another address:

```powershell
$env:BASE_URL = 'https://example.com'
npm run test:e2e
```

Use `npm run test:e2e:headed` to watch the browser, `npm run test:e2e:ui` for Playwright UI mode, or `npm run test:e2e:report` to open the latest HTML report.

Add specs under `tests/`. Playwright's `page` fixture, assertions, and browser settings are available from `@playwright/test` and `playwright.config.js`.