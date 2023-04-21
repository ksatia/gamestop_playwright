// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.getByRole('link', { name: 'Guest checkout' }).click();
//   await page.getByRole('textbox', { name: 'First Name' }).click();
//   await page.getByRole('textbox', { name: 'First Name' }).fill('karan');
//   await page.getByRole('textbox', { name: 'Last Name' }).click();
//   await page.getByRole('textbox', { name: 'Last Name' }).fill('test');
//   await page.getByRole('textbox', { name: 'Street Address' }).click();
//   await page.getByRole('textbox', { name: 'Street Address' }).click();
//   await page.getByRole('textbox', { name: 'Street Address' }).fill('300 east 93rd street');
//   await page.getByText('East 93rd Street').first().click();
//   await page.getByRole('textbox', { name: 'Email' }).fill('test@test.com');
//   await page.getByRole('textbox', { name: 'Phone Number' }).click();
//   await page.getByRole('textbox', { name: 'Phone Number' }).fill('917 406 2088');
//   await page.getByRole('textbox', { name: 'Phone Number' }).click();
//   await page.getByRole('textbox', { name: 'Phone Number' }).click();
//   await page.getByRole('textbox', { name: 'Phone Number' }).press('Meta+a');
//   await page.getByRole('textbox', { name: 'Phone Number' }).fill('917 212 5994');
//   await page.getByRole('button', { name: 'Save & Continue' }).click();
//   await page.getByRole('button', { name: 'Use Proposed Address' }).click();
// });