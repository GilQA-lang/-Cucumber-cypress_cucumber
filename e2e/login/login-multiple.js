import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://www.saucedemo.com/v1/index.html";

Given("que abro la página de inicio de sesión de Sauce Demo", () => {
  cy.visit(url);
});

When("ingreso el usuario {string} y la contraseña {string}", (usuario, contraseña) => {
  cy.get("#user-name").type(usuario);
  cy.get("#password").type(contraseña);
  cy.get("#login-button").click();
});

Then("debería ver la página de productos si el login es exitoso", () => {
  cy.url().should("include", "/inventory.html");
});
