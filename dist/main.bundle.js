webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "div.container {\n    padding-top: 25px;\n}\n\nsmall.footer {\n    display: block;\n    text-align: center;\n    margin-bottom: 25px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n  <small class=\"footer\"><b>Cloud Property Manager</b> | Developed by <a href=\"http://www.onflo.io\" target=\"_blank\">Onflo</a></small>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.page = null;
        var config = {
            apiKey: "AIzaSyCuI7szdieP9IwD8ZwHOoFDE13-o0Jza5o",
            authDomain: "perfect-landing-1496942733795.firebaseapp.com",
            databaseURL: "https://perfect-landing-1496942733795.firebaseio.com",
            projectId: "perfect-landing--1496942733795",
            storageBucket: "perfect-landing--1496942733795.appspot.com",
            messagingSenderId: "585419763940"
        };
        __WEBPACK_IMPORTED_MODULE_2_firebase__["initializeApp"](config);
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (!user) {
                _this.router.navigate(['/login']);
            }
            else {
                var ref_1 = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('/users/' + user.uid);
                __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].userUID = user.uid;
                ref_1.on('value', function (snapshot) {
                    if (!snapshot.val())
                        ref_1.set(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].user);
                    else
                        __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].user = snapshot.val();
                });
                _this.router.navigate(['/welcome']);
            }
        });
        this.router.events.subscribe(function (val) {
            var uid = null;
            if (__WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser)
                uid = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
            if (uid && val.url && _this.page !== val.url) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('/users/' + uid).once('value').then(function (snapshot) {
                    __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].user = snapshot.val();
                });
            }
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings_component__ = __webpack_require__("./src/app/pages/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_blogs_blogs_component__ = __webpack_require__("./src/app/pages/blogs/blogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_banner_banner_component__ = __webpack_require__("./src/app/pages/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_featured_featured_component__ = __webpack_require__("./src/app/pages/featured/featured.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componenets_navbar_navbar_component__ = __webpack_require__("./src/app/componenets/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_save_user_data_service__ = __webpack_require__("./src/app/services/save-user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_update_user_environment_service__ = __webpack_require__("./src/app/services/update-user-environment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_welcome_welcome_component__ = __webpack_require__("./src/app/pages/welcome/welcome.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings_component__["a" /* SettingsComponent */] },
    { path: 'blogs', component: __WEBPACK_IMPORTED_MODULE_6__pages_blogs_blogs_component__["a" /* BlogsComponent */] },
    { path: 'banner', component: __WEBPACK_IMPORTED_MODULE_7__pages_banner_banner_component__["a" /* BannerComponent */] },
    { path: 'featured', component: __WEBPACK_IMPORTED_MODULE_8__pages_featured_featured_component__["a" /* FeaturedComponent */] },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_13__pages_welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__pages_login_login_component__["a" /* LoginComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_blogs_blogs_component__["a" /* BlogsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_banner_banner_component__["a" /* BannerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_featured_featured_component__["a" /* FeaturedComponent */],
                __WEBPACK_IMPORTED_MODULE_9__componenets_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_welcome_welcome_component__["a" /* WelcomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_save_user_data_service__["a" /* SaveUserDataService */], __WEBPACK_IMPORTED_MODULE_12__services_update_user_environment_service__["a" /* UpdateUserEnvironmentService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/componenets/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" routerLink=\"/login\">CPM</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n      <div class=\"navbar-nav\" *ngIf=\"authenticated\">\n        <a class=\"nav-item nav-link\" routerLink=\"/banner\">Banner</a>\n        <a class=\"nav-item nav-link\" routerLink=\"/featured\">Featured</a>\n        <a class=\"nav-item nav-link\" routerLink=\"/blogs\">Blogs</a>\n        <a class=\"nav-item nav-link\" routerLink=\"/settings\">Settings</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n      </div>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/componenets/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = "nav.navbar div.collapse div a {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/componenets/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        var _this = this;
        this.router = router;
        this.authenticated = false;
        this.authenticated = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user)
                _this.authenticated = true;
            else
                _this.authenticated = false;
        });
    }
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut().then(function () {
            _this.router.navigate(['/login']);
        });
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/componenets/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/componenets/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pages/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Banner</h1>\n<div class=\"row banner-preview\">\n  <div class=\"col-sm-4\">\n      <div class=\"img\" *ngIf=\"banner.image.length > 0\" [style.background-image]=\"setBgImg(banner.image)\"></div>\n      <div class=\"img\" *ngIf=\"banner.image.length === 0\" [style.background-image]=\"setBgImg('http://placehold.it/600x400')\"></div>\n  </div>\n  <div class=\"col-sm-8\">\n    <div class=\"col-sm-12 top-text\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Top Text\" [(ngModel)]=\"banner.topText\">\n      </div>\n    </div>\n    <div class=\"col-sm-12 big-text\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Big Text\" [(ngModel)]=\"banner.bigText\">\n      </div>\n    </div>\n    <div class=\"col-sm-12 desc\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Description\" [(ngModel)]=\"banner.description\">\n      </div>\n    </div>\n    <div class=\"col-sm-12 image\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Image\" [(ngModel)]=\"banner.image\">\n      </div>\n      <span>Need to host an image? <a href=\"https://imgbb.com/\" target=\"_blank\">Click here</a></span>\n    </div>\n    <div class=\"col-sm-12\">\n      <span class=\"error\" *ngIf=\"editor.error\">{{editor.error}}</span>\n      <button type=\"button\" *ngIf=\"!editor.id && editor.id !== 0\" class=\"btn btn-primary\" (click)=\"post()\">Post</button>\n      <button type=\"button\" *ngIf=\"editor.id || editor.id === 0\" class=\"btn btn-primary\" (click)=\"post()\">Save</button>\n      <button type=\"button\" *ngIf=\"editor.id || editor.id === 0\" class=\"btn btn-secondary\" (click)=\"clear()\">Clear</button>\n    </div>\n  </div>\n</div>\n<div class=\"row banner-input\">\n</div>\n\n<div class=\"banner-overview\">\n  <div class=\"row banner\" *ngFor=\"let banner of banners; index as x\">\n    <div class=\"col-sm-4\">\n      <div class=\"img\" [style.background-image]=\"setBgImg(banner.image)\"></div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"col-sm-12 top-text\">\n        {{banner.topText}}\n      </div>\n      <div class=\"col-sm-12 big-text\">\n        {{banner.bigText}}\n      </div>\n      <div class=\"col-sm-12 desc\">\n        {{banner.description}}\n      </div>\n      <div class=\"col-sm-12\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"edit(x)\">Edit</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"delete(x)\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/banner/banner.component.scss":
/***/ (function(module, exports) {

module.exports = "div.banner-preview {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  div.banner-preview input {\n    margin-bottom: 5px; }\n  div.banner-preview div {\n    margin-bottom: 5px; }\n  div.banner-preview div.big-text {\n    font-size: 2em; }\n  div.banner-preview span {\n    display: block; }\n  div.banner-preview span.error {\n    color: red;\n    font-style: italic;\n    font-size: 0.75em; }\n  div.banner-preview button {\n    margin-top: 10px; }\n  div.banner-overview {\n  margin-bottom: 20px; }\n  div.banner-overview div {\n    margin-bottom: 5px; }\n  div.banner-overview div.big-text {\n    font-size: 2em; }\n  div.banner-overview div.desc {\n    margin-bottom: 15px; }\n  div.img {\n  height: 300px;\n  width: 100%;\n  background-image: url(https://picsum.photos/300/300);\n  background-size: cover;\n  background-position: center center; }\n"

/***/ }),

/***/ "./src/app/pages/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_save_user_data_service__ = __webpack_require__("./src/app/services/save-user-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BannerComponent = /** @class */ (function () {
    function BannerComponent(_sanitizer, saveUserData) {
        this._sanitizer = _sanitizer;
        this.saveUserData = saveUserData;
        this.banner = {
            topText: '',
            bigText: '',
            description: '',
            image: '',
        };
        this.editor = {
            id: null,
            error: ''
        };
        this.banners = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].user.banners;
    }
    BannerComponent.prototype.post = function () {
        var _this = this;
        var test = true;
        Object.keys(this.banner).forEach(function (key) {
            if (_this.banner[key].length === 0)
                test = false;
        });
        if (test) {
            if (this.editor.id != null)
                __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].user.banners[this.editor.id] = this.banner;
            else
                this.banners.push(this.banner);
            this.saveUserData.now();
            this.reset();
        }
        else {
            this.editor.error = 'Looks like you\'re missing something...';
            var report = setTimeout(function () {
                _this.editor.error = '';
                clearTimeout(report);
            }, 2000);
        }
    };
    BannerComponent.prototype.delete = function (id) {
        __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].user.banners.splice(id, 1);
    };
    BannerComponent.prototype.reset = function () {
        this.banner = {
            topText: '',
            bigText: '',
            description: '',
            image: '',
        };
        this.editor.id = null;
        this.banners = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].user.banners;
    };
    BannerComponent.prototype.setBgImg = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    BannerComponent.prototype.clear = function () {
        this.editor.id = null;
        this.banner = {
            topText: '',
            bigText: '',
            description: '',
            image: ''
        };
    };
    BannerComponent.prototype.edit = function (id) {
        window.scrollTo(0, 0);
        this.banner = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].user.banners[id];
        this.editor.id = id;
    };
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-banner',
            template: __webpack_require__("./src/app/pages/banner/banner.component.html"),
            styles: [__webpack_require__("./src/app/pages/banner/banner.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3__services_save_user_data_service__["a" /* SaveUserDataService */]])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/pages/blogs/blogs.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Blogs</h1>\n<div class=\"row blogs-input\">\n  <div class=\"col-sm-4\">\n    <div class=\"img\" *ngIf=\"blog.image.length > 0\" [style.background-image]=\"setBgImg(blog.image)\"></div>\n    <div class=\"img\" *ngIf=\"blog.image.length === 0\" [style.background-image]=\"setBgImg('http://placehold.it/600x400')\"></div>\n  </div>\n  <div class=\"col-sm-8\">\n    <div class=\"col-sm-12\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Title\" [(ngModel)]=\"blog.title\">\n      </div>\n    </div>\n    <div class=\"col-sm-12\">\n      <div class=\"input-group\">\n        <textarea type=\"text\" class=\"form-control desc\" placeholder=\"Description\" [(ngModel)]=\"blog.description\"></textarea>\n      </div>\n    </div>\n    <div class=\"col-sm-12\">\n      <div class=\"input-group input-group-sm\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Link\" [(ngModel)]=\"blog.link\">\n      </div>\n    </div>\n    <div class=\"col-sm-12\">\n      <div class=\"input-group input-group-sm\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Image\" [(ngModel)]=\"blog.image\">\n      </div>\n      <span>Need to host an image? <a href=\"https://imgbb.com/\" target=\"_blank\">Click here</a></span>\n    </div>\n    <div class=\"col-sm-12\">\n      <span class=\"error\" *ngIf=\"editor.error\">{{editor.error}}</span>\n      <button type=\"button\" *ngIf=\"!editor.id && editor.id !== 0\" class=\"btn btn-primary\" (click)=\"post()\">Post</button>\n      <button type=\"button\" *ngIf=\"editor.id || editor.id === 0\" class=\"btn btn-primary\" (click)=\"post()\">Save</button>\n      <button type=\"button\" *ngIf=\"editor.id || editor.id === 0\" class=\"btn btn-secondary\" (click)=\"clear()\">Clear</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"blogs-overview\">\n  <div class=\"row blog\" *ngFor=\"let blog of blogs; index as x\">\n    <div class=\"col-sm-4\">\n      <div class=\"img\" [style.background-image]=\"setBgImg(blog.image)\"></div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"col-sm-12 title\">{{blog.title}}</div>\n      <div class=\"col-sm-12 desc\">{{blog.description}}</div>\n      <div class=\"col-sm-12\"></div>\n      <div class=\"col-sm-12\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"edit(x)\">Edit</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"delete(x)\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/blogs/blogs.component.scss":
/***/ (function(module, exports) {

module.exports = "div.blogs-input {\n  margin-top: 20px; }\n  div.blogs-input textarea.desc {\n    height: 50px;\n    margin-bottom: 10px; }\n  div.blogs-input input {\n    margin-bottom: 10px; }\n  div.blogs-input span {\n    display: block; }\n  div.blogs-input span.error {\n    color: red;\n    font-style: italic;\n    font-size: 0.75em; }\n  div.blogs-input button {\n    margin-top: 10px; }\n  div.blogs-overview {\n  margin-top: 20px; }\n  div.blogs-overview div.blog {\n    margin-top: 20px; }\n  div.blogs-overview div.blog div.col-sm-8 div {\n      margin-top: 5px; }\n  div.img {\n  height: 300px;\n  width: 100%;\n  background-image: url(https://picsum.photos/300/300);\n  background-size: cover;\n  background-position: center center; }\n"

/***/ }),

/***/ "./src/app/pages/blogs/blogs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_save_user_data_service__ = __webpack_require__("./src/app/services/save-user-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogsComponent = /** @class */ (function () {
    function BlogsComponent(_sanitizer, saveUserData) {
        this._sanitizer = _sanitizer;
        this.saveUserData = saveUserData;
        this.blog = {
            title: '',
            description: '',
            link: '',
            image: ''
        };
        this.blogs = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].user.blogs;
        this.editor = {
            id: null,
            error: ''
        };
    }
    BlogsComponent.prototype.post = function () {
        var _this = this;
        var test = true;
        Object.keys(this.blog).forEach(function (key) {
            if (_this.blog[key].length === 0)
                test = false;
        });
        if (test) {
            if (this.editor.id != null)
                __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].user.blogs[this.editor.id] = this.blog;
            else
                this.blogs.push(this.blog);
            this.saveUserData.now();
            this.blogs = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].user.blogs;
            this.reset();
        }
        else {
            this.editor.error = 'Looks like you\'re missing something...';
            var report = setTimeout(function () {
                _this.editor.error = '';
                clearTimeout(report);
            }, 2000);
        }
    };
    BlogsComponent.prototype.delete = function (id) {
        __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].user.blogs.splice(id, 1);
    };
    BlogsComponent.prototype.clear = function () {
        this.editor.id = null;
        this.blog = {
            title: '',
            description: '',
            link: '',
            image: ''
        };
    };
    BlogsComponent.prototype.reset = function () {
        this.blog = {
            title: '',
            description: '',
            link: '',
            image: ''
        };
        this.editor.id = null;
    };
    BlogsComponent.prototype.setBgImg = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    BlogsComponent.prototype.edit = function (id) {
        window.scrollTo(0, 0);
        this.blog = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].user.blogs[id];
        this.editor.id = id;
    };
    BlogsComponent.prototype.ngOnInit = function () {
    };
    BlogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blogs',
            template: __webpack_require__("./src/app/pages/blogs/blogs.component.html"),
            styles: [__webpack_require__("./src/app/pages/blogs/blogs.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3__services_save_user_data_service__["a" /* SaveUserDataService */]])
    ], BlogsComponent);
    return BlogsComponent;
}());



