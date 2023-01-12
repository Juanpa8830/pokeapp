/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background-poke.PNG */ \"./src/images/background-poke.PNG\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/card.png */ \"./src/images/card.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons8-facebook-like-30.png */ \"./src/images/icons8-facebook-like-30.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/popupcoment.png */ \"./src/images/popupcoment.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size: cover;\\r\\n  background-attachment: fixed;\\r\\n  backdrop-filter: blur(1px);\\r\\n  -webkit-backdrop-filter: blur(1px);\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  height: 100px;\\r\\n  border: 2px solid rgb(20, 5, 80);\\r\\n  background-color: rgb(146, 176, 191);\\r\\n}\\r\\n\\r\\n.pokelogo {\\r\\n  height: 80px;\\r\\n  margin-top: 0.5%;\\r\\n  margin-left: 5%;\\r\\n}\\r\\n\\r\\nli:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.menu {\\r\\n  display: flex;\\r\\n  list-style: none;\\r\\n  padding-top: 2.5%;\\r\\n  font-size: 25px;\\r\\n  margin-left: 5%;\\r\\n  gap: 90px;\\r\\n}\\r\\n\\r\\n.menu li {\\r\\n  font-family: 'Press Start 2P', cursive;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.menu li:hover {\\r\\n  text-decoration: 4px solid underline;\\r\\n}\\r\\n\\r\\n#pokeList {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr 1fr;\\r\\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;\\r\\n  gap: 2% 2%;\\r\\n  grid-template-areas:\\r\\n    \\\". . . .\\\"\\r\\n    \\\". . . .\\\"\\r\\n    \\\". . . .\\\"\\r\\n    \\\". . . .\\\"\\r\\n    \\\". . . .\\\"\\r\\n    \\\". . . .\\\";\\r\\n  justify-items: stretch;\\r\\n  align-items: stretch;\\r\\n  width: 80%;\\r\\n  height: 74%;\\r\\n  margin: 2% 2% 10% 10%;\\r\\n}\\r\\n\\r\\n.pokecard {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-size: contain;\\r\\n  background-repeat: no-repeat;\\r\\n  background-position-x: 11%;\\r\\n  margin-top: 25%;\\r\\n  padding-left: 20%;\\r\\n  padding-top: 4%;\\r\\n  padding-bottom: 5%;\\r\\n  font-weight: 700;\\r\\n  font-size: 22px;\\r\\n}\\r\\n\\r\\n#image {\\r\\n  width: 200px;\\r\\n  height: 150px;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  width: 150px;\\r\\n  height: 27px;\\r\\n  font-size: 15px;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-position-x: 20%;\\r\\n  background-position-y: center;\\r\\n  border: none;\\r\\n  margin-top: 2%;\\r\\n  padding-left: 10%;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  margin-top: 2%;\\r\\n  width: 150px;\\r\\n  height: 27px;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.reserve {\\r\\n  width: 150px;\\r\\n  height: 27px;\\r\\n  margin-top: 2%;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.likes:hover,\\r\\n.comments:hover,\\r\\n.reserve:hover {\\r\\n  border: 2px solid #1d1d1d;\\r\\n}\\r\\n\\r\\n.likes:active,\\r\\n.comments:active,\\r\\n.reserve:active {\\r\\n  border: 4px solid #a6b0c5;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  height: 100px;\\r\\n  margin-top: 115%;\\r\\n  border: 2px solid rgb(20, 5, 80);\\r\\n  background-color: rgb(146, 176, 191);\\r\\n  font-family: 'Press Start 2P', cursive;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.footer p {\\r\\n  padding-top: 2.5%;\\r\\n  font-size: 25px;\\r\\n  margin-left: 5%;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  position: fixed;\\r\\n  justify-content: center;\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  top: 0;\\r\\n  width: 50%;\\r\\n  height: 170%;\\r\\n  margin-top: 20%;\\r\\n  margin-left: 25%;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: contain;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.work-title-preview {\\r\\n  font-family: 'Press Start 2P', cursive;\\r\\n  color: rgb(4, 47, 238);\\r\\n  font-size: 30px;\\r\\n  padding-top: 8%;\\r\\n  padding-left: 35%;\\r\\n}\\r\\n\\r\\n.article-img {\\r\\n  width: 500px;\\r\\n  height: 380px;\\r\\n  margin-top: 8%;\\r\\n  padding-left: 25%;\\r\\n}\\r\\n\\r\\n.article-sub-title {\\r\\n  margin-top: 5%;\\r\\n  padding-top: 2%;\\r\\n  padding-bottom: 2%;\\r\\n  font-family: 'Press Start 2P', cursive;\\r\\n  font-weight: 200;\\r\\n  color: rgb(47, 19, 40);\\r\\n  height: 150px;\\r\\n  overflow-y: scroll;\\r\\n  border: 2px solid rgb(173, 177, 146);\\r\\n  background-color: rgba(94, 214, 128, 0.4);\\r\\n}\\r\\n\\r\\n.comments-container {\\r\\n  margin-top: 6%;\\r\\n  color: rgb(48, 4, 1);\\r\\n  font-family: 'Press Start 2P', cursive;\\r\\n  font-size: 12px;\\r\\n  overflow-y: scroll;\\r\\n  height: 150px;\\r\\n  border: 2px solid rgb(173, 177, 146);\\r\\n  background-color: rgba(94, 214, 128, 0.4);\\r\\n}\\r\\n\\r\\n#add-comment {\\r\\n  margin-top: 9%;\\r\\n  margin-left: 23%;\\r\\n  margin-right: 27%;\\r\\n  font-family: 'Press Start 2P', cursive;\\r\\n  font-size: 16px;\\r\\n  font-weight: 900;\\r\\n  color: rgb(5, 16, 236);\\r\\n  margin-bottom: 5%;\\r\\n  text-decoration: overline;\\r\\n}\\r\\n\\r\\n.username {\\r\\n  background-color: rgba(205, 17, 64, 0.6);\\r\\n  margin-left: 25%;\\r\\n  width: 200px;\\r\\n  height: 25px;\\r\\n  margin-top: 5%;\\r\\n  margin-bottom: 2%;\\r\\n  font-family: 'Press Start 2P', cursive;\\r\\n}\\r\\n\\r\\n.comment-text {\\r\\n  background-color: rgba(205, 17, 64, 0.6);\\r\\n  margin-left: 18%;\\r\\n  margin-right: 30%;\\r\\n  margin-top: 2%;\\r\\n  margin-bottom: 2%;\\r\\n  width: 245px;\\r\\n  height: 130px;\\r\\n  font-family: 'Press Start 2P', cursive;\\r\\n}\\r\\n\\r\\n#comment-btn {\\r\\n  width: 130px;\\r\\n  margin-left: 31%;\\r\\n  font-size: 16px;\\r\\n  font-family: 'Press Start 2P', cursive;\\r\\n  height: 27px;\\r\\n  border-radius: 5px;\\r\\n  background-color: rgba(145, 199, 240, 0.5);\\r\\n}\\r\\n\\r\\n#comment-btn:hover {\\r\\n  border: 3px solid black;\\r\\n  background-color: darkkhaki;\\r\\n}\\r\\n\\r\\n#comment-btn:active {\\r\\n  border: 5px solid rgb(41, 66, 208);\\r\\n  background-color: darkkhaki;\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n  width: 95%;\\r\\n  border-radius: 1rem;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin-left: 2%;\\r\\n}\\r\\n\\r\\n.card-preview-header {\\r\\n  width: 90%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  color: rgb(53, 47, 47);\\r\\n  font-size: 28px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.close:hover,\\r\\n.close:focus {\\r\\n  color: rgb(246, 244, 253);\\r\\n  text-decoration: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://pokeapp/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://pokeapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://pokeapp/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://pokeapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://pokeapp/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://pokeapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://pokeapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://pokeapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://pokeapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://pokeapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://pokeapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_start_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/start.js */ \"./src/modules/start.js\");\n/* harmony import */ var _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/involvementAPI.js */ \"./src/modules/involvementAPI.js\");\n/* harmony import */ var _modules_likeCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/likeCounter.js */ \"./src/modules/likeCounter.js\");\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_start_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\nconst cardList = document.getElementById('pokeList');\ncardList.addEventListener('click', async (e) => {\n  if (e.target.classList.contains('likes')) {\n    await _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].postLike(e.target.id);\n    const nLikes = await (0,_modules_likeCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e.target.id);\n    const showLike = document.getElementById(e.target.id);\n    showLike.innerHTML = `Likes (${nLikes})`;\n  }\n});\n\n//# sourceURL=webpack://pokeapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ commentCounter)\n/* harmony export */ });\n/* harmony import */ var _involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementAPI.js */ \"./src/modules/involvementAPI.js\");\n\n\nasync function commentCounter(id) {\n  const allComments = await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getComments(id);\n  if (allComments !== 400) {\n    return allComments;\n  }\n  return [];\n}\n\n//# sourceURL=webpack://pokeapp/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/commentCounterDOM.js":
/*!******************************************!*\
  !*** ./src/modules/commentCounterDOM.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ commentCounterDOM)\n/* harmony export */ });\nfunction commentCounterDOM() {\n  const userCommentOnDOM = document.querySelectorAll('.user-comments');\n  return userCommentOnDOM.length;\n}\n\n//# sourceURL=webpack://pokeapp/./src/modules/commentCounterDOM.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getData)\n/* harmony export */ });\nasync function getData(url) {\n  const response = await fetch(url); // wait until response is recorded from the URL\n  const data = await response.json(); // wait until response is parsed as JSON\n  return data; // return result to show on DOM\n}\n\n//# sourceURL=webpack://pokeapp/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/involvementAPI.js":
