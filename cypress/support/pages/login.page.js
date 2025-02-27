const usernameField = "#loginPanel > form > div:nth-child(2) > input";
const passwordField = "#loginPanel > form > div:nth-child(4) > input";

const btnLogin = "#loginPanel > form > div:nth-child(5) > input";
const btnLogout = "#leftPanel > ul > li:nth-child(8) > a";

const msgInvalidCredentials = "#rightPanel > p";


Cypress.Commands.add("fillLoginUser", (username, password) => {
  cy.fillField(usernameField, username);
  cy.fillField(passwordField, password);
});

Cypress.Commands.add("fillLoginUserEmptyUsername", (password) => {
  cy.fillField(passwordField, password);
});

Cypress.Commands.add("fillLoginUserEmptyPassword", (username) => {
  cy.fillField(usernameField, username);
});

Cypress.Commands.add("clickLogin", () => {
  cy.clickElement(btnLogin);
});
Cypress.Commands.add("clickLogout", () => {
  cy.clickElement(btnLogout);
});

Cypress.Commands.add("validateLogin", (text) => {
  cy.validateText(btnLogout, text);
});

Cypress.Commands.add("validateErrorMessage", (text) => {
  cy.validateText(msgInvalidCredentials, text);
});


