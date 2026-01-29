import { defineConfig } from "cypress";
// Excel requirements
const xlsx = require("node-xlsx");
const fs = require("fs");
const path = require("path");
// mySQL requirements
const mysql = require("mysql");

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
      //mySQL
      on("task", {
        queryDb: (query) => {
          return queryTestDb(query, config);
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
      db: {
        host: "localhost",
        user: "root",
        password: "",
        database: "cypress_test",
      },
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

function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}
