webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\r\n  height: 500px;\r\n}\r\n\r\n.example-card{\r\n  width: auto;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PageNotFoundComponent; });
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
    function AppComponent(af, viewContainerRef, router) {
        this.af = af;
        this.router = router;
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
    AppComponent.prototype.logout = function () {
        this.af.auth.signOut();
        this.router.navigate(['/']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AppComponent);

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/page.not.found.html")
    })
], PageNotFoundComponent);

var _a, _b, _c;
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_firebase_config__ = __webpack_require__("../../../../../src/environments/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__ = __webpack_require__("../../../../angular2-google-maps/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_driver_driver_component__ = __webpack_require__("../../../../../src/app/dashboard/driver/driver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dashboard_sidenav_index__ = __webpack_require__("../../../../../src/app/dashboard/sidenav/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dashboard_chat_index__ = __webpack_require__("../../../../../src/app/dashboard/chat/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__dashboard_chat_messagelist_index__ = __webpack_require__("../../../../../src/app/dashboard/chat/messagelist/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dashboard_chat_messagebubble_index__ = __webpack_require__("../../../../../src/app/dashboard/chat/messagebubble/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dashboard_map_index__ = __webpack_require__("../../../../../src/app/dashboard/map/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__dashboard_driverlist_index__ = __webpack_require__("../../../../../src/app/dashboard/driverlist/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dashboard_location_location_component__ = __webpack_require__("../../../../../src/app/dashboard/location/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dashboard_about_about_component__ = __webpack_require__("../../../../../src/app/dashboard/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__dashboard_route_route_component__ = __webpack_require__("../../../../../src/app/dashboard/route/route.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__dashboard_dialog_index__ = __webpack_require__("../../../../../src/app/dashboard/dialog/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__dashboard_dialogedit_index__ = __webpack_require__("../../../../../src/app/dashboard/dialogedit/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__dashboard_dialogconfirm_index__ = __webpack_require__("../../../../../src/app/dashboard/dialogconfirm/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__dashboard_dialogchat_index__ = __webpack_require__("../../../../../src/app/dashboard/dialogchat/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_driverService_driver_service__ = __webpack_require__("../../../../../src/app/services/driverService/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_userService_user_service__ = __webpack_require__("../../../../../src/app/services/userService/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_mapService_map_service__ = __webpack_require__("../../../../../src/app/services/mapService/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng2_material_dropdown__ = __webpack_require__("../../../../ng2-material-dropdown/dist/ng2-dropdown.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng2_material_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_ng2_material_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ng2_datepicker__ = __webpack_require__("../../../../ng2-datepicker/lib-dist/ng2-datepicker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import { MdDataTableModule } from 'ng2-md-datatable';
















// import { TopnavComponent } from './dashboard/topnav/topnav.component';










// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__app_component__["b" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_17__dashboard_driver_driver_component__["a" /* DriverComponent */],
            __WEBPACK_IMPORTED_MODULE_27__dashboard_dialog_index__["a" /* DialogComponent */],
            __WEBPACK_IMPORTED_MODULE_29__dashboard_dialogconfirm_index__["a" /* DialogconfirmComponent */],
            __WEBPACK_IMPORTED_MODULE_28__dashboard_dialogedit_index__["a" /* DialogeditComponent */],
            __WEBPACK_IMPORTED_MODULE_30__dashboard_dialogchat_index__["a" /* DialogchatComponent */],
            __WEBPACK_IMPORTED_MODULE_22__dashboard_map_index__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_18__dashboard_sidenav_index__["a" /* SidenavComponent */],
            __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_26__dashboard_route_route_component__["a" /* RouteComponent */],
            __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_19__dashboard_chat_index__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_20__dashboard_chat_messagelist_index__["a" /* MessagelistComponent */],
            __WEBPACK_IMPORTED_MODULE_21__dashboard_chat_messagebubble_index__["a" /* MessagebubbleComponent */],
            __WEBPACK_IMPORTED_MODULE_25__dashboard_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_24__dashboard_location_location_component__["a" /* LocationComponent */],
            __WEBPACK_IMPORTED_MODULE_23__dashboard_driverlist_index__["a" /* DriverlistComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_34__swimlane_ngx_datatable__["NgxDatatableModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_35_ng2_material_dropdown__["Ng2DropdownModule"],
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_37_ng2_datepicker__["a" /* DatePickerModule */],
            __WEBPACK_IMPORTED_MODULE_13_angular_2_local_storage__["LocalStorageModule"].withConfig({
                prefix: 'tracking-angular2firebase',
                storageType: 'sessionStorage'
            }),
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_38__app_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_firebase_config__["a" /* firebaseConfig */]),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDy8rc5lBPawVNc9-UuyraxoXnzp9BNpOM'
            }),
            __WEBPACK_IMPORTED_MODULE_36_ng2_toastr_ng2_toastr__["ToastModule"].forRoot()
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_27__dashboard_dialog_index__["a" /* DialogComponent */], __WEBPACK_IMPORTED_MODULE_29__dashboard_dialogconfirm_index__["a" /* DialogconfirmComponent */], __WEBPACK_IMPORTED_MODULE_30__dashboard_dialogchat_index__["a" /* DialogchatComponent */], __WEBPACK_IMPORTED_MODULE_28__dashboard_dialogedit_index__["a" /* DialogeditComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_31__services_driverService_driver_service__["a" /* DriverService */], __WEBPACK_IMPORTED_MODULE_33__services_mapService_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_32__services_userService_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MdIconRegistry */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MaterialModule */]
        ]
    })
], AppModule);

//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_index__ = __webpack_require__("../../../../../src/app/dashboard/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_driver_index__ = __webpack_require__("../../../../../src/app/dashboard/driver/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_map_index__ = __webpack_require__("../../../../../src/app/dashboard/map/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_about_index__ = __webpack_require__("../../../../../src/app/dashboard/about/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_location_index__ = __webpack_require__("../../../../../src/app/dashboard/location/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_chat_index__ = __webpack_require__("../../../../../src/app/dashboard/chat/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_route_index__ = __webpack_require__("../../../../../src/app/dashboard/route/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });









var routes = [
    // ...LoginRoutes,
    // ...DashboardRoutes,
    // { path: '**', component: LoginComponent }
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_7__login_index__["a" /* LoginComponent */]
    },
    {
        path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_0__dashboard_index__["a" /* DashboardComponent */], children: [
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_about_index__["a" /* AboutComponent */] },
            { path: 'driver', component: __WEBPACK_IMPORTED_MODULE_1__dashboard_driver_index__["a" /* DriverComponent */] },
            { path: 'maps', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_map_index__["a" /* MapComponent */] },
            { path: 'location', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_location_index__["a" /* LocationComponent */] },
            { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_chat_index__["a" /* ChatComponent */] },
            { path: 'route', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_route_index__["a" /* RouteComponent */] },
        ]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__app_component__["b" /* PageNotFoundComponent */] }
];
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <h3>Trang thông tin</h3>\r\n    <hr>\r\n    <button color=\"primary\" md-raised-button (click)=logout()><md-icon  md-font-set=\"material-icons\">done</md-icon> <strong>Đăng xuất</strong></button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_userService_index__ = __webpack_require__("../../../../../src/app/services/userService/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = (function () {
    // constructor(private af: AngularFire, private router: Router) { }
    function AboutComponent(af, userService) {
        this.af = af;
        this.userService = userService;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.logout = function () {
        this.userService.logout();
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/dashboard/about/about.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_userService_index__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_userService_index__["a" /* UserService */]) === "function" && _b || Object])
], AboutComponent);

var _a, _b;
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/about.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/about/about.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("../../../../../src/app/dashboard/about/index.ts");
/* unused harmony export AboutRoutes */

var AboutRoutes = [{
        path: "about",
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* AboutComponent */]
    }
];
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/about.routes.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/about/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_component__ = __webpack_require__("../../../../../src/app/dashboard/about/about.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__about_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_routes__ = __webpack_require__("../../../../../src/app/dashboard/about/about.routes.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <div>\r\n                <md-list style=\"border: 1px solid #CCCCCC; border-radius: 5px;\" md-scroll-y>\r\n                    <h4 align=\"center\" md-header><strong>Tin nhắn</strong></h4>\r\n                    <md-divider></md-divider>\r\n                    <md-nav-list style=\"overflow-y: scroll; overflow-x: hidden;\">\r\n                        <md-list-item (click)=changeDriver(driver) *ngFor=\"let driver of driverList\">\r\n                            <div class=\"container\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-3\">\r\n                                       <div id=\"avatar\"></div>\r\n                                    </div>\r\n                                    <div class=\"col-md-7\">\r\n                                        <h6 md-line><strong>{{driver.name}}</strong></h6>\r\n                                        <p md-line> {{driver.lastestMessage}} </p>\r\n                                    </div>\r\n                                    <div class=\"col-md-2\">\r\n                                        <span style=\"color:#00E676\" *ngIf=\"driver.status\">&nbsp;&nbsp;<i class=\"material-icons\">done</i></span>\r\n                                        <span style=\"color:#FF1744\" *ngIf=\"!driver.status\">&nbsp;&nbsp;<i class=\"material-icons\">highlight_off</i></span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </md-list-item>\r\n                    </md-nav-list>\r\n                    <md-divider></md-divider>\r\n                </md-list>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n            <div class=\"content-chat\">\r\n                <app-messagebubble [data]=\"messages\"></app-messagebubble>\r\n            </div>\r\n            <div class=\"input-area\">\r\n                <md-input-container class=\"example-full-width\">\r\n                    <input (keyup.enter)=\"onEnter()\" placeholder=\"Nhập tin nhắn..\" [(ngModel)]=\"messageValue\" [ngModelOptions]=\"{standalone:true}\"\r\n                        mdInput>\r\n                </md-input-container>\r\n                <button (click)=sendTest() md-mini-fab>\r\n                    <md-icon>send</md-icon>\r\n                </button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/chat/chat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-chat {\n  border: 1px solid #cccccc;\n  height: 350px;\n  border-radius: 10px;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n\n#avatar {\n  background-image: url(\"http://gdurl.com/1jHQ\");\n  width: 55px;\n  height: 50px;\n  background-size: cover;\n  background-position: center;\n  border-radius: 50%; }\n\n.input-area {\n  border: 1px solid #cccccc;\n  border-radius: 5px;\n  padding: 10px 0px 10px 30px; }\n\n.example-full-width {\n  width: 80%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driverService_index__ = __webpack_require__("../../../../../src/app/services/driverService/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ChatService } from "../../services/chatService/index";

var ChatComponent = (function () {
    function ChatComponent(localStorage, af, driverService) {
        this.localStorage = localStorage;
        this.af = af;
        this.driverService = driverService;
        this.messageValue = "";
        this.uidCurrent = "";
        this.driverService = driverService;
        // this.uidCurrent = this.driverList.first().$key;
        // console.log(this.driverList.first());
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.driverService.getAllDriver().forEach(function (driver) {
            var index = 0;
            driver.forEach(function (element) {
                if (element.$key == localStorage.getItem("uid")) {
                    driver.splice(index, 1);
                }
                index++;
            });
            _this.driverList = driver;
        });
    };
    ChatComponent.prototype.sendTest = function () {
        console.log(this.messageValue);
        var messageContent = { messageContent: this.messageValue, date: Date.now(), messagebubble: "S" };
        if (this.messageValue != "") {
            this.messages.push(messageContent);
            messageContent.messagebubble = "R";
            this.messagesReverse.push(messageContent);
            this.messageValue = "";
        }
    };
    ChatComponent.prototype.send = function (to, message) {
        console.log(this.messageValue);
        var messageContent = { messageContent: this.messageValue, date: Date.now(), messagebubble: "S" };
        if (this.messageValue != "") {
            this.messages.push(messageContent);
            messageContent.messagebubble = "R";
            this.messagesReverse.push(messageContent);
            this.messageValue = "";
        }
    };
    ChatComponent.prototype.changeDriver = function (driver) {
        this.uidCurrent = "/messages/" + this.localStorage.get("uid") + "/" + driver.$key;
        console.log(this.uidCurrent);
        this.messages = this.af.list(this.uidCurrent.toString());
        this.messagesReverse = this.af.list("/messages/" + driver.$key + "/" + this.localStorage.get("uid"));
    };
    ChatComponent.prototype.onEnter = function () {
        console.log(this.messageValue);
        var messageContent = { messageContent: this.messageValue, date: Date.now(), messagebubble: "S" };
        if (this.messageValue != "") {
            this.messages.push(messageContent);
            messageContent.messagebubble = "R";
            this.messagesReverse.push(messageContent);
            this.messageValue = "";
        }
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/dashboard/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/chat/chat.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_driverService_index__["a" /* DriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_driverService_index__["a" /* DriverService */]) === "function" && _c || Object])
], ChatComponent);

var _a, _b, _c;
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/chat/chat.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("../../../../../src/app/dashboard/chat/index.ts");
/* unused harmony export ChatRoutes */

var ChatRoutes = [{
        path: "chat",
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* ChatComponent */]
    }
];
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/chat.routes.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/chat/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_component__ = __webpack_require__("../../../../../src/app/dashboard/chat/chat.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__chat_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_routes__ = __webpack_require__("../../../../../src/app/dashboard/chat/chat.routes.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/chat/messagebubble/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__messagebubble_component__ = __webpack_require__("../../../../../src/app/dashboard/chat/messagebubble/messagebubble.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__messagebubble_component__["a"]; });

//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/chat/messagebubble/messagebubble.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let message of data|async\" class=\"clear\">\r\n    <div *ngIf='message.messagebubble==\"S\"' class=\"from-me\">\r\n        <p style=\"margin:4px\"> {{message.messageContent}} </p>\r\n    </div>\r\n    <div *ngIf='message.messagebubble==\"R\"' class=\"from-them\">\r\n        <p> {{message.messageContent}} </p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/chat/messagebubble/messagebubble.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\n  clear: both; }\n\n.from-me {\n  position: relative;\n  padding: 3px;\n  margin: 5px 0px 2px 0px;\n  color: white;\n  background: #0B93F6;\n  border-radius: 15px;\n  float: right; }\n  .from-me:before {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    bottom: -2px;\n    right: -7px;\n    height: 20px;\n    border-right: 20px solid #0B93F6;\n    border-bottom-left-radius: 16px 14px;\n    -webkit-transform: translate(0, -2px); }\n  .from-me:after {\n    content: \"\";\n    position: absolute;\n    z-index: 1;\n    bottom: -2px;\n    right: -56px;\n    width: 26px;\n    height: 20px;\n    background: white;\n    border-bottom-left-radius: 10px;\n    -webkit-transform: translate(-30px, -2px); }\n\n.from-them {\n  position: relative;\n  padding: 10px 20px;\n  background: #E5E5EA;\n  border-radius: 15px;\n  color: black;\n  float: left; }\n  .from-them:before {\n    content: \"\";\n    position: absolute;\n    z-index: 2;\n    bottom: -2px;\n    left: -7px;\n    height: 20px;\n    border-left: 20px solid #E5E5EA;\n    border-bottom-right-radius: 16px 14px;\n    -webkit-transform: translate(0, -2px); }\n  .from-them:after {\n    content: \"\";\n    position: absolute;\n    z-index: 3;\n    bottom: -2px;\n    left: 4px;\n    width: 26px;\n    height: 20px;\n    background: white;\n    border-bottom-right-radius: 10px;\n    -webkit-transform: translate(-30px, -2px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/chat/messagebubble/messagebubble.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagebubbleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagebubbleComponent = (function () {
    // constructor(private af: AngularFire, private router: Router) { }
    function MessagebubbleComponent() {
        this.data = [];
    }
    MessagebubbleComponent.prototype.ngOnInit = function () {
    };
    return MessagebubbleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MessagebubbleComponent.prototype, "data", void 0);
MessagebubbleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-messagebubble',
        template: __webpack_require__("../../../../../src/app/dashboard/chat/messagebubble/messagebubble.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/chat/messagebubble/messagebubble.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MessagebubbleComponent);

//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/messagebubble.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/chat/messagelist/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__messagelist_component__ = __webpack_require__("../../../../../src/app/dashboard/chat/messagelist/messagelist.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__messagelist_component__["a"]; });

//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/chat/messagelist/messagelist.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/dashboard/chat/messagelist/messagelist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagelistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagelistComponent = (function () {
    // constructor(private af: AngularFire, private router: Router) { }
    function MessagelistComponent() {
    }
    MessagelistComponent.prototype.ngOnInit = function () {
    };
    return MessagelistComponent;
}());
MessagelistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-messagelist',
        template: __webpack_require__("../../../../../src/app/dashboard/chat/messagelist/messagelist.component.html"),
    }),
    __metadata("design:paramtypes", [])
], MessagelistComponent);

//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/messagelist.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".router-card{\r\n    height: 90%;\r\n    width: 80%;\r\n    float: right;\r\n    margin-top: 40px;\r\n}\r\n\r\n.router-card-sub{\r\n    margin-top: 40px;\r\n}\r\n\r\n.side-nav-container{\r\n    height: 85%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/dashboard/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_userService_index__ = __webpack_require__("../../../../../src/app/services/userService/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = (function () {
    function DashboardComponent(localStorage, router, af, userService) {
        var _this = this;
        this.localStorage = localStorage;
        this.router = router;
        this.af = af;
        this.userService = userService;
        this.isLoggedIn = false;
        this.af.authState.subscribe(function (auth) {
            if (auth == null) {
                console.log('Not Logged In');
                _this.router.navigate(['/']);
                _this.isLoggedIn = false;
                _this.userService.loginMessage = "Bạn chưa đăng nhập";
            }
            else {
                localStorage.set("uid", _this.af.auth.currentUser.uid);
                console.log('Logged In');
                _this.router.navigate(['/dashboard/location']);
                _this.isLoggedIn = true;
            }
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
    };
    return DashboardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('app-sidenav'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sidenav_sidenav_component__["a" /* SidenavComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sidenav_sidenav_component__["a" /* SidenavComponent */]) === "function" && _a || Object)
], DashboardComponent.prototype, "sidenav", void 0);
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_userService_index__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_userService_index__["a" /* UserService */]) === "function" && _e || Object])
], DashboardComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("../../../../../src/app/dashboard/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutes; });
// import { MapRoutes } from "./map/index";
// import { DriverRoutes } from "./driver/index";
// import { AboutRoutes } from "./about/index";
// import { SidenavRoutes } from "./sidenav/index";
// import { TopnavRoutes } from "./topnav/index";
// import { LocationRoutes } from "./location/index";

var DashboardRoutes = [
    {
        path: "dashboard",
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* DashboardComponent */]
    }
];
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/dashboard.routes.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dialog/dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Thêm tài xế</h2>\r\n<hr>\r\n<md-dialog-content>\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row align-items-center\">\r\n      <md-input-container color=\"accent\">\r\n        <input type=\"text\" name=\"name\" ([ngModel])=\"driverObject.name\" (change)=\"changeDriverName($event)\" mdInput placeholder=\"Tên hiển thị\">\r\n      </md-input-container>\r\n      <md-input-container color=\"accent\">\r\n        <input type=\"email\" mdInput (change)=\"changeEmail($event)\" placeholder=\"Email\">\r\n      </md-input-container>\r\n    </div>\r\n    <div class=\"row align-items-center\">\r\n      <md-input-container color=\"accent\">\r\n        <input type=\"text\" mdInput placeholder=\"Họ\">\r\n      </md-input-container>\r\n      <md-input-container color=\"accent\">\r\n        <input type=\"text\" mdInput placeholder=\"Tên đệm\">\r\n      </md-input-container>\r\n    </div>\r\n    <div class=\"row align-items-center\">\r\n      <md-input-container color=\"accent\">\r\n        <input type=\"number\" ([ngModel])=\"driverObject.age\" (change)=\"changeDriverAge($event)\" mdInput placeholder=\"Tuổi\">\r\n      </md-input-container>\r\n      <md-input-container color=\"accent\">\r\n        <input mdInput type=\"date\" (change)=\"changeDriverDateofBirth($event)\" placeholder=\"Ngày sinh\">\r\n      </md-input-container>\r\n    </div>\r\n    <div class=\"row align-items-center\">\r\n      <md-input-container color=\"accent\">\r\n        <input mdInput (change)=\"changeCarName($event)\" placeholder=\"Tên xe\">\r\n      </md-input-container>\r\n      <md-input-container color=\"accent\">\r\n        <input mdInput (change)=\"changeDriverLisenceNumber($event)\" placeholder=\"Biển số\">\r\n      </md-input-container>\r\n    </div>\r\n  </div>\r\n</md-dialog-content>\r\n<md-dialog-actions class=\"float-right\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <button color=\"primary\" md-raised-button (click)=addDriver()><md-icon  md-font-set=\"material-icons\">done</md-icon> <strong>Thêm</strong></button>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <button md-raised-button (click)=\"close()\"><md-icon  md-font-set=\"material-icons\">close</md-icon><strong> Hủy bỏ</strong></button>\r\n    </div>\r\n  </div>\r\n</md-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driverService_index__ = __webpack_require__("../../../../../src/app/services/driverService/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* unused harmony export Driver */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Driver } from '../../models/driver/';
var DialogComponent = (function () {
    function DialogComponent(toastCtrl, dialogRef, driverService, localStorage) {
        this.toastCtrl = toastCtrl;
        this.dialogRef = dialogRef;
        this.driverService = driverService;
        this.localStorage = localStorage;
        this.driver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.driverObject = new Driver({
            name: "",
            age: "",
            licensePlace: "",
            status: false,
            firstName: "",
            lastName: "",
            lastestMessage: "",
            role: "driver",
            dob: "",
            carName: "",
            Email: ""
        });
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.prototype.addDriver = function () {
        console.log('Vao trong add roi ne');
        if (this.driverObject.age != null || this.driverObject.dob != null || this.driverObject.licensePlace != "" || this.driverObject.name != null) {
            this.driverService.registerDriver(this.driverObject, this.driverObject.Email);
            this.driverObject = new Driver();
        }
        this.close();
    };
    DialogComponent.prototype.changeCarName = function (event) {
        this.driverObject.carName = event.target.value;
    };
    DialogComponent.prototype.changeEmail = function (event) {
        this.driverObject.Email = event.target.value;
    };
    DialogComponent.prototype.changeDriverName = function (event) {
        this.driverObject.name = event.target.value;
    };
    DialogComponent.prototype.changeDriverFirstName = function (event) {
        this.driverObject.firstName = event.target.value;
    };
    DialogComponent.prototype.changeDriverLastName = function (event) {
        this.driverObject.lastName = event.target.value;
    };
    DialogComponent.prototype.changeDriverAge = function (event) {
        this.driverObject.age = event.target.value;
    };
    DialogComponent.prototype.changeDriverLisenceNumber = function (event) {
        this.driverObject.licensePlace = event.target.value;
    };
    ;
    DialogComponent.prototype.changeDriverDateofBirth = function (event) {
        this.driverObject.dob = event.target.value;
    };
    DialogComponent.prototype.editDriver = function (driverId) {
    };
    DialogComponent.prototype.getDriver = function (driverId) {
    };
    DialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    return DialogComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], DialogComponent.prototype, "driver", void 0);
DialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dialog',
        template: __webpack_require__("../../../../../src/app/dashboard/dialog/dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dialog/dialog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_driverService_index__["a" /* DriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_driverService_index__["a" /* DriverService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _e || Object])
], DialogComponent);

var Driver = (function () {
    function Driver(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    Driver.prototype.getNameValue = function () {
        return this.name;
    };
    return Driver;
}());

var _a, _b, _c, _d, _e;
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dialog/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_component__ = __webpack_require__("../../../../../src/app/dashboard/dialog/dialog.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dialog_component__["a"]; });

//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dialogchat/dialogchat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dialogchat/dialogchat.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Thêm tài xế</h2>\r\n<hr>\r\n<div md-dialog-content>\r\n  <div class=\"col-md-12\">\r\n\r\n  </div>\r\n</div>\r\n<div class=\"row align-items-center\" md-dialog-actions>\r\n  <md-input-container color=\"accent\">\r\n    <input mdInput placeholder=\"Tin nhắn\">\r\n  </md-input-container>\r\n  <button color=\"primary\" md-raised-button (click)=sendMessage()><md-icon  md-font-set=\"material-icons\">done</md-icon> <strong>Gửi </strong></button>\r\n</div>\r\n<hr>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dialogchat/dialogchat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogchatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogchatComponent = (function () {
    function DialogchatComponent() {
    }
    DialogchatComponent.prototype.ngOnInit = function () {
    };
    return DialogchatComponent;
}());
DialogchatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dialogchat',
        template: __webpack_require__("../../../../../src/app/dashboard/dialogchat/dialogchat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dialogchat/dialogchat.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DialogchatComponent);

//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/dialogchat.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dialogchat/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialogchat_component__ = __webpack_require__("../../../../../src/app/dashboard/dialogchat/dialogchat.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dialogchat_component__["a"]; });

//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dialogconfirm/dialogconfirm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dialogconfirm/dialogconfirm.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Bạn chắc chứ?</h2>\r\n<hr>\r\n<button color=\"primary\" md-raised-button (click)=\"delete()\">Đồng ý</button>\r\n<button md-raised-button (click)=\"close()\">Hủy bỏ</button>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dialogconfirm/dialogconfirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driverService_index__ = __webpack_require__("../../../../../src/app/services/driverService/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogconfirmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogconfirmComponent = (function () {
    function DialogconfirmComponent(toastCtrl, mdialogRef, driverService) {
        this.toastCtrl = toastCtrl;
        this.mdialogRef = mdialogRef;
        this.driverService = driverService;
    }
    DialogconfirmComponent.prototype.ngOnInit = function () {
    };
    DialogconfirmComponent.prototype.delete = function () {
        this.driverService.removeDriver();
        this.toastCtrl.info("Xóa thành công", "Thông tin", {
            toastLife: 2000,
            showCloseButton: true,
            positionClass: "toast-bottom-right"
        });
        this.mdialogRef.close();
    };
    DialogconfirmComponent.prototype.close = function () {
        this.mdialogRef.close();
    };
    return DialogconfirmComponent;
}());
DialogconfirmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dialogconfirm',
        template: __webpack_require__("../../../../../src/app/dashboard/dialogconfirm/dialogconfirm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dialogconfirm/dialogconfirm.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_driverService_index__["a" /* DriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_driverService_index__["a" /* DriverService */]) === "function" && _c || Object])
], DialogconfirmComponent);

var _a, _b, _c;
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/dialogconfirm.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dialogconfirm/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialogconfirm_component__ = __webpack_require__("../../../../../src/app/dashboard/dialogconfirm/dialogconfirm.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dialogconfirm_component__["a"]; });

//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dialogedit/dialogedit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dialogedit/dialogedit.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Chỉnh sửa thông tin tài xế</h2>\r\n<hr>\r\n<md-dialog-content>\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row align-items-center\">\r\n      <md-input-container color=\"accent\">\r\n        <input type=\"text\" name=\"name\" ([ngModel])=\"driverObject.name\" (change)=\"changeDriverName($event)\" mdInput placeholder=\"Tên hiển thị\">\r\n      </md-input-container>\r\n      <md-input-container color=\"accent\">\r\n        <input type=\"email\" mdInput (change)=\"changeEmail($event)\" placeholder=\"Email\">\r\n      </md-input-container>\r\n    </div>\r\n    <div class=\"row align-items-center\">\r\n      <md-input-container color=\"accent\">\r\n        <input type=\"text\" mdInput placeholder=\"Họ\">\r\n      </md-input-container>\r\n      <md-input-container color=\"accent\">\r\n        <input type=\"text\" mdInput placeholder=\"Tên đệm\">\r\n      </md-input-container>\r\n    </div>\r\n    <div class=\"row align-items-center\">\r\n      <md-input-container color=\"accent\">\r\n        <input type=\"number\" ([ngModel])=\"driverObject.age\" (change)=\"changeDriverAge($event)\" mdInput placeholder=\"Tuổi\">\r\n      </md-input-container>\r\n      <md-input-container color=\"accent\">\r\n        <input mdInput type=\"date\" (change)=\"changeDriverDateofBirth($event)\" placeholder=\"Ngày sinh\">\r\n      </md-input-container>\r\n    </div>\r\n    <div class=\"row align-items-center\">\r\n      <md-input-container color=\"accent\">\r\n        <input mdInput (change)=\"changeCarName($event)\" placeholder=\"Tên xe\">\r\n      </md-input-container>\r\n      <md-input-container color=\"accent\">\r\n        <input mdInput (change)=\"changeDriverLisenceNumber($event)\" placeholder=\"Biển số\">\r\n      </md-input-container>\r\n    </div>\r\n  </div>\r\n</md-dialog-content>\r\n<md-dialog-actions class=\"float-right\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <button color=\"primary\" md-raised-button (click)=addDriver()><md-icon  md-font-set=\"material-icons\">done</md-icon> <strong>Chỉnh sửa</strong></button>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <button md-raised-button (click)=\"close()\"><md-icon  md-font-set=\"material-icons\">close</md-icon><strong> Hủy bỏ</strong></button>\r\n    </div>\r\n  </div>\r\n</md-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dialogedit/dialogedit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogeditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogeditComponent = (function () {
    function DialogeditComponent() {
    }
    DialogeditComponent.prototype.ngOnInit = function () {
    };
    return DialogeditComponent;
}());
DialogeditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dialogedit',
        template: __webpack_require__("../../../../../src/app/dashboard/dialogedit/dialogedit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dialogedit/dialogedit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DialogeditComponent);

//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/dialogedit.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dialogedit/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialogedit_component__ = __webpack_require__("../../../../../src/app/dashboard/dialogedit/dialogedit.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dialogedit_component__["a"]; });

//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/driver/driver.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h4>\r\n        <md-icon>directions_car</md-icon><strong> Danh sách tài xế</strong></h4>\r\n    </div>\r\n    <br>\r\n    <hr>\r\n    <div class=\"col-md-4 justify-content-right\">\r\n      <button (click)=\"openDialog()\" color=\"accent\" md-raised-button>\r\n            <md-icon md-font-set=\"material-icons\">add_box</md-icon><span> Thêm tài xế</span>\r\n          </button>\r\n    </div>\r\n  </div>\r\n  <br/>\r\n</div>\r\n<div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-xs-12 col-lg-12\">\r\n      <ngx-datatable *ngIf=\"isDataAvailable\" [rows]=\"rows\" [columns]=\"columns\" class=\"material\" [columnMode]=\"'flex'\" [headerHeight]=\"50\"\r\n        [footerHeight]=\"50\" [rowHeight]=\"'auto'\">\r\n        <ngx-datatable-column name=\"STT\" prop=\"id\" [flexGrow]=\"1\">\r\n          <ng-template let-value=\"value\" let-column=\"name\" ngx-datatable-cell-template>\r\n            {{value}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Họ và tên\" prop=\"name\" [flexGrow]=\"2\">\r\n          <ng-template let-row=\"rows\" let-column=\"name\" let-value=\"value\" ngx-datatable-cell-template>\r\n            {{value}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Ngày sinh\" prop=\"dob\" [flexGrow]=\"2\">\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            {{value}}\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Trạng thái\" prop=\"status\" [flexGrow]=\"1\">\r\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <span style=\"color:#00E676\" *ngIf=\"value\">&nbsp;&nbsp;<i class=\"material-icons\">done</i></span>\r\n            <span style=\"color:#FF1744\" *ngIf=\"!value\">&nbsp;&nbsp;<i class=\"material-icons\">highlight_off</i></span>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Thao tác\" prop=\"$key\" [flexGrow]=\"4\">\r\n          <ng-template let-column=\"elementsID\" let-value=\"value\" ngx-datatable-cell-template>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\"><button (click)=\"edit(value)\" color=\"accent\" md-raised-button>\r\n                  <md-icon md-font-set=\"material-icons\">mode_edit</md-icon><span></span>\r\n                </button></div>\r\n              <div class=\"col-md-3\"><button (click)=\"delete(value)\" color=\"warn\" md-raised-button>\r\n                  <md-icon  md-font-set=\"material-icons\">delete</md-icon><span></span>\r\n                </button></div>\r\n              <div class=\"col-md-3\"><button (click)=\"chat()\" color=\"primary\" md-raised-button>\r\n                  <md-icon md-font-set=\"material-icons\">info</md-icon><span></span>\r\n                </button></div>\r\n            </div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n      </ngx-datatable>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/driver/driver.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_driverService_index__ = __webpack_require__("../../../../../src/app/services/driverService/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/dashboard/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialogconfirm_index__ = __webpack_require__("../../../../../src/app/dashboard/dialogconfirm/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialogchat_index__ = __webpack_require__("../../../../../src/app/dashboard/dialogchat/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialogedit_index__ = __webpack_require__("../../../../../src/app/dashboard/dialogedit/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DriverComponent = (function () {
    function DriverComponent(toastCtrl, localStorage, dialog, af, driverService) {
        this.toastCtrl = toastCtrl;
        this.localStorage = localStorage;
        this.dialog = dialog;
        this.driverService = driverService;
        this.rows = [];
        this.elementsID = [];
        this.isDataAvailable = false;
    }
    DriverComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialog_dialog_component__["a" /* DialogComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    DriverComponent.prototype.edit = function (key) {
        console.log(key);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__dialogedit_index__["a" /* DialogeditComponent */]);
    };
    DriverComponent.prototype.chat = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__dialogchat_index__["a" /* DialogchatComponent */]);
    };
    DriverComponent.prototype.delete = function (value) {
        console.log(value);
        this.driverService.idDriver = value;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__dialogconfirm_index__["a" /* DialogconfirmComponent */]);
    };
    DriverComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(localStorage.getItem("uid"));
        this.driverService.getAllDriver().forEach(function (driver) {
            while (driver == null) {
                setInterval(10);
            }
            var index = 0;
            driver.forEach(function (item) {
                if (item.$key == localStorage.getItem("uid")) {
                    driver.splice(index, 1);
                    console.log("It's work");
                }
                else {
                    _this.elementsID.push(item.$key);
                }
                index++;
            });
            _this.rows = driver;
            var length = index;
            for (var index1 = 0; index1 < length; index1++) {
                _this.rows[index1].id = index1 + 1;
            }
            _this.isDataAvailable = true;
        });
    };
    return DriverComponent;
}());
DriverComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-driver',
        template: __webpack_require__("../../../../../src/app/dashboard/driver/driver.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_angular_2_local_storage__["LocalStorageService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_driverService_index__["a" /* DriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_driverService_index__["a" /* DriverService */]) === "function" && _e || Object])
], DriverComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/driver.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/driver/driver.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("../../../../../src/app/dashboard/driver/index.ts");
/* unused harmony export DriverRoutes */

var DriverRoutes = [
    {
        path: "driver",
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* DriverComponent */]
    }
];
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/driver.routes.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/driver/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__driver_component__ = __webpack_require__("../../../../../src/app/dashboard/driver/driver.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__driver_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__driver_routes__ = __webpack_require__("../../../../../src/app/dashboard/driver/driver.routes.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/driverlist/driverlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/driverlist/driverlist.component.html":
/***/ (function(module, exports) {

module.exports = "<h4><strong><md-icon>directions_car</md-icon> Danh sách tài xế</strong></h4>\r\n<md-card>\r\n  <!--<md-card-header>\r\n    <h6><strong><md-icon>directions_car</md-icon> Danh sách tài xế</strong></h6>\r\n  </md-card-header>-->\r\n  <hr/>\r\n  <md-card-content>\r\n    <md-nav-list>\r\n      <!--<a (click)=changeDriver(driver) *ngFor=\"let driver of driverCurrents|async\" md-list-item>-->\r\n      <a (click)=changeDriver(driver) *ngFor=\"let driver of driverCurrents\" md-list-item>\r\n        <span><md-icon>account_circle</md-icon>&emsp;&emsp;{{driver.name}}</span>\r\n      </a>\r\n    </md-nav-list>\r\n  </md-card-content>\r\n\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/dashboard/driverlist/driverlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driverService_index__ = __webpack_require__("../../../../../src/app/services/driverService/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverlistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DriverlistComponent = (function () {
    function DriverlistComponent(af, driverService, ngZone) {
        this.af = af;
        this.driverService = driverService;
        this.ngZone = ngZone;
        this.driverID = '';
        // console.log(driverService);
    }
    DriverlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.driverCurrents == null) {
            // this.driverCurrents = this.driverService.getAllDriver();
            this.driverService.getAllDriver().forEach(function (driver) {
                var index = 0;
                driver.forEach(function (element) {
                    if (element.$key == localStorage.getItem("uid")) {
                        driver.splice(index, 1);
                    }
                    index++;
                });
                _this.driverCurrents = driver;
            });
        }
    };
    DriverlistComponent.prototype.changeDriver = function (driver) {
        // console.log(driver.$key);
        var driverKey = '/geolocationCurrents/' + driver.$key;
        this.driverService.passingDriverId(driver.$key);
    };
    return DriverlistComponent;
}());
DriverlistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'driverlist',
        template: __webpack_require__("../../../../../src/app/dashboard/driverlist/driverlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/driverlist/driverlist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_driverService_index__["a" /* DriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_driverService_index__["a" /* DriverService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _c || Object])
], DriverlistComponent);

var _a, _b, _c;
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/driverlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/driverlist/driverlist.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("../../../../../src/app/dashboard/driverlist/index.ts");
/* unused harmony export DriverListRoutes */

var DriverListRoutes = [
    {
        path: "maps",
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* DriverlistComponent */]
    }
];
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/driverlist.routes.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/driverlist/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__driverlist_component__ = __webpack_require__("../../../../../src/app/dashboard/driverlist/driverlist.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__driverlist_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__driverlist_routes__ = __webpack_require__("../../../../../src/app/dashboard/driverlist/driverlist.routes.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_routes__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.routes.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__dashboard_routes__["a"]; });


