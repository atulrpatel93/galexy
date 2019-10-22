import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams } from 'ionic-angular';
import { platformCoreDynamic } from '@angular/platform-browser-dynamic/src/platform_core_dynamic';

/**
 * Generated class for the LikePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-like',
  templateUrl: 'like.html',
})
export class LikePage {
  public viewProfile:boolean=false;
  public title:boolean=false;
  public share:boolean=false;
  public option:boolean=false;

  public fillHeart:boolean = false;
  public heartanimation;

  constructor(public modalCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.fillHeart = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LikePage');
    console.log(this.fillHeart);
  }
  showTitle(title){
      console.log('start touch')
      if(title=='like'){
        this.title = true
      }else if(title=='viewProfile'){
        this.viewProfile = true
      }else if(title=='share'){
        this.share = true
      }else if(title=="option"){
        this.option = true
      }
    }
  SubmitDetails(title){
    console.log('end touch')
    this.title = false;
    this.option=false;
    this.viewProfile=false;
    this.share=false;
    if(title=='like'){
      this.fillHeart=true;
    }
    // setTimeout(() => {
    //   this.modalCtrl.dismiss();      
    // }, 200);

  }
  close(){
    this.modalCtrl.dismiss();
  }
}