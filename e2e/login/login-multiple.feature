Feature: Login de múltiples usuarios en Sauce Demo

    Scenario Outline: Validar login con múltiples usuarios
        Given que abro la página de inicio de sesión de Sauce Demo
        When ingreso el usuario "<usuario>" y la contraseña "<contraseña>"
        Then debería ver la página de productos si el login es exitoso

        Examples:
            | usuario                 | contraseña   |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |
