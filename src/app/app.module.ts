import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { LanchesPage } from '../pages/lanches/lanches';
import { EntradasPage } from '../pages/entradas/entradas';
import { PdodiaPage } from '../pages/pdodia/pdodia';
import { PratosPage } from '../pages/pratos/pratos';
import { SobremesasPage } from '../pages/sobremesas/sobremesas';
import { DescricaoPage } from '../pages/descricao/descricao'

@NgModule({
 declarations: [
 MyApp,
 HomePage,
 BebidasPage,
 EntradasPage,
 LanchesPage,
 PdodiaPage,
 PratosPage,
 SobremesasPage,
 DescricaoPage,

 ],
 imports: [
  BrowserModule,
  IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  HomePage,
  BebidasPage,
  EntradasPage,
  LanchesPage,
  PdodiaPage,
  PratosPage,
  SobremesasPage,
  DescricaoPage,
 
 
  ],
  providers: [
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
 })
 export class AppModule {}
 
