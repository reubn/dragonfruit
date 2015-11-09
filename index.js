var fs = require("fs");

module.exports = function(content) {
  var callback = this.async();
  fs.readFile(require.resolve("dragonfruit/inject.js"), 'utf-8', function(err, data) {
    if(err) throw err
    var done = content + data
    if (!callback) return done;
    callback(null, done)
  });
};
