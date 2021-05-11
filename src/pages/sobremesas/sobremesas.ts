import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { DescricaoPage } from '../descricao/descricao';


/**
 * Generated class for the SobremesasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sobremesas',
  templateUrl: 'sobremesas.html',
})
export class SobremesasPage {
  descricaoPage = DescricaoPage;
  
  sobremesas: Array<{ title: string, preco: string, descricao: string, img: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sobremesas = [
      {
          title: 'Petit Gateu', 
          preco: 'R$ 22,90',
          img: '/assets/imgs/petitgateu.jpg',
          descricao: 'Delicioso patit-gateu. Acompanha sorvete de creme.'
      },
      {
          title: 'Mousse de Limão', 
          preco: 'R$ 15,90',
          img: '/assets/imgs/mousselimao.jpg',
          descricao: 'Delicioso mousse de limão.'
      },
      {
          title: 'Torta Holandesa', 
          preco: 'R$ 16,90',
          img: '/assets/imgs/tortaholandesa.jpg',
          descricao: 'Fatia de torta holandesa.'
      },
      {
          title: 'Doce de leite da casa', 
          preco: 'R$ 5,90',
          img: '/assets/imgs/docedeleite.jpg',
          descricao: 'Delicioso doce de leite da casa. 100g.'
      },
    ]
  }

  
}
