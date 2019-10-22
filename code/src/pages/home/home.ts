import { Component } from '@angular/core';
import { NavController, LoadingController, IonicPage, MenuController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts = [];
  totalPosts = [];
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
    public dataProvider: DataProvider, private menuCtrl: MenuController) {

      console.log('home page ')
    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
  //  loading.present();
    this.dataProvider.getHomePagePosts().then((posts)=>{
      loading.dismiss();
      console.log(posts)
      if(posts.length > 20){
        this.totalPosts = posts;
        this.posts = this.totalPosts.splice(0, 20);
      }else{
        this.posts = posts;
      }
    }).catch(error =>{
      console.log('error ' + JSON.stringify(error))
      loading.dismiss();
    })
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      if(this.totalPosts.length > 20){
        this.posts = this.posts.concat(this.totalPosts.splice(0, 20));
      }else{
        this.posts = this.posts.concat(this.totalPosts);
      }
      infiniteScroll.complete();
    }, 1000);
  }

  openImageDetails(imageId){
    this.navCtrl.setRoot('ImagedetailsPage', {image_id: imageId});
  }

  // right menu2 disable
  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'menu2');
  }
}
