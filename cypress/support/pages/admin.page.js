const btnAdminPage = "#headerPanel > ul.leftmenu > li:nth-child(6) > a";
const btnInitializeDB =
  "#rightPanel > table > tbody > tr > td:nth-child(1) > form > table > tbody > tr > td:nth-child(1) > button";
const btnSelectDB = "#accessMode3";
const btnSubmit = "#adminForm > input";
const btnClear =
  "#rightPanel > table > tbody > tr > td:nth-child(1) > form > table > tbody > tr > td:nth-child(2) > button";

  
Cypress.Commands.add("configDatabase", () => {
  cy.clickElement(btnAdminPage);
  cy.selectElement(btnSelectDB);
  cy.clickElement(btnClear);
  cy.clickElement(btnInitializeDB);
  cy.clickElement(btnSubmit);
});
