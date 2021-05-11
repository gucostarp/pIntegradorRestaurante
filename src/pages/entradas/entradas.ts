import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { DescricaoPage } from '../descricao/descricao';
/**
 * Generated class for the EntradasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entradas',
  templateUrl: 'entradas.html',
})
export class EntradasPage {

  descricaoPage = DescricaoPage;
  @ViewChild(Nav) nav: Nav;
  entradas: Array<{ title: string, preco: string, descricao: string, img: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.entradas = [
      {
        title: 'Porção de Batata Frita',
        preco: 'R$ 23,90',
        img: '/assets/imgs/batatafrita.jpg',
        descricao: 'Porção de batata frita. Opcional com cheddar bacon sem custo adicional'
      },
      {
        title: 'Tábua de Frios',
        preco: 'R$ 32,90',
        img: '/assets/imgs/frios.jpg',
        descricao: 'Composta por azeitonas, queijo parmesão, presunto parma, salame italiano, copa lombo'
      },
      {
        title: 'Provolone à Milanesa',
        preco: 'R$ 38,90',
        img: '/assets/imgs/provolone.jpg',
        descricao: 'Provolone empanado. Porção 12 unidades.'
      },
      {
        title: 'Bruschetta',
        preco: 'R$ 22,90',
        img: '/assets/imgs/bruschetta.jpg',
        descricao: 'Bruschetta tradicional com tomate, cebola, ervas aromáticas, alho e azeite. Porção de 6 unidades.'
      },

    ]

  }


}
