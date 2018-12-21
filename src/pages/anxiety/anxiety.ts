import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';

/**
 * Generated class for the AnxietyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anxiety',
  templateUrl: 'anxiety.html',
})
export class AnxietyPage {

   information: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    let localData = this.http.get('assets/information.json').map(res => res.json().anxiety);
    localData.subscribe(data => {
      this.information = data;
      console.log(data);
    });

  }

  toggleSelect(i) {
    this.information[i].open = !this.information[i].open;
  }

  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }



  ionViewDidLoad() {


  }



}

