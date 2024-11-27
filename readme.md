
# Automation- Playwright Framework

## Overview

Welcome to the **Automation-Playwright Framework**! This is a flexible and scalable end-to-end testing framework built with **Playwright** and **Cucumber**, leveraging **TypeScript**. It’s designed for easy setup, extendability, and effective testing for  UI workflows.

### Features
- **Cross-browser testing** (Chromium, Firefox, WebKit)
- **BDD with Cucumber**: Write tests using Gherkin syntax
- **TypeScript**: Strong typing for cleaner code
- **Faker**: Randomized test data generation
- **Screenshots on Failure**: Automatically captures screenshots when tests fail
- **Customizable Setup**: `.env` file for environment-specific configuration

## Step 2: Install Dependencies

Once you've cloned the repository, navigate to the project directory and run:
```
npm install
npx playwright install
```
This will install all necessary dependencies and the Playwright browsers required to run the tests.

## Step 3: Set up the .env File

To configure your environment, create a .env file in the root directory of the project. Add the following line to set the base URL:

BASE_URL=https://www.gmx.net/

This allows the test framework to use the correct environment-specific URL during execution.

## Step 4: Running Tests

To run all the tests, execute the following command in your terminal:

```
npm run test smoke | regression | empty |logout | login
```
For running a specific feature file, use:
```
npm run dev
```
This command runs the feature file specified in the package.json script, like GmxLogin.feature.

Writing New Tests

### 1. Create a Feature File

Add your .feature file under src/features/. Here’s an example (GmxLogout.feature):
```
Feature: GMX Logout
  Scenario: Successful logout
    Given I am logged in
    When I click the logout button
    Then I should see the logout confirmation message
```
### 2. Create Step Definitions

Add your step definitions in the src/step-definitions/ directory. Example (GmxLogoutPage_Steps.ts):
```
import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";

Given('I am logged in', async () => {
  await pageFixture.page.goto(process.env.BASE_URL);
});

When('I click the logout button', async () => {
  await pageFixture.page.click('button.logout');
});

Then('I should see the logout confirmation message', async () => {
  const message = await pageFixture.page.locator('div[data-text] strong').innerText();
  expect(message).toBe('Sie haben sich erfolgreich ausgeloggt.');
});
```
### 3. Run Your Test

After writing your new test, run it with:
```
npm run test
```
Extending the Framework

Adding Common Steps

You can place common reusable steps in Base_Steps.ts. This allows you to avoid duplication in test step definitions and makes your test cases easier to maintain.

Adding Custom Tags

You can add custom tags in index.ts for different types of tests, like @smoke, @regression, or @critical. These tags can be used to filter which tests to run, making it easier to organize your tests.

Using Faker for Dynamic Data

To make your tests more dynamic and less dependent on static data, you can use Faker to generate random data, like email addresses or usernames. Example:
```
import { faker } from '@faker-js/faker';

const fakeEmail = faker.internet.email();
console.log(fakeEmail);  // Outputs a randomly generated email
```
Conclusion

This framework is designed to simplify and streamline automated testing, making it easy to add new tests, generate random data, and manage different environments. By utilizing Playwright’s powerful features, along with Cucumber’s BDD approach, you can create robust test suites that are easy to manage and scale.

Feel free to contribute, add more test cases, and make use of the framework’s extensibility to suit your project’s needs.

Happy Testing! 🚀

