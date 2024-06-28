const { defineConfig } = require("cypress");

module.exports = defineconfig ({
  e2e: {
    setupNodeEvents(on, config) {

    },
    excludeSpecPattern: [
      'cypress/e2e/1-getting-started',
      'cypress/e2e/2-advanced-examples'
    ],
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    pageLoadTimeout: 20000,
    baseUrl: 'http://localhost:8888',
  }
})
// import { defineConfig } from 'cypress'

// export default defineConfig({
//   fixturesFolder: false,
//   e2e: {
//     setupNodeEvents(on, config) {},
//   },
// })
