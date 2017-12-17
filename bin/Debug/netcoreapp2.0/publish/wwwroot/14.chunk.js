webpackJsonp([14],{

/***/ "./src/app/+data/overheadlines/overheadlines-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_data_overheadlines_overheadlines_component__ = __webpack_require__("./src/app/+data/overheadlines/overheadlines.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverheadLinesRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2_app_data_overheadlines_overheadlines_component__["a" /* OverheadLinesComponent */],
    }];
var OverheadLinesRoutingModule = (function () {
    function OverheadLinesRoutingModule() {
    }
    OverheadLinesRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], OverheadLinesRoutingModule);
    return OverheadLinesRoutingModule;
}());

//# sourceMappingURL=overheadlines-routing.module.js.map

/***/ }),

/***/ "./src/app/+data/overheadlines/overheadlines.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Data', 'Overhead Lines']\" icon=\"table\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <!-- <sa-stats></sa-stats> -->\n  </div>\n  <div class=\"row\">\n    <div class='col-sm-12' style=\"margin-top: 10px; margin-bottom: 10px\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=onAddRow()>Add Row</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=removeSelected()>Delete selected</button>\n    </div>\n  </div>\n  <!-- widget grid -->\n  <sa-widgets-grid>\n\n\n    <div class=\"row\">\n      <article class=\"col-sm-12\">\n        <sa-widget [editbutton]=\"false\" color=\"darken\">\n          <header>\n            <span class=\"widget-icon\">\n              <i class=\"fa fa-table\"></i>\n            </span>\n\n            <h2>Overhead Lines</h2>\n          </header>\n          <div>\n            <div class=\"widget-body no-padding\">\n              <!-- <alert type=\"info\" class=\"no-margin fade in\" dismisser=\"\"> \n                <i class=\"fa-fw fa fa-info\"></i>\n                Adds zebra-striping to table row within <code>&lt;table&gt;</code> by adding the <code>.table-striped</code>\n                with the base class\n              </alert>\n              -->\n              <div class=\"table-responsive\" style=\"width: 100%; height: 500px;\">\n                  <ag-grid-angular #agGrid style=\"width: 100%;height: 100%;\" class=\"ag-fresh\" [gridOptions]=\"gridOptions\" [rowData]=\"rowData\"> \n                    <!--  [columnDefs]=\"columnDefs\" [defaultColDef]=\"defaultColDef\" -->\n              </ag-grid-angular>\n\n               \n\n              </div>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n    </div>\n  \n  </sa-widgets-grid>\n</div>"

/***/ }),

