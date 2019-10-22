import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, ModalController, MenuController, AlertController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var google;
@IonicPage()  
@Component({
  selector: 'page-companyprofile',
  templateUrl: 'companyprofile.html'

})
export class CompanyprofilePage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, private menuCtrl: MenuController, public alertCtrl: AlertController, public geolocation: Geolocation) { 
  }
  ionViewDidLoad() {
    // google map
    this.displayGoogleMap();
    this.addMarker();
    // truncate 
    var showChar = 120;
    var ellipsestext = "...";

    $(".truncate").each(function() {
      var content = $(this).html();
      if (content.length > showChar) {
        var c = content.substr(0, showChar);
        var h = content;
        var html =
          '<div class="truncate-text" style="display:block">' +
          c +
          '<span class="moreellipses">' +
          ellipsestext +
          '&nbsp;&nbsp;<a href="" class="moreless more">Read More..</a></span></span></div><div class="truncate-text" style="display:none">' +
          h +
          '<a href="" class="moreless less">Read Less..</a></span></div>';

        $(this).html(html);
      }
    });

    $(".moreless").click(function() {
      var thisEl = $(this);
      var cT = thisEl.closest(".truncate-text");
      var tX = ".truncate-text";

      if (thisEl.hasClass("less")) {
        cT.prev(tX).toggle();
        // cT.slideToggle();
        cT.toggle();
      } else {
        cT.toggle();
        cT.next(tX).fadeToggle();
      }
      return false;
    });
  }

  // display map function
  displayGoogleMap() {
    let latLng = new google.maps.LatLng(32.7886006, -117.0974963);
    let mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      fullscreenControl: true

    }
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }

  addMarker(){

    var position = new google.maps.LatLng(32.7886006, -117.0974963);
    var Marker = new google.maps.Marker({ 
          position: position,
          icon: {
            url: "../../assets/imgs/dispensary-map.png",
          },
        });
    Marker.setMap(this.map);
  }
  
  // right menu2 disable
  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'menu2');
  }
  showCoupon() {
    const alert = this.alertCtrl.create({
      message: `
      <div class="content">
        <img src="../../assets/imgs/main_avatar.png" class="avatar_img">
        <h5>Company Name</h5>
        <div class="desc">
          <p>Here is the description of the coupon. Here is the description</p>
        </div>
        <p>Expires: 8-17-2019</p>
        <img src="../../assets/imgs/logo2.png" class="bottom_logo">
      </div>`,
      buttons: ['OK'],
      cssClass: 'showCouponCss'
    });
    alert.present();
  }

}

