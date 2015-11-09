var Jasmine = require('jasmine');
var SpecReporter = require('jasmine-spec-reporter');
var noop = function() {};

var jasmine = new Jasmine();
jasmine.configureDefaultReporter({print: noop});    // remove default reporter logs
jasmine.addReporter(new SpecReporter());   // add jasmine-spec-reporter
jasmine.loadConfig({
    spec_dir: 'tests',
    spec_files: [
        '[^]*?[sS]pec.js',
        '[^]*?[sS]pec.js'
    ],
    helpers: [
        '*.js'
    ]
});                         // load jasmine.json configuration
jasmine.execute();
