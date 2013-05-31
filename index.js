const path = require("path");

module.exports = {
  "root": path.join(__dirname, "fonts"),

  // Package info
  "package": {
    "name": "connect-fonts-sourcesanspro",
    "homepage": "https://github.com/shane-tomlinson/connect-fonts-sourcesanspro",
    "repourl": "https://github.com/shane-tomlinson/connect-fonts-sourcesanspro",
    "bugsurl": false
  },
  
  // Package author info
  "author": {
    "name": "Shane Tomlinson",
    "emails": "shane@shanetomlinson.com,stomlinson@mozilla.com,set117@yahoo.com",
    "urls": "https://shanetomlinson.com",
    "githubs": "https://github.com/shane-tomlinson,https://github.com/stomlinson",
    "twitter": "@shane_tomlinson"
  },
  
  // package license info
  "license": {
    "name": "SIL Open Font License",
    "version": "1.1",
    "abbreviation": "OFL-1.1",
    "url": "http://scripts.sil.org/OFL",
    "text": "Copyright 2010, 2012 Adobe Systems Incorporated (http://www.adobe.com/), with Reserved Font Name 'Source'. Source is a trademark of Adobe Systems Incorporated in the United States and/or other countries.\n\nThis Font Software is licensed under the SIL Open Font License, Version 1.1.\n\nThis license is copied below, and is also available with a FAQ at: http://scripts.sil.org/OFL\n\n\n-----------------------------------------------------------\nSIL OPEN FONT LICENSE Version 1.1 - 26 February 2007\n-----------------------------------------------------------\n\nPREAMBLE\nThe goals of the Open Font License (OFL) are to stimulate worldwide\ndevelopment of collaborative font projects, to support the font creation\nefforts of academic and linguistic communities, and to provide a free and\nopen framework in which fonts may be shared and improved in partnership\nwith others.\n\nThe OFL allows the licensed fonts to be used, studied, modified and\nredistributed freely as long as they are not sold by themselves. The\nfonts, including any derivative works, can be bundled, embedded, \nredistributed and/or sold with any software provided that any reserved\nnames are not used by derivative works. The fonts and derivatives,\nhowever, cannot be released under any other type of license. The\nrequirement for fonts to remain under this license does not apply\nto any document created using the fonts or their derivatives.\n\nDEFINITIONS\n\"Font Software\" refers to the set of files released by the Copyright\nHolder(s) under this license and clearly marked as such. This may\ninclude source files, build scripts and documentation.\n\n\"Reserved Font Name\" refers to any names specified as such after the\ncopyright statement(s).\n\n\"Original Version\" refers to the collection of Font Software components as\ndistributed by the Copyright Holder(s).\n\n\"Modified Version\" refers to any derivative made by adding to, deleting,\nor substituting -- in part or in whole -- any of the components of the\nOriginal Version, by changing formats or by porting the Font Software to a\nnew environment.\n\n\"Author\" refers to any designer, engineer, programmer, technical\nwriter or other person who contributed to the Font Software.\n\nPERMISSION & CONDITIONS\nPermission is hereby granted, free of charge, to any person obtaining\na copy of the Font Software, to use, study, copy, merge, embed, modify,\nredistribute, and sell modified and unmodified copies of the Font\nSoftware, subject to the following conditions:\n\n1) Neither the Font Software nor any of its individual components,\nin Original or Modified Versions, may be sold by itself.\n\n2) Original or Modified Versions of the Font Software may be bundled,\nredistributed and/or sold with any software, provided that each copy\ncontains the above copyright notice and this license. These can be\nincluded either as stand-alone text files, human-readable headers or\nin the appropriate machine-readable metadata fields within text or\nbinary files as long as those fields can be easily viewed by the user.\n\n3) No Modified Version of the Font Software may use the Reserved Font\nName(s) unless explicit written permission is granted by the corresponding\nCopyright Holder. This restriction only applies to the primary font name as\npresented to the users.\n\n4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font\nSoftware shall not be used to promote, endorse or advertise any\nModified Version, except to acknowledge the contribution(s) of the\nCopyright Holder(s) and the Author(s) or with their explicit written\npermission.\n\n5) The Font Software, modified or unmodified, in part or in whole,\nmust be distributed entirely under this license, and must not be\ndistributed under any other license. The requirement for fonts to\nremain under this license does not apply to any document created\nusing the Font Software.\n\nTERMINATION\nThis license becomes null and void if any of the above conditions are\nnot met.\n\nDISCLAIMER\nTHE FONT SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT\nOF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE\nCOPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\nINCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL\nDAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\nFROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM\nOTHER DEALINGS IN THE FONT SOFTWARE.\n"
  },

  // Common font information
  "font_common": {
    "names": "sourcesanspro-black,sourcesanspro-blackitalic,sourcesanspro-bold,sourcesanspro-bolditalic,sourcesanspro-extralight,sourcesanspro-extralightitalic,sourcesanspro-italic,sourcesanspro-light,sourcesanspro-lightitalic,sourcesanspro-regular,sourcesanspro-semibold,sourcesanspro-semibolditalic",
    "family": "Source Sans Pro Black",
    "copyright": "Copyright 2010, 2012 Adobe Systems Incorporated. All Rights Reserved.",
    "trademark": "Source is a trademark of Adobe Systems Incorporated in the United States and/or other countries.",
    "manufacturer": "Adobe Systems Incorporated",
    "url_vendor": "http://www.adobe.com/type",
    "designer": "Paul D. Hunt"
  },


  // where to find a locale's fonts in the fonts directory
  "locale-to-subdirs": { 
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
        "fontFamily": "Source Sans Pro Black",
        "fontStyle": "normal",
        "fontWeight": "900",
        "local": [ "Source Sans Pro Black", "SourceSansPro-Black" ]
      },
      "sourcesanspro-blackitalic": {
        "fontFamily": "Source Sans Pro Black",
        "fontStyle": "italic",
        "fontWeight": "900",
        "local": [ "Source Sans Pro Black Italic", "SourceSansPro-BlackIt" ]
      },
      "sourcesanspro-bold": {
        "fontFamily": "Source Sans Pro Black",
        "fontStyle": "normal",
        "fontWeight": "700",
        "local": [ "Source Sans Pro Bold", "SourceSansPro-Bold" ]
      },
      "sourcesanspro-bolditalic": {
        "fontFamily": "Source Sans Pro Black",
        "fontStyle": "italic",
        "fontWeight": "700",
        "local": [ "Source Sans Pro Bold Italic", "SourceSansPro-BoldIt" ]
      },
      "sourcesanspro-extralight": {
        "fontFamily": "Source Sans Pro Black",
        "fontStyle": "normal",
        "fontWeight": "200",
        "local": [ "Source Sans Pro ExtraLight", "SourceSansPro-ExtraLight" ]
      },
      "sourcesanspro-extralightitalic": {
        "fontFamily": "Source Sans Pro Black",
        "fontStyle": "italic",
        "fontWeight": "200",
        "local": [ "Source Sans Pro ExtraLight Italic", "SourceSansPro-ExtraLightIt" ]
      },
      "sourcesanspro-italic": {
        "fontFamily": "Source Sans Pro Black",
        "fontStyle": "italic",
        "fontWeight": "400",
        "local": [ "Source Sans Pro Italic", "SourceSansPro-It" ]
      },
      "sourcesanspro-light": {
        "fontFamily": "Source Sans Pro Black",
        "fontStyle": "normal",
        "fontWeight": "300",
        "local": [ "Source Sans Pro Light", "SourceSansPro-Light" ]
      },
      "sourcesanspro-lightitalic": {
        "fontFamily": "Source Sans Pro Black",
        "fontStyle": "italic",
        "fontWeight": "300",
        "local": [ "Source Sans Pro Light Italic", "SourceSansPro-LightIt" ]
      },
      "sourcesanspro-regular": {
        "fontFamily": "Source Sans Pro Black",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "Source Sans Pro", "SourceSansPro-Regular" ]
      },
      "sourcesanspro-semibold": {
        "fontFamily": "Source Sans Pro Black",
        "fontStyle": "normal",
        "fontWeight": "600",
        "local": [ "Source Sans Pro Semibold", "SourceSansPro-Semibold" ]
      },
      "sourcesanspro-semibolditalic": {
        "fontFamily": "Source Sans Pro Black",
        "fontStyle": "italic",
        "fontWeight": "600",
        "local": [ "Source Sans Pro Semibold Italic", "SourceSansPro-SemiboldIt" ]
      }
  }
};
