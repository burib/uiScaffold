module.exports = function(config) {
  var webpackConfig = require('./webpack.config.js'),
    path = require('path'),
    entryVendorFiles,
    testFiles,
    preProcessors = {};

  delete webpackConfig.entry.app;

  entryVendorFiles = path.resolve(webpackConfig.context, webpackConfig.entry.vendor);
  testFiles = '**/*/*.spec.js';

  preProcessors[entryVendorFiles] = ['webpack'];
  preProcessors[testFiles] = ['webpack'];
  preProcessors['tests.js'] = ['webpack'];

  webpackConfig.plugins.shift(); // Remove commonChunk plugin for tests

  config.set({
    basePath: './src/',
    frameworks: ['jasmine'],
    files: [entryVendorFiles, 'tests.js', testFiles],
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],
    preprocessors: preProcessors,
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: {
        colors: true,
        version: true,
        noInfo: true,
        debug: true,
        errorDetails: true
      }
    },
    singleRun: true,
    autoWatch: true,
    colors: true,
    coverageReporter: {
      type: 'lcov',
      dir: '../../_coverage/',
      instrumenterOptions: {
        istanbul: {noCompact: true}
      },
      includeAllSources: true
    },
    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-webpack')
    ]
  });
};
