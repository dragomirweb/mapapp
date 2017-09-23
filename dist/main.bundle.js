webpackJsonp([1,4],{

/***/ 364:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 364;


/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(478);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/User/Desktop/Workspace/map-app/map-app/src/main.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Map App';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(638),
            styles: [__webpack_require__(636)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/User/Desktop/Workspace/map-app/map-app/src/app.component.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_map_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__(370);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__map_map_component__["a" /* MapComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAhTF0N6TFD4RG6CIoLU1TFmZhSQ-RLHGo',
                    libraries: ["places"]
                })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/User/Desktop/Workspace/map-app/map-app/src/app.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleService = (function () {
    function GoogleService(http) {
        this.http = http;
    }
    GoogleService.prototype.queryGoogle = function (query) {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + query + '&components=country:RO&key=AIzaSyA5IIU55xvBp2wPlBsdyoS3ElEtG9qKcNs').map(function (res) { return res.json(); });
    };
    ;
    GoogleService.prototype.queryGoogleRestaurants = function (lat, lng) {
        return this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + lng + '&radius=500&type=restaurant&key=AIzaSyA5IIU55xvBp2wPlBsdyoS3ElEtG9qKcNs').map(function (res) { return res.json(); });
    };
    ;
    GoogleService.prototype.queryGoogleSchools = function (lat, lng) {
        return this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + lng + '&radius=500&type=school&key=AIzaSyA5IIU55xvBp2wPlBsdyoS3ElEtG9qKcNs').map(function (res) { return res.json(); });
    };
    ;
    GoogleService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], GoogleService);
    return GoogleService;
    var _a;
}());
//# sourceMappingURL=C:/Users/User/Desktop/Workspace/map-app/map-app/src/google.service.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__google_service__ = __webpack_require__(479);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapComponent = (function () {
    function MapComponent(connect) {
        this.connect = connect;
        this.lat = 44.4212031;
        this.lng = 26.0914645;
        this.zoom = 16;
        this.query = '';
        this.queryData = [];
        this.restaurants = 'Show Restaurants';
        this.schools = 'Show Schools';
        this.marker = [
            {
                geometry: {
                    location: {
                        lat: '',
                        lng: ''
                    }
                },
                name: ''
            },
        ];
    }
    MapComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    MapComponent.prototype.getGoogleLocation = function (query) {
        var _this = this;
        if (this.query !== '') {
            //make the query google query-friendly
            var clearQuery = this.query.replace(/\s+/g, '+').toLowerCase();
            if (query !== undefined || query !== null) {
                this.connect.queryGoogle(clearQuery).subscribe(function (data) {
                    _this.queryData = data['results'];
                    console.log(_this.queryData);
                    if (_this.queryData[0].geometry === undefined || _this.queryData[0].geometry === null) {
                        _this.lat = 44.4212031;
                        _this.lng = 26.0914645;
                        alert('Locatia nu a fost gasita');
                    }
                    else {
                        _this.lat = _this.queryData[0].geometry.location.lat;
                        _this.lng = _this.queryData[0].geometry.location.lng;
                        _this.zoom = 16;
                        _this.queryData = [];
                    }
                });
            }
        }
        else {
            alert("Adresa goala");
        }
        ;
    };
    ;
    MapComponent.prototype.toggleRestaurants = function (lat, lng) {
        var _this = this;
        if (this.restaurants === 'Show Restaurants') {
            var l = this.lat.toString();
            var ln = this.lng.toString();
            this.marker = [];
            this.connect.queryGoogleRestaurants(l, ln).subscribe(function (data) {
                _this.queryData = data['results'];
                for (var i = 0; i < _this.queryData.length; i++) {
                    _this.marker.push(_this.queryData[i]);
                    _this.restaurants = "Hide Restaurants";
                }
            });
        }
        else if (this.restaurants === "Hide Restaurants") {
            this.restaurants = "Show Restaurants";
            this.marker = [
                {
                    geometry: {
                        location: {
                            lat: '',
                            lng: ''
                        }
                    },
                    name: ''
                },
            ];
        }
    };
    ;
    MapComponent.prototype.toggleSchools = function (lat, lng) {
        var _this = this;
        if (this.schools === 'Show Schools') {
            var l = this.lat.toString();
            var ln = this.lng.toString();
            this.marker = [];
            this.connect.queryGoogleSchools(l, ln).subscribe(function (data) {
                _this.queryData = data['results'];
                for (var i = 0; i < _this.queryData.length; i++) {
                    _this.marker.push(_this.queryData[i]);
                    _this.schools = "Hide Schools";
                }
            });
        }
        else if (this.schools === "Hide Schools") {
            this.schools = "Show Schools";
            this.marker = [
                {
                    geometry: {
                        location: {
                            lat: '',
                            lng: ''
                        }
                    },
                    name: ''
                },
            ];
        }
    };
    ;
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-map',
            template: __webpack_require__(639),
            styles: [__webpack_require__(637)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__google_service__["a" /* GoogleService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__google_service__["a" /* GoogleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__google_service__["a" /* GoogleService */]) === 'function' && _a) || Object])
    ], MapComponent);
    return MapComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/User/Desktop/Workspace/map-app/map-app/src/map.component.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/User/Desktop/Workspace/map-app/map-app/src/environment.js.map

/***/ }),

/***/ 636:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 637:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 638:
/***/ (function(module, exports) {

module.exports = "\n<app-map></app-map>\n"

/***/ }),

/***/ 639:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n<div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n      <h1>Map App</h1>\r\n      <div class=\"input-group\">\r\n      <input required minlength=3 type=\"text\" id=\"pac-input\" (keyup.enter)=\"getGoogleLocation()\" [(ngModel)]=\"query\" class=\"form-control\" placeholder=\"Search for...\" aria-label=\"Search for...\" >\r\n      <span class=\"input-group-btn\">\r\n        <button class=\"btn btn-secondary\" (click)=\"getGoogleLocation()\" type=\"button\">Search</button>\r\n      </span>\r\n    </div>\r\n    <div class=\"input-group show-more\">\r\n    <span class=\"input-group-btn\">\r\n      <button class=\"btn btn-secondary\" (click)=\"toggleRestaurants()\" type=\"button\">{{restaurants}}</button>\r\n    </span>\r\n  </div>\r\n  <div class=\"input-group show-more\">\r\n  <span class=\"input-group-btn\">\r\n    <button class=\"btn btn-secondary\" (click)=\"toggleSchools()\" type=\"button\">{{schools}}</button>\r\n  </span>\r\n\r\n</div>\r\n      </div>\r\n    <div class=\"col-sm-10\">\r\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [streetViewControl]=\"true\">\r\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n          <agm-marker\r\n            *ngFor=\"let m of marker; let i = index\"\r\n            (markerClick)=\"clickedMarker(m.label, i)\"\r\n            [latitude]=\"m.geometry.location.lat\"\r\n            [longitude]=\"m.geometry.location.lng\">\r\n              <agm-info-window>\r\n                <strong>{{m.name}}</strong>\r\n              </agm-info-window>\r\n          </agm-marker>\r\n      </agm-map>\r\n    </div>\r\n\r\n</div>\r\n  </div>\r\n"

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(365);


/***/ })

},[654]);
//# sourceMappingURL=main.bundle.map