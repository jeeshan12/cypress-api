const { defineConfig } = require("cypress");

const generateUUID = require('./cypress/support/helpers/uuid');
const generateRandomString = require('./cypress/support/helpers/randomstring');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    baseUrl: 'https://jsonplaceholder.typicode.com',
    setupNodeEvents(on, config) {
      on('task', generateUUID);
      on('task', generateRandomString);
    },
    video: false
  },
});