/*!***************************************!*\
  !*** ./src/modules/involvementAPI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InvolvementAPI)\n/* harmony export */ });\nconst url = 'http://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rneS550dVMdEKWuisWBb/';\n\nclass InvolvementAPI {\n  static getComments = async (itemId) => {\n    const response = await fetch(`${url}comments?item_id=${itemId}`);\n    const data = await response.json();\n    if (data.error === undefined) {\n      return data;\n    }\n    return data.error.status;\n  };\n\n  static postComment = async (itemId, username, comment) => {\n    try {\n      const params = {\n        item_id: itemId,\n        username,\n        comment,\n      };\n      const response = await fetch(`${url}comments`, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify(params),\n      });\n      return response.status;\n    } catch (err) {\n      return err;\n    }\n  };\n\n  static getLikes = async () => {\n    const response = await fetch(`${url}likes`);\n    const data = await response.json();\n    return data;\n  };\n\n  static postLike = async (id) => {\n    const response = await fetch(`${url}likes`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({ item_id: id }),\n    });\n    return response.status;\n  }\n}\n\n//# sourceURL=webpack://pokeapp/./src/modules/involvementAPI.js?");

/***/ }),

/***/ "./src/modules/likeCounter.js":
/*!************************************!*\
  !*** ./src/modules/likeCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ likeCounter),\n/* harmony export */   \"getAllLikes\": () => (/* binding */ getAllLikes)\n/* harmony export */ });\n/* harmony import */ var _involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementAPI.js */ \"./src/modules/involvementAPI.js\");\n\n\nasync function likeCounter(id) {\n  const allLikes = await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getLikes();\n  for (let i = 0; i < allLikes.length; i += 1) {\n    if (allLikes[i].item_id === id) {\n      return allLikes[i].likes;\n    }\n  }\n  return 0;\n}\n\nasync function getAllLikes() {\n  const allLikes = await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getLikes();\n  return allLikes;\n}\n\n//# sourceURL=webpack://pokeapp/./src/modules/likeCounter.js?");

