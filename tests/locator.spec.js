// @ts-check
const { test, expect } = require('@playwright/test');

test('Assertion Login Page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const inputUsername = page.locator('#user-name');
  await inputUsername.fill('standard_user');
  await expect(inputUsername).toHaveValue('standard_user');

  const inputPassword = page.locator('#password');
  await inputPassword.fill('secret_sauce');
  await expect(inputPassword).toHaveValue('secret_sauce');

  const buttonLogin = page.locator('#login-button');
  await buttonLogin.click();

  const pilihBarangBackpack = page.locator('#add-to-cart-sauce-labs-backpack');
  await pilihBarangBackpack.click();

  const pilihBarangBikeLight = page.locator('#add-to-cart-sauce-labs-bike-light');
  await pilihBarangBikeLight.click();

  const buttonIconCheckout = page.locator('#shopping_cart_container > a');
  await buttonIconCheckout.click();

  const buttonCheckout = page.locator('#checkout');
  await buttonCheckout.click();

  const inputFirstName = page.locator('#first-name');
  await inputFirstName.fill('Putra');
  await expect(inputFirstName).toHaveValue('Putra');

  const inputLastName = page.locator('#last-name');
  await inputLastName.fill('Pratama');
  await expect(inputLastName).toHaveValue('Pratama');

  const inputPostalCode = page.locator('#postal-code');
  await inputPostalCode.fill('13530');
  await expect(inputPostalCode).toHaveValue('13530')

  const buttonContinue = page.locator('#continue');
  await buttonContinue.click();

});