import "./commands";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

Cypress.on('fail', (err, runnable) => {
  cy.screenshot('screenshot');
  throw err;
});