/***/ }),

/***/ "./src/modules/pokedexPopup.js":
/*!*************************************!*\
  !*** ./src/modules/pokedexPopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pokedexPopup)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _popupGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popupGenerator.js */ \"./src/modules/popupGenerator.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n/* harmony import */ var _pokemondata_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pokemondata.js */ \"./src/modules/pokemondata.js\");\n\n\n\n\n\nconst url = 'https://pokeapi.co/api/v2/ability/';\n\nasync function pokedexPopup(id) {\n  const api = new _pokemondata_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  const pokemons = await api.getmultiplePokemon(1, 24);\n  const data = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`${url}${id}`);\n  const allComments = await (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\n  const description = data.effect_entries[1].effect;\n  for (let i = 0; i < pokemons.length; i += 1) {\n    if (pokemons[i].id === parseInt(id, 10)) {\n      (0,_popupGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pokemons[i].image, pokemons[i].name, description, allComments);\n      break;\n    }\n  }\n}\n\n//# sourceURL=webpack://pokeapp/./src/modules/pokedexPopup.js?");

/***/ }),

/***/ "./src/modules/pokemonCounter.js":
/*!***************************************!*\
  !*** ./src/modules/pokemonCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction AllPokesCounter() {\n  const pokeCount = document.querySelectorAll('.pokecard').length;\n  const pokeCountText = document.getElementById('pokedex');\n  pokeCountText.textContent = `Pokedex(${pokeCount})`;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllPokesCounter);\n\n//# sourceURL=webpack://pokeapp/./src/modules/pokemonCounter.js?");

/***/ }),

