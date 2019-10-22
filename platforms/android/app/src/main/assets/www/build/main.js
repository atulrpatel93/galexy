webpackJsonp([36],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_environment__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthProvider = /** @class */ (function () {
    function AuthProvider(http) {
        this.http = http;
        this.isUserLogin = false;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.doLogin = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            header.append('Content-Type', 'application/json');
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_environment__["a" /* environment */].serverURL + 'userLogin', JSON.stringify(user), { headers: header }).subscribe(function (response) {
                if (response.Status == 'Success') {
                    resolve(response.Userdetails);
                }
                else {
                    reject(response.Message);
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    AuthProvider.prototype.doSignup = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            header.append('Content-Type', 'application/json');
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_environment__["a" /* environment */].serverURL + 'userLogin', JSON.stringify(user), { headers: header }).subscribe(function (response) {
                if (response.status == 'Success') {
                    resolve(response.data);
                }
                else {
                    reject("Unable to find the detail");
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		692,
		32
	],
	"../pages/chatwindow/chatwindow.module": [
		693,
		1
	],
	"../pages/cmedia/cmedia.module": [
		694,
		31
	],
	"../pages/comment/comment.module": [
		695,
		30
	],
	"../pages/companycoupons/companycoupons.module": [
		696,
		29
	],
	"../pages/companyprofile/companyprofile.module": [
		697,
		28
	],
	"../pages/coupon-detail/coupon-detail.module": [
		698,
		27
	],
	"../pages/coupons/coupons.module": [
		699,
		26
	],
	"../pages/dashboard/dashboard.module": [
		700,
		25
	],
	"../pages/dasheditprofile/dasheditprofile.module": [
		701,
		24
	],
	"../pages/dispensary/dispensary.module": [
		702,
		23
	],
	"../pages/dresult/dresult.module": [
		703,
		22
	],
	"../pages/editprofile/editprofile.module": [
		704,
		2
	],
	"../pages/follower-modal/follower-modal.module": [
		705,
		21
	],
	"../pages/home/home.module": [
		706,
		20
	],
	"../pages/imagedetails/imagedetails.module": [
		707,
		19
	],
	"../pages/like/like.module": [
		708,
		35
	],
	"../pages/location/location.module": [
		709,
		18
	],
	"../pages/login/login.module": [
		710,
		17
	],
	"../pages/main/main.module": [
		711,
		0
	],
	"../pages/marijuana/marijuana.module": [
		712,
		16
	],
	"../pages/marijuananews/marijuananews.module": [
		713,
		15
	],
	"../pages/menu/menu.module": [
		714,
		14
	],
	"../pages/mnews/mnews.module": [
		715,
		13
	],
	"../pages/portaldetail/portaldetail.module": [
		716,
		34
	],
	"../pages/portalprofilemenu/portalprofilemenu.module": [
		717,
		12
	],
	"../pages/profile/profile.module": [
		718,
		11
	],
	"../pages/sample-modal/sample-modal.module": [
		719,
		33
	],
	"../pages/signup/signup.module": [
		720,
		10
	],
	"../pages/straindetail/straindetail.module": [
		721,
		9
	],
	"../pages/straininventorydetails/straininventorydetails.module": [
		727,
		8
	],
	"../pages/strains/strains.module": [
		722,
		7
	],
	"../pages/strainsubdetail/strainsubdetail.module": [
		723,
		6
	],
	"../pages/userportal/userportal.module": [
		724,
		5
	],
	"../pages/userportals/userportals.module": [
		725,
		4
	],
	"../pages/weedgram/weedgram.module": [
		726,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    serverURL: "https://www.420portal.com/mobile_api/api_live/"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_environment__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = /** @class */ (function () {
    function DataProvider(http, alertCtrl, loadingCtrl, toastCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        console.log('Hello DataProvider Provider');
    }
    /**
     * This is a toast message function
     * @param message - string of message to be shown
     */
    DataProvider.prototype.showToast = function (message) {
        this.toastCtrl.create({
            message: message,
            position: 'bottom',
            duration: 2000
        }).present();
    };
    /** ALert message popup.
     * @param {String} error - Error message to display
     */
    DataProvider.prototype.errorALertMessage = function (error) {
        this.alertCtrl.create({
            title: 'Error',
            message: error,
            enableBackdropDismiss: false,
            buttons: ['Ok']
        }).present();
    };
    /** Show Loading popup. */
    DataProvider.prototype.showLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loader.present();
    };
    /** Hide loading popup. */
    DataProvider.prototype.hideLoading = function () {
        if (this.loader) {
            this.loader.dismissAll();
        }
    };
    /**
     * convert base 64 data to file
     * @param base64data base 64 string
     */
    DataProvider.prototype.dataURLtoFile = function (base64data) {
        return new Promise(function (resolve) {
            var sliceSize = 1024;
            var block = base64data.split(";");
            var contentType = block[0].split(":")[1]; // In this case "image/gif"
            var realData = block[1].split(",")[1]; // In this case "R0lGODlhPQBEAPeoAJosM...."
            var byteCharacters = atob(realData);
            var byteArrays = [];
            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);
                var byteNumbers = new Array(slice.length);
                for (var i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }
            var blob = new Blob(byteArrays, { type: contentType });
            resolve(blob);
        });
    };
    DataProvider.prototype.getHomePagePosts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            header.append('Content-Type', 'application/json');
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_environment__["a" /* environment */].serverURL + 'homePagePosts', { headers: header }).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    DataProvider.prototype.getPostDetails = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log(data);
            var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            header.append('Content-Type', 'application/json');
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_environment__["a" /* environment */].serverURL + 'getHomePostDetail', JSON.stringify(data), { headers: header }).subscribe(function (response) {
                if (response.status == 'Success') {
                    resolve(response.data);
                }
                else {
                    reject("Unable to find the detail");
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    DataProvider.prototype.getStarinParentCategories = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            header.append('Content-Type', 'application/json');
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_environment__["a" /* environment */].serverURL + 'getStarinParentCategories', { headers: header }).subscribe(function (response) {
                resolve(response);
                console.log(response);
            });
        });
    };
    DataProvider.prototype.getUserProfileDetails = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // console.log(data);
            var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            header.append('Content-Type', 'application/json');
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_environment__["a" /* environment */].serverURL + 'getUserProfileDetails', JSON.stringify(data), { headers: header }).subscribe(function (response) {
                if (response.Status == 'Success') {
                    // console.log(response);
                    resolve(response.Userdetails);
                }
                else {
                    reject("Unable to find the detail");
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    DataProvider.prototype.getUserPortalsData = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // console.log(data);
            var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            header.append('Content-Type', 'application/json');
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_environment__["a" /* environment */].serverURL + 'getUserPortalsData', JSON.stringify(data), { headers: header }).subscribe(function (response) {
                if (response.Status == 'Success') {
                    // console.log(response);
                    resolve({ allPortalsData: response.Userportals });
                }
                else {
                    reject("Unable to find the detail");
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    DataProvider.prototype.getSpecificUserPortalData = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // console.log(data);
            var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            header.append('Content-Type', 'application/json');
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_environment__["a" /* environment */].serverURL + 'getSpecificUserPortalData', JSON.stringify(data), { headers: header }).subscribe(function (response) {
                if (response.Status == 'Success') {
                    // console.log(response);
                    resolve(response.Portaldata);
                }
                else {
                    reject("Unable to find the detail");
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    DataProvider.prototype.getPortalProfile = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // console.log(data);
            var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            header.append('Content-Type', 'application/json');
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_environment__["a" /* environment */].serverURL + 'getPortalProfileData', JSON.stringify(data), { headers: header }).subscribe(function (response) {
                if (response.Status == 'Success') {
                    console.log(response);
                    resolve({
                        portalData: response.Portaldata,
                        portalPosts: response.Portalposts,
                        openStat: response.Openstatus,
                        storeType: response.Storetype
                    });
                }
                else {
                    reject("Unable to find the detail");
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    DataProvider.prototype.getStrainCategoryData = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // console.log(data);
            var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            header.append('Content-Type', 'application/json');
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_environment__["a" /* environment */].serverURL + 'getStrainCategoryData', JSON.stringify(data), { headers: header }).subscribe(function (response) {
                if (response.Status == 'Success') {
                    console.log(response);
                    resolve({ categoryData: response.Category, categoryStrains: response.Strains });
                }
                else {
                    reject("Unable to find the detail");
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    DataProvider.prototype.getStrainDetailsData = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // console.log(data);
            var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            header.append('Content-Type', 'application/json');
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_environment__["a" /* environment */].serverURL + 'getStrainDetails', JSON.stringify(data), { headers: header }).subscribe(function (response) {
                if (response.Status == 'Success') {
                    console.log(response);
                    resolve({ strainData: response.Strain, strainInventory: response.Inventory, strainPics: response.Strainpics });
                }
                else {
                    reject("Unable to find the detail");
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    DataProvider.prototype.getPortalProfileMenu = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // console.log(data);
            var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            header.append('Content-Type', 'application/json');
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_environment__["a" /* environment */].serverURL + 'getPortalProfileMenu', JSON.stringify(data), { headers: header }).subscribe(function (response) {
                if (response.Status == 'Success') {
                    // console.log(response);
                    resolve({ strainCats: response.Straincats, strainList: response.Strains });
                }
                else {
                    reject("Unable to find the detail");
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    DataProvider.prototype.getImagePageDetails = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // console.log(data);
            var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            header.append('Content-Type', 'application/json');
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_environment__["a" /* environment */].serverURL + 'getImageFullDetails', JSON.stringify(data), { headers: header }).subscribe(function (response) {
                if (response.Status == 'Success') {
                    console.log(response);
                    resolve({ imageDetails: response.ImageData });
                }
                else {
                    reject("Unable to find the detail");
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    DataProvider.prototype.searchStrains = function (searchKey) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            header.append('Content-Type', 'application/json');
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_environment__["a" /* environment */].serverURL + 'search_strain?term=' + searchKey, { headers: header }).subscribe(function (response) {
                resolve(response);
            }, function (err) {
                console.log(err);
            });
        });
    };
    DataProvider.prototype.savePortalMenuData = function (data, file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            //let body: FormData = this.makeObjectToUrlParams(data);
            var body = new FormData();
            body.set('data', JSON.stringify(data));
            if (file != '') {
                body.set('strain_image', file);
            }
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_environment__["a" /* environment */].serverURL + 'Rider/update_rider_profile', body, { headers: header }).subscribe(function (response) {
                if (response.success == 'true' || response.success == true) {
                    resolve(response.data);
                }
                else {
                    reject(response.message);
                }
            }, function (error) {
                reject(error.message);
            });
        });
    };
    DataProvider.prototype.getEmojis = function () {
        var EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        var EmojiArr = EMOJIS.split(' ');
        var groupNum = Math.ceil(EmojiArr.length / (24));
        var items = [];
        for (var i = 0; i < groupNum; i++) {
            items.push(EmojiArr.slice(i * 24, (i + 1) * 24));
        }
        return items;
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["B" /* ToastController */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(363);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_selectable__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_img_viewer__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_data_data__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__(690);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// test modal
// import { SampleModalPage } from '../pages/sample-modal/sample-modal';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
                // SampleModalPage
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9_ionic_img_viewer__["b" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatwindow/chatwindow.module#ChatwindowPageModule', name: 'ChatwindowPage', segment: 'chatwindow', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cmedia/cmedia.module#CmediaPageModule', name: 'CmediaPage', segment: 'cmedia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comment/comment.module#CommentPageModule', name: 'CommentPage', segment: 'comment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/companycoupons/companycoupons.module#CompanycouponsPageModule', name: 'CompanycouponsPage', segment: 'companycoupons', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/companyprofile/companyprofile.module#CompanyprofilePageModule', name: 'CompanyprofilePage', segment: 'companyprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coupon-detail/coupon-detail.module#CouponDetailPageModule', name: 'CouponDetailPage', segment: 'coupon-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coupons/coupons.module#CouponsPageModule', name: 'CouponsPage', segment: 'coupons', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dasheditprofile/dasheditprofile.module#DasheditprofilePageModule', name: 'DasheditprofilePage', segment: 'dasheditprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dispensary/dispensary.module#DispensaryPageModule', name: 'DispensaryPage', segment: 'dispensary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dresult/dresult.module#DresultPageModule', name: 'DresultPage', segment: 'dresult', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/follower-modal/follower-modal.module#FollowerModalPageModule', name: 'FollowerModalPage', segment: 'follower-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/imagedetails/imagedetails.module#ImagedetailsPageModule', name: 'ImagedetailsPage', segment: 'imagedetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/like/like.module#LikePageModule', name: 'LikePage', segment: 'like', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/marijuana/marijuana.module#MarijuanaPageModule', name: 'MarijuanaPage', segment: 'marijuana', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/marijuananews/marijuananews.module#MarijuananewsPageModule', name: 'MarijuananewsPage', segment: 'marijuananews', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mnews/mnews.module#MnewsPageModule', name: 'MnewsPage', segment: 'mnews', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/portaldetail/portaldetail.module#PortaldetailPageModule', name: 'PortaldetailPage', segment: 'portaldetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/portalprofilemenu/portalprofilemenu.module#PortalprofilemenuPageModule', name: 'PortalprofilemenuPage', segment: 'portalprofilemenu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sample-modal/sample-modal.module#SampleModalPageModule', name: 'SampleModalPage', segment: 'sample-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/straindetail/straindetail.module#StraindetailPageModule', name: 'StraindetailPage', segment: 'straindetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/strains/strains.module#StrainsPageModule', name: 'StrainsPage', segment: 'strains', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/strainsubdetail/strainsubdetail.module#StrainsubdetailPageModule', name: 'StrainsubdetailPage', segment: 'strainsubdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userportal/userportal.module#UserportalPageModule', name: 'UserportalPage', segment: 'userportal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userportals/userportals.module#UserportalsPageModule', name: 'UserportalsPage', segment: 'userportals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/weedgram/weedgram.module#WeedgramPageModule', name: 'WeedgramPage', segment: 'weedgram', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/straininventorydetails/straininventorydetails.module#StraininventorydetailsPageModule', name: 'StraininventorydetailsPage', segment: 'straininventorydetails', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3_ionic_selectable__["a" /* IonicSelectableModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
                // SampleModalPage
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_10__providers_data_data__["a" /* DataProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, authProvider) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.authProvider = authProvider;
        this.rootPage = "HomePage";
        this.userDetails = [];
        this.weightAlertOpts = {
            cssClass: 'weightAlertCss'
        };
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: "HomePage" },
            // { title: 'Map', component: "LocationPage" },
            { title: 'Dispensary Delivery Doctor', component: "DispensaryPage" },
            { title: 'Chat', component: "ChatPage" },
            { title: 'Marijuana Strains', component: "StrainsPage" },
            { title: 'Coupons', component: "CouponsPage" },
            { title: 'Portals', component: "UserportalPage" },
            { title: 'Profile Settings', component: "ProfilesettingPage" },
            { title: 'Dashboard', component: "DashboardPage" },
            { title: 'User Portals', component: "UserportalsPage" },
            { title: 'Companyprofile', component: "CompanyprofilePage" },
            { title: 'Marijuana', component: "MarijuanaPage" },
            { title: 'Marijuananews', component: "MarijuananewsPage" },
            { title: 'Main', component: "MainPage" },
        ];
        if (localStorage.getItem("userCredentials")) {
            this.authProvider.isUserLogin = true;
            this.userDetails = JSON.parse(localStorage.getItem("userCredentials"));
        }
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openUserProfile = function (username) {
        console.log(username);
        this.nav.push("ProfilePage", { userName: username });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/html/galexy/Portal-master/src/app/app.html"*/'<ion-menu [content]="content" side="left" id="menu1">\n  <ion-header>\n  </ion-header>\n  <ion-content class="menu-items">\n    <ion-list no-lines>\n      <button class="menu-lists" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n        <ion-badge class="numberCircle" *ngIf="p.title==\'Chat\'">5</ion-badge>\n      </button>\n      <div *ngIf="authProvider.isUserLogin">\n        <ion-item class="menu-lists">\n          <ion-avatar item-start>\n            <img src="{{userDetails.profileImage}}" class="profileimg" menuClose\n              (click)="openUserProfile(userDetails.username)">\n          </ion-avatar>\n        </ion-item>\n        <p class="username">{{userDetails.username}}</p>\n      </div>\n      <button ion-button menuClose color="lowercolor" class="menu-lists login-button" (click)="nav.push(\'LoginPage\')"\n        *ngIf="!authProvider.isUserLogin">Login</button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-menu [content]="content" side="right" id="menu2">\n  <ion-content>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-list>\n            <ion-item>\n              <input type="checkbox" id="ch1" checked>\n              <label for="ch1">Storefront</label>\n            </ion-item>\n            <ion-item>\n              <input type="checkbox" id="ch2" checked>\n              <label for="ch2">Delivery</label>\n            </ion-item>\n            <ion-item>\n              <input type="checkbox" id="ch3" checked>\n              <label for="ch3">Doctor</label>\n            </ion-item>\n            <ion-item>\n              <input type="checkbox" id="ch4">\n              <label for="ch4">Recreational</label>\n            </ion-item>\n            <ion-item>\n              <input type="checkbox" id="ch5">\n              <label for="ch5">Credit Cards</label>\n            </ion-item>\n            <ion-item>\n              <input type="checkbox" id="ch6">\n              <label for="ch6">18+</label>\n            </ion-item>\n            <ion-item>\n              <input type="checkbox" id="ch7">\n              <label for="ch7">Open Now</label>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n        <ion-col class="tright">\n          <p>38 Results</p>\n          <div class="wait_for">\n            <p>Wait for it...</p>\n            <img src="../../assets/imgs/main_avatar.png" alt="">\n          </div>\n          <ion-item>\n            <ion-label floating>Search Company</ion-label>\n            <ion-input type="text" value="" name="company"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class="hr_div"></div>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-list>\n            <ion-item>\n              <input type="radio" id="ra1" name="search_radio" checked>\n              <label for="ra1">Flowers - Indica</label>\n            </ion-item>\n            <ion-item>\n              <input type="radio" id="ra2" name="search_radio">\n              <label for="ra2">Flowers - Sativa</label>\n            </ion-item>\n            <ion-item>\n              <input type="radio" id="ra3" name="search_radio">\n              <label for="ra3">Flowers - Hybrid</label>\n            </ion-item>\n            <ion-item>\n              <input type="radio" id="ra4" name="search_radio">\n              <label for="ra4">Concentrates</label>\n            </ion-item>\n            <ion-item>\n              <input type="radio" id="ra5" name="search_radio">\n              <label for="ra5">Edibles</label>\n            </ion-item>\n            <ion-item>\n              <input type="radio" id="ra6" name="search_radio">\n              <label for="ra6">Drinks</label>\n            </ion-item>\n            <ion-item>\n              <input type="radio" id="ra7" name="search_radio">\n              <label for="ra7">Topical</label>\n            </ion-item>\n            <ion-item>\n              <input type="radio" id="ra8" name="search_radio">\n              <label for="ra8">Clones</label>\n            </ion-item>\n            <ion-item>\n              <input type="radio" id="ra9" name="search_radio">\n              <label for="ra9">Seeds</label>\n            </ion-item>\n            <ion-item>\n              <input type="radio" id="ra10" name="search_radio">\n              <label for="ra10">Merchandise</label>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n        <ion-col class="dright" style="margin-top:67px;">\n          <ion-list>\n            <ion-item>\n              <ion-label floating>Search Products</ion-label>\n              <ion-input type="text" value=""></ion-input>\n            </ion-item>\n            <ion-item class="weight_sel">\n                <ion-label floating>Weight Amount</ion-label>\n              <ion-select [(ngModel)]="weight" interface="popover"\n                  [selectOptions]="weightAlertOpts" floating>\n                <ion-option name="price_half_gram" value="price_half_gram">0.5g</ion-option>\n                <ion-option name="price_gram" value="price_gram">g</ion-option>\n                <ion-option name="price_eighth" value="price_eighth">1/8</ion-option>\n                <ion-option name="price_quarter" value="price_quarter">1/4</ion-option>\n                <ion-option name="price_half_oz" value="price_half_oz">1/2</ion-option>\n                <ion-option name="price_oz" value="price_oz">oz</ion-option>\n                <ion-option name="price_each" value="price_each">each</ion-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Max $</ion-label>\n              <ion-input type="text" value="" name="maxprice"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/var/www/html/galexy/Portal-master/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[358]);
//# sourceMappingURL=main.js.map