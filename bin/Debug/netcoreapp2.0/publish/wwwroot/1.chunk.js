webpackJsonp([1],{

/***/ "./src/app/+home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/+home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <div class=\"row\">\n        <sa-big-breadcrumbs [items]=\"['Home']\" icon=\"home\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            \n               \n            \n            <div class=\"well\">\n\n                <h1>Electrisim</h1>\n                <p>Calculation of load-flow for electrical systems.</p>\n            </div>\n            <!-- <button type=\"button\" class=\"btn btn-primary\"  style=\"margin-left: 14px; margin-top:8px\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"createProject()\" *ngIf=\"auth.isAuthenticated()\" > Create New Project </button> -->\n            <!-- <button type=\"button\" class=\"btn btn-primary\"  style=\"margin-left: 14px; margin-top:8px\" *ngIf=\"auth.isAuthenticated()\" (click)=\"openProject()\" > Open Project </button> -->\n            \n            <app-create-project-form *ngIf=\"auth.isAuthenticated()\"></app-create-project-form>\n            <app-open-project-form *ngIf=\"auth.isAuthenticated()\"></app-open-project-form>\n            \n            \n\n           \n            \n            <!--\n            <sa-tree-view></sa-tree-view>\n            -->\n\n            <!-- lista rozwijana -->\n             <!-- widget options:\n                usage: <sa-widget id=\"wid-id-0\" [editbutton]=\"false\">\n                [colorbutton]=\"false\"\n                [editbutton]=\"false\"\n                [togglebutton]=\"false\"\n                [deletebutton]=\"false\"\n                [fullscreenbutton]=\"false\"\n                [custombutton]=\"false\"\n                [collapsed]=\"true\"\n                [sortable]=\"false\"\n                -->\n            <!-- \n            <sa-widget [editbutton]=\"false\" color=\"blue\">\n               \n                <header>\n                    <span class=\"widget-icon\">\n                        <i class=\"fa fa-sitemap\"></i>\n                    </span>\n                    <h2>Projects</h2>\n                </header>\n                 widget div\n                <div>\n                     widget content \n                    <div class=\"widget-body\">\n                        <div class=\"tree smart-form\">\n                            <sa-tree-view [items]=\"demo2\" (change)=\"changeLstener($event)\"></sa-tree-view>\n                        </div>\n                    </div>\n                     end widget content \n                </div>\n                 end widget div -\n            </sa-widget>\n             end widget -->\n\n\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/+home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_json_api_service__ = __webpack_require__("./src/app/core/api/json-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(jsonApiService, auth) {
        this.jsonApiService = jsonApiService;
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/ui-examples/tree-view.json').subscribe(function (data) {
            _this.demo1 = data.demo1;
            _this.demo2 = data.demo2;
        });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/+home/home.component.html"),
            styles: [__webpack_require__("./src/app/+home/home.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_api_json_api_service__["a" /* JsonApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_api_json_api_service__["a" /* JsonApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/+home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_create_project_form_create_project_form_component__ = __webpack_require__("./src/app/components/create-project-form/create-project-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_open_project_form_open_project_form_component__ = __webpack_require__("./src/app/components/open-project-form/open-project-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ui_tree_view_tree_view_component__ = __webpack_require__("./src/app/shared/ui/tree-view/tree-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_routing__ = __webpack_require__("./src/app/+home/home.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_smartadmin_module__ = __webpack_require__("./src/app/shared/smartadmin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_component__ = __webpack_require__("./src/app/+home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { CallbackComponent } from './../callback/callback.component';
//import { AuthService } from './../services/auth.service';





var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__home_routing__["a" /* homeRouting */],
                __WEBPACK_IMPORTED_MODULE_6__shared_smartadmin_module__["a" /* SmartadminModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_2__shared_ui_tree_view_tree_view_component__["a" /* TreeViewComponent */], __WEBPACK_IMPORTED_MODULE_1__components_open_project_form_open_project_form_component__["a" /* OpenProjectFormComponent */], __WEBPACK_IMPORTED_MODULE_0__components_create_project_form_create_project_form_component__["a" /* CreateProjectFormComponent */]],
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "./src/app/+home/home.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__("./src/app/+home/home.component.ts");
/* unused harmony export homeRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return homeRouting; });
//import { CallbackComponent } from './../callback/callback.component';


var homeRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */],
        data: {
            pageTitle: 'Home'
        }
    },
];
var homeRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(homeRoutes);
//# sourceMappingURL=home.routing.js.map

/***/ }),

