const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: "**/*.feature",
    video: true,
    videoCompression: 32,
    videoUploadOnPasses: false,
    screenshotOnRunFailure: true,
    screenshotQuality: 80,
    trashAssetsBeforeRuns: true,
    baseUrl: "https://parabank.parasoft.com/",
  },
});
