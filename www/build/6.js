webpackJsonp([6],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slideData = [{ image: "../assets/imgs/sni17_con.jpg" }, { image: "../assets/imgs/proper 17_con.jpg" }];
        this.slideLength = false;
        if (this.slideData.length > 0) {
            this.slideLength = true;
        }
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Petro\ptr1_3_clone\src\pages\home\home.html"*/'<ion-header >\n  <ion-navbar no-border-bottom >\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n\n		<ion-segment [(ngModel)]="segment" (ionChange)="updateSchedule()">\n	      <ion-segment-button value="semua">\n	        Semua\n	      </ion-segment-button>\n	      <ion-segment-button value="populer">\n	        Populer\n	      </ion-segment-button>\n	      <ion-segment-button value="terbaru">\n	        Terbaru\n	      </ion-segment-button>\n	    </ion-segment>\n\n	    <ion-buttons end>\n	      <button ion-button icon-only (click)="presentFilter()">\n	        <ion-icon ios="ios-more" md="md-more"></ion-icon>\n	      </button>\n	    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-searchbar color="primary"\n                   [(ngModel)]="queryText"\n                   (ionInput)="updateSchedule()"\n                   placeholder="Search">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding="true" class="has-header" >\n    <ion-slides autoplay="5000" loop="true" speed="3000" style="width:100%;height:200px;">\n	    <ion-slide *ngFor="let slide of slideData">\n	      <img src="{{slide.image}}" />\n	    </ion-slide>\n	</ion-slides>\n    <!-- ============================= LIST BERITA ========================================================= -->\n    <ion-list id="petroMobile-list4">\n      <ion-item  class="item-thumbnail-left item-text-wrap" id="petroMobile-list-item13" ui-sref="menu.judulBerita()">\n        <h4>PG Kucurkan Bantuan Untuk Korban Banjir Di Lamongan</h4>\n      </ion-item>\n      <ion-item class="item-thumbnail-left" id="petroMobile-list-item14" ui-sref="menu.judulBerita()">\n        <h2>Item</h2>\n      </ion-item>\n      <ion-item class="item-thumbnail-left" id="petroMobile-list-item15" ui-sref="menu.judulBerita()">\n        <h2>Item</h2>\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\Petro\ptr1_3_clone\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=6.js.map