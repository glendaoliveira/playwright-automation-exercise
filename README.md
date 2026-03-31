# Playwright Automation Exercise

End-to-end test automation project built with Playwright, covering real user flows on [Automation Exercise](https://automationexercise.com/) with a scalable structure, reusable fixtures, page objects, and CI-ready execution.

## Overview

This repository contains UI end-to-end automated tests for the Automation Exercise demo application.  
The goal of this project is to demonstrate practical QA automation skills using Playwright through realistic user journeys, maintainable test architecture, and clear test organization.

The project focuses on:

- real-world end-to-end scenarios
- reusable and readable test design
- stable locator strategy
- positive and negative validations
- scalable structure for future test expansion
- execution ready for local and CI environments

## Tech Stack

- **Playwright**
- **TypeScript**
- **Node.js**
- **GitHub Actions** for CI
- **HTML Reports** and **Trace Viewer** for debugging

## Covered Scenarios

This project includes automated coverage for flows such as:

- user registration
- login with valid credentials
- login with invalid credentials
- logout
- product search
- add products to cart
- remove products from cart
- cart validation
- contact form submission
- navigation and UI validation

## Project Structure

```bash
.
├── tests/
│   ├── auth/
│   ├── cart/
│   ├── products/
│   └── contact/
├── pages/
│   ├── login.page.ts
│   ├── home.page.ts
│   ├── products.page.ts
│   ├── cart.page.ts
│   └── contact.page.ts
├── fixtures/
│   └── test.fixture.ts
├── utils/
│   └── test-data.ts
├── playwright.config.ts
├── package.json
└── README.md

Test Design Principles

This project follows good automation practices, including:

Page Object Model (POM) for better maintainability
Reusable fixtures to reduce duplicated setup
Accessible and resilient locators whenever possible
Clear assertions focused on business behavior
Independent tests that can run in isolation
Readable naming conventions for suites and scenarios
Installation

Clone the repository:
git clone https://github.com/glendaoliveira/playwright-automation-exercise.git
cd playwright-automation-exercise

Install dependencies:
npm install

Install Playwright browsers:
npx playwright install

Running the Tests

Run all tests:
npx playwright test

Run tests in headed mode:
npx playwright test --headed

Run tests with Playwright UI mode:
npx playwright test --ui

Run a specific test file:
npx playwright test tests/auth/login.spec.ts

Run tests in a specific browser:
npx playwright test --project=chromium

Reports

Open the HTML report after execution:
npx playwright show-report

For debugging failed tests, Playwright traces can be used to inspect each step, locator interaction, and assertion in detail.

CI Integration

This project is prepared for continuous integration using GitHub Actions, allowing automated test execution on push and pull request events.

CI helps ensure:

fast feedback on changes
stable regression coverage
visibility of failures before merge
better collaboration in team environments
Why This Project Matters

This repository was created to showcase practical QA automation skills with Playwright, including:

building structured and maintainable E2E tests
validating critical user flows
applying good test architecture
preparing automation for real team workflows
improving confidence in web application quality
Future Improvements

Planned improvements for this project include:

API validation to support UI flows
test data generation utilities
visual testing coverage
cross-browser execution expansion
more negative and edge-case scenarios
better environment configuration with .env
Author

Glenda Oliveira
QA Analyst focused on manual and automated testing for web and mobile applications, with experience in end-to-end testing, exploratory testing, API validation, and quality processes in international teams.

Notes

This project is intended for learning, portfolio presentation, and demonstration of Playwright automation practices on a public demo application.