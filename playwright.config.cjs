const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests',
  forbidOnly: !!process.env.CI,
  use: { baseURL: 'http://127.0.0.1:48181', trace: 'retain-on-failure' },
  webServer: { command: 'python3 -m http.server 48181 --bind 127.0.0.1 --directory public', url: 'http://127.0.0.1:48181', reuseExistingServer: false },
});