//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/location/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__location_component__ = __webpack_require__("../../../../../src/app/dashboard/location/location.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__location_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_routes__ = __webpack_require__("../../../../../src/app/dashboard/location/location.routes.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/location/location.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".driverlist{\r\n    border-right: 2px cadetblue;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/location/location.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"driverlist col-md-4\">\r\n      <driverlist></driverlist>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <h4><strong><md-icon>track_changes</md-icon> Vị trí tài xế</strong></h4>\r\n      <app-map></app-map>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/location/location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationComponent = (function () {
    function LocationComponent(router) {
        this.router = router;
    }
    LocationComponent.prototype.ngOnInit = function () {
    };
    return LocationComponent;
}());
LocationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-location',
        template: __webpack_require__("../../../../../src/app/dashboard/location/location.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/location/location.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], LocationComponent);

var _a;
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/location.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/location/location.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("../../../../../src/app/dashboard/location/index.ts");
/* unused harmony export LocationRoutes */

var LocationRoutes = [
    {
        path: "location",
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* LocationComponent */]
    }
];
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/location.routes.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/map/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_component__ = __webpack_require__("../../../../../src/app/dashboard/map/map.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__map_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_routes__ = __webpack_require__("../../../../../src/app/dashboard/map/map.routes.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*@media(min-width:1200){*/\r\n  .sebm-google-map-container {\r\n    height: 350px;\r\n    width: 680px;\r\n  }\r\n/*}*/\r\n\r\n@media(min-width:1367){\r\n  .sebm-google-map-container {\r\n    height: 550px;\r\n  }\r\n}\r\n\r\n.example-card{\r\n  width: auto;\r\n  height: 30%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <!--<md-card-header>\r\n    <h4><strong><md-icon>track_changes</md-icon> Theo dõi lộ trình</strong></h4>\r\n  </md-card-header>-->\r\n  <hr/>\r\n  <div class=\"row\">\r\n  </div>\r\n  <md-card-content>\r\n    <br>\r\n    <div class=\"row\">\r\n      <sebm-google-map [latitude]=\"currentLat\" [longitude]=\"currentLng\" [zoom]=\"19\">\r\n        <sebm-google-map-polyline [strokeWeight]=\"'10'\" [strokeColor]=\"'#B71C1C'\">\r\n          <sebm-google-map-polyline-point *ngFor=\"let geolocationCurrent of geolocationCurrents|async\" [latitude]=\"geolocationCurrent.lat\"\r\n            [longitude]=\"geolocationCurrent.lng\">\r\n          </sebm-google-map-polyline-point>\r\n        </sebm-google-map-polyline>\r\n        <sebm-google-map-circle [latitude]=\"currentLat\" [longitude]=\"currentLng\" [radius]=\"7\" [fillColor]=\"'#1976D2'\" [circleDraggable]=\"false\">\r\n          <sebm-google-map-circle [latitude]=\"currentLat\" [longitude]=\"currentLng\" [radius]=\"4\" [fillColor]=\"'#1976D2'\" [circleDraggable]=\"false\">\r\n            <sebm-google-map-circle [latitude]=\"currentLat\" [longitude]=\"currentLng\" [radius]=\"2\" [fillColor]=\"'#E53935'\" [circleDraggable]=\"false\">\r\n            </sebm-google-map-circle>\r\n          </sebm-google-map-circle>\r\n        </sebm-google-map-circle>\r\n      </sebm-google-map>\r\n    </div>\r\n  </md-card-content>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/dashboard/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_driverService_index__ = __webpack_require__("../../../../../src/app/services/driverService/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
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
    function MapComponent(toastr, vcr, dialog, af, driverService, ngZone) {
        this.toastr = toastr;
        this.dialog = dialog;
        this.af = af;
        this.driverService = driverService;
        this.ngZone = ngZone;
        this.currentLat = 0;
        this.currentLng = 0;
        this.toastr.setRootViewContainerRef(vcr);
        // this.geolocationCurrents = af.database.list('/geolocationCurrents')
        // this.driverCurrents = driverService.getAllDriver();
        // navigator.geolocation.getCurrentPosition(function (location) {
        //   this.currentLat = location.coords.latitude;
        //   this.currentLng = location.coords.longitude;
        // });
        // console.log(driverService);
    }
    // ngOnInit(): void {
    //   console.log("Da nhay vao onInit");
    //   this.driverService.onPassingDriverID().subscribe((driverID) => {
    //     console.log(driverID);
    //     var driverKey = '/geolocationCurrents/' + driverID;
    //     console.log(driverKey);
    //     this.geolocationCurrents = this.af.list(driverKey);
    //     let positionCurrent = this.af.object(driverKey, { preserveSnapshot: true });
    //     positionCurrent.subscribe(snapshot => {
    //       let currentPos = [];
    //       snapshot.forEach(element => {
    //         console.log(element);
    //         currentPos.push(element);
    //       });
    //       console.log(currentPos[currentPos.length - 1]);
    //       this.currentLat = currentPos[currentPos.length - 1].val().lat;
    //       this.currentLng = currentPos[currentPos.length - 1].val().lng;
    //       console.log(this.currentLat);
    //       console.log(this.currentLng);
    //     })
    //   })
    // }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.driverID);
        console.log("Da nhay vao ngInit");
        var allGeolocation = this.af.list("/geolocationCurrents/" + this.driverID, {
            query: {
                limitToLast: 1
            }
        });
        this.driverService.onPassingDriverID().subscribe(function (driverID) {
            console.log(driverID);
            var driverKey = '/geolocationCurrents/' + driverID;
            console.log(driverKey);
            // this.geolocationCurrents = this.af.list(driverKey);
            var positionCurrent = _this.af.list(driverKey, {
                query: {
                    limitToLast: 1
                }
            });
            positionCurrent.subscribe(function (snapshot) {
                try {
                    // positionCurrent = this.af.list(driverKey + snapshot[0].$key);
                    console.log(driverKey + "/" + snapshot[0].$key);
                    var positionCurrentItem = _this.af.list(driverKey + "/" + snapshot[0].$key, {
                        preserveSnapshot: true,
                        query: {
                            limitToLast: 1
                        }
                    });
                    positionCurrentItem.subscribe(function (result) {
                        // result.forEach(item => {
                        //   console.log(item.val());
                        // })
                        _this.currentLat = result[result.length - 1].val().lat;
                        _this.currentLng = result[result.length - 1].val().lng;
                    });
                }
                catch (error) {
                    _this.toastr.error(error, "Lỗi", {
                        positionClass: 'toast-bottom-right',
                        showCloseButton: true
                    });
                }
                // positionCurrentItem.subscribe(item => {
                //   console.log(item[0].val());
                // })
                // if (snapshot != null) {
                //   // let currentPos = [];
                //   // snapshot.forEach(element => {
                //   //   console.log(element);
                //   //   currentPos.push(element);
                //   // });
                //   try {
                //     console.log(snapshot[snapshot.length - 1]);
                //     console.log(snapshot);
                // this.currentLat = snapshot[snapshot.length - 1].val().lat;
                // this.currentLng = snapshot[snapshot.length - 1].val().lng;
                //     console.log(this.currentLat);
                //     console.log(this.currentLng);
                //   } catch (error) {
                //     console.log(error);
                //     console.log("Da nhay vao catch");
                //     this.toastr.error("Có gì đó không ổn", "Lỗi", {
                //       positionClass: 'toast-bottom-right',
                //       showCloseButton: true
                //     })
                //   }
                // }
                // else {
                //   // let dialogRef = this.dialog.open();
                // }
            });
        });
    };
    return MapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('driverID'),
    __metadata("design:type", String)
], MapComponent.prototype, "driverID", void 0);
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map',
        template: __webpack_require__("../../../../../src/app/dashboard/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/map/map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_driverService_index__["a" /* DriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_driverService_index__["a" /* DriverService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _f || Object])
], MapComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/map.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/map/map.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("../../../../../src/app/dashboard/map/index.ts");
/* unused harmony export MapRoutes */

