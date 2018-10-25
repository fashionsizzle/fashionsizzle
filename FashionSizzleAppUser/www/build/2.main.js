webpackJsonp([2],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fashionsizzlertv__ = __webpack_require__(702);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionsizzlertvPageModule", function() { return FashionsizzlertvPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FashionsizzlertvPageModule = (function () {
    function FashionsizzlertvPageModule() {
    }
    return FashionsizzlertvPageModule;
}());
FashionsizzlertvPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__fashionsizzlertv__["a" /* FashionsizzlertvPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fashionsizzlertv__["a" /* FashionsizzlertvPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__fashionsizzlertv__["a" /* FashionsizzlertvPage */]
        ]
    })
], FashionsizzlertvPageModule);

//# sourceMappingURL=fashionsizzlertv.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(202);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ytb_player__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_youtube_provider__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_youtube_video_player__ = __webpack_require__(711);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FashionsizzlertvPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FashionsizzlertvPage = (function () {
    function FashionsizzlertvPage(youtube, player, ytbProvider, loadingCtrl) {
        this.youtube = youtube;
        this.player = player;
        this.ytbProvider = ytbProvider;
        this.loadingCtrl = loadingCtrl;
        this.vPlayer = true;
        this.videos = [];
        this.search = {
            params: ''
        };
        this.nextPageToken = ""; // initial value
        this.livevideos = {};
        this.completedvideos = [];
        this.baseUrl = 'https://www.youtube.com/embed/';
        this.category = "Uploaded";
        this.isAndroid = false;
        this.eventType = "";
        this.getInitialVideos();
    }
    FashionsizzlertvPage.prototype.segmentChanged = function (event) {
        var _base = this;
        this.search.params = "";
        _base.videos = [];
        _base.completedvideos = [];
        // switch case based on the current segment / category value
        switch (this.category) {
            case 'Uploaded':
                document.getElementById('search-form').style.display = "block";
                _base.nextPageToken = "";
                _base.eventType = "";
                _base.getInitialVideos();
                break;
            case 'Live':
                document.getElementById('search-form').style.display = "none";
                _base.eventType = "Live";
                _base.nextPageToken = "";
                _base.getLiveEvents();
                break;
            case 'Completed':
                document.getElementById('search-form').style.display = "block";
                _base.eventType = "Completed";
                _base.nextPageToken = "";
                _base.getCompletedEvents();
                break;
            default:
                console.log("Are you an alien ?");
        }
    };
    FashionsizzlertvPage.prototype.doInfinite = function (infiniteScroll) {
        var _base = this;
        if (_base.nextPageToken == "") {
            infiniteScroll.complete();
            return;
        }
        switch (this.category) {
            case 'Uploaded':
                _base.getInitialVideos()
                    .then(function (success) {
                    infiniteScroll.complete();
                }, function (error) {
                    infiniteScroll.complete();
                });
                break;
            case 'Completed':
                _base.getCompletedEvents()
                    .then(function (success) {
                    infiniteScroll.complete();
                }, function (error) {
                    infiniteScroll.complete();
                });
                break;
            default:
                console.log("Are you an alien ?");
        }
    };
    FashionsizzlertvPage.prototype.commingSoon = function () {
        var loading = this.loadingCtrl.create({
            content: 'Comming soon...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    FashionsizzlertvPage.prototype.getLiveEvents = function () {
        var _base = this;
        var loading = this.loadingCtrl.create({});
        loading.present();
        this.ytbProvider.getVideos("", "Live", _base.nextPageToken).subscribe(function (videos) {
            if (videos.items.length != 0) {
                _base.youtube.openVideo(videos.items[0].id.videoId);
            }
            loading.dismiss();
        }, function (err) {
            console.log(err);
        });
    };
    FashionsizzlertvPage.prototype.getInitialVideos = function () {
        var loading = this.loadingCtrl.create({});
        loading.present();
        var _base = this;
        return new Promise(function (resolve, reject) {
            _base.ytbProvider.getVideos(_base.search.params, "", _base.nextPageToken).subscribe(function (videos) {
                if (videos.items.length == 0) {
                    loading.dismiss();
                    resolve(videos);
                }
                for (var i = 0; i < videos.items.length; i++) {
                    _base.videos.push(videos.items[i]);
                    if (i == videos.items.length - 1) {
                        loading.dismiss();
                        if ('nextPageToken' in videos) {
                            _base.nextPageToken = videos.nextPageToken;
                        }
                        else {
                            _base.nextPageToken = "";
                        }
                        resolve(videos);
                    }
                }
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    FashionsizzlertvPage.prototype.findVideos = function ($event) {
        var _base = this;
        _base.videos = [];
        _base.completedvideos = [];
        switch (this.category) {
            case 'Uploaded':
                _base.getInitialVideos();
                _base.eventType = "";
                break;
            case 'Live':
                _base.getLiveEvents();
                _base.eventType = "Live";
                break;
            case 'Completed':
                _base.getCompletedEvents();
                _base.eventType = "Completed";
                break;
            default:
                console.log("Are you an alien ?");
        }
    };
    FashionsizzlertvPage.prototype.playVideo = function (id) {
        this.youtube.openVideo(id);
    };
    FashionsizzlertvPage.prototype.ionViewDidLoad = function () {
    };
    FashionsizzlertvPage.prototype.getCompletedEvents = function () {
        var loading = this.loadingCtrl.create({});
        loading.present();
        var _base = this;
        return new Promise(function (resolve, reject) {
            _base.ytbProvider.getVideos(_base.search.params, "Completed", _base.nextPageToken).subscribe(function (videos) {
                if (videos.items.length == 0) {
                    loading.dismiss();
                    resolve(videos);
                }
                for (var i = 0; i < videos.items.length; i++) {
                    _base.completedvideos.push(videos.items[i]);
                    if (i == videos.items.length - 1) {
                        if ('nextPageToken' in videos) {
                            _base.nextPageToken = videos.nextPageToken;
                        }
                        else {
                            _base.nextPageToken = "";
                        }
                        loading.dismiss();
                        resolve(videos);
                    }
                }
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    return FashionsizzlertvPage;
}());
FashionsizzlertvPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-fashionsizzlertv',template:/*ion-inline-start:"/home/megha/Documents/Meme-Ionic-Projects/fashionsizzle/FashionSizzleAppUser/src/pages/fashionsizzlertv/fashionsizzlertv.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n        <ion-title>Fashion SizzleTv</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\n    <div class="segmentheading-maindiv">\n        <!-- ==============four segment\'s content start================== -->\n        <div [ngSwitch]="category" class="segmentcontent-maindiv">\n            <div id="search-form" class="search">\n                <form (ngSubmit)="findVideos($event)" class="search-form">\n                    <ion-item>\n                        <ion-input type="text" placeholder="Search" [(ngModel)]="search.params" name="search"></ion-input>\n                        <button type="submit" ion-button icon-only clear item-right class="searchbtn">\n                                <ion-icon name="search"></ion-icon>\n                        </button>\n                    </ion-item>\n                </form>\n            </div>\n            <!-- uploaded segment content start -->\n            <div *ngSwitchCase="\'Uploaded\'" class="segmentcontentback">\n                <div>\n                    <div class="tab-content">\n                        <div id="home" class="tab-pane fade in active">\n                            <div id="results">\n                                <div class="card-background-page">\n\n                                    <ion-card *ngFor="let video of videos">\n                                        <div class="playimg">\n                                            <img src="{{video.snippet.thumbnails.high.url}}" />\n                                            <button ion-button color="primary" class="playbtn" (click)="playVideo(video.id.videoId)"><ion-icon name="play"></ion-icon></button>\n                                        </div>\n                                        <ion-card-content>\n                                            <ion-card-title class="textalignleft">\n                                                {{video.snippet.title}}\n                                            </ion-card-title>\n                                            <p class="textalignleft">\n                                                {{video.snippet.description}}\n                                            </p>\n                                        </ion-card-content>\n                                    </ion-card>\n\n                                    <!-- infinite scroll -->\n                                    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n                                        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n                                    </ion-infinite-scroll>\n\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n\n            <!-- uploaded segment content end -->\n\n            <!-- live segment content start -->\n            <div *ngSwitchCase="\'Live\'" class="segmentcontentback">\n                <div class="no-videoavailabe">\n                <svg version="1.1" id="youtube_fashion" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                    width="40px" height="40px" viewBox="0 0 96.875 96.875" style="enable-background:new 0 0 96.875 96.875;" xml:space="preserve">\n                    <g>\n                        <path d="M95.201,25.538c-1.186-5.152-5.4-8.953-10.473-9.52c-12.013-1.341-24.172-1.348-36.275-1.341\n		c-12.105-0.007-24.266,0-36.279,1.341c-5.07,0.567-9.281,4.368-10.467,9.52C0.019,32.875,0,40.884,0,48.438\n		C0,55.992,0,64,1.688,71.336c1.184,5.151,5.396,8.952,10.469,9.52c12.012,1.342,24.172,1.349,36.277,1.342\n		c12.107,0.007,24.264,0,36.275-1.342c5.07-0.567,9.285-4.368,10.471-9.52c1.689-7.337,1.695-15.345,1.695-22.898\n		C96.875,40.884,96.889,32.875,95.201,25.538z M35.936,63.474c0-10.716,0-21.32,0-32.037c10.267,5.357,20.466,10.678,30.798,16.068\n		C56.434,52.847,46.23,58.136,35.936,63.474z" />\n                    </g>\n                </svg>\n\n                <h3 class="text-center noevent">No live event</h3>\n                </div>\n            </div>\n            <!-- live segment content end -->\n\n            <!-- Completed segment content start -->\n            <div *ngSwitchCase="\'Completed\'" class="segmentcontentback">\n                <div>\n                    <div class="tab-content">\n                        <div id="home" class="tab-pane fade in active">\n                            <div id="results">\n                                <div class="card-background-page">\n\n                                    <ion-card *ngFor="let video of completedvideos">\n                                        <div class="playimg">\n                                            <img src="{{video.snippet.thumbnails.high.url}}" />\n                                            <button ion-button color="primary" class="playbtn" (click)="playVideo(video.id.videoId)"><ion-icon name="play"></ion-icon></button>\n                                        </div>\n                                        <ion-card-content>\n                                            <ion-card-title class="textalignleft">\n                                                {{video.snippet.title}}\n                                            </ion-card-title>\n                                            <p class="textalignleft">\n                                                {{video.snippet.description}}\n                                            </p>\n                                        </ion-card-content>\n                                    </ion-card>\n\n                                    <!-- infinite scroll -->\n                                    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n                                        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n                                    </ion-infinite-scroll>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- Completed segment content end -->\n\n        </div>\n        <!--=============== four segment\'s content end ============-->\n        <!-- ==============four segment\'s header start ====================-->\n        <ion-toolbar class="segment-heading">\n            <ion-segment [(ngModel)]="category" (ionChange)="segmentChanged($event)">\n                <ion-segment-button value="Uploaded">\n                    Uploaded\n                </ion-segment-button>\n                <ion-segment-button value="Live">\n                    Live\n                </ion-segment-button>\n                <ion-segment-button value="Completed">\n                    Completed\n                </ion-segment-button>\n            </ion-segment>\n        </ion-toolbar>\n\n        <!-- ==============four segment\'s header end ====================-->\n\n    </div>\n    <!-- custom tab end-->\n\n\n</ion-content>'/*ion-inline-end:"/home/megha/Documents/Meme-Ionic-Projects/fashionsizzle/FashionSizzleAppUser/src/pages/fashionsizzlertv/fashionsizzlertv.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_ytb_player__["a" /* YtbPlayer */], __WEBPACK_IMPORTED_MODULE_3__providers_youtube_provider__["a" /* YoutubeProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */], __WEBPACK_IMPORTED_MODULE_2__providers_ytb_player__["a" /* YtbPlayer */], __WEBPACK_IMPORTED_MODULE_3__providers_youtube_provider__["a" /* YoutubeProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], FashionsizzlertvPage);

//# sourceMappingURL=fashionsizzlertv.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeProvider; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YoutubeProvider = (function () {
    function YoutubeProvider(http) {
        this.http = http;
        this.googleToken = "AIzaSyCUGb61BEVsrEq0FWLiRLD4rTBxISkrmvo";
        this.maxResults = 4;
        this.channelID = "UCLao70wQ8q2VrV1fx5k8LJQ";
        this.url = 'https://www.googleapis.com/youtube/v3/search?';
        this.queryString = "";
        this.eventString = "";
        this.pageTokenString = "";
    }
    YoutubeProvider.prototype.getVideos = function (query, eventType, nextPageToken) {
        var _base = this;
        console.log(query);
        console.log(eventType);
        /** forming query string **/
        if (query == "") {
            _base.queryString = "";
        }
        else {
            _base.queryString = "&q=" + query;
        }
        /** forming event string **/
        if (eventType == "") {
            _base.eventString = "";
        }
        else {
            _base.eventString = "&eventType=" + eventType;
        }
        /** forming nextPageToken string **/
        if (nextPageToken == "") {
            _base.pageTokenString = "";
        }
        else {
            _base.pageTokenString = "&pageToken=" + nextPageToken;
        }
        /** forming url **/
        var url = _base.url + _base.queryString + '&part=id,snippet&channelId=' + _base.channelID + _base.eventString + '&type=video&order=viewCount&maxResults=' + this.maxResults + '&key=' + this.googleToken + _base.pageTokenString;
        console.log(url);
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    return YoutubeProvider;
}());
YoutubeProvider = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
], YoutubeProvider);

//# sourceMappingURL=youtube_provider.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YtbPlayer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var YtbPlayer = (function () {
    function YtbPlayer() {
        this.youtube = {
            ready: false,
            player: null,
            playerId: null,
            videoId: null,
            videoTitle: null,
            playerHeight: '360',
            playerWidth: '640'
        };
        this.setupPlayer();
    }
    YtbPlayer.prototype.bindPlayer = function (elementId) {
        this.youtube.playerId = elementId;
    };
    ;
    YtbPlayer.prototype.createPlayer = function () {
        return new window['YT'].Player(this.youtube.playerId, {
            height: this.youtube.playerHeight,
            width: this.youtube.playerWidth,
            playerVars: {
                rel: 0,
                showinfo: 0
            }
        });
    };
    YtbPlayer.prototype.loadPlayer = function () {
        if (this.youtube.ready && this.youtube.playerId) {
            if (this.youtube.player) {
                this.youtube.player.destroy();
            }
            this.youtube.player = this.createPlayer();
        }
    };
    YtbPlayer.prototype.setupPlayer = function () {
        var _this = this;
        //we need to check if the api is loaded
        console.log(1);
        window['onYouTubeIframeAPIReady'] = function () {
            console.log(2);
            if (window['YT']) {
                console.log(3);
                _this.youtube.ready = true;
                _this.bindPlayer('placeholder');
                _this.loadPlayer();
            }
        };
        if (window['YT'] && window['YT'].Player) {
            console.log(4);
            this.youtube.ready = true;
            this.bindPlayer('placeholder');
            this.loadPlayer();
        }
    };
    YtbPlayer.prototype.launchPlayer = function (id) {
        console.log(id);
        this.youtube.player.loadVideoById(id);
        this.youtube.videoId = id;
        return this.youtube;
    };
    return YtbPlayer;
}());
YtbPlayer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], YtbPlayer);

//# sourceMappingURL=ytb_player.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeVideoPlayer; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name Youtube Video Player
 * @description
 * Plays YouTube videos in Native YouTube App
 *
 * @usage
 * For Android 5.0+ you will need to add the following to config.xml
 * ```xml
 * <preference name="YouTubeDataApiKey" value="[YOUR YOUTUBE API]" />
 * ```
 * For more information: https://developers.google.com/youtube/v3/getting-started
 *
 *
 * ```typescript
 * import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
 *
 * constructor(private youtube: YoutubeVideoPlayer) { }
 *
 * ...
 *
 *
 * this.youtube.openVideo('myvideoid');
 *
 * ```
 */
var YoutubeVideoPlayer = (function (_super) {
    __extends(YoutubeVideoPlayer, _super);
    function YoutubeVideoPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Plays a YouTube video
     * @param videoId {string} Video ID
     */
    YoutubeVideoPlayer.prototype.openVideo = function (videoId) { };
    YoutubeVideoPlayer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Injectable */] },
    ];
    /** @nocollapse */
    YoutubeVideoPlayer.ctorParameters = function () { return []; };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], YoutubeVideoPlayer.prototype, "openVideo", null);
    YoutubeVideoPlayer = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Plugin */])({
            pluginName: 'YoutubeVideoPlayer',
            plugin: 'cordova-plugin-youtube-video-player',
            pluginRef: 'YoutubeVideoPlayer',
            repo: 'https://github.com/ihadeed/CordovaYoutubeVideoPlayer',
            platforms: ['Android', 'iOS']
        })
    ], YoutubeVideoPlayer);
    return YoutubeVideoPlayer;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map