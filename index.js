var fs = require("fs");

module.exports = function(content) {
  fs.readFile("./inject.js", 'utf-8', function(err, data) {
    var done = content + data
    var callback = this.async();
    if (!callback) return done;
    callback(null, done)
  });
};
