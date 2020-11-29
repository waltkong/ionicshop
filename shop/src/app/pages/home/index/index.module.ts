import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {HomeIndexComponent} from './index.component';
import {HomeIndexRoutingModule} from './index-routing.module';
import {BannerComponent } from '../../../components/banner/banner.component';
import {GoodsNavComponent } from '../components/goods-nav/goods-nav.component';
import {GoodsListComponent} from '../components/goods-list/goods-list.component';
import {GoodsSortComponent} from '../components/goods-sort/goods-sort.component';

@NgModule({
    declarations: [
        HomeIndexComponent,
        BannerComponent,
        GoodsNavComponent,
        GoodsListComponent,
        GoodsSortComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        HomeIndexRoutingModule,
    ],
    providers: [

    ],
    bootstrap: [
        HomeIndexComponent
    ],
})
export class HomeIndexModule { }
