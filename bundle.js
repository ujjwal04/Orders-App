/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_rowDetailsComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/rowDetailsComponent */ \"./components/rowDetailsComponent.js\");\n/* harmony import */ var _components_rowDetailsComponent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_rowDetailsComponent__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_searchComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/searchComponent */ \"./components/searchComponent.js\");\n/* harmony import */ var _components_searchComponent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_searchComponent__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_headerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/headerComponent */ \"./components/headerComponent.js\");\n/* harmony import */ var _components_headerComponent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_headerComponent__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_rowComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/rowComponent */ \"./components/rowComponent.js\");\n/* harmony import */ var _components_paginationComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/paginationComponent */ \"./components/paginationComponent.js\");\n/* harmony import */ var _components_modalComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/modalComponent */ \"./components/modalComponent.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst main = document.querySelector(\".main\");\r\n\r\nconst init = () => {\r\n  let template = `\r\n    <div class=\"container\">\r\n        ${_components_searchComponent__WEBPACK_IMPORTED_MODULE_1___default()()}\r\n        <table class=\"orders\">\r\n            <caption class=\"heading\">Orders App</caption>\r\n            <thead>\r\n                <tr>\r\n                    ${_components_headerComponent__WEBPACK_IMPORTED_MODULE_2___default()()}\r\n                </tr>\r\n            </thead>\r\n            <tbody class=\"rows\">\r\n                ${Object(_components_rowComponent__WEBPACK_IMPORTED_MODULE_3__[\"rowComponent\"])()}\r\n            </tbody>\r\n        </table>\r\n        <div class=\"pagination\">\r\n            <ul class=\"pages\">\r\n                ${Object(_components_paginationComponent__WEBPACK_IMPORTED_MODULE_4__[\"paginationComponent\"])()}\r\n            </ul>\r\n        </div>     \r\n    </div>\r\n    ${Object(_components_modalComponent__WEBPACK_IMPORTED_MODULE_5__[\"modalComponent\"])()}\r\n`;\r\n  return template;\r\n};\r\n\r\n//main div insertion\r\nmain.innerHTML = `${init()}`;\r\n\r\n//for edit button listener\r\nconst edit_link = document.querySelectorAll(\".edit-link\");\r\nfor (let i = 0; i < edit_link.length; i++) {\r\n  edit_link[i].addEventListener(\"click\", () => {\r\n    console.log(\"asdasd\");\r\n    modal.style.display = \"block\";\r\n    document.getElementsByTagName(\"html\")[0].style.backgroundColor =\r\n      \"rgba(0,0,0,0.5)\";\r\n\r\n    const row = edit_link[i].parentNode.parentNode;\r\n    const rowValues = row.getElementsByTagName(\"td\");\r\n\r\n    document.getElementById(\"product_Name\").value = rowValues[1].textContent;\r\n    document.getElementById(\"product_Type\").value = rowValues[3].textContent;\r\n    document.getElementById(\"product_Status\").value = rowValues[4].textContent;\r\n\r\n    const saveValues = () => {\r\n      //Saving the changed values\r\n      _components_rowDetailsComponent__WEBPACK_IMPORTED_MODULE_0___default.a[\r\n        rowValues[0].textContent - 1\r\n      ].productName = document.getElementById(\"product_Name\").value;\r\n      _components_rowDetailsComponent__WEBPACK_IMPORTED_MODULE_0___default.a[\r\n        rowValues[0].textContent - 1\r\n      ].productType = document.getElementById(\"product_Type\").value;\r\n      _components_rowDetailsComponent__WEBPACK_IMPORTED_MODULE_0___default.a[rowValues[0].textContent - 1].status = document.getElementById(\r\n        \"product_Status\"\r\n      ).value;\r\n      rowValues[1].textContent = document.getElementById(\"product_Name\").value;\r\n      rowValues[3].textContent = document.getElementById(\"product_Type\").value;\r\n      rowValues[4].textContent = document.getElementById(\r\n        \"product_Status\"\r\n      ).value;\r\n\r\n      //Hiding the modal\r\n      modal.style.display = \"none\";\r\n      document.getElementsByTagName(\"html\")[0].style.backgroundColor = \"\";\r\n    };\r\n\r\n    //for save button listener\r\n    edit_btn.addEventListener(\"click\", () => {\r\n      saveValues();\r\n    });\r\n  });\r\n}\r\n\r\ndocument.getElementsByTagName(\"html\")[0].style.cssText = `\r\n  font-family:sans-serif;\r\n`;\r\n\r\n//For first 10 rows\r\nconst rows = document.querySelector(\".rows\");\r\nconst elements = rows.getElementsByTagName(\"tr\");\r\nfor (let i = 0; i < elements.length; i++) {\r\n  if (i >= 0 && i <= 9) elements[i].style.display = \"\";\r\n  else elements[i].style.display = \"none\";\r\n}\r\n\r\n//for main container css\r\nconst conatiner = document.querySelector(\".container\");\r\nconatiner.style.cssText = `\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%,-50%);\r\n    height:100vh;\r\n`;\r\n\r\n//for search bar css\r\nconst search_Container = document.querySelector(\".search-container\");\r\nsearch_Container.style.cssText = `\r\n    text-align:center;\r\n    margin-bottom:10px;\r\n`;\r\n\r\n//for search input css\r\nconst search = document.getElementById(\"search\");\r\nsearch.style.cssText = `\r\n    margin-top:3px;\r\n    border:1px solid black;\r\n    font-size:20px;\r\n    padding:5px;\r\n    outline:none;\r\n`;\r\nsearch.addEventListener(\"keyup\", () => {\r\n  const value = search.value.toLowerCase();\r\n  if (value == \"\") {\r\n    const rows = document.querySelector(\".rows\");\r\n    const elements = rows.getElementsByTagName(\"tr\");\r\n    for (let i = 0; i < elements.length; i++) {\r\n      if (i >= 0 && i <= 9) elements[i].style.display = \"\";\r\n      else elements[i].style.display = \"none\";\r\n    }\r\n  } else {\r\n    const tr = document.getElementsByTagName(\"tr\");\r\n    for (let i = 1; i <= _components_rowDetailsComponent__WEBPACK_IMPORTED_MODULE_0___default.a.length; i++) {\r\n      const td = tr[i].getElementsByTagName(\"td\")[1];\r\n      if (td.textContent.toLowerCase().includes(value))\r\n        tr[i].style.display = \"\";\r\n      else tr[i].style.display = \"none\";\r\n    }\r\n  }\r\n});\r\n\r\n//for main table css\r\nconst table = document.querySelector(\".orders\");\r\ntable.style.cssText = `\r\n    width:700px;\r\n    border-spacing: 0;\r\n    height: 200px;\r\n    border-collapse: collapse;\r\n    color:#636e72;\r\n    box-shadow: 7px 6px 9px -4px rgba(0,0,0,0.75);\r\n    `;\r\n\r\nconst caption = document.querySelector(\".heading\");\r\ncaption.style.cssText = `\r\n    font-size:23px;\r\n    font-weight: bolder;\r\n    text-transform: uppercase;\r\n    padding-bottom:5px;\r\n    `;\r\n\r\nconst th = document.getElementsByTagName(\"th\");\r\nfor (let i = 0; i < th.length; i++) {\r\n  th[i].style.cssText = `\r\n        text-align: left;\r\n        background-color: #009879;\r\n        color:white;\r\n        font-weight: bold;\r\n        border-bottom:1px solid #dddddd;\r\n        padding:15px;\r\n    `;\r\n}\r\n\r\nconst tr = document.getElementsByTagName(\"tr\");\r\nfor (let i = 0; i < tr.length; i++) {\r\n  if (i % 2 == 0) tr[i].style.backgroundColor = \"#f3f3f3\";\r\n}\r\ntr[tr.length - 1].style.borderBottom = \"3px solid #009879\";\r\n\r\nconst td = document.getElementsByTagName(\"td\");\r\nfor (let i = 0; i < td.length; i++) {\r\n  td[i].style.cssText = `\r\n    border-bottom:1px solid #dddddd;\r\n    padding:12px;\r\n    `;\r\n}\r\n\r\nconst pageContainer = document.querySelector(\".pagination\");\r\npageContainer.style.cssText = `text-align:center;`;\r\n\r\n//for pagination css\r\nconst pagination = document.querySelector(\".pages\");\r\npagination.style.cssText = `\r\n    list-style:none;\r\n    text-align:center;\r\n`;\r\n\r\n//for pagination li listener\r\nconst li = document.getElementsByTagName(\"li\");\r\nfor (let i = 0; i < li.length; i++) {\r\n  li[i].style.cssText = `\r\n            display:inline-block;\r\n            padding:10px;\r\n            margin-left:-5px;\r\n            border:1px solid #636e72;\r\n            font-size:20px;\r\n            transition:0.3s;\r\n    `;\r\n  li[i].addEventListener(\"mouseenter\", () => {\r\n    li[i].style.backgroundColor = \"#009879\";\r\n  });\r\n  li[i].addEventListener(\"mouseleave\", () => {\r\n    li[i].style.backgroundColor = \"white\";\r\n  });\r\n  li[i].addEventListener(\"click\", () => {\r\n    const rows = document.querySelector(\".rows\");\r\n    const tr = rows.getElementsByTagName(\"tr\");\r\n    for (let j = 0; j < tr.length; j++) {\r\n      if (j >= i * 10 && j < i * 10 + 10) tr[j].style.display = \"\";\r\n      else tr[j].style.display = \"none\";\r\n    }\r\n  });\r\n}\r\n\r\n//for page number css\r\nconst pageNumbers = document.querySelectorAll(\".numbers\");\r\nfor (let i = 0; i < pageNumbers.length; i++) {\r\n  pageNumbers[i].style.cssText = `\r\n        text-decoration:none;\r\n        color:black;\r\n    `;\r\n}\r\n\r\n//modal css\r\nconst modal = document.querySelector(\".simpleModal\");\r\nmodal.style.cssText = `\r\n  position:absolute;\r\n  top:50%;\r\n  left:50%;\r\n  transform:translate(-50%,-50%);\r\n  font-size:20px;\r\n  padding-top:0;\r\n  background-color:white;\r\n  width:250px;\r\n  display:none;\r\n`;\r\n\r\n//for modal form css\r\nconst form = document.getElementById(\"edit\");\r\nform.style.cssText = `\r\n  width:160px;\r\n  margin-top:10px;\r\n  margin-left:8px;\r\n`;\r\n\r\nconst editHeader = document.getElementsByTagName(\"header\");\r\neditHeader[0].style.cssText = `\r\n  background-color:#009879;\r\n  color:white;\r\n  text-transform:uppercase;\r\n  font-size:25px;\r\n  margin-top:0;\r\n  width:100%;\r\n  text-align:center;\r\n`;\r\n\r\n//for edit input css\r\nconst editInput = document.querySelectorAll(\".edit-input\");\r\nfor (let i = 0; i < editInput.length; i++) {\r\n  editInput[i].style.cssText = `\r\n    border:none;\r\n    border-bottom:0.5px solid black;\r\n    outline:none;\r\n  `;\r\n}\r\n\r\n//for modal buttons css\r\nconst btn = document.querySelectorAll(\".btn\");\r\nfor (let i = 0; i < btn.length; i++) {\r\n  btn[i].style.cssText = `\r\n    background:transparent;\r\n    border:none;\r\n    font-size:20px;\r\n    margin-bottom:8px;\r\n    padding:4px;\r\n    margin-right:4px;    \r\n    border-radius:30px;\r\n    cursor:pointer;\r\n    outline:none;\r\n  `;\r\n}\r\n\r\nconst edit_btn = document.querySelector(\".edit-btn\");\r\nedit_btn.style.cssText += `\r\n  background-color:#009879;\r\n  color:white;\r\n  border-color:#009879;\r\n  font-size:20px;\r\n`;\r\n\r\nconst cancel_btn = document.querySelector(\".cancel-btn\");\r\ncancel_btn.style.cssText += `\r\n  background-color:white;\r\n  color:#009879;\r\n  border:1px solid #009879;\r\n  font-size:20px;\r\n`;\r\ncancel_btn.addEventListener(\"click\", () => {\r\n  document.getElementsByTagName(\"html\")[0].style.backgroundColor = \"white\";\r\n  modal.style.display = \"none\";\r\n});\r\n\r\nconst cross = document.querySelector(\".cross\");\r\ncross.style.cssText = `\r\n  float:right;\r\n  margin-right:4px;\r\n  cursor:pointer;\r\n`;\r\ncross.addEventListener(\"click\", () => {\r\n  document.getElementsByTagName(\"html\")[0].style.backgroundColor = \"white\";\r\n  modal.style.display = \"none\";\r\n});\r\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./components/headerComponent.js":
/*!***************************************!*\
  !*** ./components/headerComponent.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const tableHeaders = [\r\n  \"Order ID\",\r\n  \"Product Name\",\r\n  \"Product Code\",\r\n  \"Product Type\",\r\n  \"Status\",\r\n  \"Action\"\r\n];\r\n\r\nconst headerComponent = () => {\r\n  let template = \"\";\r\n  for (let i = 0; i < tableHeaders.length; i++)\r\n    template += `<th>${tableHeaders[i]}</th>`;\r\n  return template;\r\n};\r\n\r\nmodule.exports = headerComponent;\r\n\n\n//# sourceURL=webpack:///./components/headerComponent.js?");

/***/ }),

