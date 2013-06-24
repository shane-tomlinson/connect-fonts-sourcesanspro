# connect-fonts-sourcesanspro

Source Sans Pro fontpack for [connect-fonts](https://github.com/shane-tomlinson/connect-fonts).

## Usage

1. Include [connect-fonts](https://github.com/shane-tomlinson/connect-fonts) in a node module.
```js
const font_middleware = require("connect-fonts");
```

2. Include the font packs that you want to serve.
```js
const font_pack  = require("connect-fonts-sourcesanspro");
```

3. Add a middleware by calling the `setup` function.
```js
    app.use(font_middleware.setup({
      fonts: [ font_pack ],
      allow_origin: "https://exampledomain.com"
    }));
```

4. Add a link tag to include the font CSS.
```html
<link href="/sourcesanspro-black/fonts.css" type="text/css" rel="stylesheet"/ >
```

Multiple fonts from the family can be included by using a comma separated list of fonts:
```html
<link href="/sourcesanspro-black,sourcesanspro-blackitalic,sourcesanspro-bold,sourcesanspro-bolditalic,sourcesanspro-extralight,sourcesanspro-extralightitalic,sourcesanspro-italic,sourcesanspro-light,sourcesanspro-lightitalic,sourcesanspro-regular,sourcesanspro-semibold,sourcesanspro-semibolditalic/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available fonts:
* sourcesanspro-black
* sourcesanspro-blackitalic
* sourcesanspro-bold
* sourcesanspro-bolditalic
* sourcesanspro-extralight
* sourcesanspro-extralightitalic
* sourcesanspro-italic
* sourcesanspro-light
* sourcesanspro-lightitalic
* sourcesanspro-regular
* sourcesanspro-semibold
* sourcesanspro-semibolditalic

Locale-optimised font sets can be served by specifying the locale in the fonts.css URL.
```html
<link href="/latin/sourcesanspro-black/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available subsets:
* en

5. Set your CSS up to use the new font by using the "Source Sans Pro" font-family.
```
    body {
      font-family: 'Source Sans Pro', 'sans-serif', 'serif';
    }
```

## Font Info
Source Sans Pro

* Copyright: Copyright 2010, 2012 Adobe Systems Incorporated. All Rights Reserved.
* Trademark: Source is a trademark of Adobe Systems Incorporated in the United States and/or other countries.
* Designer: Paul D. Hunt
* Vendor: Adobe Systems Incorporated
* Vendor URL: http://www.adobe.com/type

## Development Info
* Homepage: https://github.com/shane-tomlinson/connect-fonts-sourcesanspro
* Repo: https://github.com/shane-tomlinson/connect-fonts-sourcesanspro

## Author
* Shane Tomlinson
* shane@shanetomlinson.com
* stomlinson@mozilla.com
* set117@yahoo.com
* https://shanetomlinson.com
* https://github.com/shane-tomlinson
* https://github.com/stomlinson
* @shane_tomlinson


## License

Software: Licenced under version 2.0 of the MPL

  https://www.mozilla.org/MPL/

Fonts: Licensed under version 1.1 of the SIL Open Font License

  http://scripts.sil.org/OFL