var MapRoutes = [
    {
        path: "maps",
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* MapComponent */]
    }
];
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/map.routes.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/route/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__route_component__ = __webpack_require__("../../../../../src/app/dashboard/route/route.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__route_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_routes__ = __webpack_require__("../../../../../src/app/dashboard/route/route.routes.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/route/route.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div>\r\n        <md-list style=\"border: 1px solid #CCCCCC; border-radius: 5px;\" md-scroll-y>\r\n          <h4 align=\"center\" md-header><strong>Danh sách tài xế</strong></h4>\r\n          <md-divider></md-divider>\r\n          <md-nav-list style=\"overflow-y: scroll; overflow-x: hidden;\">\r\n            <md-list-item (click)=changeDriver(driver) *ngFor=\"let driver of driverList\">\r\n              <div class=\"col-md-10 col-sm-9\">\r\n                <h6 md-line><strong> {{driver.name}}</strong></h6>\r\n                <p md-line>Trạng thái 1 </p>\r\n              </div>\r\n              <div class=\"col-md-2 col-sm-3\">\r\n\r\n              </div>\r\n            </md-list-item>\r\n          </md-nav-list>\r\n          <md-divider></md-divider>\r\n        </md-list>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <md-input-container>\r\n        <input mdInput [mdDatepicker]=\"picker\" placeholder=\"Chọn ngày..\">\r\n      </md-input-container>\r\n      <button mdSuffix [mdDatepickerToggle]=\"picker\"></button>\r\n      <md-datepicker #picker></md-datepicker>\r\n      <md-select style=\"padding-left:5em\" placeholder=\"Tài xế\" [(ngModel)]=\"selectedValue\" name=\"food\">\r\n        <md-option>\r\n          Tài xế 1\r\n        </md-option>\r\n        <md-option>\r\n          Tài xế 2\r\n        </md-option>\r\n        <md-option>\r\n          Tài xế 3\r\n        </md-option>\r\n      </md-select>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <app-map></app-map>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/route/route.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ng2-datepicker {\n  position: fixed;\n  float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/route/route.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driverService_index__ = __webpack_require__("../../../../../src/app/services/driverService/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_datepicker__ = __webpack_require__("../../../../ng2-datepicker/lib-dist/ng2-datepicker.module.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RouteComponent = (function () {
    function RouteComponent(af, driverService) {
        this.af = af;
        this.driverService = driverService;
        this.driverService = driverService;
        // this.driverList = driverService.getAllDriver();
        this.options = new __WEBPACK_IMPORTED_MODULE_3_ng2_datepicker__["b" /* DatePickerOptions */]();
    }
    RouteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.driverService.getAllDriver().forEach(function (driver) {
            var index = 0;
            driver.forEach(function (element) {
                if (element.$key == localStorage.getItem("uid")) {
                    driver.splice(index, 1);
                }
                index++;
            });
            _this.driverList = driver;
        });
    };
    RouteComponent.prototype.changeDriver = function (driver) {
        console.log(driver.$key);
    };
    return RouteComponent;
}());
RouteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-route',
        template: __webpack_require__("../../../../../src/app/dashboard/route/route.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/route/route.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_driverService_index__["a" /* DriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_driverService_index__["a" /* DriverService */]) === "function" && _b || Object])
], RouteComponent);

var _a, _b;
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/route.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/route/route.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("../../../../../src/app/dashboard/route/index.ts");
/* unused harmony export MapRoutes */

var MapRoutes = [
    {
        path: "route",
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* RouteComponent */]
    }
];
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/route.routes.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/sidenav/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidenav_component__ = __webpack_require__("../../../../../src/app/dashboard/sidenav/sidenav.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sidenav_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenav_routes__ = __webpack_require__("../../../../../src/app/dashboard/sidenav/sidenav.routes.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"accent\">\r\n  <div class=\"col-9 col-md-11 col-sm-11\">\r\n    <button md-icon-button (click)=\"randomName(start)\">\r\n      <md-icon md-font-set=\"material-icons\">menu</md-icon>\r\n    </button>\r\n    <span>Giám sát hành trình</span>\r\n  </div>\r\n  <div class=\"col col-md-1 col-sx-1 justify-content-md-right\">\r\n    <!--<button class=\"\" md-icon-button>\r\n      <md-icon md-font-set=\"material-icons\">more_vert</md-icon>\r\n    </button>-->\r\n    <button md-icon-button [mdMenuTriggerFor]=\"menu\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n    <md-menu positionX=\"30\" class=\"toggle-menu\" #menu=\"mdMenu\">\r\n      <button md-menu-item>\r\n        <md-icon>dialpad</md-icon>\r\n        <span>Thông báo</span>\r\n      </button>\r\n      <button md-menu-item>\r\n        <md-icon>voicemail</md-icon>\r\n        <span>Thông tin</span>\r\n      </button>\r\n      <button (click)=\"logout()\" md-menu-item>\r\n        <md-icon>notifications_off</md-icon>\r\n        <span>Đăng xuất</span>\r\n      </button>\r\n    </md-menu>\r\n  </div>\r\n</md-toolbar>\r\n<md-sidenav-container class=\"side-nav-container\">\r\n  <md-sidenav #start>\r\n    <md-nav-list>\r\n      <a md-list-item><span><md-icon>directions</md-icon>&emsp;&emsp;<strong>Location Tracking</strong></span></a>\r\n      <hr/>\r\n      <a md-list-item [routerLink]=\"['location']\">\r\n        <span><i class=\"material-icons\">my_location</i>&emsp;&emsp;Theo dõi vị trí</span>\r\n      </a>\r\n      <a md-list-item [routerLink]=\"['driver']\">\r\n        <span><md-icon>directions_car</md-icon>&emsp;&emsp;Tài xế</span>\r\n      </a>\r\n      <a md-list-item [routerLink]=\"['chat']\">\r\n        <span><md-icon>chat</md-icon>&emsp;&emsp;Tin nhắn</span>\r\n      </a>\r\n      <a md-list-item [routerLink]=\"['route']\">\r\n        <span><md-icon>track_changes</md-icon>&emsp;&emsp;Lộ trình</span>\r\n      </a>\r\n      <a md-list-item [routerLink]=\"['about']\">\r\n        <span><md-icon>help</md-icon>&emsp;&emsp;Thông tin</span>\r\n      </a>\r\n      <hr/>\r\n      <a md-list-item (click)=\"start.close()\"><span><md-icon>close</md-icon>&emsp;&emsp;Đóng</span></a>\r\n    </md-nav-list>\r\n    <hr>\r\n  </md-sidenav>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <!--<md-card class=\"router-card-sub col-8\"></md-card>-->\r\n      <md-card class=\"router-card col-12\">\r\n        <router-outlet></router-outlet>\r\n      </md-card>\r\n    </div>\r\n  </div>\r\n\r\n</md-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/dashboard/sidenav/sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".router-card {\n  height: 90%;\n  width: 90%;\n  float: right;\n  margin-top: 40px; }\n\n.router-card-sub {\n  margin-top: 40px;\n  height: 90%;\n  width: 25%;\n  float: left; }\n\n.side-nav-container {\n  height: 580px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_userService_index__ = __webpack_require__("../../../../../src/app/services/userService/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidenavComponent = (function () {
    function SidenavComponent(localStorage, userService, router) {
        this.localStorage = localStorage;
        this.userService = userService;
        this.router = router;
    }
    SidenavComponent.prototype.logout = function () {
        this.userService.logout();
        localStorage.clear();
    };
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.randomName = function (start) {
        console.log('OK');
        start.toggle();
    };
    return SidenavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('start'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdSidenav */]) === "function" && _a || Object)
], SidenavComponent.prototype, "start", void 0);
SidenavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidenav',
        template: __webpack_require__("../../../../../src/app/dashboard/sidenav/sidenav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/sidenav/sidenav.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_userService_index__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_userService_index__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], SidenavComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/sidenav.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/sidenav/sidenav.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("../../../../../src/app/dashboard/sidenav/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__driver_index__ = __webpack_require__("../../../../../src/app/dashboard/driver/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_index__ = __webpack_require__("../../../../../src/app/dashboard/about/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_index__ = __webpack_require__("../../../../../src/app/dashboard/location/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_index__ = __webpack_require__("../../../../../src/app/dashboard/chat/index.ts");
/* unused harmony export SidenavRoutes */





var SidenavRoutes = [
    {
        path: "sidenav",
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* SidenavComponent */],
        children: [
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_index__["a" /* AboutComponent */] },
            { path: 'driver', component: __WEBPACK_IMPORTED_MODULE_1__driver_index__["a" /* DriverComponent */] },
            { path: 'location', component: __WEBPACK_IMPORTED_MODULE_3__location_index__["a" /* LocationComponent */] },
            { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_4__chat_index__["a" /* ChatComponent */] }
        ]
    },
];
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/sidenav.routes.js.map

/***/ }),

