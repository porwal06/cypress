const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "zbqq5a",
  video: true,

  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        printLogsToFile: "always",
        outputRoot: config.projectRoot + "/logs/",
        outputTarget: {
          // 'projectxout.txt': 'txt',
          "projectxout.json": "json",
        },
      };
      require("cypress-terminal-report/src/installLogsPrinter")(on, options);
      // implement node event listeners here
    },
    // pageLoadTimeout: 1000000,
    // defaultCommandTimeout: 100000,
    // video: true,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
