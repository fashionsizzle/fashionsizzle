webpackJsonp([4],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single__ = __webpack_require__(707);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePageModule", function() { return SinglePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SinglePageModule = (function () {
    function SinglePageModule() {
    }
    return SinglePageModule;
}());
SinglePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__single__["a" /* SinglePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__single__["a" /* SinglePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__single__["a" /* SinglePage */]
        ]
    })
], SinglePageModule);

//# sourceMappingURL=single.module.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(203);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinglePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { BuynowPage } from "../buynow/buynow";
var SinglePage = (function () {
    function SinglePage(navCtrl, params, http, 
        //  private modalCtrl: ModalController,
        loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.datas = [];
        console.log("trace url : ---" + params.data.url + "/?_embed");
        this.presentLoadingDefault();
        this.http.get(params.data.url + '/?_embed=' + params.data).subscribe(function (data) {
            // console.log("datasssss........");
            // console.log(params.data);
            _this.datas.push(data.json());
            _this.loading.dismiss();
            _this.data = data;
            console.log("trace url 2 : ---" + data.json()._links.replies[0].href);
            console.log("trace url : ---" + params.data.url_id + "/?_embed");
            //this.datas.push(data.json()));
        });
        // modal.present()
    }
    SinglePage.prototype.openBuynowPage = function () {
        this.navCtrl.push('BuynowPage');
    };
    SinglePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    SinglePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SinglePage');
    };
    return SinglePage;
}());
SinglePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-single',template:/*ion-inline-start:"/home/megha/Documents/Meme-Ionic-Projects/fashionsizzle/FashionSizzleAppUser/src/pages/single/single.html"*/'<!--\n  Generated template for the SinglePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Shop Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="posrel">\n  <ion-card *ngFor="let data of datas">\n\n    <!--<ion-item *ngFor="let author of data._embedded.wp:featuredmedia.author">-->\n    <!--<ion-avatar item-left>\n        <img src="{{author.source_url}}"/>\n      </ion-avatar>\n      <h2>{{author.name}}</h2> -->\n    <!--</ion-item>-->\n\n    <div class="div_image">\n      <img src="{{data.better_featured_image.media_details.sizes.medium.source_url}}" />\n    </div>\n\n    <ion-card-content>\n      <ion-card-title>{{data.title.rendered}}</ion-card-title>\n      <div [innerHTML]="data.content.rendered">\n        {{data.content.rendered}}\n      </div>\n      <div class="list-inline Appwp-icon">\n        <button class="add_to_cart" onclick="add_p_deatils(data._links.wp:attachment[0].href)">   \n              <a href="javascript:void(0)">\n               \n              </a>\n            </button>\n\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <!-- <div class="btnfixed">\n <button ion-button icon-start class="btncart">\n  <ion-icon name="md-cart" class="iconbtncart"></ion-icon>\n  ADD TO CART\n</button>\n<button ion-button icon-start class="btnbuy">\n  <ion-icon name="md-flash" class="iconbtnbuy"></ion-icon>\n  BUY NOW\n</button>\n</div> -->\n\n  <ion-grid class="no-padding fixedsection">\n    <ion-row>\n      <ion-col class="addcart">\n        <button ion-button full outline class="btncart">\n  <ion-icon name="md-cart" class="iconbtncart"></ion-icon>\n  ADD TO CART\n</button>\n      </ion-col>\n      <ion-col class="buynow" (click)="openBuynowPage()">\n        <button ion-button full outline class="btnbuy">\n  <ion-icon name="md-flash" class="iconbtnbuy"></ion-icon>\n  BUY NOW\n</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/home/megha/Documents/Meme-Ionic-Projects/fashionsizzle/FashionSizzleAppUser/src/pages/single/single.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], SinglePage);

//# sourceMappingURL=single.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map