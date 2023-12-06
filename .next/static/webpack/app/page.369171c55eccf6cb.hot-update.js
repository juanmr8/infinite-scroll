"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/.pnpm/gsap@3.12.3/node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/.pnpm/gsap@3.12.3/node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const firstText = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const secondText = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const slider = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    let xPercent = 0;\n    let direction = 1;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\n        requestAnimationFrame(animation);\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].to(slider.current, {\n            scrollTrigger: {\n                trigger: document.documentElement,\n                start: 0,\n                end: window.innerHeight,\n                scrub: true\n            }\n        });\n    }, []);\n    const animation = ()=>{\n        if (xPercent <= -100) {\n            xPercent = 0;\n        }\n        if (xPercent > 0) {\n            xPercent = -100;\n        }\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(firstText.current, {\n            xPercent: xPercent\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(secondText.current, {\n            xPercent: xPercent\n        });\n        xPercent += 0.05 * direction;\n        requestAnimationFrame(animation);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    fill: true,\n                    src: \"/images/background.png\",\n                    alt: \"image\"\n                }, void 0, false, {\n                    fileName: \"/Users/juanmoraromero/Documents/Sites/Projects/infinite-text/src/app/page.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().sliderContainer),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().slider),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                ref: firstText,\n                                children: \"Freelance Photographer –\"\n                            }, void 0, false, {\n                                fileName: \"/Users/juanmoraromero/Documents/Sites/Projects/infinite-text/src/app/page.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                ref: secondText,\n                                children: \"Freelance Photographer –\"\n                            }, void 0, false, {\n                                fileName: \"/Users/juanmoraromero/Documents/Sites/Projects/infinite-text/src/app/page.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/juanmoraromero/Documents/Sites/Projects/infinite-text/src/app/page.js\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/juanmoraromero/Documents/Sites/Projects/infinite-text/src/app/page.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/juanmoraromero/Documents/Sites/Projects/infinite-text/src/app/page.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"W4n5Jykyjp2aJJsxgZe8/ROuMtI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDdUM7QUFDUjtBQUNQO0FBQzJCO0FBQ1Q7QUFFM0IsU0FBU007O0lBQ3RCLE1BQU1DLFlBQVlGLDZDQUFNQSxDQUFDO0lBQ3pCLE1BQU1HLGFBQWFILDZDQUFNQSxDQUFDO0lBQzFCLE1BQU1JLFNBQVNKLDZDQUFNQSxDQUFDO0lBRXRCLElBQUlLLFdBQVc7SUFDZixJQUFJQyxZQUFZO0lBRWhCUCxnREFBU0EsQ0FBQztRQUNSRiw0Q0FBSUEsQ0FBQ1UsY0FBYyxDQUFDVCw2REFBYUE7UUFDakNVLHNCQUFzQkM7UUFFdEJaLDRDQUFJQSxDQUFDYSxFQUFFLENBQUNOLE9BQU9PLE9BQU8sRUFBRTtZQUN0QkMsZUFBZTtnQkFDYkMsU0FBU0MsU0FBU0MsZUFBZTtnQkFDakNDLE9BQU87Z0JBQ1BDLEtBQUtDLE9BQU9DLFdBQVc7Z0JBQ3ZCQyxPQUFPO1lBQ1Q7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1YLFlBQVk7UUFDaEIsSUFBSUosWUFBWSxDQUFDLEtBQUs7WUFDcEJBLFdBQVc7UUFDYjtRQUNBLElBQUlBLFdBQVcsR0FBRztZQUNoQkEsV0FBVyxDQUFDO1FBQ2Q7UUFDQVIsNENBQUlBLENBQUN3QixHQUFHLENBQUNuQixVQUFVUyxPQUFPLEVBQUU7WUFDMUJOLFVBQVVBO1FBQ1o7UUFDQVIsNENBQUlBLENBQUN3QixHQUFHLENBQUNsQixXQUFXUSxPQUFPLEVBQUU7WUFDM0JOLFVBQVVBO1FBQ1o7UUFFQUEsWUFBWSxPQUFPQztRQUNuQkUsc0JBQXNCQztJQUN4QjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDYTtZQUFLQyxXQUFXNUIsOERBQVc7OzhCQUMxQiw4REFBQ0MsbURBQUtBO29CQUFDNEIsTUFBTTtvQkFBTUMsS0FBSTtvQkFBeUJDLEtBQUk7Ozs7Ozs4QkFDcEQsOERBQUNDO29CQUFJSixXQUFXNUIseUVBQXNCOzhCQUNwQyw0RUFBQ2dDO3dCQUFJSixXQUFXNUIsZ0VBQWE7OzBDQUMzQiw4REFBQ2tDO2dDQUFFQyxLQUFLNUI7MENBQVc7Ozs7OzswQ0FDbkIsOERBQUMyQjtnQ0FBRUMsS0FBSzNCOzBDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEM7R0FyRHdCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgZmlyc3RUZXh0ID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBzZWNvbmRUZXh0ID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBzbGlkZXIgPSB1c2VSZWYobnVsbCk7XG5cbiAgbGV0IHhQZXJjZW50ID0gMDtcbiAgbGV0IGRpcmVjdGlvbiA9IDE7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuXG4gICAgZ3NhcC50byhzbGlkZXIuY3VycmVudCwge1xuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBlbmQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgc2NydWI6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIGlmICh4UGVyY2VudCA8PSAtMTAwKSB7XG4gICAgICB4UGVyY2VudCA9IDA7XG4gICAgfVxuICAgIGlmICh4UGVyY2VudCA+IDApIHtcbiAgICAgIHhQZXJjZW50ID0gLTEwMDtcbiAgICB9XG4gICAgZ3NhcC5zZXQoZmlyc3RUZXh0LmN1cnJlbnQsIHtcbiAgICAgIHhQZXJjZW50OiB4UGVyY2VudCxcbiAgICB9KTtcbiAgICBnc2FwLnNldChzZWNvbmRUZXh0LmN1cnJlbnQsIHtcbiAgICAgIHhQZXJjZW50OiB4UGVyY2VudCxcbiAgICB9KTtcblxuICAgIHhQZXJjZW50ICs9IDAuMDUgKiBkaXJlY3Rpb247XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxJbWFnZSBmaWxsPXt0cnVlfSBzcmM9Jy9pbWFnZXMvYmFja2dyb3VuZC5wbmcnIGFsdD0naW1hZ2UnIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyQ29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcn0+XG4gICAgICAgICAgICA8cCByZWY9e2ZpcnN0VGV4dH0+RnJlZWxhbmNlIFBob3RvZ3JhcGhlciDigJM8L3A+XG4gICAgICAgICAgICA8cCByZWY9e3NlY29uZFRleHR9PkZyZWVsYW5jZSBQaG90b2dyYXBoZXIg4oCTPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJJbWFnZSIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiSG9tZSIsImZpcnN0VGV4dCIsInNlY29uZFRleHQiLCJzbGlkZXIiLCJ4UGVyY2VudCIsImRpcmVjdGlvbiIsInJlZ2lzdGVyUGx1Z2luIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uIiwidG8iLCJjdXJyZW50Iiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0YXJ0IiwiZW5kIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzY3J1YiIsInNldCIsIm1haW4iLCJjbGFzc05hbWUiLCJmaWxsIiwic3JjIiwiYWx0IiwiZGl2Iiwic2xpZGVyQ29udGFpbmVyIiwicCIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});