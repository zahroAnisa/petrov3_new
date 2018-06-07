webpackJsonp([2],{

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisiMisiPageModule", function() { return VisiMisiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visi_misi__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VisiMisiPageModule = /** @class */ (function () {
    function VisiMisiPageModule() {
    }
    VisiMisiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__visi_misi__["a" /* VisiMisiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__visi_misi__["a" /* VisiMisiPage */]),
            ],
        })
    ], VisiMisiPageModule);
    return VisiMisiPageModule;
}());

//# sourceMappingURL=visi-misi.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisiMisiPage; });
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
 * Generated class for the VisiMisiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VisiMisiPage = /** @class */ (function () {
    function VisiMisiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VisiMisiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VisiMisiPage');
    };
    VisiMisiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-visi-misi',template:/*ion-inline-start:"F:\KKI_2\petroV3\src\pages\visi-misi\visi-misi.html"*/'<!--\n\n  Generated template for the VisiMisiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n<ion-navbar no-border-bottom color="header">\n\n    <ion-title>Visi - Misi</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<h5>VISI</h5>\n\n\n\n	<p>Menjadi produsen pupuk dan produk kimia lainnya yang berdaya saing tinggi dan produknya paling diminati konsumen.</p><br><br>\n\n\n\n\n\n	<h5>MISI</h5>\n\n	<br>\n\n	<p>Mendukung penyediaan pupuk nasional untuk tercapainya program swasembada pangan.\n\n	Meningkatkan hasil usaha untuk menunjang kelancaran kegiatan operasional dan pengembangan usaha perusahaan.\n\n	Mengembangkan potensi usaha untuk mendukung industri kimia nasional dan berperan aktif dalam community development.</p><br>\n\n\n\n	<h5>TATA NILAI</h5><br>\n\n\n\n	<p>Safety (Keselamatan) - Mengutamakan keselamatan dan kesehatan kerja serta pelestarian lingkungan hidup dalam setiap kegiatan operasional.\n\n	Innovation (Inovasi) - Meningkatkan inovasi untuk memenangkan bisnis\n\n	Integrity (Integritas) - Mengutamakan integritas di atas segala hal.\n\n	Synergistic Team (Tim yang Sinergis) - Berupaya membangun semangat kelompok yang sinergistik.\n\n	Customer Satisfaction (Kepuasan Pelanggan) - Memanfaatkan profesionalisme untuk peningkatan kepuasan pelanggan. </p><br>\n\n\n\n	<p>Akronim dari Tata Nilai PT Petrokimia Gresik adalah FIRST, dengan proses pembentukan akronim sebagai berikut : </p><br>\n\n	                                                                 <p>SaFety</p><br><br> \n\n\n\n	                                                                     <p>Innovation</p><br><br> \n\n\n\n	                                                            <p>IntegRity</p><br><br> \n\n\n\n	                                                                     <p>Synergistic Team</p><br><br>\n\n\n\n	                                                               <p>CusTomer Satisfaction</p>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\KKI_2\petroV3\src\pages\visi-misi\visi-misi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], VisiMisiPage);
    return VisiMisiPage;
}());

//# sourceMappingURL=visi-misi.js.map

/***/ })

});
//# sourceMappingURL=2.js.map