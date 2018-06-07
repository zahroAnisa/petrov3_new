webpackJsonp([29],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilPageModule", function() { return ProfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profil__ = __webpack_require__(426);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilPageModule = /** @class */ (function () {
    function ProfilPageModule() {
    }
    ProfilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profil__["a" /* ProfilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profil__["a" /* ProfilPage */]),
            ],
        })
    ], ProfilPageModule);
    return ProfilPageModule;
}());

//# sourceMappingURL=profil.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
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
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilPage = /** @class */ (function () {
    function ProfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilPage');
    };
    ProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil',template:/*ion-inline-start:"F:\KKI_2\petroV3\src\pages\profil\profil.html"*/' <ion-header class="headerHome">\n\n   <ion-navbar no-border-bottom color="header">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n        <ion-title>Profil</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n <ion-content padding="true" class="has-header" offset-50>\n\n        <div class="row item-text-wrap text-center" >\n\n            <div class="item col col-4">\n\n                <a ui-sref="menu.maknaLogo()" id="profil-button25">\n\n                    <i class="icon"><img src="../assets/imgs/profil/makna.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Makna Logo</p>\n\n                </a>\n\n            </div>  \n\n            <div class="item col col-4">\n\n                <a ui-sref="menu.sejarahPerusahaan()" id="profil-button26">\n\n                    <i class="icon"><img src="../assets/imgs/profil/pabrik.png" style="width: 50px;height: 50px;"></i>\n\n                    <p >Sejarah Perusahaan</p>\n\n                </a>\n\n            </div>\n\n            <div class="item col col-4">\n\n                <a id="profil-button143">\n\n                    <i class="icon"><img src="../assets/imgs/profil/profil.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Profil Perusahaan PDF</p>\n\n                </a>\n\n            </div>    \n\n        </div>\n\n\n\n        <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4 ">\n\n                <a ui-sref="menu.visiMisiDanBudayaPerusahaan()" id="profil-button27">\n\n                    <i class="icon"><img src="../assets/imgs/profil/visimisi.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Visi Misi & Tata Nilai</p>\n\n                </a>\n\n            </div>    \n\n            <div class="item col col-4 ">\n\n                <a id="profil-button39">\n\n                    <i class="icon"><img src="../assets/imgs/profil/inovasi.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Inovasi</p>\n\n                </a>\n\n            </div> \n\n            <div class="item col col-4">\n\n                <a ui-sref="menu.fasilitasInfrastruktur()" id="profil-button29">\n\n                    <i class="icon"><img src="../assets/imgs/profil/infrastruktur.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Fasilitas Infrastruktur</p>\n\n                </a>\n\n            </div>  \n\n        </div>\n\n\n\n        <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4 ">\n\n                <a ui-sref="menu.manajemen()" id="profil-button30">\n\n                    <i class="icon"><img src="../assets/imgs/profil/manajemen.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Manajemen</p>\n\n                </a>\n\n            </div>  \n\n            <div class="item col col-4">\n\n                <a ui-sref="menu.lingkunganK3()" id="profil-button34">\n\n                    <i class="icon"><img src="../assets/imgs/profil/lingkungan.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Lingkungan & K3</p>\n\n                </a>\n\n            </div>  \n\n            <div class="item col col-4 ">\n\n                <a ui-sref="menu.komiteAudit()" id="profil-button36">\n\n                    <i class="icon"><img src="../assets/imgs/profil/audit.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Komite Audit</p>\n\n                </a>\n\n            </div>  \n\n        </div>\n\n\n\n        <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4">\n\n                <a id="profil-button31">\n\n                    <i class="icon"><img src="../assets/imgs/profil/struktur.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Struktur Organisasi</p>\n\n                </a>\n\n            </div>\n\n            <div class="item col col-4">\n\n                <a ui-sref="menu.profesiPenunjang()" id="profil-button38">\n\n                    <i class="icon"><img src="../assets/imgs/profil/penunjang.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Profesi Penunjang</p>\n\n                </a>\n\n            </div>\n\n            <div class="item col col-4">\n\n                <a ui-sref="menu.kapasitasProduksi()" id="profil-button28">\n\n                    <i class="icon"><img src="../assets/imgs/profil/kapasitasProduksi.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Kapasitas Produksi</p>\n\n                </a>\n\n            </div>  \n\n        </div>\n\n\n\n        <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4">\n\n                <a ui-sref="menu.sumberDayaManusia()" id="profil-button32">\n\n                    <i class="icon"><img src="../assets/imgs/profil/sdm.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Sumber Daya Manusia</p>\n\n                </a>\n\n            </div>\n\n            <div class="item col col-4">\n\n                <a ui-sref="menu.komiteManajemenRisiko()" id="profil-button37">\n\n                    <i class="icon"><img src="../assets/imgs/profil/.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Komite Manajemen Resiko</p>\n\n                </a>\n\n            </div>   \n\n            <div class="item col col-4 ">\n\n                <a id="profil-button142">\n\n                    <i class="icon"><img src="../assets/imgs/profil/anakPerusahaan1.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Anak Perusahaan & Usaha Patungan</p>\n\n                </a>\n\n            </div>  \n\n        </div>  \n\n\n\n        <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4">\n\n                <a ui-sref="menu.penghargaanPrestasi()" id="profil-button35">\n\n                    <i class="icon"><img src="../assets/imgs/profil/penghargaan.png" style="width: 50px;height: 50px;"></i>\n\n                    <p class="text-menuProfil">Penghargaan & Prestasi</p>\n\n                </a>\n\n            </div>  \n\n            <div class="item col col-4">\n\n                <a ui-sref="menu.marsPetrokimiaGresik()" id="profil-button41" [navPush]="\'MarsPage\'">\n\n                    <i class="icon"><img src="../assets/imgs/profil/lirik.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Mars Petrokimia Gresik</p>\n\n                </a>\n\n            </div>  \n\n            <div class="item col col-4 ">\n\n                <a ui-sref="menu.videoProfilPerusahaan()" id="profil-button42" [navPush]="\'VideoProfilPage\'">\n\n                    <i class="icon"><img src="../assets/imgs/profil/video1.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Video Profil Perusahaan</p>\n\n                </a>\n\n            </div>  \n\n        </div>\n\n</ion-content>'/*ion-inline-end:"F:\KKI_2\petroV3\src\pages\profil\profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProfilPage);
    return ProfilPage;
}());

//# sourceMappingURL=profil.js.map

/***/ })

});
//# sourceMappingURL=29.js.map