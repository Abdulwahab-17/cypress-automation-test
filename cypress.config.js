const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); // Add this line

    },
    reporter: 'cypress-mochawesome-reporter', // Add this line
    reporterOptions: {
      reportDir: 'cypress/reports', // Specify the directory for reports
      overwrite: true, // Overwrite existing reports
      html: true, // Generate HTML report
      json: true, // Generate JSON report (optional)
      timestamp: 'mmddyyyy_HHMMss', // Add timestamp to report file names
      charts: true, // Include charts in the report
      reportPageTitle: 'Cypress Test Report', // Custom title for the report page
      embeddedScreenshots: true, // Embed screenshots in the report
      inlineAssets: true, // Embed all assets (CSS, images) in the HTML report
    },
  },
});
