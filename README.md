# wordpress-tester
Application for testing in Wordpress environments.

## Quick start
1. You will need to place 1 file:
- **cypress.env.json**: to set variables usable in tests (e.g. for wordpress users and passwords).

2. Copy the file `cypress/e2e/www.example.com.cy.js.template` into the same directory without the `.template` and customize it for the domain you want to test.

3. Now you can install the dependencies and start the project.
~~~
npm install
npm run test:e2e
~~~
