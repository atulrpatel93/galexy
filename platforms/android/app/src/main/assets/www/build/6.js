webpackJsonp([6],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrainsubdetailPageModule", function() { return StrainsubdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__strainsubdetail__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(728);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StrainsubdetailPageModule = /** @class */ (function () {
    function StrainsubdetailPageModule() {
    }
    StrainsubdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__strainsubdetail__["a" /* StrainsubdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__strainsubdetail__["a" /* StrainsubdetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], StrainsubdetailPageModule);
    return StrainsubdetailPageModule;
}());

//# sourceMappingURL=strainsubdetail.module.js.map

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

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrainsubdetailPage; });
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



var StrainsubdetailPage = /** @class */ (function () {
    function StrainsubdetailPage(navCtrl, navParams, loadingCtrl, dataProvider, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.dataProvider = dataProvider;
        this.popoverCtrl = popoverCtrl;
        this.strainDetails = [];
        this.strainInventory = [];
        this.strainParentType = 'flowers';
        this.strainsPhotos = [];
        this.strainName = '';
        this.infoShow = false;
    }
    StrainsubdetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var strainKeyVal = this.navParams.get("strainKey");
        this.strainName = this.navParams.get("strainName");
        // this.dataProvider.showLoading();
        this.dataProvider.getStrainDetailsData({ "strainId": strainKeyVal }).then(function (strainDetails) {
            _this.dataProvider.hideLoading();
            _this.strainDetails = strainDetails.strainData;
            _this.strainInventory = strainDetails.strainInventory;
            _this.strainsPhotos = strainDetails.strainPics;
        }).catch(function (err) {
            _this.dataProvider.hideLoading();
            _this.dataProvider.errorALertMessage(err);
        });
    };
    StrainsubdetailPage.prototype.inventoryDetails = function (inventoryData) {
        this.navCtrl.push("StraininventorydetailsPage", { inventory: inventoryData }, { animate: false });
    };
    StrainsubdetailPage.prototype.hideInfo = function (event) {
        event.stopPropagation();
        if (this.infoShow)
            this.infoShow = false;
    };
    StrainsubdetailPage.prototype.toggleInfo = function (event) {
        event.stopPropagation();
        this.infoShow = !this.infoShow;
    };
    StrainsubdetailPage.prototype.setMyStyles = function () {
        return {
            'height': (window.screen.width / 3) + 'px'
        };
    };
    StrainsubdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-strainsubdetail',template:/*ion-inline-start:"/var/www/html/galexy/Portal-master/src/pages/strainsubdetail/strainsubdetail.html"*/'<ion-header>\n  <portal-header></portal-header>\n</ion-header>\n<ion-footer>\n  <portal-footer></portal-footer>\n</ion-footer>\n<ion-content class="menu-items" (click)="hideInfo($event)">\n  <ion-fab top style="right:0px;top:0px;background-color: rgba(0,0,0,0.5);">\n    <button style="background-color: transparent;font-size: 1.2rem;padding:10px;padding-bottom: 5px;">\n      <div style="color:white;">\n        <i class="fa fa-user" aria-hidden="true" style="color: rgb(239, 167, 32);"></i><br>\n        Register\n      </div>\n    </button>\n    <button style="background-color: transparent;font-size: 1.2rem;padding:10px;padding-bottom: 5px;">\n      <div style="color:white;">\n        <i class="fa fa-sign-in" aria-hidden="true" style="color: rgb(239, 167, 32);"></i><br>\n        Login\n      </div>\n    </button>\n  </ion-fab>\n  <strain-searchbar></strain-searchbar>\n  <div class="data-container">\n    <ion-card style="width: 100%;margin-top: 25px !important;" class="follower">\n      <ion-card-content>\n        <ion-row class="sidebarnav" no-padding justify-content-center align-items-center>\n          <ion-col size="4.8">\n            <ion-row>\n              <ion-col size="6"></ion-col>\n              <ion-col size="6" style="margin-top: 20px;font-size: 15px;color: #D2D1D0 !important;line-height: 2;" text-center justify-content-center align-items-center>\n                <p text-center class="posts">9</p>Posts\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size="2.4" text-center>\n            <img src="../../assets/imgs/nature.jpg" class="profileimg"/>\n          </ion-col>\n          <ion-col size="4.8">\n            <ion-row>\n              <ion-col size="6" text-center>\n                <i class="fa fa-heart-o"></i>\n                <p text-center class="posts" style="margin-top:1px;">{{strainDetails.likes}}</p>\n                <!--                <p text-center class="posts">9</p>-->\n              </ion-col>\n              <ion-col size="6" text-center>\n                <i class="fa fa-comment-o" style="font-size: 35px !important;margin-top: -2px !important;"></i>\n                <!--                <p text-center class="posts">1</p>-->\n                <p text-center class="posts" style="margin-top: 3px;">{{strainDetails.reviews}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size="12" text-center style="margin-top: 10px;font-size: 18px;color: #D2D1D0;">\n            <!--            Blue Dream<br>-->\n            <!--            Strain-->\n            {{strainDetails.name}}<br>\n            <ion-label class="ion-text-start" style="font-size: 15px;margin: 0 0 1px 0 !important;">{{strainName}}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class="description-strain">\n      <ion-card-header class="subtitle" text-center>\n        <!--        Blue Dream-->\n        {{strainDetails.name}} Marijuana Strain\n      </ion-card-header>\n      <ion-card-content color="light" class="description">\n        <!--        <div style="padding-top: 10px;height: 120px; overflow-y: auto;">-->\n        <!--          <p><strong>Blue Dream&nbsp;</strong>is an excellent <a-->\n        <!--            href="https://www.420portal.com/marijuana-strains/hybrid">hybrid</a> given the fact that it has the medical-->\n        <!--            qualities&nbsp;of an <a href="https://www.420portal.com/marijuana-strains/indica">indica</a> and the head&nbsp;effects-->\n        <!--            of a <a href="https://www.420portal.com/marijuana-strains/sativa">sativa</a>. The effects&nbsp;are long-->\n        <!--            lasting and you will most surely notice its&nbsp;fruity aroma; the smell is one of a-->\n        <!--            kind.&nbsp;&nbsp;<strong>Blue Dream&nbsp;</strong>is a combination between <a-->\n        <!--              href="https://www.420portal.com/marijuana-strains/haze">Haze</a> and <a-->\n        <!--              href="https://www.420portal.com/marijuana-strains/blueberry">Blueberry</a> and works very well against-->\n        <!--            depression, pain and stress. &nbsp;Most people say Blue Dream is a Sativa but since it\'s crossed between 2-->\n        <!--            strains, it\'s really a hybrid. &nbsp;</p>-->\n\n        <!--          <p>&nbsp;</p>-->\n\n        <!--          <p>The yeild on the Blue Dream marijuana strain in very high and is a very quick growing plant. &nbsp;She-->\n        <!--            finishes her flowering time around 60 days. &nbsp;The dense flowers are very green with orange hairs-->\n        <!--            throughout. &nbsp;The trichromes are everywhere on the buds and stick straight upl which can stick on your-->\n        <!--            hands like tar. &nbsp;This is a popular strain&nbsp;in Southern California and you can find it at&nbsp;most-->\n        <!--            marijuana dispensaries and deliveries.. &nbsp;</p>-->\n        <!--        </div>-->\n        <div [innerHtml]="strainDetails.description"></div>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class="inventory_companies">\n      <ion-card-header class="subtitle segment-container">\n        <ion-segment [(ngModel)]="strainParentType">\n          <ion-segment-button value="flowers">\n            Flowers\n          </ion-segment-button>\n          <ion-segment-button value="concentrates">\n            Concentrates\n          </ion-segment-button>\n          <ion-segment-button value="clones">\n            Clones\n          </ion-segment-button>\n          <ion-segment-button value="seeds">\n            Seeds\n          </ion-segment-button>\n        </ion-segment>\n      </ion-card-header>\n\n      <ion-content [ngSwitch]="strainParentType" style="height: 220px;margin-top: 10px;">\n        <ion-row class="strainsInventoryList" *ngSwitchCase="\'flowers\'" inset>\n          <ion-label style="position: absolute;">Flowers</ion-label>\n          <div class="data-table">\n            <div class="table-header">\n              <label class="company-col">Company</label>\n              <label class="price-col" style="width: 100px;">Distance</label>\n              <label style="width: 100px;">Gram</label>\n              <label style="width: 100px;">Eighth</label>\n              <label style="width: 100px;">Quarter</label>\n              <label style="width: 100px;">Half Oz</label>\n              <label style="width: 100px;">Oz</label>\n            </div>\n            <div class="data-row">\n              <label class="company-col">Testing company</label>\n              <label class="price-col" style="width: 100px;color: #D2D1D0;">5860.9&nbsp;&nbsp;&nbsp;\n                <a class="info-icon" (click)="toggleInfo($event)">\n                  <ion-icon name="images" style="color: #DD8B19;"></ion-icon>\n                  <div class="data-info" *ngIf="infoShow">\n                    <img src="../../assets/imgs/nature.jpg" class="info-image" />\n                    Hello. This is my image description.\n                  </div>\n                </a>\n              </label>\n              <label style="width: 100px;">10<sup>g</sup></label>\n              <label style="width: 100px;">20<sup>1/8</sup></label>\n              <label style="width: 100px;">30<sup>1/4</sup></label>\n              <label style="width: 100px;">40<sup>1/2</sup></label>\n              <label style="width: 100px;">50<sup>Oz</sup></label>\n            </div>\n          </div>\n        </ion-row>\n        <ion-row class="strainsInventoryList" *ngSwitchCase="\'concentrates\'" inset>\n          <ion-label>Concentrates</ion-label>\n          <ion-grid>\n            <ion-row class="table-header">\n              <ion-col>Company</ion-col>\n              <ion-col>Distance</ion-col>\n              <ion-col>Half Gram</ion-col>\n              <ion-col>Gram</ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-row>\n        <ion-row class="strainsInventoryList" *ngSwitchCase="\'clones\'" inset>\n          <ion-label>Clones</ion-label>\n          <ion-grid>\n            <ion-row class="table-header">\n              <ion-col>Company</ion-col>\n              <ion-col>Distance</ion-col>\n              <ion-col>Each</ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-row>\n        <ion-row class="strainsInventoryList" *ngSwitchCase="\'seeds\'" inset>\n          <ion-label>Seeds</ion-label>\n          <ion-grid>\n            <ion-row class="table-header">\n              <ion-col>Company</ion-col>\n              <ion-col>Distance</ion-col>\n              <ion-col>Each</ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-row>\n      </ion-content>\n    </ion-card>\n\n    <ion-card class="strainImagesCntnr">\n      <ion-card-header class="subtitle" text-center>\n        {{strainDetails.name}} Weed Pictures & Videos\n      </ion-card-header>\n      <ion-card-content style="margin-top: 10px;margin-bottom: 10px;padding: 0 !important;">\n        <ion-row>\n          <ion-col col-4 *ngFor="let strainPicture of strainsPhotos" class="image-container" [ngStyle]="setMyStyles()">\n            <img [src]="strainPicture.strainPic" class="thumbimage "/>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/galexy/Portal-master/src/pages/strainsubdetail/strainsubdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* PopoverController */]])
    ], StrainsubdetailPage);
    return StrainsubdetailPage;
}());

//# sourceMappingURL=strainsubdetail.js.map

/***/ })

});
//# sourceMappingURL=6.js.map