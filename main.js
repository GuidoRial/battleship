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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,500;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n    font-family: \\\"Open Sans\\\";\\n    color: black;\\n}\\n\\nheader {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\nfooter {\\n    display: flex;\\n    justify-content: center;\\n    text-align: center;\\n    position: fixed;\\n    left: 0;\\n    bottom: 0;\\n    width: 100%;\\n    background-color: #4787c2;\\n    padding: 15px;\\n    font-size: 26px;\\n    gap: 5px;\\n}\\n\\nimg {\\n    width: 25px;\\n    height: 25px;\\n    cursor: pointer;\\n    border-radius: 50%;\\n}\\n\\nmain {\\n    height: 100%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.playerSide,\\n.aiSide {\\n    width: 50%;\\n    color: #989fce;\\n    font-size: 20px;\\n    font-weight: bold;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n.aiSide {\\n    width: 50%;\\n\\n    display: none;\\n}\\n\\n.addShips {\\n    width: 50%;\\n\\n    display: flex;\\n    box-sizing: border-box;\\n    padding: 50px;\\n    align-items: center;\\n    justify-content: space-around;\\n}\\n\\n.block {\\n    background-color: #989fce;\\n    width: 50px;\\n    height: 50px;\\n    border: #5a5a5a solid 1px;\\n}\\n\\n.playerBoard,\\n.aiBoard {\\n    width: 35vw;\\n    height: 65vh;\\n    display: grid;\\n    grid-template-columns: repeat(10, 1fr);\\n    grid-template-rows: repeat(10, 1fr);\\n}\\n\\n.cell {\\n    border: #5a5a5a solid 1px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n.hit {\\n    background-color: #4787c2;\\n    color: #5a5a5a;\\n    font-size: large;\\n    font-weight: bold;\\n}\\n.occupied {\\n    background-color: #989fce;\\n}\\n.missed {\\n    background-color: lightblue;\\n    color: #5a5a5a;\\n    font-size: large;\\n    font-weight: bold;\\n}\\n\\n.modal {\\n    display: block;\\n    position: fixed;\\n    z-index: 1;\\n    padding-top: 50px;\\n    height: 100%;\\n    width: 100%;\\n    background-color: rgba(0, 0, 0, 0.4);\\n}\\n\\ninput {\\n    padding: 10px;\\n}\\n\\n#modalContent {\\n    position: relative;\\n    margin: auto;\\n    background-color: #fefefe;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-around;\\n    box-sizing: border-box;\\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n    padding: 30px;\\n    border: 1px solid #888;\\n    border-radius: 15px;\\n    height: 30%;\\n    width: 340px;\\n    font-size: 20px;\\n    color: indigo;\\n    font-weight: bolder;\\n    animation-name: animatetop;\\n    animation-duration: 0.4s;\\n}\\n\\n@keyframes animatetop {\\n    from {\\n        top: -300px;\\n        opacity: 0;\\n    }\\n    to {\\n        top: 0;\\n        opacity: 1;\\n    }\\n}\\n\\n#modalContent p {\\n    padding: 0;\\n    margin: 0;\\n}\\n#nameInput {\\n    width: 100%;\\n    height: 40px;\\n    font-size: 20px;\\n    color: indigo;\\n    margin-top: 14px;\\n    border: #5a5a5a 2px solid;\\n    border-radius: 7px;\\n}\\n#submitButton,\\n#playAgainButton {\\n    width: 200px;\\n    height: 40px;\\n    align-self: center;\\n    font-size: 20px;\\n    font-weight: bold;\\n    color: #333;\\n    background-color: aliceblue;\\n    border: 1px solid black;\\n    border-radius: 10px;\\n}\\n#endGameModal {\\n    display: none;\\n    position: fixed;\\n    z-index: 9999;\\n    padding-top: 130px;\\n    height: 100%;\\n    width: 100%;\\n    background-color: rgba(0, 0, 0, 0.4);\\n    animation-name: animatetop;\\n    animation-duration: 0.4s;\\n}\\n#endGameContent {\\n    position: relative;\\n    margin: auto;\\n    background-color: #fefefe;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-around;\\n    align-items: center;\\n    box-sizing: border-box;\\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n    padding: 30px;\\n    border: 1px solid #888;\\n    border-radius: 15px;\\n    height: 30%;\\n    width: 340px;\\n    font-size: 23px;\\n    color: indigo;\\n    font-weight: bold;\\n}\\n#playAgainButton {\\n    width: 150px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/GameBoard.js":
/*!**************************!*\
  !*** ./src/GameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameBoard\": () => (/* binding */ GameBoard)\n/* harmony export */ });\nclass GameBoard {\n    constructor() {\n        this.gameBoardArray = this.createGameBoard();\n        this.missedAttacks = [];\n    }\n    createGameBoard() {\n        let outsideArray = [];\n        let positionsArray = [];\n        for (let i = 0; i < 10; i++) {\n            for (let j = 0; j < 10; j++) {\n                positionsArray.push({\n                    shipName: undefined,\n                    shipIndex: undefined,\n                });\n            }\n            outsideArray.push(positionsArray);\n            positionsArray = [];\n        }\n        return outsideArray;\n        //1. Create two arrays, one (outsideArray) ends up containing the other (positionsArray)\n        //2. for (let j...) will add two keys and values to each index of the inner array untill positionsArray has 10 items with undefined shipName and shipIndex\n        //3. for (let i...) pushes positionsArray into outsideArray and empties the first one, repeating the process 10 times, ending up with a 10x10 grid like so...\n        /* [\n            [][][][][][][][][][]\n            [][][][][][][][][][]\n            [][][][][][][][][][]\n            [][][][][][][][][][]\n            [][][][][][][][][][]\n            [][][][][][][][][][]\n            [][][][][][][][][][]\n            [][][][][][][][][][]\n            [][][][][][][][][][]\n            [][][][][][][][][][]\n            ]*/\n    }\n    getGameBoard() {\n        return this.gameBoardArray;\n    }\n    checkIfShipPlacementIsValid(length, x, y) {\n        if (x > 10 || x < 0 || y > 10 || y < 0 || y + length > 10) {\n            return false;\n        } else {\n            for (let i = y; i < y + length; i++) {\n                if (this.gameBoardArray[i][x].shipName != undefined) {\n                    return false;\n                }\n            }\n            return true;\n        }\n    }\n    placeShip(ship, x, y) {\n        if (this.checkIfShipPlacementIsValid(ship.getShipLength(), x, y)) {\n            for (let i = 0; i < ship.getShipLength(); i++) {\n                this.gameBoardArray[y + i][x].shipName = ship;\n                this.gameBoardArray[y + i][x].shipIndex = i;\n            }\n        }\n    }\n    receiveAttack(x, y) {\n        if (this.gameBoardArray[y][x].shipName == undefined) {\n            this.missedAttacks.push({ x: x, y: y });\n        } else {\n            this.gameBoardArray[y][x].shipName.hit(\n                this.gameBoardArray[y][x].shipIndex\n            );\n        }\n    }\n    getMissedAttacksArray() {\n        return this.missedAttacks;\n    }\n\n    checkIfAllShipSunk() {\n        let key = true;\n        this.gameBoardArray.forEach((item) => {\n            item.forEach((element) => {\n                if (element.shipName) {\n                    if (element.shipName.isSunk() == false) {\n                        key = false;\n                    }\n                }\n            });\n        });\n        return key;\n    }\n}\n\n\n//# sourceURL=webpack://battleship/./src/GameBoard.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\n    constructor(name) {\n        this.name = name;\n        this.turn = true;\n    }\n\n    setName(name) {\n        this.name = name;\n    }\n\n    getName() {\n        return this.name;\n    }\n\n    endTurn(player2) {\n        if (this.turn == true) {\n            this.turn = false;\n            player2.startTurn();\n        }\n    }\n\n    startTurn() {\n        if (this.turn == false) {\n            this.turn = true;\n        }\n    }\n\n    checkTurn() {\n        return this.turn;\n    }\n\n    attack(x, y, enemyPlayer, enemyBoard) {\n        if (this.checkTurn()) {\n            enemyBoard.receiveAttack(x, y);\n            this.endTurn(enemyPlayer);\n        }\n    }\n}\n\n\n//# sourceURL=webpack://battleship/./src/Player.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n    constructor(length) {\n        this.length = length;\n        this.ship = this.createShip();\n    }\n\n\n    //Takes the lenght provided as a lenght and creates an array with as many indexes as the lenght, then asings a key value representing the health\n    createShip() {\n        let shipArray = [];\n        let i = this.length;\n        while (i > 0) {\n            shipArray.push({ hit: false });\n            i--;\n        }\n        return shipArray;\n    }\n    getShip() {\n        return this.ship;\n    }\n    getShipLength() {\n        return this.ship.length;\n    }\n\n\n    //Takes an index and changes the key value representing the hit to true\n    hit(index) {\n        return (this.ship[index].hit = true);\n    }\n    checkHit(item) {\n        if (item.hit == true) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    //If every index has a key with a hit value = hit then returns true and changes the sink status to true\n    isSunk() {\n        if (this.ship.every(this.checkHit)) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://battleship/./src/Ship.js?");

/***/ }),

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AI\": () => (/* binding */ AI)\n/* harmony export */ });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n\n\nclass AI extends _Player__WEBPACK_IMPORTED_MODULE_0__.Player {\n    constructor(name, enemyPlayer, enemyBoard) {\n        super(name, enemyBoard);\n        this.turn = false;\n        this.enemyPlayer = enemyPlayer;\n        this.enemyBoard = enemyBoard;\n        this.attackArray = [];\n    }\n    generateRandomAttack() {\n        //If it's the computer turn...\n        if (this.checkTurn()) {\n            let numberObject = { x: undefined, y: undefined };\n            while (true) {\n                let firstNumber = Math.floor(Math.random() * 10);\n                let secondNumber = Math.floor(Math.random() * 10);\n                numberObject.x = firstNumber;\n                numberObject.y = secondNumber;\n                //If the AI didn't attack those coordinates already...\n               if(!(this.attackArray.some(e => e.x == numberObject.x && e.y == numberObject.y))) { //...attack\n                    this.attackArray.push(numberObject);\n                    this.attack(\n                        numberObject.x,\n                        numberObject.y,\n                        this.enemyPlayer,\n                        this.enemyBoard\n                    );\n                    break;\n                }\n            }\n        }\n    }\n    getAttackArray() {\n        return this.attackArray;\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/ai.js?");

