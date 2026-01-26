import { defineConfig } from "cypress";
// Verify download import
const { verifyDownloadTasks } = require("cy-verify-downloads");
export default defineConfig({
  e2e: {
    // baseUrl: "http://www.uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // Verify download import
      on("task", verifyDownloadTasks);
      // For the mochawesome reporter
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    env: {
      demoVar: "Hello DinSSK",
      dinSSK: "https://dinssk.com/",
      VT: "https://vusaltagiev.com/",
      experimentalSessionAndOrigin: true,
    },
  },
  // pageLoadTimeout: 50000,
  // defaultCommandTimeout: 60000,
  viewportHeight: 1000,
  viewportWidth: 1400,
  reporter: "cypress-mochawesome-reporter",
});
