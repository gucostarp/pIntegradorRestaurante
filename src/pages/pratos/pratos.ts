import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { DescricaoPage } from '../descricao/descricao';

/**
 * Generated class for the PratosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pratos',
  templateUrl: 'pratos.html',
})
export class PratosPage {
  descricaoPage = DescricaoPage;
  @ViewChild(Nav) nav: Nav;
  pratos: Array<{ title: string, preco: string, descricao: string, img: any }>;
  days: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pratos = [
      {
          title: 'Prato Feito', 
          preco: 'R$ 23,90',
          img: '/assets/imgs/pratofeito.png',
          descricao: 'Tradicional, preferido dos brasileiros. Contra-filé grelhado, acompanhado de arroz, feijão, ovo frito, batata frita e farofa. Acompanha salada.'
      },
      {
          title: 'Strogonoff de Carne', 
          preco: 'R$ 25,50',
          img: '/assets/imgs/strogonoff.jpg',
          descricao: 'Strogonoff de carne com arroz e batata palha.'
      },
      {
          title: 'Feijoada Completa', 
          preco: 'R$ 27,80',
          img: '/assets/imgs/feijoada.png',
          descricao: 'Deliciosa feijoada completa. Acompanha arroz, farora, vinagrete, couve e laranja.'
      },
      {
          title: 'Salmão Grelhado', 
          preco: 'R$ 36,90',
          img: '/assets/imgs/salmao.png',
          descricao: 'Filé de salmão grelhado na manteiga com arroz a grega e brócolis, também na manteiga.'
      },
      {
          title: 'Frango Grelhado', 
          preco: 'R$ 22,90',
          img: '/assets/imgs/frangogrelhado.png',
          descricao: 'Filé de frango grelhado. Acompanha arroz, feijão, batata frita e salada.'
      },
    ]

  }

}