/***/ }),

/***/ "./src/app/pages/featured/featured.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Featured</h1>\n<div class=\"row featured-input\">\n  <div class=\"col-sm-4\">\n    <div class=\"input-group input-group-sm\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Label\" [(ngModel)]=\"feature.label\">\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"input-group input-group-sm\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"ID\" [(ngModel)]=\"feature.id\">\n    </div>\n  </div>\n  <div class=\"col-sm-2\">\n    <select class=\"custom-select custom-select-sm mb-3\" [(ngModel)]=\"feature.url\">\n      <option value=\"default\" selected=\"selected\">default</option>\n      <option *ngFor=\"let url of urls\" value=\"{{url}}\">{{url}}</option>\n    </select>\n  </div>\n  <div class=\"col-sm-2\">\n    <button type=\"button\" *ngIf=\"!editor.id.feature && editor.id.feature !== 0\" class=\"btn btn-primary btn-sm\" (click)=\"post('feature')\">Add</button>\n    <button type=\"button\" *ngIf=\"editor.id.feature || editor.id.feature === 0\" class=\"btn btn-primary btn-sm\" (click)=\"post('feature')\">Save</button>\n  </div>\n\n  <div class=\"col-sm-12\">\n    <table class=\"table\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Label</th>\n          <th scope=\"col\">ID</th>\n          <th scope=\"col\">URL</th>\n          <th scope=\"col\">Options</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"featured\" *ngFor=\"let feature of features; index as x;\">\n            <td>{{feature.label}}</td>\n            <td>{{feature.id}}</td>\n            <td>{{feature.url}}</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"edit(x, 'feature')\">Edit</button>\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete(x, 'feature')\">Delete</button>\n            </td>\n          </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class=\"row customurl-input\">\n  <div class=\"col-sm-10\">\n    <div class=\"input-group input-group-sm\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"URL\" [(ngModel)]=\"url\">\n    </div>\n  </div>\n  <div class=\"col-sm-2\">\n    <button type=\"button\" *ngIf=\"!editor.id.url && editor.id.url !== 0\" class=\"btn btn-primary btn-sm\" (click)=\"post('url')\">Add</button>\n    <button type=\"button\" *ngIf=\"editor.id.url || editor.id.url === 0\" class=\"btn btn-primary btn-sm\" (click)=\"post('url')\">Save</button>\n  </div>\n  <div class=\"col-sm-12\">\n    <table class=\"table\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">URL</th>\n          <th scope=\"col\">Options</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"customurl\" *ngFor=\"let url of urls; index as x;\">\n            <td>{{url}}</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"edit(x, 'url')\">Edit</button>\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete(x, 'url')\">Delete</button>\n            </td>\n          </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/featured/featured.component.scss":
/***/ (function(module, exports) {

module.exports = "div.featured-input {\n  margin-top: 20px; }\n  div.featured-input input {\n    margin-bottom: 10px; }\n  div.featured-input div.col-sm-2 button {\n    width: 100%;\n    margin-bottom: 10px; }\n  div.customurl-input {\n  margin-top: 20px; }\n  div.customurl-input input {\n    margin-bottom: 10px; }\n  div.customurl-input div.col-sm-2 button {\n    width: 100%;\n    margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/pages/featured/featured.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_save_user_data_service__ = __webpack_require__("./src/app/services/save-user-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeaturedComponent = /** @class */ (function () {
    function FeaturedComponent(saveUserData) {
        this.saveUserData = saveUserData;
        this.feature = {
            label: '',
            id: '',
            url: 'default'
        };
        this.url = '';
        this.features = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].user.featured;
        this.urls = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].user.urls;
        this.editor = {
            id: {
                url: undefined,
                feature: undefined
            }
        };
    }
    FeaturedComponent.prototype.edit = function (id, type) {
        window.scrollTo(0, 0);
        if (type === 'url') {
            this.editor.id.url = id;
            this.url = this.urls[id];
        }
        else if (type === 'feature') {
            this.editor.id.feature = id;
            this.feature = this.features[id];
        }
    };
    FeaturedComponent.prototype.delete = function (id, type) {
        if (type === 'url')
            this.urls.splice(id, 1);
        else if (type === 'feature')
            this.features.splice(id, 1);
        if (this.urls && this.urls.length > 0)
            __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].user.urls = this.urls;
        else
            __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].user.urls = null;
        if (this.features)
            __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].user.featured = this.features;
        this.saveUserData.now();
    };
    FeaturedComponent.prototype.reset = function () {
        this.feature = {
            label: '',
            id: '',
            url: 'default'
        };
        this.url = '';
        this.editor.id = {
            url: undefined,
            feature: undefined
        };
    };
    FeaturedComponent.prototype.post = function (type) {
        // gen array for first push
        if (type === 'url' && !this.urls)
            this.urls = [];
        if (type === 'feature' && !this.features)
            this.features = [];
        // url save logic
        if (type === 'url' && this.editor.id.url || this.editor.id.url === 0)
            this.urls[this.editor.id.url] = this.url;
        else if (type === 'url' && this.editor.id.url !== 0 && !this.editor.id.url)
            this.urls.push(this.url);
        // feature save logic
        if (type === 'feature' && this.editor.id.feature || this.editor.id.feature === 0)
            this.features[this.editor.id.feature] = this.feature;
        else if (type === 'feature' && this.editor.id.feature !== 0 && !this.editor.id.feature)
            this.features.push(this.feature);
        // update for fb
        if (this.urls)
            __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].user.urls = this.urls;
        if (this.features)
            __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].user.featured = this.features;
        // save to fb
        this.saveUserData.now();
        this.reset();
    };
    FeaturedComponent.prototype.ngOnInit = function () {
    };
    FeaturedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-featured',
            template: __webpack_require__("./src/app/pages/featured/featured.component.html"),
            styles: [__webpack_require__("./src/app/pages/featured/featured.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_save_user_data_service__["a" /* SaveUserDataService */]])
    ], FeaturedComponent);
    return FeaturedComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\n<div class=\"row login-input\">\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"input-group mb-3\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"email\"\n        required>\n    </div>\n  </div>\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"input-group mb-3\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\"\n        required>\n    </div>\n    <div class=\"error\">\n      {{error}}\n    </div>\n  </div>\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <button class=\"btn btn-primary btn-sm\" type=\"submit\" (click)=\"signIn()\">Login</button>\n    <button type=\"button\" class=\"btn btn-outline-primary btn-sm\" (click)=\"signUp()\">Sign Up</button>\n  </div>\n  <div class=\"col-sm-4\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center;\n  margin-bottom: 20px;\n  margin-top: 20px; }\n\ndiv.login-input {\n  text-align: center; }\n\ndiv.login-input div.error {\n    font-size: 0.5em;\n    color: red;\n    margin-bottom: 10px; }\n\ndiv.login-input button {\n    margin-bottom: 5px; }\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.email = '';
        this.password = '';
        this.error = '';
        if (__WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser)
            this.router.navigate(['/welcome']);
    }
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithEmailAndPassword(this.email, this.password).then(function () {
            _this.router.navigate(['/welcome']);
        }).catch(function (error) {
            _this.error = error.message;
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().createUserWithEmailAndPassword(this.email, this.password).then(function () {
            _this.signIn();
        }).catch(function (error) {
            _this.error = error.message;
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("./src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Settings</h1>\n<div class=\"row settings-input\">\n  <div class=\"col-sm-12\">\n    <div class=\"input-group social-text\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">Facebook</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"https://www.facebook.com\" [(ngModel)]=\"links.facebook\">\n      </div>\n      <div class=\"input-group social-text\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">Twitter</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"https://www.twitter.com\" [(ngModel)]=\"links.twitter\">\n      </div>\n      <div class=\"input-group social-text\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">Pinterest</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"https://www.pinterest.com\" [(ngModel)]=\"links.pinterest\">\n      </div>\n      <div class=\"input-group social-text\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">Instagram</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"https://www.instagram.com\" [(ngModel)]=\"links.instagram\">\n      </div>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">Save</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/settings/settings.component.scss":
/***/ (function(module, exports) {

module.exports = "div.settings-input {\n  margin-top: 20px; }\n  div.settings-input div div.social-text {\n    width: 350px;\n    margin-bottom: 10px; }\n  div.settings-input div div.social-text div span.input-group-text {\n      width: 100px; }\n"

/***/ }),

/***/ "./src/app/pages/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_save_user_data_service__ = __webpack_require__("./src/app/services/save-user-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(saveUserData) {
        this.saveUserData = saveUserData;
        this.links = {
            facebook: '',
            twitter: '',
            pinterest: '',
            instagram: ''
        };
        this.links = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].user.links;
    }
    SettingsComponent.prototype.save = function () {
        __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].user.links = this.links;
        this.saveUserData.now();
    };
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("./src/app/pages/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/pages/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_save_user_data_service__["a" /* SaveUserDataService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome</h1>\n<p>This is your dashboard to manage all of your website content!</p>\n<p>If you need assistance please contact us via our <a href=\"http://onflo.io/\" target=\"_blank\">Onflo</a> dashboard.</p>"

/***/ }),

/***/ "./src/app/pages/welcome/welcome.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("./src/app/pages/welcome/welcome.component.html"),
            styles: [__webpack_require__("./src/app/pages/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/services/save-user-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveUserDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SaveUserDataService = /** @class */ (function () {
    function SaveUserDataService() {
    }
    SaveUserDataService.prototype.now = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser && __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid) {
            var uid = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('users/' + uid).set(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].user).then(function () {
                console.log('Save successful for user: ' + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].userUID);
            });
        }
    };
    SaveUserDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SaveUserDataService);
    return SaveUserDataService;
}());



/***/ }),

/***/ "./src/app/services/update-user-environment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUserEnvironmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdateUserEnvironmentService = /** @class */ (function () {
    function UpdateUserEnvironmentService() {
    }
    UpdateUserEnvironmentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UpdateUserEnvironmentService);
    return UpdateUserEnvironmentService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    userUID: null,
    user: {
        banners: [{
                topText: "Your Banner's Top Text",
                bigText: "Main Banner Text",
                description: "A little description...",
                image: "https://www.publicdomainpictures.net/pictures/100000/velka/new-home-construction-1410089870FZ2.jpg"
            }],
        blogs: [{
                title: "My AWESOME Blog Title!",
                description: "This is all about my blog...",
                link: "https://www.facebook.com/onflo.io/",
                image: "https://www.publicdomainpictures.net/pictures/100000/velka/new-home-construction-1410089870FZ2.jpg"
            }],
        featured: [{
                label: "Property Name",
                id: "123456",
                url: "default"
            }],
        urls: [],
        links: {
            facebook: '',
            twitter: '',
            pinterest: '',
            instagram: ''
        }
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map