/***/ "./src/modules/pokemondata.js":
/*!************************************!*\
  !*** ./src/modules/pokemondata.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass PokemonData {\n    getPokemonData = async (pokeId) => {\n      const pokedata = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)\n        .then((response) => response.json());\n        // object destructuring\n      const {\n        id, name, sprites, types,\n      } = pokedata;\n      const pokeTypes = [];\n      types.forEach((element) => {\n        pokeTypes.push(element.type.name);\n      });\n      const image = sprites.other.dream_world.front_default;\n      return {\n        id, name, pokeTypes, image,\n      };\n    }\n\n    getmultiplePokemon = async (minpokeId, maxpokeId) => {\n      const pokelist = [];\n      for (let i = minpokeId; i <= maxpokeId; i += 1) {\n        pokelist.push(this.getPokemonData(i));\n      }\n      const finalPokeList = await Promise.all(pokelist);\n      return finalPokeList;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokemonData);\n\n\n//# sourceURL=webpack://pokeapp/./src/modules/pokemondata.js?");

/***/ }),

/***/ "./src/modules/popupGenerator.js":
/*!***************************************!*\
  !*** ./src/modules/popupGenerator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ popupGenerator)\n/* harmony export */ });\nconst popup = document.querySelector('.popup');\n\nfunction popupGenerator(img, title, description, allComments) {\n  popup.innerHTML = `\n  <div class=\"modal\" id=\"modal\">\n  <div class=\"modal-content\">\n    <div class=\"card-preview-header\">\n      <h2 class=\"work-title-preview\">${title}</h2>\n      <span class=\"close\">&times;</span>\n    </div>\n    <img src=${img} class=\"article-img\" alt=\"Image cover\">\n    <div class=\"article-content\">\n      <h3 class=\"article-sub-title\">${description}</h3>\n      <div class=\"comments-container\">\n\n      </div>\n      <div class=\"formDiv\">\n        <form id=\"add-comment\">\n          <h2>Add Comments!!!</h2>\n          <label for=\"\">Your name</label>\n          <div>\n            <input type=\"text\" name=\"name\" class=\"username\" required>\n          </div>\n          <label for=\"\">Your insights</label>\n          <div>\n            <textarea name=\"insights\" id=\"\" cols=\"30\" rows=\"10\" class=\"comment-text\" required></textarea>\n          </div>\n          <input type=\"submit\" name=\"comment\" id=\"comment-btn\" title=\"Comment\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n  `;\n\n  const commentContainer = document.querySelector('.comments-container');\n  commentContainer.innerHTML = `\n  <h2 class=\"comment-heading\">Comments (${allComments.length})</h2>\n  `;\n\n  if (allComments.length !== 0) {\n    for (let i = allComments.length - 1; i >= 0; i -= 1) {\n      commentContainer.innerHTML += `\n      <h3 class=\"user-comments\">${allComments[i].username} : ${allComments[i].comment} (${allComments[i].creation_date})</h3>\n      `;\n    }\n  }\n\n  const closeButton = document.querySelector('.close');\n  closeButton.addEventListener('click', () => {\n    popup.innerHTML = '';\n  });\n}\n\n\n//# sourceURL=webpack://pokeapp/./src/modules/popupGenerator.js?");

/***/ }),

