Feature: Agregar productos al carrito en Sauce Demo

    Scenario: Validar agregar productos al carrito
        Given que estoy en la página de productos de Sauce Demo
        When agrego los productos al carrito
        Then debería ver los productos en el carrito
