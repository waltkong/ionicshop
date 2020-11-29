import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {GoodsdetailRoutingModule} from './goodsdetail-routing.module';
import {GoodsdetailComponent} from './goodsdetail.component';


@NgModule({
  declarations: [
      GoodsdetailComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    GoodsdetailRoutingModule
  ],
  providers: [

  ],
  bootstrap: [
      GoodsdetailComponent
  ],
})
export class GoodsdetailModule { }