/***/ "./src/app/components/create-project-form/create-project-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/create-project-form/create-project-form.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Create Project</button>\n\n<ng-template #template>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Create Project</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"form-group\">\n\n            <div class=\"\">\n                <input [(ngModel)]=\"newProjectName\" type=\"text\" class=\"form-control\" id=\"projectName\" placeholder=\"New Project Name\" />\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"createProject()\">Save</button>\n    </div>\n</ng-template>\n\n\n<!--\n<button type=\"button\" class=\"btn btn-primary\"  style=\"margin-left: 14px; margin-top:8px\" data-toggle=\"modal\" data-target=\"#createProject\"  *ngIf=\"auth.isAuthenticated()\" > Create New Project </button>\n\n<div class=\"modal fade\" id=\"createProject\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"createProjectLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                    <span aria-hidden=\"true\">&times;</span>\n                    <span class=\"sr-only\">Close</span>\n                </button>\n                <h4 class=\"modal-title\" id=\"createProjectLabel\">Create New Project</h4>\n            </div>\n            <div class=\"modal-body\">\n            \n                <div class=\"form-group\">\n                   \n                    <div class=\"\">\n                        <input [(ngModel)]=\"newProjectName\" type=\"text\" class=\"form-control\" id=\"projectName\" placeholder=\"New Project Name\"   \n                        />\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"createProject()\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n-->"

/***/ }),

/***/ "./src/app/components/create-project-form/create-project-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_show_data_service__ = __webpack_require__("./src/app/services/show-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("./src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProjectFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateProjectFormComponent = (function () {
    function CreateProjectFormComponent(http, auth, projectService, showData, modalService) {
        this.http = http;
        this.auth = auth;
        this.projectService = projectService;
        this.showData = showData;
        this.modalService = modalService;
        this.selectedProject = {};
        this.openedProject = {};
        this.showHide = false;
    }
    CreateProjectFormComponent.prototype.ngOnInit = function () {
    };
    CreateProjectFormComponent.prototype.createProject = function () {
        this.projectService.createProject(this.newProjectName);
        // this.projectService.getIdOfCreatedProject(this.newProjectName);
        this.projectService.changeProjectName(this.newProjectName);
        // this.projectService.changeProjectId(this.projectId);
        /*
         this.projectService.getProjects().subscribe(projects => {
           this.projects = projects;
     
           
     
           this.selectedProject =  this.projects.find(p => p.name == this.newProjectName)
           console.log("this.newProjectName"+this.newProjectName);
           console.log("this.selectedProject.id"+this.selectedProject.ID);
           
            this.projectService.changeProjectId(this.selectedProject.id);
         }); */
        this.showData.showIt();
        this.modalRef.hide();
    };
    CreateProjectFormComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    CreateProjectFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-create-project-form',
            template: __webpack_require__("./src/app/components/create-project-form/create-project-form.component.html"),
            styles: [__webpack_require__("./src/app/components/create-project-form/create-project-form.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_show_data_service__["a" /* ShowDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_show_data_service__["a" /* ShowDataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* BsModalService */]) === "function" && _e || Object])
    ], CreateProjectFormComponent);
    return CreateProjectFormComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=create-project-form.component.js.map

/***/ }),

