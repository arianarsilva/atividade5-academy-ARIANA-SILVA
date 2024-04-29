const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
    apiBaseUrl: 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1',
    baseUrl: 'https://rarocrud-frontend-88984f6e4454.herokuapp.com/users',
  },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
