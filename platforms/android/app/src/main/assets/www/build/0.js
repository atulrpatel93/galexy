webpackJsonp([0],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_tooltips__ = __webpack_require__(759);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_tooltips__["a" /* TooltipsModule */].forRoot()
            ],
        })
    ], MainPageModule);
    return MainPageModule;
}());

//# sourceMappingURL=main.module.js.map

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

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipBox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);


var TooltipBox = (function () {
    function TooltipBox(elementRef, rnd) {
        var _this = this;
        this.elementRef = elementRef;
        this.rnd = rnd;
        this.fadeState = 'invisible';
        this.init = new Promise(function (resolve) {
            _this.initResolve = resolve;
        });
    }
    Object.defineProperty(TooltipBox.prototype, "arrow", {
        set: function (side) {
            this.rnd.setAttribute(this.getNativeElement(), 'class', 'has-arrow ' + 'arrow-' + side);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipBox.prototype, "posTop", {
        set: function (val) {
            this.rnd.setStyle(this.getNativeElement(), 'top', val + 'px');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipBox.prototype, "posLeft", {
        set: function (val) {
            this.rnd.setStyle(this.getNativeElement(), 'left', val + 'px');
        },
        enumerable: true,
        configurable: true
    });
    TooltipBox.prototype.getNativeElement = function () {
        return this.elementRef.nativeElement;
    };
    TooltipBox.prototype.ngAfterViewInit = function () {
        this.initResolve();
    };
    TooltipBox.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */], args: [{
                    selector: 'tooltip-box',
                    template: "\n    <div *ngIf=\"tooltipHtml; else txt\" [innerHTML]=\"tooltipHtml\"></div>\n    <ng-template #txt>{{ text }}</ng-template>\n  ",
                    animations: [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('fade', [
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 })),
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 })),
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('visible <=> invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms linear')),
                        ]),
                    ],
                    styles: [
                        "\n          :host {\n              background-color: rgba(0, 0, 0, 0.8);\n              color: white;\n              display: inline-block;\n              position: fixed;\n              padding: 15px 25px;\n              font-size: 15px;\n          }\n    ",
                        "\n          :host.has-arrow:before {\n              content: '';\n              border: 5px solid transparent;\n              position: absolute;\n              width: 0;\n              height: 0;\n          }\n    ",
                        ':host.has-arrow.arrow-top:before { border-bottom: 5px solid rgba(0,0,0,0.8); top: -10px; }',
                        ':host.has-arrow.arrow-left:before { border-right: 5px solid rgba(0,0,0,0.8); left: -10px; }',
                        ':host.has-arrow.arrow-right:before { border-left: 5px solid rgba(0,0,0,0.8); right: -10px; }',
                        ':host.has-arrow.arrow-bottom:before { border-top: 5px solid rgba(0,0,0,0.8); bottom: -10px; }',
                    ],
                    changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* ChangeDetectionStrategy */].OnPush,
                },] },
    ];
    /** @nocollapse */
    TooltipBox.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* Renderer2 */], },
    ]; };
    TooltipBox.propDecorators = {
        "fadeState": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* HostBinding */], args: ['@fade',] },],
        "text": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */] },],
        "tooltipHtml": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */] },],
        "arrow": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */] },],
        "posTop": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */] },],
        "posLeft": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */] },],
    };
    return TooltipBox;
}());

//# sourceMappingURL=tooltip-box.component.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

var TooltipController = (function () {
    function TooltipController() {
        this.allowMultiple = true;
        this.activeTooltips = [];
    }
    TooltipController.prototype.addTooltip = function (instance) {
        if (instance.hideOthers || !this.allowMultiple && this.activeTooltips.length > 0) {
            this.hideAll();
        }
        this.activeTooltips.push(instance);
    };
    TooltipController.prototype.removeTooltip = function (instance) {
        this.activeTooltips.splice(this.activeTooltips.indexOf(instance), 1);
    };
    TooltipController.prototype.hideAll = function () {
        this.activeTooltips.forEach(function (tooltip) {
            tooltip.removeTooltip();
        });
    };
    TooltipController.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    return TooltipController;
}());

//# sourceMappingURL=tooltip.cotroller.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tooltip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_box_component__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_cotroller__ = __webpack_require__(734);