/***/ "./src/app/components/open-project-form/open-project-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box{\r\n    border: solid 1px #000;\r\n    padding: 10px;\r\n    text-align:center;\r\n  }\r\n\r\n  \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/open-project-form/open-project-form.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Open Project</button>\n\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Open Project</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    \n    <select id=\"openProject\" class=\"form-control\" [(ngModel)]=\"openedProject.project\" name=\"project_id\">\n      <option value=\"\"></option>\n      <option *ngFor=\"let p of projects\" value=\"{{p.id}}\">{{p.name}}</option>\n    </select>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide()\">Close</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openProject()\">Open</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/open-project-form/open-project-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_show_data_service__ = __webpack_require__("./src/app/services/show-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("./src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenProjectFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OpenProjectFormComponent = (function () {
    function OpenProjectFormComponent(projectService, auth, modalService, showData) {
        // this.showHide = false;
        this.projectService = projectService;
        this.auth = auth;
        this.modalService = modalService;
        this.showData = showData;
        this.openedProject = {};
        // showHide: boolean;
        this.selectedProject = {};
        //   this.showData.show = false;
    }
    OpenProjectFormComponent.prototype.ngOnInit = function () {
        /*
        this.projectService.getProjects().subscribe(projects => {
          this.projects = projects;
        });*/
    };
    OpenProjectFormComponent.prototype.changeShowStatus = function () {
        // this.showHide = !this.showHide;
    };
    OpenProjectFormComponent.prototype.openProject = function () {
        var _this = this;
        this.selectedProject = this.projects.find(function (p) { return p.id == _this.openedProject.project; });
        console.log("Selected Project ", this.selectedProject);
        this.projectService.changeProjectName(this.selectedProject.name);
        //this.projectService.changeProjectObject(this.selectedProject);
        this.projectService.changeProjectId(this.selectedProject.id);
        this.showData.showIt();
        //this.showData.show.next(true); 
        this.modalRef.hide();
    };
    OpenProjectFormComponent.prototype.openModal = function (template) {
        var _this = this;
        this.projectService.getProjects().subscribe(function (projects) {
            _this.projects = projects;
        });
        this.modalRef = this.modalService.show(template);
    };
    OpenProjectFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-open-project-form',
            template: __webpack_require__("./src/app/components/open-project-form/open-project-form.component.html"),
            styles: [__webpack_require__("./src/app/components/open-project-form/open-project-form.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* BsModalService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_show_data_service__["a" /* ShowDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_show_data_service__["a" /* ShowDataService */]) === "function" && _d || Object])
    ], OpenProjectFormComponent);
    return OpenProjectFormComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=open-project-form.component.js.map

/***/ }),

/***/ "./src/app/shared/ui/tree-view/tree-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreeViewComponent = (function () {
    function TreeViewComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TreeViewComponent.prototype.ngOnChanges = function () {
        this.items && this.render();
    };
    TreeViewComponent.prototype.render = function () {
        var root = this.el.nativeElement.getElementsByTagName('div')[0];
        root.appendChild(this.createBranch(this.items, { expanded: true }));
    };
    TreeViewComponent.prototype.createChild = function (item) {
        var _this = this;
        var i, branch;
        var li = document.createElement('li');
        li.innerHTML = item.content;
        if (item.children) {
            li.className += ' parent_li';
            i = this.addPlusMinusSign(li, item);
            branch = this.createBranch(item.children, item);
            li.appendChild(branch);
        }
        this.renderer.listen(li, 'click', function (event) {
            event.stopPropagation();
            if (item.children) {
                item.expanded = !item.expanded;
                _this.togglePlusMinusSign(i, item);
                branch.className = item.expanded ? '' : 'hidden';
            }
            _this.change.emit(item);
        });
        return li;
    };
    TreeViewComponent.prototype.createBranch = function (items, parent) {
        var _this = this;
        var ul = document.createElement('ul');
        items.forEach(function (item) {
            ul.appendChild(_this.createChild(item));
        });
        ul.className = parent.expanded ? '' : 'hidden';
        return ul;
    };
    TreeViewComponent.prototype.addPlusMinusSign = function (li, item) {
        var i = document.createElement('i');
        this.togglePlusMinusSign(i, item);
        var span = li.getElementsByTagName('span')[0];
        if (span) {
            span.appendChild(i);
        }
        else {
            li.appendChild(i);
        }
        return i;
    };
    TreeViewComponent.prototype.togglePlusMinusSign = function (i, item) {
        i.className = item.expanded ? 'sa-icon fa fa-lg fa-minus-circle' : 'sa-icon fa fa-lg fa-plus-circle';
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TreeViewComponent.prototype, "items", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TreeViewComponent.prototype, "change", void 0);
    TreeViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sa-tree-view',
            template: '<div class="sa-tree-view tree"></div>',
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
    ], TreeViewComponent);
    return TreeViewComponent;
    var _a, _b;
}());

//# sourceMappingURL=tree-view.component.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map