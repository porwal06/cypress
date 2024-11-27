// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// Ignore some console error
Cypress.on('uncaught:exception', (err, runnable) => {
    // we expect a 3rd party library error with message 'list not defined'
    // and don't want to fail the test so we return false
    if (err.message.includes('Minified React error #200')) {
      return false
    }
    // we still want to ensure there are no other unexpected
    // errors, so we let them fail the test
  })
  // Added to print console logs
  const options_log_collector = {
    // processLog: (args) => {
    //   const [type, message, severity] = args;    
    //   let now = new Date().toISOString();
    //   let processedLogObj = {
    //       type: type,
    //       message: `At time ${now}`,
    //       severity: severity
    //   };
    //   let resMessage = `Processed Log ==> \n${JSON.stringify(processedLogObj)}\Original Log ==> \n${message}`;
    //   return [type, resMessage, severity];
    // },
  //collectTypes: ["cons:log", "cons:info", "cons:warn", "cons:error"],
};
require('cypress-terminal-report/src/installLogsCollector')(options_log_collector);
// Alternatively you can use CommonJS syntax:
// require('./commands')