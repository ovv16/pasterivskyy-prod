!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s="./src/assets/scripts/contacts.js")}({"./src/assets/scripts/contacts.js":
/*!****************************************!*\
  !*** ./src/assets/scripts/contacts.js ***!
  \****************************************/
/*! no static exports found */function(module,exports){eval("// map\r\nfunction initMap() {\r\n\tconst myLatLng = {\r\n\t\tlat: 49.42021665848833,\r\n\t\tlng: 32.05678587802557,\r\n\t};\r\n\tconst map = new google.maps.Map(document.getElementById('map'), {\r\n\t\tzoom: 16,\r\n\t\tcenter: myLatLng,\r\n\t\tmapId: '459fa72e257f56ad',\r\n\t\tfullscreenControl: false,\r\n\t\tzoomControl: false,\r\n\t\tstreetViewControl: false,\r\n\t\tmapTypeControl: false,\r\n\t});\r\n\tnew google.maps.Marker({\r\n\t\tposition: myLatLng,\r\n\t\tmap,\r\n\t\ttitle: 'Pasterivskyy',\r\n\t\ticon: './assets/images/logo_pasterivskyy_map.svg',\r\n\t});\r\n}\r\ninitMap();\n\n//# sourceURL=webpack:///./src/assets/scripts/contacts.js?")}});