/***/ "./src/app/+data/overheadlines/overheadlines.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverheadLinesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var OverheadLinesComponent = (function () {
    function OverheadLinesComponent(http, baseUrl) {
        var _this = this;
        this.http = http;
        this.overheadline = [];
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = {
            onGridReady: function () {
                _this.gridOptions.api.sizeColumnsToFit(); //make the currently visible columns fit the screen.
            },
        };
        this.gridOptions = {
            onCellValueChanged: function (event) {
                //jeśli zmieniona wartość jest ok 
                console.log("onCellValueChanged");
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
                headers.append('Content-Type', 'application/json; charset=utf-8');
                http.put(baseUrl + 'api/OverheadLine/' + event.data.id, JSON.stringify({ ID: event.data.id, Name: event.data.name, StartNodeNo: event.data.startNodeNo, EndNodeNo: event.data.endNodeNo, Length: event.data.length, UnitaryResistance: event.data.unitaryResistance, UnitaryReactance: event.data.unitaryReactance, UnitaryCapacitance: event.data.unitaryCapacitance }), { headers: headers }).subscribe();
            },
            onCellEditingStopped: function () {
                console.log("onCellEditingStopped");
            },
            onRowDataChanged: function () {
                console.log("onRowDataChanged");
            },
            singleClickEdit: false,
            stopEditingWhenGridLosesFocus: true,
            enableSorting: true,
            enableFilter: true,
            enableColResize: true,
            animateRows: true,
            rowSelection: 'multiple',
            columnDefs: [
                // put the three columns into a group
                {
                    headerName: 'Load flow data',
                    children: [
                        { headerName: "Name", field: "name", width: 110 },
                        {
                            headerName: "Start node no.", field: "startNodeNo", type: "numericColumn",
                            valueFormatter: this.numberValueFormatter,
                            valueSetter: this.numberValueSetter
                        },
                        {
                            headerName: "End node no.", field: "endNodeNo", type: "numericColumn",
                            valueFormatter: this.numberValueFormatter,
                            valueSetter: this.numberValueSetter
                        },
                        {
                            headerName: "Length [km]", field: "length", type: "numericColumn",
                            valueFormatter: this.numberValueFormatter,
                            valueSetter: this.numberValueSetter
                        },
                        {
                            headerName: "Unitary Resistance [Ω/km]", field: "unitaryResistance", type: "numericColumn",
                            valueFormatter: this.numberValueFormatter,
                            valueSetter: this.numberValueSetter
                        },
                        {
                            headerName: "Unitary Reactance [Ω/km]", field: "unitaryReactance", type: "numericColumn",
                            valueFormatter: this.numberValueFormatter,
                            valueSetter: this.numberValueSetter
                        },
                        {
                            headerName: "Unitary Capacitance [uS/km]", field: "unitaryCapacitance", type: "numericColumn",
                            valueFormatter: this.numberValueFormatter,
                            valueSetter: this.numberValueSetter
                        }
                    ]
                }
            ],
            defaultColDef: {
                //enableCellChangeFlash: true,
                // set every column width
                width: 150,
                // make every column editable
                editable: true,
                // make every column use 'text' filter by default
                filter: 'text'
            },
        };
        //wczytaj dane z bazy danych
        this.http.get(baseUrl + 'api/OverheadLine/Get').subscribe(function (result) {
            _this.rowData = result.json();
        });
    }
    //sprawdzanie czy wprowadzona liczba do tabeli jest liczbą
    OverheadLinesComponent.prototype.numberValueFormatter = function (params) {
        if (isNaN(Number(params.value))) {
            return "";
        }
        else {
            return params.value;
        }
    };
    //ustawienie wartości jeśli jest liczbą
    OverheadLinesComponent.prototype.numberValueSetter = function (params) {
        if (isNaN(parseFloat(params.newValue)) || !isFinite(params.newValue)) {
            alert("It must be a number");
            return false; // don't set invalid numbers!
        }
        if (params.colDef.field == "startNodeNo") {
            params.data.startNodeNo = params.newValue;
        }
        if (params.colDef.field == "endNodeNo") {
            params.data.endNodeNo = params.newValue;
        }
        if (params.colDef.field == "length") {
            params.data.length = params.newValue;
        }
        if (params.colDef.field == "unitaryResistance") {
            params.data.unitaryResistance = params.newValue;
        }
        if (params.colDef.field == "unitaryReactance") {
            params.data.unitaryReactance = params.newValue;
        }
        if (params.colDef.field == "unitaryCapacitance") {
            params.data.unitaryCapacitance = params.newValue;
        }
        return true;
        //w bazie danych SQL dane są aktualizowane w onCellValueChanged  
    };
    //zaktualizowanie tabeli
    OverheadLinesComponent.prototype.printResult = function (res) {
        console.log('---------------------------------------');
        if (res.add) {
            res.add.forEach(function (rowNode) {
                console.log('Added Row Node', rowNode);
            });
        }
        if (res.remove) {
            res.remove.forEach(function (rowNode) {
                console.log('Removed Row Node', rowNode);
            });
        }
        if (res.update) {
            res.update.forEach(function (rowNode) {
                console.log('Updated Row Node', rowNode);
            });
        }
    };
    OverheadLinesComponent.prototype.removeSelected = function () {
        if (window.confirm('Are you sure you want to delete?')) {
            //front-end
            var selectedData = this.gridOptions.api.getSelectedRows();
            var rowIdArray_1 = [];
            this.gridOptions.api.forEachNode(function (node) {
                if (node.isSelected()) {
                    rowIdArray_1.push(node.data.id);
                }
            });
            var res = this.gridOptions.api.updateRowData({ remove: selectedData });
            this.printResult(res);
            //back-end
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
            headers.append('Content-Type', 'application/json; charset=utf-8');
            for (var rowId = 0; rowId < rowIdArray_1.length; rowId++) {
                this.http.delete('api/OverheadLine/' + rowIdArray_1[rowId], { headers: headers }).subscribe();
            }
        }
        else { }
    };
    OverheadLinesComponent.prototype.onAddRow = function () {
        var _this = this;
        var newItem = {
            //id: 0,
            name: "Overhead Line",
            startNodeNo: 0,
            endNodeNo: 0,
            length: 0,
            unitaryResistance: 0,
            unitaryReactance: 0,
            unitaryCapacitance: 0,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        this.http.post('api/OverheadLine', JSON.stringify({ ID: 0, Name: newItem.name, StartNodeNo: newItem.startNodeNo, EndNodeNo: newItem.endNodeNo, Length: newItem.length, UnitaryResistance: newItem.unitaryResistance, UnitaryReactance: newItem.unitaryReactance, UnitaryCapacitance: newItem.unitaryCapacitance }), { headers: headers }).subscribe(function (data) {
            //Czekamy na wykonanie sie POST, zeby zrobic GET i WPISAC dane do tabeli we front end
            // po operacji post ustawiany jest specyficzny ID w bazie SQL, aby dany wiersz w fron-end miał taki sam ID, musze sciagnac te dane do frontendu    
            _this.http.get('api/OverheadLine/Get').subscribe(function (result) {
                _this.rowData = result.json();
            });
            var res = _this.gridOptions.api.updateRowData({ add: [newItem] });
            _this.printResult(res);
        });
    };
    OverheadLinesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/+data/overheadlines/overheadlines.component.html")
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, String])
    ], OverheadLinesComponent);
    return OverheadLinesComponent;
    var _a;
}());

