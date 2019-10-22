webpackJsonp([35],{

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikePageModule", function() { return LikePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__like__ = __webpack_require__(755);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LikePageModule = /** @class */ (function () {
    function LikePageModule() {
    }
    LikePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__like__["a" /* LikePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__like__["a" /* LikePage */]),
            ],
        })
    ], LikePageModule);
    return LikePageModule;
}());

//# sourceMappingURL=like.module.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the LikePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LikePage = /** @class */ (function () {
    function LikePage(modalCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewProfile = false;
        this.title = false;
        this.share = false;
        this.option = false;
        this.fillHeart = false;
        this.fillHeart = false;
    }
    LikePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LikePage');
        console.log(this.fillHeart);
    };
    LikePage.prototype.showTitle = function (title) {
        console.log('start touch');
        if (title == 'like') {
            this.title = true;
        }
        else if (title == 'viewProfile') {
            this.viewProfile = true;
        }
        else if (title == 'share') {
            this.share = true;
        }
        else if (title == "option") {
            this.option = true;
        }
    };
    LikePage.prototype.SubmitDetails = function (title) {
        var _this = this;
        console.log('end touch');
        this.title = false;
        this.option = false;
        this.viewProfile = false;
        this.share = false;
        if (title == 'like') {
            this.fillHeart = true;
        }
        setTimeout(function () {
            _this.modalCtrl.dismiss();
        }, 200);
    };
    LikePage.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    LikePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-like',template:/*ion-inline-start:"/var/www/html/galexy/Portal-master/src/pages/like/like.html"*/'<ion-content  (click)="close()" class="bgTransparent" style="background-color: #000000a6">\n\n</ion-content>\n\n<ion-footer class="popUpFooter">\n    <div class="middle_content">\n        <div class="content">\n            <div class="title_bar">\n              <img src="../../assets/imgs/main_avatar.png" alt="">\n              <p>420Portal</p>\n            </div>\n            <img src="../../assets/imgs/weedgram/1.jpg" alt="" style="width: 100%;">\n            <div class="bottome_bar">\n              <span class="title_relative" (touchstart)="showTitle(\'like\')" (touchend)="SubmitDetails(\'like\')">\n                  <span *ngIf="title" class="title">Like</span>\n                  <ion-icon *ngIf="fillHeart" ios="ios-heart-outline" md="md-heart"></ion-icon>\n                  <ion-icon *ngIf="!fillHeart" name="heart-outline"></ion-icon>\n                </span>\n            \n              <span class="title_relative" (touchstart)="showTitle(\'viewProfile\')" (touchend)="SubmitDetails(\'viewProfile\')">\n                  <span *ngIf="viewProfile" class="title">view profile</span>\n                  <!-- <ion-icon *ngIf="fillHeart" ios="ios-heart-outline" md="md-heart"></ion-icon>\n                  <ion-icon *ngIf="!fillHeart" name="heart-outline"></ion-icon> -->\n                  <img src="../../assets/imgs/icon-account1.png" alt="">\n                </span>\n                <span class="title_relative" (touchstart)="showTitle(\'share\')" (touchend)="SubmitDetails(\'share\')">\n                    <span *ngIf="share" class="title">share</span>\n                    <img src="../../assets/imgs/icon-send.png" alt="">\n                  </span>\n                  <span class="title_relative" (touchstart)="showTitle(\'option\')" (touchend)="SubmitDetails(\'option\')">\n                      <span *ngIf="option" class="title">option</span>\n                      <img src="../../assets/imgs/icon-dot.png" alt="" >\n                    </span>\n                  \n            </div>\n          </div>\n    </div> \n  \n</ion-footer>'/*ion-inline-end:"/var/www/html/galexy/Portal-master/src/pages/like/like.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */]])
    ], LikePage);
    return LikePage;
}());

//# sourceMappingURL=like.js.map

/***/ })

});
//# sourceMappingURL=35.js.map