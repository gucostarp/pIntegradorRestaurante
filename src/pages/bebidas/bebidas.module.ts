import { DescricaoPage } from '../descricao/descricao';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BebidasPage } from './bebidas';


@NgModule({
  declarations: [
    BebidasPage,
    DescricaoPage,
    
  ],
  imports: [
    IonicPageModule.forChild(BebidasPage),
    DescricaoPage
  ],
})
export class BebidasPageModule {}