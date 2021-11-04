module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris-icons */ \"@shopify/polaris-icons\");\n/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction App() {\n  const {\n    0: first,\n    1: setFirst\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: last,\n    1: setLast\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: checkboxes,\n    1: setCheckboxes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const {\n    0: connected,\n    1: setConnected\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const handleFirstChange = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(value => setFirst(value), []);\n  const handleLastChange = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(value => setLast(value), []);\n  const handleEmailChange = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(value => setEmail(value), []);\n  const handleCheckboxesChange = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(value => setCheckboxes(value), []);\n  const toggleConnection = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(() => {\n    setConnected(!connected);\n  }, [connected]);\n  const breadcrumbs = [{\n    content: 'Sample apps'\n  }, {\n    content: 'next.js'\n  }];\n  const primaryAction = {\n    content: 'New product'\n  };\n  const secondaryActions = [{\n    content: 'Import',\n    icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__[\"ImportMinor\"]\n  }];\n  const choiceListItems = [{\n    label: 'I accept the Terms of Service',\n    value: 'false'\n  }, {\n    label: 'I consent to receiving emails',\n    value: 'false2'\n  }];\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], {\n    title: \"Polaris\",\n    breadcrumbs: breadcrumbs,\n    primaryAction: primaryAction,\n    secondaryActions: secondaryActions\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].AnnotatedSection, {\n    title: \"Form\",\n    description: \"A sample form using Polaris components.\"\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    sectioned: true\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"FormLayout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    value: email,\n    label: \"Email\",\n    placeholder: \"example@email.com\",\n    onChange: handleEmailChange,\n    autoComplete: \"email\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"ChoiceList\"], {\n    allowMultiple: true,\n    choices: choiceListItems,\n    selected: checkboxes,\n    onChange: handleCheckboxesChange\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    primary: true\n  }, \"Submit\"))))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkFwcCIsImZpcnN0Iiwic2V0Rmlyc3QiLCJ1c2VTdGF0ZSIsImxhc3QiLCJzZXRMYXN0IiwiZW1haWwiLCJzZXRFbWFpbCIsImNoZWNrYm94ZXMiLCJzZXRDaGVja2JveGVzIiwiY29ubmVjdGVkIiwic2V0Q29ubmVjdGVkIiwiaGFuZGxlRmlyc3RDaGFuZ2UiLCJ1c2VDYWxsYmFjayIsInZhbHVlIiwiaGFuZGxlTGFzdENoYW5nZSIsImhhbmRsZUVtYWlsQ2hhbmdlIiwiaGFuZGxlQ2hlY2tib3hlc0NoYW5nZSIsInRvZ2dsZUNvbm5lY3Rpb24iLCJicmVhZGNydW1icyIsImNvbnRlbnQiLCJwcmltYXJ5QWN0aW9uIiwic2Vjb25kYXJ5QWN0aW9ucyIsImljb24iLCJJbXBvcnRNaW5vciIsImNob2ljZUxpc3RJdGVtcyIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBYUE7QUFFZSxTQUFTQSxHQUFULEdBQWU7QUFDNUIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JGLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDRyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkosc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCTixzREFBUSxDQUFDLEVBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJSLHNEQUFRLENBQUMsS0FBRCxDQUExQztBQUVBLFFBQU1TLGlCQUFpQixHQUFHQyx5REFBVyxDQUFFQyxLQUFELElBQVdaLFFBQVEsQ0FBQ1ksS0FBRCxDQUFwQixFQUE2QixFQUE3QixDQUFyQztBQUNBLFFBQU1DLGdCQUFnQixHQUFHRix5REFBVyxDQUFFQyxLQUFELElBQVdULE9BQU8sQ0FBQ1MsS0FBRCxDQUFuQixFQUE0QixFQUE1QixDQUFwQztBQUNBLFFBQU1FLGlCQUFpQixHQUFHSCx5REFBVyxDQUFFQyxLQUFELElBQVdQLFFBQVEsQ0FBQ08sS0FBRCxDQUFwQixFQUE2QixFQUE3QixDQUFyQztBQUNBLFFBQU1HLHNCQUFzQixHQUFHSix5REFBVyxDQUN2Q0MsS0FBRCxJQUFXTCxhQUFhLENBQUNLLEtBQUQsQ0FEZ0IsRUFFeEMsRUFGd0MsQ0FBMUM7QUFLQSxRQUFNSSxnQkFBZ0IsR0FBR0wseURBQVcsQ0FBQyxNQUFNO0FBQ3pDRixnQkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNELEdBRm1DLEVBRWpDLENBQUNBLFNBQUQsQ0FGaUMsQ0FBcEM7QUFJQSxRQUFNUyxXQUFXLEdBQUcsQ0FBQztBQUFDQyxXQUFPLEVBQUU7QUFBVixHQUFELEVBQTJCO0FBQUNBLFdBQU8sRUFBRTtBQUFWLEdBQTNCLENBQXBCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHO0FBQUNELFdBQU8sRUFBRTtBQUFWLEdBQXRCO0FBQ0EsUUFBTUUsZ0JBQWdCLEdBQUcsQ0FBQztBQUFDRixXQUFPLEVBQUUsUUFBVjtBQUFvQkcsUUFBSSxFQUFFQyxrRUFBV0E7QUFBckMsR0FBRCxDQUF6QjtBQUVBLFFBQU1DLGVBQWUsR0FBRyxDQUN0QjtBQUFDQyxTQUFLLEVBQUUsK0JBQVI7QUFBeUNaLFNBQUssRUFBRTtBQUFoRCxHQURzQixFQUV0QjtBQUFDWSxTQUFLLEVBQUUsK0JBQVI7QUFBeUNaLFNBQUssRUFBRTtBQUFoRCxHQUZzQixDQUF4QjtBQU1BLFNBQ0UsTUFBQyxxREFBRDtBQUNFLFNBQUssRUFBQyxTQURSO0FBRUUsZUFBVyxFQUFFSyxXQUZmO0FBR0UsaUJBQWEsRUFBRUUsYUFIakI7QUFJRSxvQkFBZ0IsRUFBRUM7QUFKcEIsS0FNRSxNQUFDLHVEQUFELFFBRUUsTUFBQyx1REFBRCxDQUFRLGdCQUFSO0FBQ0UsU0FBSyxFQUFDLE1BRFI7QUFFRSxlQUFXLEVBQUM7QUFGZCxLQUlFLE1BQUMscURBQUQ7QUFBTSxhQUFTO0FBQWYsS0FDRSxNQUFDLDJEQUFELFFBRUUsTUFBQywwREFBRDtBQUNFLFNBQUssRUFBRWhCLEtBRFQ7QUFFRSxTQUFLLEVBQUMsT0FGUjtBQUdFLGVBQVcsRUFBQyxtQkFIZDtBQUlFLFlBQVEsRUFBRVUsaUJBSlo7QUFLRSxnQkFBWSxFQUFDO0FBTGYsSUFGRixFQVVFLE1BQUMsMkRBQUQ7QUFDRSxpQkFBYSxNQURmO0FBRUUsV0FBTyxFQUFFUyxlQUZYO0FBR0UsWUFBUSxFQUFFakIsVUFIWjtBQUlFLFlBQVEsRUFBRVM7QUFKWixJQVZGLEVBaUJFLE1BQUMsdURBQUQ7QUFBUSxXQUFPO0FBQWYsY0FqQkYsQ0FERixDQUpGLENBRkYsQ0FORixDQURGO0FBdUNEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIExheW91dCxcbiAgUGFnZSxcbiAgRm9vdGVySGVscCxcbiAgQ2FyZCxcbiAgTGluayxcbiAgQnV0dG9uLFxuICBGb3JtTGF5b3V0LFxuICBUZXh0RmllbGQsXG4gIEFjY291bnRDb25uZWN0aW9uLFxuICBDaG9pY2VMaXN0LFxuICBTZXR0aW5nVG9nZ2xlLFxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcbmltcG9ydCB7SW1wb3J0TWlub3J9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMtaWNvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtmaXJzdCwgc2V0Rmlyc3RdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbGFzdCwgc2V0TGFzdF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY2hlY2tib3hlcywgc2V0Q2hlY2tib3hlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjb25uZWN0ZWQsIHNldENvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlRmlyc3RDaGFuZ2UgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHNldEZpcnN0KHZhbHVlKSwgW10pO1xuICBjb25zdCBoYW5kbGVMYXN0Q2hhbmdlID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiBzZXRMYXN0KHZhbHVlKSwgW10pO1xuICBjb25zdCBoYW5kbGVFbWFpbENoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4gc2V0RW1haWwodmFsdWUpLCBbXSk7XG4gIGNvbnN0IGhhbmRsZUNoZWNrYm94ZXNDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAodmFsdWUpID0+IHNldENoZWNrYm94ZXModmFsdWUpLFxuICAgIFtdLFxuICApO1xuXG4gIGNvbnN0IHRvZ2dsZUNvbm5lY3Rpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0Q29ubmVjdGVkKCFjb25uZWN0ZWQpO1xuICB9LCBbY29ubmVjdGVkXSk7XG5cbiAgY29uc3QgYnJlYWRjcnVtYnMgPSBbe2NvbnRlbnQ6ICdTYW1wbGUgYXBwcyd9LCB7Y29udGVudDogJ25leHQuanMnfV07XG4gIGNvbnN0IHByaW1hcnlBY3Rpb24gPSB7Y29udGVudDogJ05ldyBwcm9kdWN0J307XG4gIGNvbnN0IHNlY29uZGFyeUFjdGlvbnMgPSBbe2NvbnRlbnQ6ICdJbXBvcnQnLCBpY29uOiBJbXBvcnRNaW5vcn1dO1xuXG4gIGNvbnN0IGNob2ljZUxpc3RJdGVtcyA9IFtcbiAgICB7bGFiZWw6ICdJIGFjY2VwdCB0aGUgVGVybXMgb2YgU2VydmljZScsIHZhbHVlOiAnZmFsc2UnfSxcbiAgICB7bGFiZWw6ICdJIGNvbnNlbnQgdG8gcmVjZWl2aW5nIGVtYWlscycsIHZhbHVlOiAnZmFsc2UyJ30sXG4gIF07XG5cblxuICByZXR1cm4gKFxuICAgIDxQYWdlXG4gICAgICB0aXRsZT1cIlBvbGFyaXNcIlxuICAgICAgYnJlYWRjcnVtYnM9e2JyZWFkY3J1bWJzfVxuICAgICAgcHJpbWFyeUFjdGlvbj17cHJpbWFyeUFjdGlvbn1cbiAgICAgIHNlY29uZGFyeUFjdGlvbnM9e3NlY29uZGFyeUFjdGlvbnN9XG4gICAgPlxuICAgICAgPExheW91dD5cblxuICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cbiAgICAgICAgICB0aXRsZT1cIkZvcm1cIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQSBzYW1wbGUgZm9ybSB1c2luZyBQb2xhcmlzIGNvbXBvbmVudHMuXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cbiAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxuXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJleGFtcGxlQGVtYWlsLmNvbVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVtYWlsQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8Q2hvaWNlTGlzdFxuICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVcbiAgICAgICAgICAgICAgICBjaG9pY2VzPXtjaG9pY2VMaXN0SXRlbXN9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2NoZWNrYm94ZXN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoZWNrYm94ZXNDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cblxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9QYWdlPlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "@shopify/polaris-icons":
/*!*****************************************!*\
  !*** external "@shopify/polaris-icons" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris-icons\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzLWljb25zXCI/ZWNiNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLWljb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpcy1pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris-icons\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });