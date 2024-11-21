import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Paso para abrir la página de Sauce Demo
Given("que abro la página de Sauce Demo", () => {
  cy.visit("https://www.saucedemo.com/v1/index.html");
});

// Paso para ingresar el usuario y la contraseña
When("ingreso el usuario {string} y la contraseña {string}", (usuario, contraseña) => {
  cy.get("#user-name").type(usuario);
  cy.get("#password").type(contraseña);
  cy.get("#login-button").click();
});

// Paso para verificar que la página de productos se carga
Then("debería ver la página de productos", () => {
  cy.url().should("include", "/inventory.html");
});


// Paso para agregar el primer producto al carrito
When("agrego el primer producto al carrito", () => {
  cy.get(".inventory_item").first().find("button").click(); // Agrega el primer producto al carrito
});

// Paso para verificar que el carrito tiene el número de productos correcto
Then("debería ver {int} artículo en el carrito", (cantidadArticulos) => {
  cy.get(".shopping_cart_badge").should("have.text", cantidadArticulos.toString()); // Verifica la cantidad en el carrito
});


// Paso para agregar el último producto al carrito
When("agrego el último producto al carrito", () => {
  cy.get(".inventory_item").last().find("button").click(); // Agrega el último producto al carrito
});

