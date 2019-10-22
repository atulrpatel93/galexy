webpackJsonp([34],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortaldetailPageModule", function() { return PortaldetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__portaldetail__ = __webpack_require__(765);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PortaldetailPageModule = /** @class */ (function () {
    function PortaldetailPageModule() {
    }
    PortaldetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__portaldetail__["a" /* PortaldetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__portaldetail__["a" /* PortaldetailPage */]),
                __WEBPACK_IMPORTED_MODULE_2__portaldetail__["a" /* PortaldetailPage */]
            ],
        })
    ], PortaldetailPageModule);
    return PortaldetailPageModule;
}());

//# sourceMappingURL=portaldetail.module.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortaldetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(351);
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
 * Generated class for the PortaldetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PortaldetailPage = /** @class */ (function () {
    function PortaldetailPage(navCtrl, navParams, loadingCtrl, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.dataProvider = dataProvider;
        this.portalsProfileData = [];
        this.portalsPostsData = [];
        this.openStatus = '';
    }
    PortaldetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // console.log('ionViewDidLoad PortaldetailPage');
        this.dataProvider.showLoading();
        var portalId = this.navParams.get("portalId");
        this.dataProvider.getPortalProfile({ "portalId": portalId }).then(function (portalProfile) {
            _this.dataProvider.hideLoading();
            _this.portalsProfileData = portalProfile.portalData;
            _this.portalsPostsData = portalProfile.portalPosts;
            _this.openStatus = portalProfile.openStat;
            _this.portalLat = _this.portalsProfileData.latitude;
            _this.portalLong = _this.portalsProfileData.longitude;
            _this.markerIconurl = portalProfile.storeType.icon;
            _this.storeName = portalProfile.storeType.type;
            _this.portalMap();
            // console.log(portalProfile);
        }).catch(function (err) {
            _this.dataProvider.hideLoading();
            _this.dataProvider.errorALertMessage(err);
        });
    };
    PortaldetailPage.prototype.portalMap = function () {
        // this.markerIconurl = 'https://www.420portal.com/img/brickmortar.png';
        var latLng = new google.maps.LatLng(this.portalLat, this.portalLong);
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: latLng,
            // mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false,
        });
        var currentMarker = new google.maps.Marker({
            map: this.map,
            position: latLng,
            title: 'Click to zoom',
            icon: this.markerIconurl,
            draggable: true
        });
    };
    PortaldetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-portaldetail',template:/*ion-inline-start:"/var/www/html/galexy/Portal-master/src/pages/portaldetail/portaldetail.html"*/'<ion-header>\n  <portal-header></portal-header>\n</ion-header>\n<ion-footer>\n  <portal-footer></portal-footer>\n</ion-footer>\n\n<ion-content class="menu-items">\n  <ion-fab right top style="right:0px;top:0px;background-color: rgba(0,0,0,0.5);">\n    <button style="background-color: transparent;font-size: 1.2rem;padding:10px;padding-bottom: 5px;">\n      <div style="color:white;">\n        <i class="fa fa-sign-in" aria-hidden="true" style="color: rgb(239, 167, 32);"></i><br>\n        Login\n      </div>\n    </button>\n    <button style="background-color: transparent;font-size: 1.2rem;padding:10px;padding-bottom: 5px;">\n      <div style="color:white;">\n        <i class="fa fa-user" aria-hidden="true" style="color: rgb(239, 167, 32);"></i><br>\n        Register\n      </div>\n    </button>\n  </ion-fab>\n\n    <div id="map"></div>\n    <ion-card no-padding no-margin style="width: 100%" class="follower">\n      <ion-row class="sidebarnav" no-padding justify-content-center align-items-center>\n        <ion-col col-4 text-right>\n          <ion-icon class="setting" name="settings"></ion-icon>\n        </ion-col>\n        <ion-col col-4 text-center>\n          <ion-item>\n            <ion-avatar>\n                <div class="portal_logo_holder">\n                    <img *ngIf="portalsProfileData.portal_logo!=\'\'" src="https://www.420portal.com/img/{{portalsProfileData.portal_logo}}" class="profileimg">\n                    <img *ngIf="portalsProfileData.portal_logo==\'\'" src="https://www.420portal.com/img/uploaded/420portalspiral.png" class="profileimg">\n                </div>\n            </ion-avatar>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 text-left>\n          <ion-icon class="setting" name="add-circle"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row no-padding justify-content-center>\n        <ion-item class="studio45dev">\n          <p text-center class="portal-name">\n            {{portalsProfileData.name}}\n            <span *ngIf="openStatus==0 || openStatus==\'0\'" class="portal-is-closed">(Closed)</span>\n            <span *ngIf="openStatus==1 || openStatus==\'1\'" class="portal-is-open">(Open)</span>\n          </p>\n          <p class="portal-description" text-center>{{portalsProfileData.description}}</p>\n        </ion-item>\n      </ion-row>\n      <ion-row no-padding justify-content-center class="portal-address-holder margin-top-20">\n        <span class="portal-address-holder">Address:</span>\n        <span class="portal-address-text">{{portalsProfileData.address}}</span>\n      </ion-row>\n\n      <ion-row no-padding justify-content-center class="portal-address-holder margin-top-20">\n        <span class="portal-address-holder">Phone:</span>\n        <span class="portal-address-text">{{portalsProfileData.phone_no}}</span>\n      </ion-row>\n\n      <ion-row class="margin-top-20">\n        <ion-col col-1>\n        </ion-col>\n        <ion-col col-3 text-right class="righthorizline">\n          <p text-center class="studio45">{{portalsPostsData.length}}</p>\n          <p text-center class="posts">Posts</p>\n        </ion-col>\n        <ion-col col-4 text-center>\n          <p text-center class="studio45">{{portalsProfileData.company_followers}}</p>\n          <p text-center class="posts">Followers</p>\n        </ion-col>\n        <ion-col col-3 text-left class="lefthorizline">\n          <p text-center class="studio45"> <img src="{{markerIconurl}}" class="storeIconImg"></p>\n          <p text-center class="posts">{{storeName}}</p>\n        </ion-col>\n        <ion-col col-1>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-item></ion-item>\n      </ion-row>\n    </ion-card>\n\n    <ion-grid padding>\n      <div class="portal_image_container">\n        <div *ngFor="let portalImage of portalsPostsData">\n          <ion-row>\n            <ion-col *ngIf="portalImage.filename==\'\' && portalImage.media_type==\'Image\'">\n              <img src="https://www.420portal.com/img/uploaded/420portalspiral.png" />\n            </ion-col>\n            <ion-col *ngIf="portalImage.filename!=\'\' && portalImage.media_type==\'Image\'">\n              <img src="https://www.420portal.com/img/{{portalImage.filename}}" />\n            </ion-col>\n            <ion-col *ngIf="portalImage.filename!=\'\' && portalImage.media_type==\'Video\'">\n                <img src="https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab4866b2c7d3a56d8873f4c/file-MrylO8jADD.png" />\n              </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/galexy/Portal-master/src/pages/portaldetail/portaldetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], PortaldetailPage);
    return PortaldetailPage;
}());

//# sourceMappingURL=portaldetail.js.map

/***/ })

});
//# sourceMappingURL=34.js.map