/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(10);  // 引用样式

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(26)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.2.2.3@less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../node_modules/.0.23.1@css-loader/index.js!./../../node_modules/.2.2.3@less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, "body,\ndiv,\ndl,\ndt,\ndd,\nul,\nol,\nli,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\npre,\ncode,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\np,\nblockquote,\nth,\ntd,\nheader,\nnav,\nsection,\narticle,\naside,\nfooter,\nfigure,\nfigcaption,\nmenu,\nbutton {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-family: \"Hiragino Sans GB\", \"Helvetica Neue\", Helvetica, STHeiTi, sans-serif, \"\\5FAE\\8F6F\\96C5\\9ED1\";\n  color: #666666;\n  background-color: #fff;\n  font-size: 0.2rem;\n  position: relative;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nfieldset,\nimg {\n  border: 0;\n}\nhr {\n  border: 0;\n  height: 1px;\n  background-color: #D9D9D9;\n}\nul,\nli,\nol {\n  list-style: none;\n}\ninput,\ntextarea,\nselect {\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n}\nbutton,\ninput {\n  border: 0;\n  background: 0;\n  -webkit-appearance: none;\n  outline: 0;\n}\na {\n  -webkit-touch-callout: none;\n  text-decoration: none;\n  color: #666666;\n  outline: 0;\n}\na:hover {\n  text-decoration: none;\n}\nem,\ni {\n  font-style: normal;\n}\nem {\n  color: #ff7200;\n}\n::-webkit-input-placeholder {\n  color: #999;\n}\nlabel {\n  cursor: pointer;\n}\n* {\n  box-sizing: border-box;\n  -ms-word-break: break-all;\n  word-break: break-all;\n  -ms-word-wrap: break-word;\n  word-wrap: break-word;\n}\n/*====================== mouse =======================*/\n.cp {\n  cursor: pointer;\n}\n.cd {\n  cursor: default;\n}\n.cna {\n  cursor: not-allowed;\n}\n/*====================== position =======================*/\n.tl {\n  text-align: left;\n}\n.tc {\n  text-align: center;\n}\n.tr {\n  text-align: right;\n}\n.bc {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fl {\n  float: left;\n}\n.fr {\n  float: right;\n}\n.cb {\n  clear: both;\n}\n.cl {\n  clear: left;\n}\n.cr {\n  clear: right;\n}\n.clearfix:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n*html .clearfix {\n  height: 1%;\n  zoom: 1;\n}\n.clearfix {\n  display: block;\n  zoom: 1;\n}\n.vt {\n  vertical-align: top;\n}\n.vm {\n  vertical-align: middle;\n}\n.vb {\n  vertical-align: bottom;\n}\n.pr {\n  position: relative;\n}\n.pa {\n  position: absolute;\n}\n.abs-right {\n  position: absolute;\n  right: 0;\n}\n.zoom {\n  zoom: 1;\n}\n.hidden {\n  visibility: hidden;\n}\n.none {\n  display: none;\n}\n.ib {\n  display: inline-block;\n}\n.inline {\n  display: inline;\n}\n.block {\n  display: block;\n}\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n.wh100 {\n  width: 100%;\n  height: 100%;\n}\n.music-bg-lbl {\n  background: url(" + __webpack_require__(13) + ") no-repeat;\n  width: 1rem;\n  height: 1rem;\n  background-size: 100% 100%;\n  position: fixed;\n  top: 0.2rem;\n  right: 0.2rem;\n  z-index: 9999;\n  -o-animation: music-rotate 7s linear infinite;\n  -moz-animation: music-rotate 7s linear infinite;\n  -webkit-animation: music-rotate 7s linear infinite;\n  animation: music-rotate 7s linear infinite;\n}\n.music-bg-lbl.music-stop {\n  -o-animation: none;\n  -moz-animation: none;\n  -webkit-animation: none;\n  animation: none;\n  background-image: url(" + __webpack_require__(14) + ");\n}\n@-webkit-keyframes music-rotate {\n  from {\n    -o-transform: rotate(0);\n    -moz-transform: rotate(0);\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n  }\n  to {\n    -o-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes music-rotate {\n  from {\n    -o-transform: rotate(0);\n    -moz-transform: rotate(0);\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n  }\n  to {\n    -o-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n.swiper-slide {\n  background-color: #fff;\n}\n.slide-loading {\n  background-color: #eed439;\n}\n.slide-loading .loading-box {\n  background: url(" + __webpack_require__(15) + ") no-repeat;\n  position: absolute;\n  background-size: 100% 100%;\n  width: 6rem;\n  height: 6rem;\n  left: 50%;\n  top: 50%;\n  -o-transform: translate3d(-50%, -50%, 0);\n  -moz-transform: translate3d(-50%, -50%, 0);\n  -webkit-transform: translate3d(-50%, -50%, 0);\n  transform: translate3d(-50%, -50%, 0);\n}\n.slide-loading .loading-box .loading-box-dot {\n  background: url(" + __webpack_require__(16) + ") no-repeat;\n  background-size: 3rem 0.7rem;\n  position: absolute;\n  width: 3rem;\n  height: 0.7rem;\n  left: 0;\n  top: 3.7rem;\n  -o-animation: loading-dot 2s linear infinite;\n  -moz-animation: loading-dot 2s linear infinite;\n  -webkit-animation: loading-dot 2s linear infinite;\n  animation: loading-dot 2s linear infinite;\n}\n.slide-loading .loading-box .loading-info {\n  font-size: 0.8rem;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  color: #333;\n}\n@-webkit-keyframes loading-dot {\n  from {\n    width: 0;\n  }\n  to {\n    width: 3rem;\n  }\n}\n@keyframes loading-dot {\n  from {\n    width: 0;\n  }\n  to {\n    width: 3rem;\n  }\n}\n.slide-ready {\n  background: url(" + __webpack_require__(17) + ") center 0 no-repeat #f15b3a;\n  background-size: 100% 100%;\n}\n.slide-ready .index-title-wrap {\n  width: 100%;\n  height: 90%;\n  background: url(" + __webpack_require__(18) + ") no-repeat;\n  background-size: 100%;\n  font-size: 0;\n  position: absolute;\n  left: 0;\n  top: 1.2rem;\n}\n.slide-ready .start-btn {\n  position: absolute;\n  background: url(" + __webpack_require__(19) + ") no-repeat;\n  background-size: 100%;\n  width: 4rem;\n  height: 1.5rem;\n  bottom: 2rem;\n  left: 1.75rem;\n}\n.game-shadow {\n  background-color: rgba(0, 0, 0, 0.7);\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n}\n.game-shadow .num-left-wrap {\n  background: url(" + __webpack_require__(20) + ") no-repeat;\n  background-size: 215px auto;\n  width: 215px;\n  height: 225px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -o-transform: translate3d(-50%, -50%, 0);\n  -moz-transform: translate3d(-50%, -50%, 0);\n  -webkit-transform: translate3d(-50%, -50%, 0);\n  transform: translate3d(-50%, -50%, 0);\n}\n.game-shadow .num-left-wrap .num-go {\n  display: none;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  position: relative;\n  top: 20%;\n  background: url(" + __webpack_require__(20) + ") 10px -590px no-repeat;\n  background-size: 215px auto;\n}\n.game-shadow .num-left-wrap .num-left {\n  width: 100px;\n  height: 125px;\n  background: url(" + __webpack_require__(20) + ") no-repeat;\n  background-size: 215px auto;\n  background-position: -45px -240px;\n  margin: 0 auto;\n  top: 25%;\n  position: relative;\n}\n.game-shadow .num-left-wrap .num-left.num-1 {\n  background-position: -45px -480px;\n}\n.game-shadow .num-left-wrap .num-left.num-2 {\n  background-position: -45px -360px;\n}\n.game-shadow .num-left-wrap .num-left.num-3 {\n  background-position: -45px -240px;\n}\n.slide-game {\n  background-color: #de4523;\n}\n.game-wrap {\n  z-index: 900;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: url(" + __webpack_require__(21) + ") no-repeat;\n  background-size: 100% 100%;\n}\n.game-wrap .game-txt {\n  z-index: 901;\n  background: url(" + __webpack_require__(22) + ") no-repeat;\n  width: 75%;\n  padding-top: 20%;\n  background-size: 100%;\n  position: absolute;\n  top: 3%;\n  left: 50%;\n  margin-left: -37.5%;\n}\n.game-wrap .game-txt > .game-score,\n.game-wrap .game-txt > .game-time {\n  position: absolute;\n  top: 50%;\n  -o-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  color: #333;\n  font-size: .6rem;\n  left: 30%;\n}\n.game-wrap .game-txt > .game-time {\n  left: 70%;\n}\n.game-wrap .game-box {\n  position: absolute;\n  z-index: 901;\n  width: 75%;\n  height: 70%;\n  left: 50%;\n  margin-left: -37.5%;\n  top: 17%;\n}\n.game-wrap .game-box .duo {\n  position: absolute;\n  width: 2rem;\n  height: 2rem;\n  background-size: 100% 100%;\n  z-index: 902;\n}\n.game-wrap .game-box .duo—styleA {\n  background-image: url(" + __webpack_require__(23) + ");\n}\n.game-wrap .game-box .duo—styleB {\n  background-image: url(" + __webpack_require__(24) + ");\n}\n.game-wrap .game-box .duo—styleC {\n  background-image: url(" + __webpack_require__(25) + ");\n}\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/music.png";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/music_sel.png";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/loading_bg.png";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/duoshou_bg_dot.png";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/index-bg.png";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/index-title.png";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/index_star_btn.png";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/num_bg.png";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/playPool_bg.png";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/duoshou_bg_06.png";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/duo_styleA.png";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/duo_styleB.png";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/duo_styleC.png";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);