// Optional, imports Serenity/JS Stage Crew Members
const crew = require('serenity-js/lib/stage_crew');

exports.config = {

  framework: 'custom',
  frameworkPath: require.resolve('serenity-js'),

  specs: './src/features/modules/calendar/view_calendar.feature',

  cucumberOpts: {
    require:    [           // loads step definitions:
      'src/features/**/*.ts', // - defined using TypeScript
      'src/features/**/*.js'  // - defined using JavaScript
    ],
    format:     'pretty',               // enable console output
    compiler:   'ts:ts-node/register'   // interpret step definitions as TypeScript
  },

  serenity: {
        crew:    [
            crew.serenityBDDReporter(),
            crew.photographer()
        ],

        dialect: 'cucumber',  // or 'mocha'
        outputDirectory: `${process.cwd()}/target/site/serenity/`,
        stageCueTimeout: 40 * 1000
    },

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },

  restartBrowserBetweenTests: true,
}
