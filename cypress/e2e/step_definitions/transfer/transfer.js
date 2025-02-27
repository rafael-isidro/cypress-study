import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import DataFaker from "../../../support/DataFaker";

context("Transfer", () => {
  let user = {};

  Given("Estou logado no sistema e crio uma nova conta", () => {
    cy.visit("/");
    user = DataFaker.generateFakerUser();
    cy.configDatabase();
    cy.startValidationRegister();
    cy.fillFieldsRegister(user);
    cy.clickRegister();
    cy.createNewAccount();
  });

  When("Clico em 'Transfer Funds', preencho um valor valido", () => {
    cy.clickTransfer();
    cy.fillAmountField(1);
  });

  When("Clico em 'Transfer Funds', preencho um valor negativo", () => {
    cy.clickTransfer();
    cy.fillAmountField(-1);
  });

  When("Clico em 'Transfer Funds', preencho um valor igual a zero", () => {
    cy.clickTransfer();
    cy.fillAmountField(0);
  });

  When(
    "Clico em 'Transfer Funds', preencho um valor com formato invalido",
    () => {
      cy.clickTransfer();
      cy.fillAmountField("abcd");
    }
  );

  When(
    "Clico em 'Transfer Funds', preencho um valor maior do que o saldo",
    () => {
      cy.clickTransfer();
      cy.fillAmountField(100000000);
    }
  );

  And("Clico no botão 'Transfer'", () => {
    cy.clickConfirmTransfer();
  });

  Then("Devo receber mensagem de transferencia bem sucedida", () => {
    cy.validateSuccessTransfer("Transfer Complete!");
  });

  Then("Devo receber mensagem de valor invalido", () => {
    cy.validateSuccessTransfer("Invalid amount");
  });

  Then("Devo receber mensagem de saldo insuficiente", () => {
    cy.validateSuccessTransfer("insufficient balance");
  });
});
