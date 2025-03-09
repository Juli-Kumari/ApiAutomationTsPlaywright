import { expect, test } from '@playwright/test'

test('Test 1', async ({ page }) => {
    await page.goto("https://www.google.co.in/")
    await expect(page).toHaveTitle('Google')
})

test('Test 2', async ({ page }) => {
    await page.goto("https://www.google.co.in/")
    await expect(page).toHaveTitle('Google')
})

test('Test 3', async ({ page }) => {
    await page.goto("https://www.google.co.in/")
    await expect(page).toHaveTitle('Google')
})

test('Test 4', async ({ page }) => {
    await page.goto("https://www.google.co.in/")
    await expect(page).toHaveTitle('Google')
})