/***/ "./components/modalComponent.js":
/*!**************************************!*\
  !*** ./components/modalComponent.js ***!
  \**************************************/
/*! exports provided: modalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modalComponent\", function() { return modalComponent; });\nconst modalComponent = () => {\r\n  let template = `\r\n    <div id=\"modal\" class=\"simpleModal\">\r\n        <header>Edit<i class=\"fa fa-times cross\" aria-hidden=\"true\"></i></header>\r\n        <form id=\"edit\">\r\n            <label for=\"product_Name\">Name:</label><br>\r\n            <input type=\"text\" id=\"product_Name\" class=\"edit-input\"><br><br><br>\r\n            <label for=\"product_Type\">Product Type:</label><br>\r\n            <input type=\"text\" id=\"product_Type\" class=\"edit-input\"><br><br><br>\r\n            <label for=\"product_Status\">Status:</label><br>\r\n            <input type=\"text\" id=\"product_Status\" class=\"edit-input\"><br><br><br>\r\n            <button class=\"btn edit-btn\">Save</button><button class=\"btn cancel-btn\">Cancel</button>\r\n        </form>\r\n    </div>`;\r\n  return template;\r\n};\r\n\n\n//# sourceURL=webpack:///./components/modalComponent.js?");

/***/ }),

/***/ "./components/paginationComponent.js":
/*!*******************************************!*\
  !*** ./components/paginationComponent.js ***!
  \*******************************************/
/*! exports provided: paginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paginationComponent\", function() { return paginationComponent; });\nconst paginationComponent = () => {\r\n  let template = \"\";\r\n  for (let i = 0; i < 10; i++) {\r\n    template += `\r\n              <li><a href=\"#\" class=\"numbers\">${i + 1}</a></li>\r\n          `;\r\n  }\r\n  return template;\r\n};\r\n\n\n//# sourceURL=webpack:///./components/paginationComponent.js?");

/***/ }),

/***/ "./components/rowComponent.js":
/*!************************************!*\
  !*** ./components/rowComponent.js ***!
  \************************************/
/*! exports provided: rowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rowComponent\", function() { return rowComponent; });\n/* harmony import */ var _rowDetailsComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rowDetailsComponent */ \"./components/rowDetailsComponent.js\");\n/* harmony import */ var _rowDetailsComponent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rowDetailsComponent__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst rowComponent = () => {\r\n  let template = \"\";\r\n  for (let i = 0; i < _rowDetailsComponent__WEBPACK_IMPORTED_MODULE_0___default.a.length; i++) {\r\n    template += `\r\n          <tr>\r\n              <td>${_rowDetailsComponent__WEBPACK_IMPORTED_MODULE_0___default.a[i].orderId}</td>\r\n              <td>${_rowDetailsComponent__WEBPACK_IMPORTED_MODULE_0___default.a[i].productName}</td>\r\n              <td>${_rowDetailsComponent__WEBPACK_IMPORTED_MODULE_0___default.a[i].productCode}</td>\r\n              <td>${_rowDetailsComponent__WEBPACK_IMPORTED_MODULE_0___default.a[i].productType}</td>\r\n              <td>${_rowDetailsComponent__WEBPACK_IMPORTED_MODULE_0___default.a[i].status}</td>\r\n              <td><a href=\"#\" class=\"edit-link\">${_rowDetailsComponent__WEBPACK_IMPORTED_MODULE_0___default.a[i].action}</a></td>\r\n          </tr>\r\n          `;\r\n  }\r\n  return template;\r\n};\r\n\n\n//# sourceURL=webpack:///./components/rowComponent.js?");

