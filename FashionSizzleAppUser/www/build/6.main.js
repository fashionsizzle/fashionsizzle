webpackJsonp([6],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payments__ = __webpack_require__(704);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPageModule", function() { return PaymentsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentsPageModule = (function () {
    function PaymentsPageModule() {
    }
    return PaymentsPageModule;
}());
PaymentsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__payments__["a" /* PaymentsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payments__["a" /* PaymentsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__payments__["a" /* PaymentsPage */]
        ]
    })
], PaymentsPageModule);

//# sourceMappingURL=payments.module.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentsPage = (function () {
    function PaymentsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentsPage');
    };
    return PaymentsPage;
}());
PaymentsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-payments',template:/*ion-inline-start:"/home/megha/Documents/Meme-Ionic-Projects/fashionsizzle/FashionSizzleAppUser/src/pages/payments/payments.html"*/'<!--\n  Generated template for the PaymentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Payments</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="payment">\n\n  <ion-card class="top2align">\n    <!-- <ion-card-header class="address_cardhead">\n      <p class="methodhead">Payments Method</p>\n    </ion-card-header> -->\n    <ion-card-content class="payment_content">\n      <div class="paymentoptions"> </div>\n      <ion-list>\n\n        <ion-item>\n          <ion-label class="paymentmethod1">PhonePe (UPI, Wallets)</ion-label>\n          <ion-checkbox [(ngModel)]="PhonePe" class="selectmethod" item-right></ion-checkbox>\n        </ion-item>\n        <hr class="separatorpayement">\n        <ion-item>\n          <ion-label class="paymentmethod1">Credit/ Debit /ATM Card</ion-label>\n          <ion-checkbox [(ngModel)]="card" class="selectmethod" item-right></ion-checkbox>\n\n\n        </ion-item>\n        <hr class="separatorpayement">\n        <ion-item>\n          <ion-label class="paymentmethod1">Net Banking</ion-label>\n          <ion-checkbox [(ngModel)]="Banking" class="selectmethod" item-right></ion-checkbox>\n\n\n        </ion-item>\n        <hr class="separatorpayement">\n\n        <ion-item>\n          <ion-label class="paymentmethod1" >Cash on Delivery</ion-label>\n          <ion-checkbox [(ngModel)]="cod" class="selectmethod" item-right></ion-checkbox>\n\n        </ion-item>\n        \n        <hr class="separatorpayement">\n\n\n        <ion-item>\n          <ion-label class="paymentmethod1">EMI (Easy Installments)</ion-label>\n          <ion-checkbox [(ngModel)]="emi" class="selectmethod" item-right></ion-checkbox>\n\n\n        </ion-item>\n\n\n\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  \n\n  <div class="fixedarea">\n\n    <ion-grid class="no-padding fixedsection">\n      <ion-row class="continuefixed">\n        <ion-col class="priceshown">\n          <p class="pricemoney"> $128</p>\n          <a href="#" class="goprice">View price details</a>\n\n        </ion-col>\n        <ion-col class="continuecolumn">\n          <button ion-button full outline class="btncontinue" >\n  <!-- <ion-icon name="md-flash" class="iconbtnbuy"></ion-icon> -->\n          PLACE ORDER\n        </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/megha/Documents/Meme-Ionic-Projects/fashionsizzle/FashionSizzleAppUser/src/pages/payments/payments.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PaymentsPage);

//# sourceMappingURL=payments.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map