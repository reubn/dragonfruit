# dragonfruit [![Build Status](https://travis-ci.org/reubn/dragonfruit.svg?branch=master)](https://travis-ci.org/reubn/dragonfruit) [![npm](https://img.shields.io/npm/v/dragonfruit.svg)](https://www.npmjs.com/package/dragonfruit) [![David](https://img.shields.io/david/reubn/dragonfruit.svg)](https://github.com/reubn/dragonfruit/blob/master/package.json) [![David](https://img.shields.io/david/reubn/dragonfruit.svg)](https://github.com/reubn/dragonfruit/blob/master/package.json)
Webpack Loader that exports __namespaced__ css `:local` classNames

#Installation
`npm install dragonfruit --save-dev`

## e.g.

### CSS

```css
:local(.datepicker)
      {
        display: block;
        color: black;
      }
```
### JS

```javascript
var React = require("react");
var styles = require("./datepicker.css");

module.exports = React.createClass({
  render: function() {
    return 
      <div className={styles("datepicker")}>
       // This ^^ will contain a random namespaced hash that corresponds with the css class ":local(.datepicker)"
      </div>
  }
});
```

### __Would Be Transformed To__

```css
.kg64jk3l(.datepicker)
      {
        display: block;
        color: black;
      }
```

```javascript
var React = require("react");
var styles = require("./datepicker.css");

module.exports = React.createClass({
  render: function() {
    return 
      <div className="kg64jk3l">
      </div>
  }
});
```
# Usage

In your `webpack.config.js`:

```javascript

module.exports = {
    ...
    module: {
        loaders: [
            {test: /\.css$/, loader: "dragonfruit!style!css"}
        ]
    }
    ...
};

```

From API:

Any Strings, Objects, Functions, Arrays, Nested Arrays, etc. of `classNames`

## e.g.

```javascript
var styles = require("./datepicker.css");

styles("day")                                                                       -> "hr486_eio"
styles(["day"])                                                                     -> "hr486_eio"
styles([["day"]])                                                                   -> "hr486_eio"
styles({"day":true})                                                                -> "hr486_eio"
styles(function(classNamesAvailable){return "day"})                                 -> "hr486_eio"
styles(function(classNamesAvailable){return [{"day":true}]})                        -> "hr486_eio"

styles("day", "week")                                                               -> "hr486_eio iooi676_5hj"
styles(["day", "week"])                                                             -> "hr486_eio iooi676_5hj"
styles([["day",[[, "week"]]]])                                                      -> "hr486_eio iooi676_5hj"
styles({"day":true, "week":true, month:false})                                      -> "hr486_eio iooi676_5hj"
styles(function(classNamesAvailable){return ["day", {"week": true, month:false}]})  -> "hr486_eio iooi676_5hj"

```


