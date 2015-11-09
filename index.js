module.exports = function(content) {
    var done = content + '"development"===process.env.NODE_ENV&&console.log("Content:",content),module.exports=function(){function n(e){return e?!1:1!==e.length?e.map(function(t){return n([t])}):Array.isArray(e[0])?e[0]:"string"==typeof e[0]?[e[0]]:"[object Function]"==Object.prototype.toString.call(e[0])?n([e[0](t)]):void 0}var t=content.locals;return function(){var e=n(arguments);return"development"===process.env.NODE_ENV&&console.log("arrayOfClassNames:",e),e!==!1?e.map(function(n){return t[n]}).join(" "):t[Object.keys(t)[0]]}}(content)';
    var callback = this.async();
    if(!callback) return done;
    callback(null, done)
};
