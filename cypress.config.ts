import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // baseUrl: "http://www.uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      demoVar: "Hello DinSSK",
      dinSSK: "https://dinssk.com/",
    },
  },
  // pageLoadTimeout: 50000,
  // defaultCommandTimeout: 60000,
  viewportHeight: 1000,
  viewportWidth: 1400,
});
