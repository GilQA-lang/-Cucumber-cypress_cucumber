Feature: Iniciar sesión y agregar producto al carrito

  Scenario: Inicio de sesión exitoso y agregar un producto al carrito
    Given que abro la página de inicio de sesión de Sauce Demo
    When inicio sesión con credenciales válidas
    And agrego el primer producto al carrito
    Then debería ver 1 artículo en el carrito
