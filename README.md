# escape-diacritics

`escape-diacritics` remove diacritics/accents in the given string.

`escape-diacritics` results a diacritics free string eg. `Québec` will be returned as `Quebec`, this helps generally in uniform string search.

## Requirements

`escape-diacritics` has no production dependency, there are few dev dependencies for test and build purpose

## How to use

### Browser 

* Clone repository
* Run npm install and build / minify:

```bash
npm install
npm run minify
```

You'll find the minified and unminified versions of escape-diacritics in the dist/ directory.

Use it in the browser:

```html
<html>
    <body>
        <h1>Hello World!</h1>
        <script type="text/javascript"  src="dist/escape-diacritics.js"></script>
        <script type="text/javascript" src="index.js"></script>
    </body>
</html>
```

```javascript
var str = "Québec";
console.log(removeDiacritics(str));
```

### Node

Install module from console:

```bash
npm install escape-diacritics
```

Use it in your node app:

```js
var removeDiacritics = require('escape-diacritics');

var withDiacritics = 'Québec';
var withoutDiacritics = removeDiacritics(withDiacritics);
```



## About escape-diacritics

`escape-diacritics` was created by [Trishul](http://trishulgoel.com). I needed this functionality in one of my project, and I have to write this code, so why not make it opensource and let others too get benefit from it :), Vist my [github](http://github.com/tsl143/jsDemos) for more project and few webextenions.

## Support

Feel free to open issues on [github](http://github.com/tsl143/escape-diacritics).

