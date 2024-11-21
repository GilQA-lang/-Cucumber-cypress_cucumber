Feature: Funcionalidades de Sauce Demo

  Background:
    Given que abro la página de Sauce Demo
    And ingreso el usuario "standard_user" y la contraseña "secret_sauce"
    And debería ver la página de productos

  Scenario: Agregar el primer producto al carrito y validarlo
    When agrego el primer producto al carrito
    Then debería ver 1 artículo en el carrito

  Scenario: Agregar el último producto al carrito y validarlo
    When agrego el último producto al carrito
    Then debería ver 1 artículo en el carrito
