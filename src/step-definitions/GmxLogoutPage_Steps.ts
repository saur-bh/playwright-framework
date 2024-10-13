import { Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import { expect } from "@playwright/test";


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

Then('I click on Zurück zum Login button', async () => {
    // Click the "Zurück zum Login" button
    await pageFixture.page.click('a[data-component="button"][href="https://www.gmx.net/"]');
});

Then('I should see the login page', async () => {
    // Wait for the navigation to the login page
    await pageFixture.page.waitForURL('https://www.gmx.net/');

    // Validate if the current URL is the login page
    const currentURL = pageFixture.page.url();
    expect(currentURL).toBe('https://www.gmx.net/');

    console.log('Successfully navigated to the GMX login page.');
});


Then('I should see a message', async () => {
    // Wait for the specific message to appear and narrow down to the first match
    const successMessageLocator = pageFixture.page.locator('div[data-text] strong').first();
    await successMessageLocator.waitFor({ state: 'visible', timeout: 5000 });

    // Validate that the success message is correct
    const successMessageText = await successMessageLocator.innerText();
    expect(successMessageText).toBe('Sie haben sich erfolgreich ausgeloggt.');


});