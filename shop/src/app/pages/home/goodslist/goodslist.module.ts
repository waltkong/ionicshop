import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GoodslistRoutingModule } from './goodslist-routing.module';
import { GoodslistComponent } from './goodslist.component';
import { GoodsListComponent } from '../components/goods-list/goods-list.component';

@NgModule({
  declarations: [
      GoodslistComponent,
      GoodsListComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    GoodslistRoutingModule
  ],
  providers: [

  ],
  bootstrap: [
      GoodslistComponent
  ],
})
export class GoodslistModule { }
