webpackJsonp([47],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(408);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl) {
        this.navCtrl = navCtrl;
        // Basic root for our content view
        this.rootPage = 'TabsPage';
        this.pages = [
            { title: 'Tab 1', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'shuffle' },
            { title: 'Tab 2', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'shuffle' },
            { title: 'Special', pageName: 'SpecialPage', icon: 'shuffle' },
            { title: 'Home', pageName: 'HomePage', icon: 'home' },
            { title: 'Pemasaran', pageName: 'PemasaranPage', icon: 'cart' },
            { title: 'Berita', pageName: 'BeritaPage', icon: 'list-box' },
            { title: 'Laporan', pageName: 'LaporanPage', icon: 'document' },
            { title: 'TataKelola', pageName: 'TataKelolaPage', icon: 'shuffle' },
            { title: 'Profil', pageName: 'ProfilPage', icon: 'person' },
            { title: 'InfoProduk', pageName: 'InfoProdukPage', icon: 'cube' },
            { title: 'CSR', pageName: 'CorsoresPage', icon: 'shuffle' },
            { title: 'Tautan', pageName: 'TautanPage', icon: 'shuffle' },
            { title: 'Bantuan', pageName: 'BantuanPage', icon: 'shuffle' }
        ];
    }
    MenuPage.prototype.openPage = function (page) {
        var params = {};
        // The index is equal to the order of our tabs inside tabs.ts
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // The active child nav is our Tabs Navigation
        if (this.nav.getActiveChildNav() && page.index != undefined) {
            this.nav.getActiveChildNav().select(page.index);
        }
        else {
            // Tabs are not active, so reset the root page 
            // In this case: moving to or from SpecialPage
            this.nav.setRoot(page.pageName, params);
        }
    };
    MenuPage.prototype.isActive = function (page) {
        // Again the Tabs Navigation
        var childNav = this.nav.getActiveChildNav();
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        // Fallback needed when there is no active childnav (tabs not active)
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"F:\KKI_2\petroV3\src\pages\menu\menu.html"*/'<ion-menu [content]="content">\n\n	<ion-header>\n\n	  <ion-toolbar color="header">\n\n	    <ion-title>Menu</ion-title>\n\n	  </ion-toolbar>\n\n	</ion-header>\n\n\n\n\n\n	<ion-content>\n\n		<ion-list>\n\n			<button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n\n					<ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n					{{ p.title }}\n\n			</button>\n\n		</ion-list>\n\n	</ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- main navigation -->\n\n<ion-nav [root]="rootPage"\n\n #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"F:\KKI_2\petroV3\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=47.js.map