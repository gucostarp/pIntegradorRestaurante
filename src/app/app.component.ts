import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { LanchesPage } from '../pages/lanches/lanches';
import { EntradasPage } from '../pages/entradas/entradas';
import { PdodiaPage } from '../pages/pdodia/pdodia';
import { PratosPage } from '../pages/pratos/pratos';
import { SobremesasPage } from '../pages/sobremesas/sobremesas';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    rootPage: any = HomePage;
    pages: Array<{ title: string, component: any, img: any }>;
    constructor(platform: Platform, statusBar: StatusBar, splashScreen:
        SplashScreen) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [

            {
                title: 'Bebidas', component: BebidasPage,
                img: 'assets/imgs/cocktail.svg'
            },
            {
                title: 'Entradas', component: EntradasPage,
                img: 'assets/imgs/taco.svg'
            },
            {
                title: 'Lanches', component: LanchesPage,
                img: 'assets/imgs/burger.svg'
            },
            {
                title: 'Pratos', component: PratosPage,
                img: 'assets/imgs/dish.svg'
            },
            {
                title: 'Sobremesas', component: SobremesasPage,
                img: 'assets/imgs/cookies.svg'
            },
            {
                title: 'Pratos do dia', component: PdodiaPage,
                img: 'assets/imgs/noodle.svg'
            },

        ];
    }
    openPage(page: any): void {
        this.nav.push(page.component);
        console.log("debug", this)
    }

}