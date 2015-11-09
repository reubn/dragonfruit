module.exports = function(content) {
    var done = content + `
    if (process.env.NODE_ENV === "development") console.log("Content:", content);
    module.exports = function() {
      var classNameMappings = content.locals;
      return function() {
        var arrayOfClassNames = extractClassNames(arguments);
        if (process.env.NODE_ENV === "development") console.log("arguments:", arguments);
        if (process.env.NODE_ENV === "development") console.log("arrayOfClassNames:", arrayOfClassNames);

        //If we have classNames, return className string
        if(arrayOfClassNames !== false) return arrayOfClassNames.map(function(className){return classNameMappings[className]}).join(" ");

        //If we don't have classNames, return first className
        return classNameMappings[Object.keys(classNameMappings)[0]];
      }

      function extractClassNames(args, noWrap) {
        //No args supplied
        if(!args.length) return false;

        //classNames are in first argument
        if (args.length === 1) {
          //classNames are an array
          if (Array.isArray(args[0])) return extractClassNames(args[0], true);

          //One className as string
          if (typeof args[0] === "string") return noWrap?args[0]:[args[0]];

          //classNames returned by function
          if (Object.prototype.toString.call(args[0]) === "[object Function]") return extractClassNames([args[0](classNameMappings)]);
        } else {
          //classNames are arguments
          return args.map(function(arg) {
            return extractClassNames([arg], true);
          });
        }
      }

    }(content);
`;
    var callback = this.async();
    if(!callback) return done;
    callback(null, done)
};
