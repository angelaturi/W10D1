/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection {\n    constructor(htmlEleArr) {\n        this.htmlEleArr = htmlEleArr;\n    }\n\n    html(string) {\n        if (typeof string === \"string\") {\n            this.each( (node) => {\n                node.innerHTML = string;\n            });\n        } else if (this.htmlEleArr.length > 0) {\n            return this.htmlEleArr[0].innerHTML;\n        }\n    }\n\n    empty() {\n        this.html('');\n    }\n\n    append(child) {\n        if (this.htmlEleArr.length === 0) {\n            return;\n        } \n\n        if (typeof child === \"string\") {\n            this.each((node) => {\n                node.innerHTML += child;\n            });\n        } else if (child instanceof DOMNodeCollection) {\n            this.each ((node) => {\n                child.each ((childNode) => {\n                    node.appendChild(childNode.cloneNode(true));\n                });\n            });\n        }\n\n    }\n\n    attr(key, value) {\n        if (typeof value === \"string\") {\n            this.each(node => node.setAttribute(key, value));\n        } else {\n            return this.htmlEleArr[0].getAttribute(key);\n        }\n    }\n\n    addClass(nclass) {\n        this.each(node => node.classList.add(nclass));\n    }\n\n    removeClass(oldClass) {\n        this.each(node => node.classList.remove(oldClass));\n    }\n\n    children() {\n        let res = [];\n\n        this.each(node => {\n            let c = node.children;\n            res = res.concat(c);\n        });\n\n        return new DOMNodeCollection(res);\n    } \n\n    parent() {\n        let res = [];\n\n        this.each(({parentNode}) => {\n            if (!parentNode.visited) {\n                res.push(parentNode);\n                parentNode.visited = true;\n            }\n        });\n\n        return new DOMNodeCollection(res);\n    }\n\n    find(selector) {\n        let res = [];\n\n        this.each((node) => {\n            let nodeList = node.querySelectorAll(selector);\n            res = res.concat(nodeList);\n        })\n\n        return new DOMNodeCollection(res);\n    }\n\n    remove() {\n        this.each(node => node.parentNode.removeChild(node));\n    }\n\n    on(event, callback) {\n        this.each((node) => {\n            node.addEventListener(event, callback);\n            node.setAttribute(\"cb\", callback)\n        })\n    }\n\n    off(event) {\n        this.each(node => {\n            \n        })\n    }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nwindow.$l = (arg) => {\n    \n    switch (typeof arg) {\n        case \"string\":\n            return getDOMNodes(arg);\n        case \"object\":\n            if (arg instanceof HTMLElement) {\n                return new DOMNodeCollection([arg]);\n            }\n    }\n};\n\ngetDOMNodes = (selector) => {\n    const nodes = document.querySelectorAll(selector)\n    return Array.from(nodes);\n};\n\n\n//# sourceURL=webpack:///./src/index.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;