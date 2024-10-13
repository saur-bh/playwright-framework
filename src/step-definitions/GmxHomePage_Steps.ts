import { Given, When, Then } from "@cucumber/cucumber";
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


Then('I should see an error message', async () => {
  // Wait for the error message to appear
  const errorMessageLocator = pageFixture.page.locator('div[data-text] strong');
  await errorMessageLocator.waitFor({ timeout: 5000 });

  // Get the text of the error message
  expect(pageFixture.page.url()).toContain('?status=login-failed');
  const errorMessageText = await errorMessageLocator.innerText();

  // Regular expression to match either the German or English error message
  const expectedMessages = /Login leider nicht erfolgreich\.|Unfortunately, login was not successful\./;

  // Assert that the error message matches the expected regular expression
  expect(errorMessageText).toMatch(expectedMessages);

  ;


  console.log('Error message is displayed correctly.');

});


When('I enter a random email into the email field', async () => {
  const randomEmail = faker.internet.email();
  await pageFixture.page.fill('#mailInput', randomEmail);

});



When('I enter a random password into the password field', async () => {
  const randomPass = faker.internet.password({ length: 10 });
  await pageFixture.page.fill('#pwInput', randomPass);
});

