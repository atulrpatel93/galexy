webpackJsonp([19],{

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagedetailsPageModule", function() { return ImagedetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imagedetails__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(728);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ImagedetailsPageModule = /** @class */ (function () {
    function ImagedetailsPageModule() {
    }
    ImagedetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__imagedetails__["a" /* ImagedetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__imagedetails__["a" /* ImagedetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ImagedetailsPageModule);
    return ImagedetailsPageModule;
}());

//# sourceMappingURL=imagedetails.module.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portal_header_portal_header__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__portal_footer_portal_footer__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_fab_auth_fab__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__strain_searchbar_strain_searchbar__ = __webpack_require__(732);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__portal_header_portal_header__["a" /* PortalHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_2__portal_footer_portal_footer__["a" /* PortalFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_3__auth_fab_auth_fab__["a" /* AuthFabComponent */],
                __WEBPACK_IMPORTED_MODULE_5__strain_searchbar_strain_searchbar__["a" /* StrainSearchbarComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__portal_header_portal_header__["a" /* PortalHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_2__portal_footer_portal_footer__["a" /* PortalFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_3__auth_fab_auth_fab__["a" /* AuthFabComponent */],
                __WEBPACK_IMPORTED_MODULE_5__strain_searchbar_strain_searchbar__["a" /* StrainSearchbarComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalHeaderComponent; });
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
 * Generated class for the PortalHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PortalHeaderComponent = /** @class */ (function () {
    function PortalHeaderComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.curIndex = 0;
    }
    PortalHeaderComponent.prototype.onSelectPage = function (index) {
        switch (index) {
            case 0:
                this.navCtrl.push('HomePage', {}, { animate: false });
                break;
            case 1:
                //this.navCtrl.push('StrainsPage');
                break;
            case 2:
                this.navCtrl.push('StrainsPage', {}, { animate: false });
                break;
            case 3:
                this.navCtrl.push('CouponsPage', {}, { animate: false });
                break;
            case 4:
                break;
        }
    };
    PortalHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'portal-header',template:/*ion-inline-start:"/var/www/html/galexy/Portal-master/src/components/portal-header/portal-header.html"*/'<ion-toolbar no-border-top style="background-color: white;">\n  <ion-grid>\n    <ion-row>\n      <ion-col style="min-width: 25%;" class="vertical-align-content">\n        <div style="display: inline-block;height: 100%; vertical-align: middle;" >\n          <img src="../../assets/imgs/logo_420.png" class="top-logo-img" (click)="onSelectPage(0)">\n        </div>\n      </ion-col>\n      <ion-col>\n        <button class="top-tab" (click)="onSelectPage(1)">\n          <div>\n            <img src="../../assets/imgs/top_icon1.png" class="top-item-img"><br>\n            <label>Dispensary</label>\n          </div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button class="top-tab" (click)="onSelectPage(2)">\n          <div>\n            <img src="../../assets/imgs/top_icon2.png" class="top-item-img"><br>\n            <label>Strains</label>\n          </div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button class="top-tab" (click)="onSelectPage(3)">\n          <div>\n            <img src="../../assets/imgs/top_icon3.png" class="top-item-img"><br>\n            <label>Coupons</label>\n          </div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button class="top-tab" (click)="onSelectPage(4)">\n          <div>\n            <img src="../../assets/imgs/top_icon4.png" class="top-item-img"><br>\n            <label>Add Company</label>\n          </div>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-toolbar>\n'/*ion-inline-end:"/var/www/html/galexy/Portal-master/src/components/portal-header/portal-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */]])
    ], PortalHeaderComponent);
    return PortalHeaderComponent;
}());

