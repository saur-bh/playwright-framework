import { When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker"



When('I enter the {string} into the email field', async (email: string) => {

  await pageFixture.page.fill('#mailInput', email);


});

When('I enter the {string} into the password field', async (password: string) => {

  await pageFixture.page.fill('#pwInput', password);


});

When('I click on the Login button', async () => {
  await pageFixture.page.getByRole('button', { name: 'Login' }).click();
});






When('I enter a random email into the email field', async () => {
  const randomEmail = faker.internet.email();
  await pageFixture.page.fill('#mailInput', randomEmail);

});



When('I enter a random password into the password field', async () => {
  const randomPass = faker.internet.password({ length: 10 });
  await pageFixture.page.fill('#pwInput', randomPass);
});

Then('I should see the action menu', async () =>{
 // Wait for successful login (this should be replaced with actual login wait conditions)
 await pageFixture.page.waitForSelector('div[data-test="actions-menu__visible"]', { timeout: 5000 });

 // Assert that the menu is visible after login
 const isVisible = await pageFixture.page.isVisible('div[data-test="actions-menu__visible"]');
 expect(isVisible).toBeTruthy();
});