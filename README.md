# connect-fonts-sourcesanspro

A [connect-fonts](https://github.com/shane-tomlinson/connect-fonts) fontpack for the SourceSansPro font.

## Usage

1. Include [connect-fonts](https://github.com/shane-tomlinson/connect-fonts) in a node module.
```
const font_middleware = require("connect-fonts");
```

2. Include the font packs that you want to serve.
```
const sourcesanspro = require("connect-fonts-sourcesanspro");
```

3. Add a middleware by calling the `setup` function.
```
    app.use(font_middleware.setup({
      fonts: [ sourcesanspro ],
      allow_origin: "https://exampledomain.com"
    }));
```


## Author
* Shane Tomlinson
* shane@shanetomlinson.com
* stomlinson@mozilla.com
* set117@yahoo.com
* https://shanetomlinson.com
* http://github.com/stomlinson
* http://github.com/shane-tomlinson
* @shane_tomlinson

## Credits

Original font set downloaded from fontsquirrel.com. Source Sans Pro created by [Adobe](http://www.adobe.com/)

## License

This software is dual licenced under version 2.0 of the MPL and version 1.1 of the SIL Open Font License.

  https://www.mozilla.org/MPL/

  http://scripts.sil.org/OFL