//# sourceMappingURL=portal-header.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Keyboard } from '@ionic-native/keyboard/ngx';
/**
 * Generated class for the PortalFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PortalFooterComponent = /** @class */ (function () {
    function PortalFooterComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.curIndex = 0;
        this.show_footer = true;
    }
    // keyboardCheck() {
    //   console.log('The keyboard is open:', this.keyboard.isOpen());
    // }
    PortalFooterComponent.prototype.onSelectPage = function (index) {
        switch (index) {
            case 0:
                this.navCtrl.push('HomePage', {}, { animate: false });
                break;
            case 1:
                this.navCtrl.push('ChatPage', {}, { animate: false });
                break;
            case 2:
                this.navCtrl.push('CmediaPage', {}, { animate: false });
                break;
            case 3:
                //this.navCtrl.push('CouponsPage',{},{animate:false});
                break;
            case 4:
                break;
        }
    };
    PortalFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'portal-footer',template:/*ion-inline-start:"/var/www/html/galexy/Portal-master/src/components/portal-footer/portal-footer.html"*/'<ion-toolbar no-border-top style="background-color: white;" class="hide-on-keyboard-open" *ngIf="show_footer">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button class="bottom-tab" (click)="onSelectPage(0)">\n          <div>\n            <img src="../../../assets/imgs/bottom_icon1.png"><br>\n            <label>Weedgram</label>\n          </div>\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button class="bottom-tab" (click)="onSelectPage(1)">\n          <div>\n            <img src="../../../assets/imgs/bottom_icon2.png"><br>\n            <label>Messenger</label>\n          </div>\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button class="bottom-tab" (click)="onSelectPage(2)">\n          <div>\n            <img src="../../../assets/imgs/bottom_icon3.png"><br>\n            <label>Add Media</label>\n          </div>\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button class="bottom-tab" (click)="onSelectPage(3)">\n          <div>\n            <img src="../../../assets/imgs/bottom_icon4.png"><br>\n            <label>Notifications</label>\n          </div>\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button class="bottom-tab" (click)="onSelectPage(4)">\n          <div>\n            <img src="../../../assets/imgs/bottom_icon5.png"><br>\n            <label>Account</label>\n          </div>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-toolbar>\n'/*ion-inline-end:"/var/www/html/galexy/Portal-master/src/components/portal-footer/portal-footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__["a" /* NavController */]])
    ], PortalFooterComponent);
    return PortalFooterComponent;
}());

