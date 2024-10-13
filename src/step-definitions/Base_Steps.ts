
import { Given } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
Given('I open the URL {string}', async (url: string) => {

    // Navigate to the desired page
    await pageFixture.page.goto(url); // replace with your actual URL

    // Check if the outer iframe is present
    const outerIframeExists = await pageFixture.page.locator('iframe[name="landingpage"]').count();

    if (outerIframeExists > 0) {
        // If the outer iframe exists, proceed to locate the inner iframe and button
        await pageFixture.page
            .frameLocator('iframe[name="landingpage"]') // locate the outer iframe
            .frameLocator('iframe') // locate the inner iframe within the outer iframe
            .getByRole('button', { name: 'Akzeptieren und weiter' }) // locate the button by role and name
            .click(); // click the button

        console.log('Button clicked successfully.');
    } else {
        console.log('Outer iframe not found.');
    }


});