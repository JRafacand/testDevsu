# Prueba Funcional E2E con Cypress - Demoblaze

Este proyecto automatiza un flujo de compra en https://www.demoblaze.com usando Cypress y Page Object Model.

## Flujo cubierto

1. Agregar dos productos al carrito.
2. Visualizar el carrito.
3. Completar el formulario de compra.
4. Finalizar la compra y validar el mensaje de éxito.

## Requisitos

- Node.js 18 o superior recomendado.
- npm instalado.
- Sistema operativo Windows, Linux o macOS.

Para validar versiones:

node -v
npm -v

## Instalación del proyecto

1. Clonar el repositorio.
2. Entrar a la carpeta del proyecto.
3. Instalar dependencias.

Comandos:

git clone https://github.com/JRafacand/testDevsu.git
cd testDevsu
npm install

## Ejecutar pruebas

### Modo interactivo (en vivo)

Abre la interfaz de Cypress para ver la prueba en ejecución.

npm run cy:open

Luego en la UI de Cypress:

1. Seleccionar E2E Testing.
2. Elegir navegador (por ejemplo Chrome).
3. Ejecutar la spec flujo-compra.cy.js.

### Modo headless (sin abrir navegador)

npm run test:e2e

### Modo visible desde terminal

npm run test:e2e -- --headed --browser chrome

## Scripts disponibles

- npm run cy:open
- npm run cy:run
- npm run test:e2e

## Estructura principal

- cypress/e2e/flujo-compra.cy.js: prueba principal del flujo.
- cypress/pages/HomePage.js: acciones sobre la página principal.
- cypress/pages/ProductPage.js: acciones sobre el detalle de producto.
- cypress/pages/CartPage.js: acciones y validaciones del carrito y compra.
- cypress.config.js: configuración global de Cypress.

## Solución de problemas

1. Si no se abre la prueba en vivo, usa npm run cy:open en lugar de npm run test:e2e.
2. Si npm no es reconocido en PowerShell, prueba en CMD o reinicia VS Code para refrescar PATH.
3. Si hay fallos por versión de Cypress, ejecuta npm install para usar la versión definida en package.json.

## Notas QA

- El proyecto está preparado para extender escenarios negativos, validaciones de campos y pruebas con datos parametrizados.
- Se recomienda agregar evidencias (screenshots o videos) para reporte de ejecución en CI.
