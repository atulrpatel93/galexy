webpackJsonp([3],{

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeedgramPageModule", function() { return WeedgramPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weedgram__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(728);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WeedgramPageModule = /** @class */ (function () {
    function WeedgramPageModule() {
    }
    WeedgramPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__weedgram__["a" /* WeedgramPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__weedgram__["a" /* WeedgramPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], WeedgramPageModule);
    return WeedgramPageModule;
}());

//# sourceMappingURL=weedgram.module.js.map

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

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeedgramPage; });
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


var WeedgramPage = /** @class */ (function () {
    function WeedgramPage(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
    }
    WeedgramPage.prototype.allcomment = function () {
        this.navCtrl.push('CommentPage', {}, { animate: false });
    };
    WeedgramPage.prototype.ionViewDidLoad = function () {
        var showChar = 120;
        var ellipsestext = "...";
        $(".truncate").each(function () {
            var content = $(this).html();
            if (content.length > showChar) {
                var c = content.substr(0, showChar);
                var h = content;
                var html = '<div class="truncate-text" style="display:block">' +
                    c +
                    '<span class="moreellipses">' +
                    ellipsestext +
                    '&nbsp;&nbsp;<a href="" class="moreless more">More</a></span></span></div><div class="truncate-text" style="display:none">' +
                    h +
                    '<a href="" class="moreless less">Less..</a></span></div>';
                $(this).html(html);
            }
        });
        $(".moreless").click(function () {
            var thisEl = $(this);
            var cT = thisEl.closest(".truncate-text");
            var tX = ".truncate-text";
            if (thisEl.hasClass("less")) {
                cT.prev(tX).toggle();
                // cT.slideToggle();
                cT.toggle();
            }
            else {
                cT.toggle();
                cT.next(tX).fadeToggle();
            }
            return false;
        });
    };
    // right menu2 disable
    WeedgramPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false, 'menu2');
    };
    WeedgramPage.prototype.onTouch = function () {
        alert('heart');
    };
    WeedgramPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-weedgram',template:/*ion-inline-start:"/var/www/html/galexy/Portal-master/src/pages/weedgram/weedgram.html"*/'<ion-header>\n  <portal-header></portal-header>\n</ion-header>\n<ion-footer>\n  <portal-footer></portal-footer>\n</ion-footer>\n<ion-content class="menu-items">\n  <div class="title_bar">\n    <img src="../../assets/imgs/main_avatar.png" alt="">\n    <p>420Portal · <span>Follow</span></p>\n    <ion-icon name="more"></ion-icon>\n  </div>\n  <div class="each_content">\n    <img src="../../assets/imgs/weedgram/1.jpg" alt="" style="width: 100%;">\n    <div class="extra_icons">\n      <div>\n        <a href="#" class="imageLike">\n          <span class="fa fa-heart-o"></span>\n        </a>\n        <a href="#nextCommentScript" class="post_comment_icon">\n          <span class="fa fa-comment-o"></span>\n        </a>\n      </div>\n      <a href="javascript:void(0);" class="saveMedia">\n        <i class="fa fa-bookmark-o" aria-hidden="true"></i>\n      </a>\n    </div>\n    <div class="comment_content">\n      <p class="likes_num">1,239 likes</p>\n      <div class="truncate">\n        <p>\n          <a href="#">420Portal</a> This is my comment. It should be 2 lines worth.\n          please have it look like this.asfasdfasfdas s dfsd fs sd fsd sad sad sd fsa dsad sd fsda sad fsda sdaf sdaf\n          sad f\n        </p>\n      </div>\n      <p class="all_comment" (click)="allcomment()">View all comments</p>\n    </div>\n    <div class="chat_box">\n      <div class="input-wrap">\n        <img src="../../assets/imgs/main_avatar.png" alt="">\n        <textarea #chat_input placeholder="Add a comment..." [(ngModel)]="editorMsg" rows="2">\n                </textarea>\n        <button ion-button clear icon-only item-right (click)="sendMsg()" class="post_btn">\n          Post\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class="title_bar">\n    <img src="../../assets/imgs/main_avatar.png" alt="">\n    <p>420Portal · <span>Follow</span></p>\n    <ion-icon name="more"></ion-icon>\n  </div>\n  <div class="each_content">\n    <img src="../../assets/imgs/weedgram/2.jpg" alt="" style="width: 100%;">\n    <div class="extra_icons">\n      <div>\n        <a href="#" class="imageLike">\n          <span class="fa fa-heart-o"></span>\n        </a>\n        <a href="#nextCommentScript" class="post_comment_icon">\n          <span class="fa fa-comment-o"></span>\n        </a>\n      </div>\n      <a href="javascript:void(0);" class="saveMedia">\n        <i class="fa fa-bookmark-o" aria-hidden="true"></i>\n      </a>\n    </div>\n    <div class="comment_content">\n      <p class="likes_num">1,239 likes</p>\n      <div class="truncate">\n        <p>\n          <a href="#">420Portal</a> This is my comment. It should be 2 lines worth.\n          please have it look like this.asfasdfasfdas s dfsd fs sd fsd sad sad sd fsa dsad sd fsda sad fsda sdaf sdaf\n          sad f\n        </p>\n      </div>\n      <p class="all_comment" (click)="allcomment()">View all comments</p>\n    </div>\n    <div class="chat_box">\n      <div class="input-wrap">\n        <img src="../../assets/imgs/main_avatar.png" alt="">\n        <textarea #chat_input placeholder="Add a comment..." [(ngModel)]="editorMsg" rows="2">\n                </textarea>\n        <button ion-button clear icon-only item-right (click)="sendMsg()" class="post_btn">\n          Post\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class="title_bar">\n    <img src="../../assets/imgs/main_avatar.png" alt="">\n    <p>420Portal · <span>Follow</span></p>\n    <ion-icon name="more"></ion-icon>\n  </div>\n  <div class="each_content">\n    <img src="../../assets/imgs/weedgram/3.jpg" alt="" style="width: 100%;">\n    <div class="extra_icons">\n      <div>\n        <a href="#" class="imageLike">\n          <span class="fa fa-heart-o"></span>\n        </a>\n        <a href="#nextCommentScript" class="post_comment_icon">\n          <span class="fa fa-comment-o"></span>\n        </a>\n      </div>\n      <a href="javascript:void(0);" class="saveMedia">\n        <i class="fa fa-bookmark-o" aria-hidden="true"></i>\n      </a>\n    </div>\n    <div class="comment_content">\n      <p class="likes_num">1,239 likes</p>\n      <div class="truncate">\n        <p>\n          <a href="#">420Portal</a> This is my comment. It should be 2 lines worth.\n          please have it look like this.asfasdfasfdas s dfsd fs sd fsd sad sad sd fsa dsad sd fsda sad fsda sdaf sdaf\n          sad f\n        </p>\n      </div>\n      <p class="all_comment" (click)="allcomment()">View all comments</p>\n    </div>\n    <div class="chat_box">\n      <div class="input-wrap">\n        <img src="../../assets/imgs/main_avatar.png" alt="">\n        <textarea #chat_input placeholder="Add a comment..." [(ngModel)]="editorMsg" rows="2">\n                </textarea>\n        <button ion-button clear icon-only item-right (click)="sendMsg()" class="post_btn">\n          Post\n        </button>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/var/www/html/galexy/Portal-master/src/pages/weedgram/weedgram.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* MenuController */]])
    ], WeedgramPage);
    return WeedgramPage;
}());

//# sourceMappingURL=weedgram.js.map

/***/ })

});
//# sourceMappingURL=3.js.map