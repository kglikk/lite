webpackJsonp([16],{

/***/ "./src/app/callback/callback.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__callback_routing__ = __webpack_require__("./src/app/callback/callback.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__callback_component__ = __webpack_require__("./src/app/callback/callback.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackModule", function() { return CallbackModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import {SmartadminModule} from "../shared/smartadmin.module";

var CallbackModule = (function () {
    function CallbackModule() {
    }
    CallbackModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__callback_routing__["a" /* callbackRouting */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__callback_component__["a" /* CallbackComponent */]]
        })
    ], CallbackModule);
    return CallbackModule;
}());

//# sourceMappingURL=callback.module.js.map

/***/ }),

/***/ "./src/app/callback/callback.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__callback_component__ = __webpack_require__("./src/app/callback/callback.component.ts");
/* unused harmony export callbackRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return callbackRouting; });


var callbackRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__callback_component__["a" /* CallbackComponent */],
        data: {
            pageTitle: 'Callback'
        }
    }
];
var callbackRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(callbackRoutes);
//# sourceMappingURL=callback.routing.js.map

/***/ })

});
//# sourceMappingURL=16.chunk.js.map