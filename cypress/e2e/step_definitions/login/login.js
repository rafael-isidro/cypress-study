import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import DataFaker from "../../../support/DataFaker";

context("Login", () => {
  let user = {};

  Given("Estou na pagina de login e possuo cadastro no sistema", () => {
    cy.visit("/");
    user = DataFaker.generateFakerUser();
    cy.configDatabase();
    cy.startValidationRegister();
    cy.fillFieldsRegister(user);
    cy.clickRegister();
    cy.clickLogout();
  });

  When("Informo Username, Password validos", () => {
    cy.fillLoginUser(user.username, user.password);
  });

  When("Informo Username invalido, Password valido", () => {
    let username =
      DataFaker.generateFakerFirstName() + DataFaker.generateFakerNumber();
    cy.fillLoginUser(username, user.password);
  });

  When("Informo Username valido, Password invalido", () => {
    let invalidPassword = "teste@@0@@";
    cy.fillLoginUser(user.username, invalidPassword);
  });

  When("Informo Username vazio, Password valido", () => {
    cy.fillLoginUserEmptyUsername(user.password);
  });

  When("Informo Username valido, Password vazio", () => {
    cy.fillLoginUserEmptyPassword(user.username);
  });

  And("clico no botão 'Log In'", () => {
    cy.clickLogin();
  });

  Then("Devo me logar no sistema", () => {
    cy.validateLogin("Log Out");
  });

  Then("Deve ser exibida mensagem de erro", () => {
    cy.validateErrorMessage("The username and password could not be verified.");
  });

  Then("Deve ser exibida mensagem de campos vazios", () => {
    cy.validateErrorMessage("Please enter a username and password.");
  });
});