var Tooltip = (function () {
    function Tooltip(el, appRef, platform, _componentFactoryResolver, tooltipCtrl) {
        this.el = el;
        this.appRef = appRef;
        this.platform = platform;
        this._componentFactoryResolver = _componentFactoryResolver;
        this.tooltipCtrl = tooltipCtrl;
        this.mobileEvent = 'press';
        this.desktopEvent = 'hover';
        this.duration = 3000;
        this._arrow = false;
        this._navTooltip = false;
        this._canShow = true;
        this._active = false;
    }
    Object.defineProperty(Tooltip.prototype, "navTooltip", {
        get: function () {
            return this._navTooltip;
        },
        set: function (val) {
            this._navTooltip = typeof val !== 'boolean' || val !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tooltip.prototype, "arrow", {
        get: function () {
            return this._arrow;
        },
        set: function (val) {
            this._arrow = typeof val !== 'boolean' || val !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tooltip.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (val) {
            this._active = typeof val !== 'boolean' || val !== false;
            this._active ? this.canShow && this.showTooltip() : this.removeTooltip();
        },
        enumerable: true,
        configurable: true
    });
    Tooltip.prototype.ngAfterViewInit = function () {
        // Show the tooltip immediately after initiating view if set to
        if (this._active) {
            this.trigger();
        }
    };
    Tooltip.prototype.ngOnInit = function () {
        // Set default event type by platform if event is not defined
        if (!this.event) {
            this.event = this.platform.is('mobile') ? this.mobileEvent : this.desktopEvent;
        }
    };
    Object.defineProperty(Tooltip.prototype, "canShow", {
        /**
         * @return {boolean} TRUE if the tooltip can be shown
         */
        get: /**
           * @return {boolean} TRUE if the tooltip can be shown
           */
        function () {
            return this._canShow && ((typeof this.tooltip === 'string' && this.tooltip !== '') || (typeof this.tooltipHtml === 'string' && this.tooltipHtml !== ''));
        },
        /**
         * Set the canShow property
         * Ensure that tooltip is shown only if the tooltip string is not falsey
         */
        set: /**
           * Set the canShow property
           * Ensure that tooltip is shown only if the tooltip string is not falsey
           */
        function (show) {
            this._canShow = show;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Handles the click/press event and shows a tooltip.
     * If a tooltip already exists, it will just reset it's timer.
     */
    /**
       * Handles the click/press event and shows a tooltip.
       * If a tooltip already exists, it will just reset it's timer.
       */
    Tooltip.prototype.trigger = /**
       * Handles the click/press event and shows a tooltip.
       * If a tooltip already exists, it will just reset it's timer.
       */
    function () {
        if (!this.canShow) {
            return;
        }
        if (this.tooltipElement) {
            this._resetTimer();
        }
        else {
            this.showTooltip();
        }
    };
    /**
     * Creates a new tooltip component and adjusts it's properties to show properly.
     */
    /**
       * Creates a new tooltip component and adjusts it's properties to show properly.
       */
    Tooltip.prototype.showTooltip = /**
       * Creates a new tooltip component and adjusts it's properties to show properly.
       */
    function () {
        var _this = this;
        this._createTooltipComponent();
        var tooltipComponent = this.tooltipElement.instance;
        tooltipComponent.text = this.tooltip;
        tooltipComponent.tooltipHtml = this.tooltipHtml;
        tooltipComponent.init.then(function () {
            var tooltipPosition = _this._getTooltipPosition();
            tooltipComponent.posLeft = tooltipPosition.left;
            tooltipComponent.posTop = tooltipPosition.top;
            tooltipComponent.fadeState = 'visible';
            if (_this.arrow) {
                var arrowPosition = void 0;
                if (_this.positionV === 'top') {
                    arrowPosition = 'bottom';
                }
                else if (_this.positionV === 'bottom') {
                    arrowPosition = 'top';
                }
                else if (_this.positionH === 'left') {
                    arrowPosition = 'right';
                }
                else {
                    arrowPosition = 'left';
                }
                tooltipComponent.arrow = arrowPosition;
            }
            if (!_this._active) {
                _this.tooltipTimeout = setTimeout(_this.removeTooltip.bind(_this), _this.duration);
            }
        });
    };
    Tooltip.prototype.onClick = function () {
        if (this.event === 'click') {
            this.trigger();
        }
    };
    Tooltip.prototype.onPress = function () {
        if (this.event === 'press') {
            this.trigger();
        }
    };
    Tooltip.prototype.onMouseEnter = function () {
        if (this.event === 'hover') {
            this.active = true;
        }
    };
    Tooltip.prototype.onMouseLeave = function () {
        if (this.event === 'hover') {
            this.active = false;
        }
    };
    Tooltip.prototype._createTooltipComponent = function () {
        var viewport = this.appRef.components[0]._component
            ._viewport, componentFactory = this._componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__tooltip_box_component__["a" /* TooltipBox */]);
        this.tooltipElement = viewport.createComponent(componentFactory);
        this.tooltipCtrl.addTooltip(this);
    };
    Tooltip.prototype._getTooltipPosition = function () {
        var tooltipNativeElement = this.tooltipElement.instance.getNativeElement(), el = this.el.nativeElement, rect = el.getBoundingClientRect();
        var positionLeft, positionTop, spacing = 10;
        if (this.navTooltip) {
            this.positionV = 'bottom';
            this.arrow = false;
            spacing = 20;
        }
        if (this.positionH === 'right') {
            positionLeft = rect.right + spacing;
        }
        else if (this.positionH === 'left') {
            positionLeft = rect.left - spacing - tooltipNativeElement.offsetWidth;
        }
        else if (this.navTooltip) {
            positionLeft = rect.left + el.offsetWidth / 2;
        }
        else {
            positionLeft = rect.left;
        }
        if (this.positionV === 'top') {
            positionTop = rect.top - spacing - tooltipNativeElement.offsetHeight;
        }
        else if (this.positionV === 'bottom') {
            positionTop = rect.bottom + spacing;
        }
        else {
            positionTop =
                rect.top + el.offsetHeight / 2 - tooltipNativeElement.offsetHeight / 2;
        }
        if (+this.topOffset) {
            positionTop += +this.topOffset;
        }
        if (+this.leftOffset) {
            positionLeft += +this.leftOffset;
        }
        if (positionLeft + tooltipNativeElement.offsetWidth + spacing >
            this.platform.width()) {
            positionLeft =
                this.platform.width() - tooltipNativeElement.offsetWidth - spacing;
        }
        else if (positionLeft + tooltipNativeElement.offsetWidth - spacing < 0) {
            positionLeft = spacing;
        }
        if (positionTop + tooltipNativeElement.offsetHeight + spacing > this.platform.height()) {
            positionTop = this.platform.height() - tooltipNativeElement.offsetHeight - spacing;
        }
        else if (positionTop + tooltipNativeElement.offsetHeight - spacing < 0) {
            positionTop = spacing;
        }
        return {
            left: positionLeft,
            top: positionTop,
        };
    };
    Tooltip.prototype.removeTooltip = function () {
        var _this = this;
        if (!this.tooltipElement) {
            this.tooltipElement = undefined;
            this.tooltipTimeout = undefined;
            return;
        }
        this.tooltipElement.instance.fadeState = 'invisible';
        this.canShow = false;
        // wait for animation to finish then clear everything out
        setTimeout(function () {
            if (_this.tooltipElement &&
                typeof _this.tooltipElement.destroy === 'function') {
                _this.tooltipElement.destroy();
            }
            _this.tooltipCtrl.removeTooltip(_this);
            _this.tooltipElement = _this.tooltipTimeout = undefined;
            _this.canShow = true;
        }, 300);
    };
    Tooltip.prototype._resetTimer = function () {
        var _this = this;
        clearTimeout(this.tooltipTimeout);
        this.tooltipTimeout = setTimeout(function () {
            _this.active = false;
        }, this.duration);
    };
    Tooltip.prototype.ngOnDestroy = function () {
        // if the timer hasn't expired or active is true when the component gets destroyed, the tooltip will remain in the DOM
        // this removes it
        this.removeTooltip();
    };
    Tooltip.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */], args: [{
                    selector: '[tooltip]',
                },] },
    ];
    /** @nocollapse */
    Tooltip.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__tooltip_cotroller__["a" /* TooltipController */], },
    ]; };
    Tooltip.propDecorators = {
        "tooltipHtml": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "tooltip": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "positionV": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "positionH": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "event": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "mobileEvent": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "desktopEvent": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "topOffset": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "leftOffset": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "hideOthers": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "navTooltip": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "arrow": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "duration": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "active": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "onClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */], args: ['click',] },],
        "onPress": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */], args: ['press',] },],
        "onMouseEnter": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */], args: ['mouseenter',] },],
        "onMouseLeave": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */], args: ['mouseleave',] },],
    };
    return Tooltip;
}());

