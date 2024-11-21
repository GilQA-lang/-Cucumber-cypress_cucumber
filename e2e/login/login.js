import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const url = "https://www.saucedemo.com/v1/index.html";
const usuario = "standard_user";
const contraseña = "secret_sauce";


Given("que abro la página de inicio de sesión de Sauce Demo", () => {
  cy.visit(url); // Navega al sitio web
});

When("inicio sesión con credenciales válidas", () => {
  cy.get("#user-name").type(usuario); // Escribe el nombre de usuario
  cy.get("#password").type(contraseña); // Escribe la contraseña
  cy.get("#login-button").click(); // Hace clic en el botón de iniciar sesión
});

When("agrego el primer producto al carrito", () => {
  cy.get(".inventory_item").first().find("button").click(); // Agrega el primer producto al carrito
});

Then("debería ver {int} artículo en el carrito", (cantidadArticulos) => {
  cy.get(".shopping_cart_badge").should("have.text", cantidadArticulos.toString()); // Verifica la cantidad en el carrito
});
