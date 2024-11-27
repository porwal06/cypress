# Install & Run Cypress on your local system
## New Cypress installation
* Install node js
* Create blank folder like cypress and run command "npm -i init"
* Install cypress: "npm install cypress --save-dev"
* Start cypress: "npx cypress open"
* Cypress UI will open, choose blank enviorment & create files
* For capturing video use "npx cypress run" & set `video: true` in cypress.config.js
  - It will run all test cases. Run only specific file run "npx cypress run --spec path/to/file.spec.js" OR "npx cypress run --spec 'path/to/*.spec.js'" 

## Run this project
* If node & npm is already installed then just run `npm install` and install add dependency.
## Example
* Check example code cypress/cypress/e2e/projectx