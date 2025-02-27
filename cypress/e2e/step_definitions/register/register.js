import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import DataFaker from "../../../support/DataFaker";

context("Register", () => {
  let user = {};

  Given("Estou na pagina de registro", () => {
    cy.visit("/");
    cy.configDatabase();
    cy.startValidationRegister();
    cy.validatePage("Signing up is easy!");
  });

  When(
    "Informo First Name, Last Name, Address, City, State, Zip Code, Phone, SSN, Username, Password e Confirm validos",
    () => {
      user = DataFaker.generateFakerUser();
      cy.fillFieldsRegister(user);
    }
  );

  When("clico no botão 'Register' sem preencher nenhum campo", () => {
    cy.clickRegister();
  });

  When("Informo phone com formato invalido", () => {
    user = DataFaker.generateFakerUser();
    user.phone = "abc";
    cy.fillFieldsRegister(user);
  });

  When("Informo senha e confirmacao divergentes", () => {
    user = DataFaker.generateFakerUser();
    user.confirmPassword = "abc";
    cy.fillFieldsRegister(user);
  });

  When("Informo ssn invalido", () => {
    user = DataFaker.generateFakerUser();
    user.ssn = "abc/**";
    cy.fillFieldsRegister(user);
  });

  When("Informo username ja cadastrado", () => {
    user = DataFaker.generateFakerUser();
    cy.fillFieldsRegister(user);
    cy.clickRegister();
    cy.clickLogout();
    cy.startValidationRegister();
    cy.fillFieldsRegister(user);
  });

  And("clico no botão 'Register'", () => {
    cy.clickRegister();
  });

  Then("Devo me cadastrar no sistema e estar logado", () => {
    cy.validatePage("Welcome");
  });

  Then("Deve ser exibida mensagem de required em todos os campos", () => {
    cy.validateEmptyFields("is required.");
  });

  Then("Deve ser exibida mensagem de Formato invalido do telefone", () => {
    cy.validatePhoneField("Invalid format");
  });
  Then("Deve ser exibida mensagem de que Senhas nao conferem", () => {
    cy.validatePasswordNotMatch("Passwords did not match.");
  });
  
  Then("Deve ser exibida mensagem de Formato invalido do ssn", () => {
    cy.validateSsnField("Invalid format");
  });

  Then("Deve ser exibida mensagem de Username ja existente", () => {
    cy.validateUsernameField("This username already exists.");
  });
  
});
