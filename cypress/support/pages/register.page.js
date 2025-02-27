const msgFirstNameError =
  "form > table > tbody > tr:nth-child(1) > td:nth-child(3) > span";
const msgLastNameError =
  "form > table > tbody > tr:nth-child(2) > td:nth-child(3) > span";
const msgAddressError =
  "form > table > tbody > tr:nth-child(3) > td:nth-child(3) > span";
const msgCityError =
  "form > table > tbody > tr:nth-child(4) > td:nth-child(3) > span";
const msgStateError =
  "form > table > tbody > tr:nth-child(5) > td:nth-child(3) > span";
const msgZipCodeError =
  "form > table > tbody > tr:nth-child(6) > td:nth-child(3) > span";
const msgPhoneError =
  "form > table > tbody > tr:nth-child(7) > td:nth-child(3) > span";
const msgSsnError =
  "form > table > tbody > tr:nth-child(8) > td:nth-child(3) > span";
const msgUsernameError =
  "form > table > tbody > tr:nth-child(10) > td:nth-child(3) > span";
const msgPasswordError =
  "form > table > tbody > tr:nth-child(11) > td:nth-child(3) > span";
const msgConfirmPasswordError =
  "form > table > tbody > tr:nth-child(12) > td:nth-child(3) > span";

const firstNameField = "input[name='customer.firstName']";
const lastNameField = "input[name='customer.lastName']";
const addressField = "input[name='customer.address.street']";
const cityField = "input[name='customer.address.city']";
const stateField = "input[name='customer.address.state']";
const zipCodeField = "input[name='customer.address.zipCode']";
const phoneField = "input[name='customer.phoneNumber']";
const ssnField = "input[name='customer.ssn']";
const usernameField = "input[name='customer.username']";
const passwordField = "input[name='customer.password']";
const confirmPasswordField = "input[name='repeatedPassword']";

const btnRegister = "#loginPanel > :nth-child(3) > a";
const btnSubmitRegister =
  "#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input";

const msgPage = ".title";


Cypress.Commands.add("startValidationRegister", () => {
  cy.clickElement(btnRegister);
});

Cypress.Commands.add("fillFieldsRegister", (user) => {
  cy.fillField(firstNameField, user.firstName);
  cy.fillField(lastNameField, user.lastName);
  cy.fillField(addressField, user.address);
  cy.fillField(cityField, user.city);
  cy.fillField(stateField, user.state);
  cy.fillField(zipCodeField, user.zipCode);
  cy.fillField(phoneField, user.phone);
  cy.fillField(ssnField, user.ssn);
  cy.fillField(usernameField, user.username);
  cy.fillField(passwordField, user.password);
  cy.fillField(confirmPasswordField, user.confirmPassword);
});

Cypress.Commands.add("fillFieldsRegisterNoFirstname", (user) => {
  cy.fillField(lastNameField, user.lastName);
  cy.fillField(addressField, user.address);
  cy.fillField(cityField, user.city);
  cy.fillField(stateField, user.state);
  cy.fillField(zipCodeField, user.zipCode);
  cy.fillField(phoneField, user.phone);
  cy.fillField(ssnField, user.ssn);
  cy.fillField(usernameField, user.username);
  cy.fillField(passwordField, user.password);
  cy.fillField(confirmPasswordField, user.confirmPassword);
});

Cypress.Commands.add("clickRegister", () => {
  cy.clickElement(btnSubmitRegister);
});

Cypress.Commands.add("validatePage", (text) => {
  cy.validateText(msgPage, text);
});

Cypress.Commands.add("validateEmptyFields", (text) => {
  cy.validateText(msgFirstNameError, text);
  cy.validateText(msgLastNameError, text);
  cy.validateText(msgAddressError, text);
  cy.validateText(msgCityError, text);
  cy.validateText(msgStateError, text);
  cy.validateText(msgZipCodeError, text);
  cy.validateText(msgSsnError, text);
  cy.validateText(msgUsernameError, text);
  cy.validateText(msgPasswordError, text);
  cy.validateText(msgConfirmPasswordError, text);
});

Cypress.Commands.add("validatePhoneField", (text) => {
  cy.validateText(msgPhoneError, text);
});

Cypress.Commands.add("validateSsnField", (text) => {
  cy.validateText(msgSsnError, text);
});

Cypress.Commands.add("validatePasswordNotMatch", (text) => {
  cy.validateText(msgConfirmPasswordError, text);
});

Cypress.Commands.add("validateUsernameField", (text) => {
  cy.validateText(msgUsernameError, text);
});
