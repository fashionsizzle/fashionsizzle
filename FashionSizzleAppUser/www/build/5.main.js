webpackJsonp([5],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__singale__ = __webpack_require__(706);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingaleModule", function() { return SingaleModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SingaleModule = (function () {
    function SingaleModule() {
    }
    return SingaleModule;
}());
SingaleModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__singale__["a" /* Singale */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__singale__["a" /* Singale */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__singale__["a" /* Singale */]
        ]
    })
], SingaleModule);

//# sourceMappingURL=singale.module.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(203);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Singale; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { CommentPage } from '../comment/comment';
var Singale = (function () {
    function Singale(params, http, modalCtrl, loadingCtrl) {
        var _this = this;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.datas = [];
        this.comments = [];
        console.log("trace url : ---" + params.data.url + "/?_embed");
        this.presentLoadingDefault();
        this.http.get(params.data.url + "/?_embed").subscribe(function (data) {
            _this.datas.push(data.json());
            _this.loading.dismiss();
            _this.data = data;
            console.log("trace url 2 : ---" + data.json()._links.replies[0].href);
            _this.http.get(data.json()._links.replies[0].href).subscribe(function (comment) {
                console.log(comment.json());
                _this.comments = comment.json();
                if (_this.comments != null) {
                    _this.dataOne = true;
                }
                else {
                    _this.dataOne = false;
                }
            });
        });
    }
    Singale.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    Singale.prototype.openCommentPage = function () {
        console.log("url trace" + this.data.json()._links.replies[0].href);
        var modal = this.modalCtrl.create('CommentPage', {
            url: this.data.json()._links.replies[0].href
        });
        modal.present();
    };
    Singale.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Singale');
    };
    return Singale;
}());
Singale = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-singale',template:/*ion-inline-start:"/home/megha/Documents/Meme-Ionic-Projects/fashionsizzle/FashionSizzleAppUser/src/pages/singale/singale.html"*/'<link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Blog Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- blog content start -->\n<ion-content>\n\n  <ion-grid *ngFor="let data of datas" class="nopadding">\n    <ion-row>\n      <ion-col col-12 class="nopadding">\n        <div class="blogimg">\n          <img src="{{data.better_featured_image.media_details.sizes.medium.source_url}}" />\n          <div class="star_fav">\n            <svg width="25px" height="25px" version="1.1" x="0px" y="0px" viewBox="0 0 47.94 47.94" style="enable-background:new 0 0 47.94 47.94;"\n              xml:space="preserve">\n              <path style="fill:#ffffff;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757\n                c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042\n                c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685\n                c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528\n                c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956\n                C22.602,0.567,25.338,0.567,26.285,2.486z" />\n            </svg>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 padding>\n        <div>\n          <p class="blogheading">{{data.title.rendered}}</p>\n          <p [innerHTML]="data.content.rendered" class="subtext">\n            {{data.content.rendered}}\n          </p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list>\n    <ion-card *ngIf="dataOne && comments.length>0">\n      <ion-card-header class="comment">\n        <h2 class="commentshead">COMMENTS</h2>\n      </ion-card-header>\n      <ion-card-content *ngFor="let comment of comments">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-2>\n              <div class="avtar"><img src="{{comment.author_avatar_urls[24]}}" /></div>\n            </ion-col>\n            <ion-col col-6>\n              <div class="commentname">{{comment.author_name}}</div>\n            </ion-col>\n            <ion-col text-right>\n              <div class="commentdate">{{comment.date | date:\'dd/MM/yyyy\'}}</div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div [innerHTML]="comment.content.rendered">\n                {{comment.content.rendered}}\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n\n\n\n\n\n  <!-- <ion-card *ngIf="dataOne && comments.length>0">\n    <ion-card-header class="comment">\n      <h2 class="commentshead">COMMENTS</h2>\n    </ion-card-header>\n    <div class="comment-item" *ngFor="let comment of comments">\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="{{comment.author_avatar_urls[24]}}" />\n        </ion-avatar>\n        <h2 class="author_namecomment">{{comment.author_name}}</h2>\n        <p class="date1">\n          {{comment.date | date:\'dd/MM/yyyy\'}}\n        </p>\n      </ion-item>\n      <ion-card-content>\n        <div [innerHTML]="comment.content.rendered" class="coments_para">\n          {{comment.content.rendered}}\n        </div>\n      </ion-card-content>\n    </div>\n  </ion-card> -->\n  <!-- new comment -->\n  <div class="add_new_cmmnt" *ngIf="dataOne">\n    <!-- <button ion-button  (click)="openCommentPage()" color="white" clear>New Comment</button> -->\n    <button ion-button round (click)="openCommentPage()">New Comment</button>\n  </div>\n  <!--New Comment-->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  <!-- <ion-card *ngFor="let data of datas"> -->\n  <!-- <ion-item *ngFor="let author of data._embedded.author">\n      <ion-avatar item-left>\n        \n        <img src="{{author.avatar_urls[\'24\']}}"/>\n      </ion-avatar>\n      <h2 >{{author.name}}</h2>\n      <p>\n        {{data.date | date:\'dd/MM/yyyy\'}}</p>\n      \n    </ion-item> -->\n  <!--<div *ngFor="let thumbnail of data._embedded[\'wo:featuredmedia\']">\n      <img\n        src="{{thumbnail.media_details.sizes.full.source_url}}"\n        *ngIf="thumbnail.source_url"/>\n    </div>-->\n  <!-- <ion-card-content>\n\n      <div class="card_img">\n        <div class="card card-md cardrelative"><img src="{{data.better_featured_image.media_details.sizes.medium.source_url}}" />\n          <div class="star_fav">\n            <svg version="1.1" id="Capa_star" x="0px" y="0px" viewBox="0 0 47.94 47.94" style="enable-background:new 0 0 47.94 47.94;"\n              xml:space="preserve">\n              <path style="fill:rgba(233, 30, 99, 0.89);" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757\n        c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042\n        c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685\n        c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528\n        c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956\n        C22.602,0.567,25.338,0.567,26.285,2.486z" />\n\n\n            </svg>\n\n          </div>\n        </div>\n      </div>\n\n    </ion-card-content>\n    <ion-card-content>\n      <ion-card-title>{{data.title.rendered}}</ion-card-title>\n      <div [innerHTML]="data.content.rendered">\n        {{data.content.rendered}}\n        <br>\n      </div>\n    </ion-card-content> -->\n  <!-- </ion-card> -->\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/home/megha/Documents/Meme-Ionic-Projects/fashionsizzle/FashionSizzleAppUser/src/pages/singale/singale.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], Singale);

//# sourceMappingURL=singale.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map