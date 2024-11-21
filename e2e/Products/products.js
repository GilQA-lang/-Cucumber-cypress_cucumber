import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estoy en la página de productos de Sauce Demo", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html");
});

When("agrego los productos al carrito", () => {
    cy.get(".inventory_item").each(($el, index) => {
        if (index < 3) {
            cy.wrap($el).find(".btn_inventory").click(); // Agrega los primeros 3 productos
        }
    });
});

Then("debería ver los productos en el carrito", () => {
    cy.get(".shopping_cart_badge").should("have.text", "3"); // Verifica que el carrito tenga 3 productos
    cy.get(".shopping_cart_link").click();
    cy.get(".cart_item").should("have.length", 3); // Confirma que hay 3 productos en el carrito
});
