import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";





Given('I open the URL {string}', async (url) => {

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

  When('I enter the email into the email field', async ()=> {

    await pageFixture.page.fill('#mailInput', 'example@example.com');
  
   
  });

  When('I enter the password into the field', async () =>{

    await pageFixture.page.fill('#pwInput', 'password');
    pageFixture.page.pause();
  
  });

  When('I click on the Login button', async () => {
     await pageFixture.page.getByRole('button', { name: 'Login' }).click();
  });
/*

  Then('I should see an error message {string}', async (string) =>{
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('the URL should be {string}', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('I should see a {string} button', async (string) =>{
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  */