//# sourceMappingURL=portal-footer.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthFabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Generated class for the AuthFabComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AuthFabComponent = /** @class */ (function () {
    function AuthFabComponent() {
        console.log('Hello AuthFabComponent Component');
        this.text = 'Hello World';
    }
    AuthFabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'auth-fab',template:/*ion-inline-start:"/var/www/html/galexy/Portal-master/src/components/auth-fab/auth-fab.html"*/'<button ion-fab>Button</button>\n<button ion-fab>Button1</button>\n'/*ion-inline-end:"/var/www/html/galexy/Portal-master/src/components/auth-fab/auth-fab.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AuthFabComponent);
    return AuthFabComponent;
}());

//# sourceMappingURL=auth-fab.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrainSearchbarComponent; });
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
 * Generated class for the StrainSearchbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var StrainSearchbarComponent = /** @class */ (function () {
    function StrainSearchbarComponent(navCtrl, navParams, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.titleText = "";
        this.searchText = "";
        this.filterItems = [];
        this.selectedItems = [];
        this.visibleDropdown = false;
    }
    StrainSearchbarComponent.prototype.ngAfterViewInit = function () {
    };
    StrainSearchbarComponent.prototype.FilterItems = function () {
        var _this = this;
        this.visibleDropdown = true;
        this.dataProvider.searchStrains(this.searchText).then(function (response) {
            _this.filterItems = [];
            for (var i in response)
                _this.filterItems.push(response[i]);
            console.log(_this.filterItems);
        });
    };
    // onSearchFocus() {
    //   this.visibleDropdown = true;
    //   var rt = this.strainSearchbar._searchbarInput.nativeElement.getBoundingClientRect();
    //   this.strainList.nativeElement.style.width = '' + rt.width + 'px';
    //   this.strainList.nativeElement.style.left = '' + rt.left + 'px';
    //   console.log("Strains:" + this.strains);
    // }
    StrainSearchbarComponent.prototype.onSearchFocus = function () {
        this.visibleDropdown = true;
        var rt = this.strainSearchbar._searchbarInput.nativeElement.getBoundingClientRect();
        this.strainList._scrollContent.nativeElement.style.width = '' + rt.width + 'px';
        this.strainList._scrollContent.nativeElement.style.left = '' + rt.left + 'px';
        console.log("Strains:" + this.strains);
    };
    StrainSearchbarComponent.prototype.onSearchLostFocus = function () {
        var _this = this;
        // this.visibleDropdown = false;
        setTimeout(function () {
            _this.visibleDropdown = false;
        }, 150);
        // this.filterItems = [];
    };
    StrainSearchbarComponent.prototype.openSpecificStrainDetail = function (strainId, slug) {
        this.navCtrl.push("StrainsubdetailPage", { strainKey: strainId, strainName: slug }, { animate: false });
    };
    StrainSearchbarComponent.prototype.getCategoryDetail = function (strainSlug) {
        this.navCtrl.push("StraindetailPage", { slug: strainSlug }, { animate: false });
    };
    StrainSearchbarComponent.prototype.ionViewDidEnter = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('strainSearchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Searchbar */])
    ], StrainSearchbarComponent.prototype, "strainSearchbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('strainList'),
        __metadata("design:type", Object)
    ], StrainSearchbarComponent.prototype, "strainList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], StrainSearchbarComponent.prototype, "strains", void 0);
    StrainSearchbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'strain-searchbar',template:/*ion-inline-start:"/var/www/html/galexy/Portal-master/src/components/strain-searchbar/strain-searchbar.html"*/'<ion-list class="search_result_list" style="display: block !important;" *ngIf="visibleDropdown">\n  <ion-item *ngFor="let strain of filterItems" (click)="openSpecificStrainDetail(strain.id, strain.slug)">\n    <ion-label>\n      {{strain.name}}\n    </ion-label>\n  </ion-item>\n\n</ion-list>\n\n<ion-toolbar ion-fixed transparent class="straintab">\n  <ion-row align-items-center>\n    <div style="width: 34% !important;" class="sub-title-col vertical-align-content">\n      <ion-input class="searchbar-input strain-search" type="text" #strainSearchbar [(ngModel)]="searchText" (ionChange)="FilterItems()" (ionBlur)="onSearchLostFocus()" placeholder="&#xF002; Search Strains"></ion-input>\n    </div>\n    <div style="width: 22% !important;" class="sub-title-col" (click)="getCategoryDetail(\'indica\')">\n      <label class="sub-title">\n        Indica\n      </label>\n    </div>\n    <div style="width: 22% !important;" class="sub-title-col" (click)="getCategoryDetail(\'sativa\')">\n      <label class="sub-title">\n        Sativa\n      </label>\n    </div>\n    <div style="width: 22% !important;" class="sub-title-col" (click)="getCategoryDetail(\'hybrid\')">\n      <label class="sub-title">\n        Hybrid\n      </label>\n    </div>\n  </ion-row>\n</ion-toolbar>\n\n<!-- <ion-list #strainList ion-fixed no-lines [hidden]="visibleDropdown==false" style="max-height: 200px;">\n  <ion-item *ngFor="let strain of strains" class="ion-no-margin">{{ strain.name }}</ion-item>\n</ion-list> -->\n<ion-scroll ion-fixed #strainList scrollY="true" style="max-height:200px;" [hidden]="visibleDropdown==false">\n  <ion-list no-lines>\n    <ion-item *ngFor="let strain of strains" class="ion-no-margin">{{ strain.name }}</ion-item>\n  </ion-list>\n</ion-scroll>\n'/*ion-inline-end:"/var/www/html/galexy/Portal-master/src/components/strain-searchbar/strain-searchbar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], StrainSearchbarComponent);
    return StrainSearchbarComponent;
}());

//# sourceMappingURL=strain-searchbar.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagedetailsPage; });
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
 * Generated class for the ImagedetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImagedetailsPage = /** @class */ (function () {
    function ImagedetailsPage(navCtrl, navParams, loadingCtrl, dataProvider, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.dataProvider = dataProvider;
        this.menuCtrl = menuCtrl;
        this.imageData = [];
        this.imageMiscData = {};
        this.showModal = false;
    }
    ImagedetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ImagedetailsPage');
        var imageId = this.navParams.get("image_id");
        console.log(imageId);
        this.dataProvider.showLoading();
        this.dataProvider.getImagePageDetails({ "imageId": imageId }).then(function (imageDetailsData) {
            _this.dataProvider.hideLoading();
            console.log('in ts file');
            console.log(imageDetailsData);
            console.log(imageDetailsData.imageDetails.miscellaneous);
            _this.imageData = imageDetailsData.imageDetails;
            _this.imageMiscData = imageDetailsData.imageDetails.miscellaneous;
            console.log(_this.imageMiscData);
        }).catch(function (err) {
            _this.dataProvider.hideLoading();
            _this.dataProvider.errorALertMessage(err);
        });
    };
    ImagedetailsPage.prototype.hideUserImageModal = function (event) {
        if (event.target.className == "custom-modal-container") {
            this.showModal = false;
        }
    };
    // right menu2 disable
    ImagedetailsPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false, 'menu2');
    };
    ImagedetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-imagedetails',template:/*ion-inline-start:"/var/www/html/galexy/Portal-master/src/pages/imagedetails/imagedetails.html"*/'<ion-header>\n  <portal-header></portal-header>\n</ion-header>\n<ion-footer>\n  <portal-footer></portal-footer>\n</ion-footer>\n<ion-content class="menu-items">\n  <ion-fab right top style="right:0px;top:0px;background-color: rgba(0,0,0,0.5);">\n    <button style="background-color: transparent;font-size: 1.2rem;padding:10px;padding-bottom: 5px;">\n      <div style="color:white;">\n        <i class="fa fa-sign-in" aria-hidden="true" style="color: rgb(239, 167, 32);"></i><br>\n        Login\n      </div>\n    </button>\n    <button style="background-color: transparent;font-size: 1.2rem;padding:10px;padding-bottom: 5px;">\n      <div style="color:white;">\n        <i class="fa fa-user" aria-hidden="true" style="color: rgb(239, 167, 32);"></i><br>\n        Register\n      </div>\n    </button>\n  </ion-fab>\n\n  <div class="post-content">\n    <ion-row class="header-post">\n      <ion-col col-3>\n        <ion-item no-lines>\n          <ion-avatar item-start>\n            <img [src]="imageData.user_profile_pic">\n          </ion-avatar>\n        </ion-item>\n      </ion-col>\n      <ion-col col-5 text-left>\n        <p class="profilename">{{imageData.user_name}}</p>\n      </ion-col>\n      <ion-col col-2 text-center>\n        <ion-icon class="person-add" name="person-add" color="lowercolor"></ion-icon>\n      </ion-col>\n      <ion-col col-2 text-center>\n        <ion-icon class="person-add" name="flag" color="lowercolor"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <img class="uploaded-image" [src]="imageData.filename">\n    <ion-row class="header-post">\n      <ion-col col-2 text-center>\n        <div class="iconsInnerGrid">\n          <ion-icon name="heart" class="person-add" color="lowercolor"></ion-icon>\n          <span>{{imageData.likes}} likes</span>\n        </div>\n      </ion-col>\n      <ion-col col-4 text-center>\n        <div class="iconsInnerGrid">\n          <ion-icon name="mail" class="person-add" color="lowercolor"></ion-icon>\n          <span>{{imageData.comments}} comments</span>\n        </div>\n      </ion-col>\n      <ion-col col-6 text-right>\n          <ion-icon name="pricetag" class="person-add" color="lowercolor" (click) = "showModal = true"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12>\n        <ion-item no-lines>\n          <ion-textarea [(ngModel)]="msg" class="text-area"></ion-textarea>\n          <button clear item-right class="post-click">Post</button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n\n<div class="custom-modal-container" *ngIf="showModal" (click)="hideUserImageModal($event)">\n  <div class="custom-modal-box">\n    <div class="custom-modal-header">\n        Image Tags\n    </div>\n    <div class="custom-modal-body">\n        <h3>Portal</h3>\n        {{imageDetailsData | json}}\n        <span *ngIf="imageMiscData.taggedPortals != undefined && imageMiscData.taggedPortals.name != undefined">{{imageMiscData.taggedPortals.name}}</span>\n        <span *ngIf="imageMiscData.taggedPortals != undefined && imageMiscData.taggedPortals.name == undefined">No portal tagged</span>\n\n        <h3>Users</h3>\n        <div class="taggedUsersContainer" *ngIf="imageMiscData.taggedUsers != undefined && imageMiscData.taggedUsers?.length>0">\n          <span *ngFor="let taggedUser of imageMiscData.taggedUsers">{{taggedUser.username}}</span>\n        </div>\n        <div class="taggedUsersContainer" *ngIf="imageMiscData.taggedUsers != undefined && imageMiscData.taggedUsers?.length==0">\n          <span>No users tagged.</span>\n        </div>\n\n        <h3>Strains</h3>\n        <span *ngIf="imageMiscData.taggedStrains != undefined && imageMiscData.taggedStrains.id != undefined">{{imageMiscData.taggedPortals.name}}</span>\n        <span *ngIf="imageMiscData.taggedStrains != undefined && imageMiscData.taggedStrains.id == undefined">No strains tagged</span>\n    </div>\n    <div class="custom-modal-footer">\n\n    </div>\n    <ion-icon name="close-circle" class="close-custom-modal" (click) = "showModal = false"></ion-icon>\n  </div>\n</div>\n'/*ion-inline-end:"/var/www/html/galexy/Portal-master/src/pages/imagedetails/imagedetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* MenuController */]])
    ], ImagedetailsPage);
    return ImagedetailsPage;
}());

//# sourceMappingURL=imagedetails.js.map

/***/ })

});
//# sourceMappingURL=19.js.map