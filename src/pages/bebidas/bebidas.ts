import { DescricaoPage } from '../descricao/descricao';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nav } from 'ionic-angular';


@IonicPage()
@Component({
    selector: 'page-bebidas',
    templateUrl: 'bebidas.html',
})


export class BebidasPage {

    descricaoPage = DescricaoPage;

    @ViewChild(Nav) nav: Nav;
    rootPage: any = BebidasPage;

    cervejas: Array<{ title: string, preco: string, img: any, descricao: string, }>;
    refrigerantes: Array<{ title: string, preco: string, img: any, descricao: string, }>;
    diversas: Array<{ title: string, preco: string, img: any, descricao: string, }>;


    constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.cervejas = [
            {
                title: 'Heineken',
                preco: 'R$ 7,90',
                img: '/assets/imgs/heineken330.jpg',
                descricao: 'Cerveja Heineken extremamente gelada'
            },
            {
                title: 'Amstel',
                preco: 'R$ 6,50',
                img: '/assets/imgs/amstel.jpg',
                descricao: 'Cerveja Amstel extremamente gelada'
            },
            {
                title: 'Skol',
                preco: 'R$ 3,20',
                img: '/assets/imgs/skol.jpg',
                descricao: 'Cerveja Skol extremamente gelada'
            },
            {
                title: 'Brahma',
                preco: 'R$ 3,10',
                img: '/assets/imgs/brahma.jpg',
                descricao: 'Cerveja Brahma extremamente gelada'
            },
            {
                title: 'Sub-Zero',
                preco: 'R$ 2,80',
                img: '/assets/imgs/subzero.jpg',
                descricao: 'Cerveja Sub-Zero extremamente gelada'
            },

        ];
        this.refrigerantes = [
            {
                title: 'Coca-Cola',
                preco: '3,10',
                img: '/assets/imgs/cocacola.jpg',
                descricao: 'Coca-Cola tradicional'
            },
            {
                title: 'Coca-Cola Zero',
                preco: '3,10',
                img: '/assets/imgs/cocazero.jpg',
                descricao: 'Coca-Cola Zero'
            },
            {
                title: 'Guaraná',
                preco: '3,10',
                img: '/assets/imgs/guarana.jpg',
                descricao: 'Guaraná Antarctica'
            },
            {
                title: 'Fanta',
                preco: '3,10',
                img: '/assets/imgs/fanta.jpg',
                descricao: 'Fanta sabores (Laranja e Uva)'
            },
            {
                title: 'H2Oh',
                preco: '3,10',
                img: '/assets/imgs/h2oh.jpg',
                descricao: 'H2Oh Limão'
            },
        ]
        this.diversas = [
            {
                title: 'Água Mineral',
                preco: '3,10',
                img: 'assets/imgs/agua.jpg',
                descricao: 'Água mineral Minalice com e sem gás'
            },
            {
                title: 'Chá Matte',
                preco: '3,10',
                img: 'assets/imgs/cha.jpg',
                descricao: 'Chá Matte leão gelado'
            },
        ];
    }
    openPage(refrigerante: any): void {
        console.log("Refrigerante", refrigerante);
        // this.nav.push(refrigerante.component);
        console.log(this);
    }
}
