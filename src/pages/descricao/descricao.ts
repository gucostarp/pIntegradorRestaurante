import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BebidaDescPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descricao',
  templateUrl: 'descricao.html',
})
export class DescricaoPage {

  bebidas: Object;
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bebidas = this.navParams.data;
   

    
  }

  

}
