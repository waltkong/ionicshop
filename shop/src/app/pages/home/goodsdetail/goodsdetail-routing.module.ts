import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoodsdetailComponent} from './goodsdetail.component';

const routes: Routes = [
    {
        path: '',
        component: GoodsdetailComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GoodsdetailRoutingModule {}