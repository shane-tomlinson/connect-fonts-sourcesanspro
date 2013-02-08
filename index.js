const path = require("path");

module.exports = {
  "root": path.join(__dirname, "fonts"),

  // where to find a locale's fonts in the fonts directory
  "locale-to-subdirs": {
    "en": "en",
    "default": "default"
  },

  // what font types are enabled and what are the extensions of
  // the font files.
  //
  // valid types are embedded-opentype, woff, truetype, svg
  "enabled-types": [ "eot", "woff", "ttf", "svg" ],

  // The fonts. The name of the font must be the same as the font
  // in the fonts directory.
  "fonts": {
    "sourcesanspro-black": {
      "fontFamily": "Source Sans Pro",
      "fontStyle": "normal",
      "fontWeight": "800",
      "local": [ "Source Sans Pro Black", "SourceSansProBlack" ]
    },

    "sourcesanspro-blackitalic": {
      "fontFamily": "Source Sans Pro",
      "fontStyle": "italic",
      "fontWeight": "800",
      "local": [ "Source Sans Pro Black Italic", "SourceSansProBlackItalic" ]
    },

    "sourcesanspro-bold": {
      "fontFamily": "Source Sans Pro",
      "fontStyle": "normal",
      "fontWeight": "700",
      "local": [ "Source Sans Pro Bold", "SourceSansProBold" ]
    },

    "sourcesanspro-bolditalic": {
      "fontFamily": "Source Sans Pro",
      "fontStyle": "italic",
      "fontWeight": "700",
      "local": [ "Source Sans Pro Bold Italic", "SourceSansProBoldItalic" ]
    },

    "sourcesanspro-extralight": {
      "fontFamily": "Source Sans Pro",
      "fontStyle": "normal",
      "fontWeight": "100",
      "local": [ "Source Sans Pro Extra Light", "SourceSansProExtraLight" ]
    },

    "sourcesanspro-extralightitalic": {
      "fontFamily": "Source Sans Pro",
      "fontStyle": "italic",
      "fontWeight": "100",
      "local": [ "Source Sans Pro Extra Light Italic", "SourceSansProExtraLightItalic" ]
    },

    "sourcesanspro-italic": {
      "fontFamily": "Source Sans Pro",
      "fontStyle": "italic",
      "fontWeight": "400",
      "local": [ "Source Sans Pro Italic", "SourceSansProItalic" ]
    },

    "sourcesanspro-light": {
      "fontFamily": "Source Sans Pro",
      "fontStyle": "normal",
      "fontWeight": "200",
      "local": [ "Source Sans Pro Light", "SourceSansProLight" ]
    },

    "sourcesanspro-lightitalic": {
      "fontFamily": "Source Sans Pro",
      "fontStyle": "italic",
      "fontWeight": "200",
      "local": [ "Source Sans Pro Light Italic", "SourceSansProLightItalic" ]
    },

    "sourcesanspro-regular": {
      "fontFamily": "Source Sans Pro",
      "fontStyle": "normal",
      "fontWeight": "400",
      "local": [ "Source Sans Pro", "SourceSansPro" ]
    },

    "sourcesanspro-semibold": {
      "fontFamily": "Source Sans Pro",
      "fontStyle": "normal",
      "fontWeight": "600",
      "local": [ "Source Sans Pro", "SourceSansPro" ]
    },

    "sourcesanspro-semibolditalic": {
      "fontFamily": "Source Sans Pro",
      "fontStyle": "italic",
      "fontWeight": "600",
      "local": [ "Source Sans Pro", "SourceSansPro" ]
    }
  }
};