//# sourceMappingURL=overheadlines.component.js.map

/***/ }),

/***/ "./src/app/+data/overheadlines/overheadlines.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overheadlines_routing_module__ = __webpack_require__("./src/app/+data/overheadlines/overheadlines-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_data_overheadlines_overheadlines_component__ = __webpack_require__("./src/app/+data/overheadlines/overheadlines.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_smartadmin_module__ = __webpack_require__("./src/app/shared/smartadmin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ag_grid_angular_main__ = __webpack_require__("./node_modules/ag-grid-angular/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ag_grid_angular_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ag_grid_angular_main__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverheadLinesModule", function() { return OverheadLinesModule; });
/* harmony export (immutable) */ __webpack_exports__["getBaseUrl"] = getBaseUrl;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var OverheadLinesModule = (function () {
    function OverheadLinesModule() {
    }
    OverheadLinesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_app_shared_smartadmin_module__["a" /* SmartadminModule */],
                __WEBPACK_IMPORTED_MODULE_6_ag_grid_angular_main__["AgGridModule"].withComponents([]),
                __WEBPACK_IMPORTED_MODULE_3__overheadlines_routing_module__["a" /* OverheadLinesRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4_app_data_overheadlines_overheadlines_component__["a" /* OverheadLinesComponent */]
            ],
            providers: [
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ]
        })
    ], OverheadLinesModule);
    return OverheadLinesModule;
}());

function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
//# sourceMappingURL=overheadlines.module.js.map

/***/ })

});
//# sourceMappingURL=14.chunk.js.map