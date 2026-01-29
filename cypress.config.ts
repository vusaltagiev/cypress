import { defineConfig } from "cypress";
// Excel requirements
const xlsx = require("node-xlsx");
const fs = require("fs");
const path = require("path");

// Verify download import
const { verifyDownloadTasks } = require("cy-verify-downloads");
export default defineConfig({
  e2e: {
    // baseUrl: "http://www.uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // Verify download import
      on("task", verifyDownloadTasks);
      //Excel implementation
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });
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
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 2,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 1,
  },
  video: true,
  screenshotOnRunFailure: true,
});
