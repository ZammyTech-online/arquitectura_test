const { defineConfig } = require('cypress');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@badeball/cypress-cucumber-preprocessor/plugin')(on, config);

      on(
        'file:preprocessor',
        createEsbuildPlugin.default(config)
      );

      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'http://localhost:3000',  // Cambia esto a la URL de tu aplicación
  }
});
