import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Paso para abrir la página de Sauce Demo
Given("que abro la página de Sauce Demo", () => {
  cy.visit("https://www.saucedemo.com/v1/index.html");
});

// Paso para ingresar un usuario y contraseña
When("ingreso el usuario {string} y la contraseña {string}", (usuario, contraseña) => {
  cy.get("#user-name").type(usuario);
  cy.get("#password").type(contraseña);
  cy.get("#login-button").click();
});

// Paso para verificar que la página de productos se carga
Then("debería ver la página de productos", () => {
  cy.url().should("include", "/inventory.html");
});