/***/ }),

/***/ "./src/footerFunctionality.js":
/*!************************************!*\
  !*** ./src/footerFunctionality.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footerFunctionality\": () => (/* binding */ footerFunctionality)\n/* harmony export */ });\n/* harmony import */ var _github_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github-logo.png */ \"./src/github-logo.png\");\n/* harmony import */ var _linkedin_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linkedin-logo.png */ \"./src/linkedin-logo.png\");\n\n\n\nfunction footerFunctionality() {\n    let imgContainer = document.getElementById(\"imgContainer\");\n    function openGithub() {\n        window.open(\"https://github.com/GuidoRial\", \"_blank\");\n    }\n    function openLinkedin() {\n        window.open(\n            \"https://www.linkedin.com/in/guido-rial-275552221/\",\n            \"_blank\"\n        );\n    }\n\n    const githubLogo = document.createElement(\"img\");\n    githubLogo.src = _github_logo_png__WEBPACK_IMPORTED_MODULE_0__;\n    const linkedinLogo = document.createElement(\"img\");\n    linkedinLogo.src = _linkedin_logo_png__WEBPACK_IMPORTED_MODULE_1__;\n    imgContainer.appendChild(githubLogo);\n    imgContainer.appendChild(linkedinLogo);\n\n    githubLogo.addEventListener(\"click\", openGithub);\n    linkedinLogo.addEventListener(\"click\", openLinkedin);\n}\n\n\n//# sourceURL=webpack://battleship/./src/footerFunctionality.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameBoard */ \"./src/GameBoard.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ai */ \"./src/ai.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _footerFunctionality__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footerFunctionality */ \"./src/footerFunctionality.js\");\n\n\n\n\n\n\n\n(0,_footerFunctionality__WEBPACK_IMPORTED_MODULE_5__.footerFunctionality)();\n\nconst battleshipHTML = document.querySelector(\"#battleship\");\nconst carrierHTML = document.querySelector(\"#carrier\");\nconst submarineHTML = document.querySelector(\"#submarine\");\nconst destroyerHTML = document.querySelector(\"#destroyer\");\nconst patrolboatHTML = document.querySelector(\"#patrolboat\");\nconst addShips = document.querySelector(\".addShips\");\nconst aiSide = document.querySelector(\".aiSide\");\nconst nameModal = document.querySelector(\".modal\");\nconst nameInput = document.querySelector(\"#nameInput\");\nconst modalForm = document.querySelector(\"#modalContent\");\nconst playerName = document.querySelector(\"#playerName\");\nconst endGameContent = document.querySelector(\"#endGameContent\");\nconst endGameModal = document.querySelector(\"#endGameModal\");\nconst playAgainButton = document.querySelector(\"#playAgainButton\");\nconst winnerText = document.querySelector(\"#winnerText\");\n\n//Player Ships\nlet carrier = new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(5);\nlet battleship = new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(4);\nlet destroyer = new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(3);\nlet submarine = new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(3);\nlet patrolboat = new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(2);\n//AI Ships\nlet carrierAI = new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(5);\nlet battleshipAI = new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(4);\nlet destroyerAI = new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(3);\nlet submarineAI = new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(3);\nlet patrolboatAI = new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(2);\n//gameBoards\nlet playerBoard = new _GameBoard__WEBPACK_IMPORTED_MODULE_1__.GameBoard();\nlet aiBoard = new _GameBoard__WEBPACK_IMPORTED_MODULE_1__.GameBoard();\n//create players\nlet player = new _Player__WEBPACK_IMPORTED_MODULE_2__.Player(\"Kuzuha\");\nlet ai = new _ai__WEBPACK_IMPORTED_MODULE_3__.AI(\"AI\", player, playerBoard);\n//make player ships draggable\ndragStarter(battleshipHTML);\ndragStarter(carrierHTML);\ndragStarter(submarineHTML);\ndragStarter(destroyerHTML);\ndragStarter(patrolboatHTML);\n//randomly place ai ships\nplaceAIShip(carrierAI);\nplaceAIShip(battleshipAI);\nplaceAIShip(destroyerAI);\nplaceAIShip(submarineAI);\nplaceAIShip(patrolboatAI);\n//create html boards\ncreateBoard(\"playerBoard\");\ncreateBoard(\"aiBoard\");\nupdateDisplay(\"playerBoard\", playerBoard);\nupdateDisplay(\"aiBoard\", aiBoard);\n//set player name\nmodalForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  let name = nameInput.value || \"Player 1\";\n  player.setName(name);\n  playerName.textContent = `${player.getName()}'s Board`;\n  nameModal.style.display = \"none\";\n});\n\nfunction placeAIShip(ship) {\n  while (true) {\n    let numberArray = [];\n    let firstNumber = Math.floor(Math.random() * 10);\n    let secondNumber = Math.floor(Math.random() * 10);\n    numberArray = [firstNumber, secondNumber];\n    if (\n      aiBoard.checkIfShipPlacementIsValid(\n        ship.getShipLength(),\n        numberArray[0],\n        numberArray[1]\n      )\n    ) {\n      aiBoard.placeShip(ship, numberArray[0], numberArray[1]);\n      break;\n    }\n  }\n}\n\nfunction dragStarter(element) {\n  element.addEventListener(\"dragstart\", (e) => {\n    e.dataTransfer.setData(\"text/plain\", e.target.id);\n  });\n}\n//ship adding through drop\nfunction dropShip(e) {\n  let data = e.dataTransfer.getData(\"text\");\n  let x = parseInt(e.target.getAttribute(\"data-x\"));\n  let y = parseInt(e.target.getAttribute(\"data-y\"));\n  switch (data) {\n    case \"battleship\":\n      if (playerBoard.checkIfShipPlacementIsValid(battleship.length, x, y)) {\n        playerBoard.placeShip(battleship, x, y);\n        updateDisplay(\"playerBoard\", playerBoard);\n        let ship = document.querySelector(`#${data}`);\n        addShips.removeChild(ship);\n        if (addShips.childNodes.length <= 6) {\n          addShips.style.display = \"none\";\n          aiSide.style.display = \"flex\";\n        }\n      }\n      break;\n    case \"carrier\":\n      if (playerBoard.checkIfShipPlacementIsValid(carrier.length, x, y)) {\n        playerBoard.placeShip(carrier, x, y);\n        updateDisplay(\"playerBoard\", playerBoard);\n        let ship = document.querySelector(`#${data}`);\n        addShips.removeChild(ship);\n        if (addShips.childNodes.length <= 6) {\n          addShips.style.display = \"none\";\n          aiSide.style.display = \"flex\";\n        }\n      }\n      break;\n    case \"submarine\":\n      if (playerBoard.checkIfShipPlacementIsValid(submarine.length, x, y)) {\n        playerBoard.placeShip(submarine, x, y);\n        updateDisplay(\"playerBoard\", playerBoard);\n        let ship = document.querySelector(`#${data}`);\n        addShips.removeChild(ship);\n        if (addShips.childNodes.length <= 6) {\n          addShips.style.display = \"none\";\n          aiSide.style.display = \"flex\";\n        }\n      }\n      break;\n    case \"destroyer\":\n      if (playerBoard.checkIfShipPlacementIsValid(destroyer.length, x, y)) {\n        playerBoard.placeShip(destroyer, x, y);\n        updateDisplay(\"playerBoard\", playerBoard);\n        let ship = document.querySelector(`#${data}`);\n        addShips.removeChild(ship);\n        if (addShips.childNodes.length <= 6) {\n          addShips.style.display = \"none\";\n          aiSide.style.display = \"flex\";\n        }\n      }\n      break;\n    case \"patrolboat\":\n      if (playerBoard.checkIfShipPlacementIsValid(patrolboat.length, x, y)) {\n        playerBoard.placeShip(patrolboat, x, y);\n        updateDisplay(\"playerBoard\", playerBoard);\n        let ship = document.querySelector(`#${data}`);\n        addShips.removeChild(ship);\n        if (addShips.childNodes.length <= 6) {\n          addShips.style.display = \"none\";\n          aiSide.style.display = \"flex\";\n        }\n      }\n      break;\n  }\n}\n\nfunction createBoard(boardName) {\n  let boardClass = document.querySelector(`.${boardName}`);\n  for (let i = 0; i < 10; i++) {\n    for (let j = 0; j < 10; j++) {\n      let cell = document.createElement(\"div\");\n      cell.classList.add(\"cell\");\n      cell.setAttribute(\"data-x\", j);\n      cell.setAttribute(\"data-y\", i);\n      if (boardName == \"aiBoard\") {\n        cell.addEventListener(\"click\", (e) => {\n          attackEvent(e.target);\n        });\n      } else if (boardName == \"playerBoard\") {\n        cell.addEventListener(\"dragover\", (e) => {\n          e.preventDefault();\n        });\n        cell.addEventListener(\"drop\", (e) => {\n          e.preventDefault();\n          dropShip(e);\n        });\n      }\n      boardClass.appendChild(cell);\n    }\n  }\n}\nfunction attackEvent(element) {\n  let x = element.getAttribute(\"data-x\");\n  let y = element.getAttribute(\"data-y\");\n  player.attack(x, y, ai, aiBoard);\n  updateDisplay(\"aiBoard\", aiBoard);\n  element.style.pointerEvents = \"none\";\n  if (aiBoard.checkIfAllShipSunk()) {\n    endGame(player.getName());\n  }\n  ai.generateRandomAttack();\n  updateDisplay(\"playerBoard\", playerBoard);\n  if (playerBoard.checkIfAllShipSunk()) {\n    endGame(\"AI\");\n  }\n}\nfunction endGame(winner) {\n  endGameModal.style.display = \"block\";\n  winnerText.textContent = `${winner} is the winner!!`;\n}\n//reloads the game\nplayAgainButton.addEventListener(\"click\", ()=>{\n  location.reload();\n});\nfunction updateDisplay(boardName, board) {\n  let boardArray = board.getGameBoard();\n  let missedAttacksArray = board.getMissedAttacksArray();\n\n  boardArray.forEach((row, y) => {\n    row.forEach((cell, x) => {\n      if (cell.shipName) {\n        if (\n          cell.shipName.checkHit(cell.shipName.getShip()[cell.shipIndex]) ==\n          true\n        ) {\n          let selectedCell = document.querySelector(\n            `.${boardName} [data-x=\"${x}\"][data-y =\"${y}\"]`\n          );\n          selectedCell.textContent = \"X\";\n          selectedCell.classList.add(\"hit\");\n          selectedCell.classList.remove(\"occupied\");\n        } else if (\n          cell.shipName.checkHit(cell.shipName.getShip()[cell.shipIndex]) ==\n          false\n        ) {\n          if (boardName == \"playerBoard\") {\n            let selectedCell = document.querySelector(\n              `.${boardName} [data-x=\"${x}\"][data-y =\"${y}\"]`\n            );\n            selectedCell.classList.add(\"occupied\");\n          }\n        }\n      }\n    });\n  });\n  missedAttacksArray.forEach((attack) => {\n    let selectedCell = document.querySelector(\n      `.${boardName} [data-x=\"${attack.x}\"][data-y =\"${attack.y}\"]`\n    );\n    selectedCell.textContent = \"X\";\n    selectedCell.classList.add(\"missed\");\n  });\n}\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/github-logo.png":
/*!*****************************!*\
  !*** ./src/github-logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7615be16eed41f806def.png\";\n\n//# sourceURL=webpack://battleship/./src/github-logo.png?");

/***/ }),

/***/ "./src/linkedin-logo.png":
/*!*******************************!*\
  !*** ./src/linkedin-logo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f8bd514cbeb6986bb878.png\";\n\n//# sourceURL=webpack://battleship/./src/linkedin-logo.png?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;