//# sourceMappingURL=tooltip.directive.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
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


var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, modalCtrl, menuCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this.showArrow = false;
        this.duration = 3000;
    }
    MainPage.prototype.weedgram = function () {
        this.navCtrl.push('WeedgramPage', {}, { animate: false });
    };
    // right menu2 disable
    MainPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false, 'menu2');
    };
    // show popup
    MainPage.prototype.showWeedgram = function () {
        var _this = this;
        setTimeout(function () {
            var alert = _this.alertCtrl.create({
                message: "\n      <div class=\"content\">\n        <div class=\"title_bar\">\n          <img src=\"../../assets/imgs/main_avatar.png\" alt=\"\">\n          <p>420Portal</p>\n        </div>\n        <img src=\"../../assets/imgs/weedgram/1.jpg\" alt=\"\" style=\"width: 100%;\">\n        <div class=\"bottome_bar\">\n          <img src=\"../../assets/imgs/icon-heart2.png\" alt=\"\">\n          <img src=\"../../assets/imgs/icon-account1.png\" alt=\"\">\n          <img src=\"../../assets/imgs/icon-send.png\" alt=\"\">\n          <img src=\"../../assets/imgs/icon-dot.png\" alt=\"\">\n        </div>\n      </div>",
                cssClass: 'showWeedgramCss'
            });
            alert.present();
        }, 500);
    };
    //touch close
    // private alert: Alert;
    MainPage.prototype.closePopup = function () {
        // this.alert.dismiss();
        // $('ion-alert').remove();
        $('ion-alert').css('display', 'none');
        // this.menuCtrl.enable(true, 'menu1');
    };
    MainPage.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create('LikePage', { enableBackdropDismiss: true });
        profileModal.present();
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"/var/www/html/galexy/Portal-master/src/pages/main/main.html"*/'<ion-header>\n  <portal-header></portal-header>\n</ion-header>\n<ion-footer>\n  <portal-footer></portal-footer>\n</ion-footer>\n<ion-content class="menu-items">\n  <div class="search_bar" ion-fixed>\n      <img src="../../assets/imgs/newfollow.png" alt="" class="onimg">\n      <input type="text" placeholder="Search Weedgram" name="companyChatUsersSearchInput">\n      <img src="../../assets/imgs/newsave.png" alt="" class="offimg">\n  </div>\n  <div class="weedgram">\n      <div class="content-overlay">\n        <p>\n          <img src="../../assets/imgs/eye.png" alt=""> \n          <span>2236</span>\n        </p>\n        <p>\n          <img src="../../assets/imgs/bottom_icon4.png" alt=""> \n          <span>9</span>\n        </p>\n      </div>\n      <div class="main_img"><img src="../../assets/imgs/weedgram.png" alt=""></div>\n  </div>\n  <div class="weedgram_content">\n      <!-- <img src="../../assets/imgs/weedgram/1.jpg" alt="" (click)="weedgram()" (click)="showCoupon()"> -->\n      <img src="../../assets/imgs/weedgram/1.jpg" alt="" (press)="presentProfileModal()" (click)="weedgram()" (touchend)="closePopup()">\n      <img src="../../assets/imgs/weedgram/2.jpg" alt="">\n      <img src="../../assets/imgs/weedgram/3.jpg" alt="">\n      <img src="../../assets/imgs/weedgram/4.jpg" alt="" >\n      <img src="../../assets/imgs/weedgram/3.jpg" alt="" >\n      <img src="../../assets/imgs/weedgram/4.jpg" alt="" >\n      <img src="../../assets/imgs/weedgram/3.jpg" alt="" >\n  </div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/galexy/Portal-master/src/pages/main/main.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip_box_component__ = __webpack_require__(733);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_directive__ = __webpack_require__(735);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltips_module__ = __webpack_require__(760);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__tooltips_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_cotroller__ = __webpack_require__(734);
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_cotroller__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_box_component__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tooltip_directive__ = __webpack_require__(735);





var TooltipsModule = (function () {
    function TooltipsModule() {
    }
    TooltipsModule.forRoot = function () {
        return {
            ngModule: TooltipsModule,
            providers: [__WEBPACK_IMPORTED_MODULE_2__tooltip_cotroller__["a" /* TooltipController */]]
        };
    };
    TooltipsModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_3__tooltip_box_component__["a" /* TooltipBox */]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_4__tooltip_directive__["a" /* Tooltip */], __WEBPACK_IMPORTED_MODULE_3__tooltip_box_component__["a" /* TooltipBox */]],
                    imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicModule */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_4__tooltip_directive__["a" /* Tooltip */]]
                },] },
    ];
    return TooltipsModule;
}());

//# sourceMappingURL=tooltips.module.js.map

/***/ })

});
//# sourceMappingURL=0.js.map