/***/ }),

/***/ "./components/rowDetailsComponent.js":
/*!*******************************************!*\
  !*** ./components/rowDetailsComponent.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const rowDetails = [\r\n  {\r\n    orderId: 1,\r\n    productName: \"Headphones\",\r\n    productCode: 123,\r\n    productType: \"Electronics\",\r\n    status: \"Dispatched\",\r\n    action: \"Edit\"\r\n  },\r\n  {\r\n    orderId: 2,\r\n    productName: \"TShirt\",\r\n    productCode: 12563,\r\n    productType: \"Clothes\",\r\n    status: \"Cancellled\",\r\n    action: \"Edit\"\r\n  },\r\n  {\r\n    orderId: 3,\r\n    productName: \"Tissue Box\",\r\n    productCode: 903,\r\n    productType: \"Health\",\r\n    status: \"Dispatched\",\r\n    action: \"Edit\"\r\n  },\r\n  {\r\n    orderId: 4,\r\n    productName: \"Chicken\",\r\n    productCode: 91,\r\n    productType: \"Food\",\r\n    status: \"In process\",\r\n    action: \"Edit\"\r\n  },\r\n  {\r\n    orderId: 5,\r\n    productName: \"Apple Iphone 11\",\r\n    productCode: 420,\r\n    productType: \"Electronics\",\r\n    status: \"Dispatched\",\r\n    action: \"Edit\"\r\n  },\r\n  {\r\n    orderId: 6,\r\n    productName: \"MI band\",\r\n    productCode: 421,\r\n    productType: \"Electronics\",\r\n    status: \"Dispatched\",\r\n    action: \"Edit\"\r\n  },\r\n  {\r\n    orderId: 7,\r\n    productName: \"ColorFit Pro 2\",\r\n    productCode: 341,\r\n    productType: \"Electronics\",\r\n    status: \"Cancelled\",\r\n    action: \"Edit\"\r\n  },\r\n  {\r\n    orderId: 8,\r\n    productName: \"Trousers\",\r\n    productCode: 420,\r\n    productType: \"Clothing\",\r\n    status: \"Dispatched\",\r\n    action: \"Edit\"\r\n  },\r\n  {\r\n    orderId: 9,\r\n    productName: \"Chicken Nuggets\",\r\n    productCode: 426,\r\n    productType: \"Food\",\r\n    status: \"In process\",\r\n    action: \"Edit\"\r\n  },\r\n  {\r\n    orderId: 10,\r\n    productName: \"Curtains\",\r\n    productCode: 429,\r\n    productType: \"Furniture\",\r\n    status: \"Dispatched\",\r\n    action: \"Edit\"\r\n  },\r\n  {\r\n    orderId: 11,\r\n    productName: \"Bed\",\r\n    productCode: 123,\r\n    productType: \"Furniture\",\r\n    status: \"Dispatched\",\r\n    action: \"Edit\"\r\n  },\r\n  {\r\n    orderId: 12,\r\n    productName: \"Chinos\",\r\n    productCode: 12563,\r\n    productType: \"Clothes\",\r\n    status: \"Cancellled\",\r\n    action: \"Edit\"\r\n  },\r\n  {\r\n    orderId: 13,\r\n    productName: \"Xbox Controller\",\r\n    productCode: 903,\r\n    productType: \"Electronics\",\r\n    status: \"Dispatched\",\r\n    action: \"Edit\"\r\n  },\r\n  {\r\n    orderId: 14,\r\n    productName: \"Salmon\",\r\n    productCode: 91,\r\n    productType: \"Food\",\r\n    status: \"In process\",\r\n    action: \"Edit\"\r\n  },\r\n  {\r\n    orderId: 15,\r\n    productName: \"Remi Note 5\",\r\n    productCode: 420,\r\n    productType: \"Electronics\",\r\n    status: \"Dispatched\",\r\n    action: \"Edit\"\r\n  },\r\n  {\r\n    orderId: 16,\r\n    productName: \"Titan Max 3\",\r\n    productCode: 421,\r\n    productType: \"Electronics\",\r\n    status: \"Dispatched\",\r\n    action: \"Edit\"\r\n  },\r\n  {\r\n    orderId: 17,\r\n    productName: \"Garnier Men\",\r\n    productCode: 341,\r\n    productType: \"Cosmetics\",\r\n    status: \"Cancelled\",\r\n    action: \"Edit\"\r\n  },\r\n  {\r\n    orderId: 18,\r\n    productName: \"Power Bank\",\r\n    productCode: 420,\r\n    productType: \"Electronics\",\r\n    status: \"Dispatched\",\r\n    action: \"Edit\"\r\n  },\r\n  {\r\n    orderId: 19,\r\n    productName: \"Glucon D\",\r\n    productCode: 426,\r\n    productType: \"Food\",\r\n    status: \"In process\",\r\n    action: \"Edit\"\r\n  },\r\n  {\r\n    orderId: 20,\r\n    productName: \"Denims\",\r\n    productCode: 429,\r\n    productType: \"Clothing\",\r\n    status: \"Dispatched\",\r\n    action: \"Edit\"\r\n  }\r\n];\r\n\r\nmodule.exports = rowDetails;\r\n\n\n//# sourceURL=webpack:///./components/rowDetailsComponent.js?");

/***/ }),

/***/ "./components/searchComponent.js":
/*!***************************************!*\
  !*** ./components/searchComponent.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const searchComponent = () => {\r\n  let template = `\r\n          <div class=\"search-container\">\r\n              <input type=\"text\" id=\"search\" placeholder=\"Search a product\">\r\n          </div>\r\n      `;\r\n  return template;\r\n};\r\n\r\nmodule.exports = searchComponent;\r\n\n\n//# sourceURL=webpack:///./components/searchComponent.js?");

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** multi ./app.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./app.js */\"./app.js\");\n\n\n//# sourceURL=webpack:///multi_./app.js?");

/***/ })

/******/ });