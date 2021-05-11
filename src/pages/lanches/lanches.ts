import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { DescricaoPage } from '../descricao/descricao';

/**
 * Generated class for the LanchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lanches',
  templateUrl: 'lanches.html',
})
export class LanchesPage {
  descricaoPage = DescricaoPage;
  @ViewChild(Nav) nav: Nav;
  lanches: Array<{ title: string, preco: string, descricao: string, img: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lanches = [
      {
          title: 'Beirute de Filé Mignon', 
          preco: 'R$ 23,90',
          img: '/assets/imgs/beirute.jpg',
          descricao: 'Pão sírio, filé mignon, ovo, alface, tomate, queijo e mostarda.'
      },
      {
          title: 'X-tudo', 
          preco: 'R$ 19,90',
          img: '/assets/imgs/xtudo.jpg',
          descricao: 'Pão de brioche, hambúrger de 200g, bacon, presunto, queijo prato, alface, tomate e maionese.'
      },
      {
          title: 'X-bacon', 
          preco: 'R$ 18,90',
          img: '/assets/imgs/xbacon.jpg',
          descricao: 'Pão de brioche, hambúrger de 200g, bacon, queijo prato, alface, tomate e maionese.'
      },
      {
          title: 'Americano', 
          preco: 'R$ 16,90',
          img: '/assets/imgs/americano.jpg',
          descricao: 'Pão de forma, presunto, queijo prato, alface, tomate e maionese.'
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanchesPage');
  }

}
