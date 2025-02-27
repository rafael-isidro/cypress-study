const amountField = "#amount";

const btnTransferFunds = "#leftPanel > ul > li:nth-child(3) > a";
const btnConfirmTransfer = "#transferForm > div:nth-child(4) > input";
const btnCreateNewAccount = "#leftPanel > ul > li:nth-child(1) > a";
const btnConfirmCreateAccount = "#openAccountForm > form > div > input";

const msgSuccessTransfer = "#showResult > h1";


Cypress.Commands.add("createNewAccount", () => {
  cy.clickElement(btnCreateNewAccount);
  cy.clickElement(btnConfirmCreateAccount);
});
Cypress.Commands.add("clickTransfer", () => {
  cy.clickElement(btnTransferFunds);
});

Cypress.Commands.add("fillAmountField", (amount) => {
  cy.fillField(amountField, amount);
});

Cypress.Commands.add("clickConfirmTransfer", () => {
  cy.clickElement(btnConfirmTransfer);
});

Cypress.Commands.add("validateSuccessTransfer", (text) => {
  cy.validateText(msgSuccessTransfer, text);
});