/***/ "../../../../../src/app/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_routes__ = __webpack_require__("../../../../../src/app/login/login.routes.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n  width: 500px;\r\n}\r\n\r\n.example-card {\r\n  width: 400px;\r\n}\r\n\r\n\r\n.full-width-input {\r\n  width: 80%;\r\n}\r\n\r\nbody {\r\n  background-image: url(\"http://hdqwalls.com/wallpapers/material-design-4k.jpg\");\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\r\n<br/>\r\n<br/>\r\n<br/>\r\n<br/>\r\n<div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-8 offset-md-4\">\r\n      <md-card color=\"accent\" class=\"example-card\">\r\n        <md-card-title>\r\n          <h4>\r\n            <md-icon>person</md-icon> Đăng nhập</h4>\r\n        </md-card-title>\r\n        <md-card-content>\r\n\r\n          <span style=\"color:#B71C1C\">{{loginInfo}}</span>\r\n          <hr>\r\n          <div style=\"text-align: center\">\r\n            <md-input-container color=\"accent\" class=\"full-width-input\">\r\n              <input mdInput [(ngModel)]=\"email\" placeholder=\"Tên đăng nhập\">\r\n            </md-input-container><br>\r\n            <br>\r\n            <md-input-container color=\"accent\" class=\"full-width-input\">\r\n              <input mdInput [(ngModel)]=\"password\" type=\"password\" placeholder=\"Mật khẩu\">\r\n            </md-input-container>\r\n          </div>\r\n        </md-card-content>\r\n        <md-card-actions class=\"offset-md-1\">\r\n          <div style=\"text-align: center\">\r\n            <!--<a class=\"full-width-input\" (click)=\"login()\" md-raised-button routerLink=\"/dashboard/maps\">Đăng nhập</a>-->\r\n            <a color=\"accent\" (click)=login() class=\"full-width-input\" md-raised-button>Đăng nhập</a>\r\n          </div>\r\n        </md-card-actions>\r\n      </md-card>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_userService__ = __webpack_require__("../../../../../src/app/services/userService/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(localStorage, _service, afAuth, _router, userService) {
        this.localStorage = localStorage;
        this._service = _service;
        this.afAuth = afAuth;
        this._router = _router;
        this.userService = userService;
        this.afAuth.auth.signOut();
        this.loginInfo = this.userService.loginMessage;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(function (success) {
            // console.log(success.auth.uid);
            console.log(_this.afAuth.auth.currentUser.uid);
            localStorage.setItem("uid", _this.afAuth.auth.currentUser.uid);
            _this._router.navigate(['/dashboard/chat']);
        }).catch(function (err) {
            console.log(err);
            // this._router.navigate(['/']);
            console.log("No nhay vo cho nay ne");
        });
        // this.afAuth.login({
        //   email: this.email,
        //   password: this.password
        // }, {
        //     provider
        //     method: AuthMethods.Password
        //   }).then((success) => {
        //     console.log(success.auth.uid);
        //     localStorage.setItem("uid", success.auth.uid);
        //     this._router.navigate(['/dashboard/location'])
        //   }).catch((err) => {
        //     console.log(err);
        //     console.log("No nhay vo cho nay ne");
        //   })
        // this.af.auth.login({
        //   email: this.email,
        //   password: this.password
        // }, {
        //     provider: AuthProviders.Password,
        //     method: AuthMethods.Password
        //   }).then((success) => {
        //     console.log(success.auth.uid);
        //     localStorage.setItem("uid", success.auth.uid);
        //     this._router.navigate(['/dashboard/location'])
        //   }).catch((err) => {
        //     console.log(err);
        //     console.log("No nhay vo cho nay ne");
        //   })
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_userService__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_userService__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_userService__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_userService__["a" /* UserService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_index__ = __webpack_require__("../../../../../src/app/dashboard/index.ts");
/* unused harmony export LoginRoutes */


var LoginRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* LoginComponent */], children: __WEBPACK_IMPORTED_MODULE_1__dashboard_index__["b" /* DashboardRoutes */].slice()
    },
];
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/login.routes.js.map

/***/ }),

/***/ "../../../../../src/app/page.not.found.html":
/***/ (function(module, exports) {

module.exports = "<h1>Sorry we can't found the page</h1>"

/***/ }),

/***/ "../../../../../src/app/services/driverService/driver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverService; });
/* unused harmony export Driver */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DriverService = (function () {
    function DriverService(af, afAuth, localStorage) {
        this.af = af;
        this.afAuth = afAuth;
        this.localStorage = localStorage;
        this.idDriverTemp = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Subject"]();
        this.currentDriver = af.list('/drivers');
    }
    DriverService.prototype.logout = function () {
        this.afAuth.auth.signOut();
        // this.afAuth.auth.app;
    };
    DriverService.prototype.getAllDriver = function () {
        return this.currentDriver;
    };
    DriverService.prototype.passingDriverId = function (driverID) {
        this.idDriverTemp.next(driverID);
    };
    DriverService.prototype.onPassingDriverID = function () {
        return this.idDriverTemp;
    };
    // getAllDriver(): Promise<FirebaseListObservable<any[]>> {
    //   return new Promise(resolve => {
    //     setTimeout(() => resolve(this.currentDriver), 1000);
    //   })
    // }
    DriverService.prototype.registerDriver = function (driver, Email) {
        var _this = this;
        this.afAuth.auth.createUserWithEmailAndPassword(Email.toString(), "123456").then(function (response) {
            while (response == null) {
                setInterval(100);
            }
            console.log(response);
            _this.idDriver = response.uid.toString();
            // this.localStorage.set("idDriver", this.idDriver);
            var newDriver = _this.af.object('/drivers/' + _this.idDriver);
            newDriver.set(driver);
            console.log(_this.localStorage.get("idDriver"));
        });
    };
    // addDriver(driver: Driver, driverID: String) {
    //   this.currentDriver = this.af.database.list('/drivers' + driverID);
    //   console.log(driverID);
    //   this.currentDriver.push(driver);
    // }
    DriverService.prototype.addDriver = function (driver, idDriver) {
        console.log('/drivers/' + this.idDriver.toString());
        var newDriver = this.af.object('/drivers/' + this.idDriver);
        newDriver.set(driver);
    };
    DriverService.prototype.removeDriver = function () {
        this.currentDriver.remove(this.idDriver);
        this.afAuth.auth.currentUser.delete();
    };
    return DriverService;
}());
DriverService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _c || Object])
], DriverService);

var Driver = (function () {
    function Driver(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    Driver.prototype.getNameValue = function () {
        return this.name;
    };
    return Driver;
}());

var _a, _b, _c;
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/driver.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/driverService/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__driver_service__ = __webpack_require__("../../../../../src/app/services/driverService/driver.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__driver_service__["a"]; });

//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/services/mapService/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapService = (function () {
    function MapService() {
    }
    return MapService;
}());
MapService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], MapService);

//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/map.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/userService/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("../../../../../src/app/services/userService/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user_service__["a"]; });

//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/services/userService/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(af, _http, router) {
        this.af = af;
        this._http = _http;
        this.router = router;
    }
    UserService.prototype.canActive = function (route, state) {
        return this.af.authState.map(function (auth) {
            if (auth != null) {
                return false;
            }
            else {
                return true;
            }
        });
    };
    UserService.prototype.logout = function () {
        this.af.auth.signOut();
        // this.af.authState.subscribe
        // console.log(this.af.auth.subscribe());
        this.router.navigate(['/']);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/environment.js.map

/***/ }),

/***/ "../../../../../src/environments/firebase.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyCEYUJzJfhjSr5K2LncLP7zk8lmd5GilxU",
    authDomain: "location-tracking-36de2.firebaseapp.com",
    databaseURL: "https://location-tracking-36de2.firebaseio.com",
    storageBucket: "location-tracking-36de2.appspot.com"
};
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/firebase.config.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Final Thesys/trackingAngular2firebase - TEST - Copy - Copy/src/main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map