# dragonfruit
Webpack Loader that exports __namespaced__ css `:local` classNames

__NPM__ `npm install dragonfruit --save`

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

In your `webpack.config.js`

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