/***/ "./src/modules/start.js":
/*!******************************!*\
  !*** ./src/modules/start.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ start),\n/* harmony export */   \"scanLikes\": () => (/* binding */ scanLikes)\n/* harmony export */ });\n/* harmony import */ var _pokemondata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokemondata.js */ \"./src/modules/pokemondata.js\");\n/* harmony import */ var _pokedexPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokedexPopup.js */ \"./src/modules/pokedexPopup.js\");\n/* harmony import */ var _likeCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likeCounter.js */ \"./src/modules/likeCounter.js\");\n/* harmony import */ var _involvementAPI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./involvementAPI.js */ \"./src/modules/involvementAPI.js\");\n/* harmony import */ var _pokemonCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pokemonCounter.js */ \"./src/modules/pokemonCounter.js\");\n/* harmony import */ var _commentCounterDOM_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commentCounterDOM.js */ \"./src/modules/commentCounterDOM.js\");\n\n\n\n\n\n\n\nlet allLikes = [];\nasync function readAllLikes() {\n  allLikes = await (0,_likeCounter_js__WEBPACK_IMPORTED_MODULE_2__.getAllLikes)();\n}\n\nfunction scanLikes(id) {\n  const likesNumber = allLikes.find((item) => item.item_id === id);\n  if (likesNumber === undefined) {\n    return 0;\n  }\n  return likesNumber.likes;\n}\n\nasync function start() {\n  await readAllLikes();\n  const Api = new _pokemondata_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const pokemons = await Api.getmultiplePokemon(1, 20);\n  const pokeList = document.getElementById('pokeList');\n  pokemons.forEach((pokemon) => {\n    const likeID = `like${pokemon.id}`;\n    const commentID = pokemon.id;\n    const reserveID = `reserve${pokemon.id}`;\n    pokeList.innerHTML += `\n        <div class=\"pokecard\">\n        <p id=\"id\">${pokemon.id}</p>\n        <p id=\"name\">${pokemon.name}</p>\n        <img id=\"image\" src=\"${pokemon.image}\" alt=\"\">\n        <p id=\"types\">${pokemon.pokeTypes}</p>\n        <button class=\"likes\" id=${likeID} type=\"submit\">Likes (${scanLikes(likeID)})</button>\n        <button class=\"comments\" id=${commentID} type=\"submit\">Comments</button>\n        <button class=\"reserve\" id=${reserveID} type=\"submit\">Reserve</button>\n        </div>\n        `;\n  });\n  const allCommentButtons = document.querySelectorAll('.comments');\n  allCommentButtons.forEach((element) => {\n    element.addEventListener('click', async () => {\n      const { id } = element;\n      await (0,_pokedexPopup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\n      const commentContainer = document.querySelector('.comments-container');\n      const username = document.querySelector('.username');\n      const comment = document.querySelector('.comment-text');\n      const form = document.querySelector('form');\n      const heading = document.querySelector('.comment-heading');\n      let count = (0,_commentCounterDOM_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n      form.addEventListener('submit', async (event) => {\n        event.preventDefault();\n        const data = await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].postComment(id, username.value, comment.value);\n        if (data === 201) {\n          count += 1;\n        }\n        const currentDate = new Date();\n        const year = currentDate.getFullYear();\n        const month = currentDate.getMonth() + 1; // January is 0\n        const day = currentDate.getDate();\n\n        const dateString = `${year}-${month}-${day}`;\n\n        const commentOnDom = document.createElement('h3');\n        commentOnDom.innerHTML = `\n        ${username.value} : ${comment.value} (${dateString})\n        `;\n        username.value = '';\n        comment.value = '';\n        commentContainer.appendChild(commentOnDom);\n        heading.innerHTML = `Comments (${count})`;\n      });\n    });\n  });\n\n  (0,_pokemonCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n}\n\n//# sourceURL=webpack://pokeapp/./src/modules/start.js?");

/***/ }),

/***/ "./src/images/background-poke.PNG":
/*!****************************************!*\
  !*** ./src/images/background-poke.PNG ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4b329377b01a67568f9f.PNG\";\n\n//# sourceURL=webpack://pokeapp/./src/images/background-poke.PNG?");

/***/ }),

/***/ "./src/images/card.png":
/*!*****************************!*\
  !*** ./src/images/card.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bf1570f0ed807a044726.png\";\n\n//# sourceURL=webpack://pokeapp/./src/images/card.png?");

/***/ }),

/***/ "./src/images/icons8-facebook-like-30.png":
/*!************************************************!*\
  !*** ./src/images/icons8-facebook-like-30.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e15760d56730739fb659.png\";\n\n//# sourceURL=webpack://pokeapp/./src/images/icons8-facebook-like-30.png?");

/***/ }),

/***/ "./src/images/popupcoment.png":
/*!************************************!*\
  !*** ./src/images/popupcoment.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4ce6327bd0bd683c2147.png\";\n\n//# sourceURL=webpack://pokeapp/./src/images/popupcoment.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;