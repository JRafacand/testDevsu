const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000
  }
});
