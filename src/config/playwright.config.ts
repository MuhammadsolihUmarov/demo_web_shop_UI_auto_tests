import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './src/tests',
    timeout: 30000,
    retries: 2,
    use: {
        headless: true,
        baseURL: 'https://example.com',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
});

