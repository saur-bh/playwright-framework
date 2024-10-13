# Automation-GMX Playwright Framework

## Overview

Welcome to the **Automation-GMX Playwright Framework**! This is a flexible and scalable end-to-end testing framework built with **Playwright** and **Cucumber**, leveraging **TypeScript**. It’s designed for easy setup, extendability, and effective testing for both UI and API workflows. 

### Features
- **Cross-browser testing** (Chromium, Firefox, WebKit)
- **BDD with Cucumber**: Write tests using Gherkin syntax
- **TypeScript**: Strong typing for cleaner code
- **Faker**: Randomized test data generation
- **Screenshots on Failure**: Automatically captures screenshots when tests fail
- **Customizable Setup**: `.env` file for environment-specific configuration

---

## How to Set Up

### Prerequisites

For both Windows and macOS, you need the following:
- **Node.js** (14+): [Download here](https://nodejs.org/).
- **VS Code** (with extensions: Cucumber (Gherkin) and Material Icon Theme)
- **Git**: [Download here](https://git-scm.com/).

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/saur-bh/playwright-framework.git
   cd playwright-framework
## Step 2: Install Dependencies

Once you've cloned the repository, navigate to the project directory and run:

```bash
npm install
npx playwright install

This will install all necessary dependencies and the Playwright browsers required to run the tests.
