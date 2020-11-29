import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoodslistComponent} from './goodslist.component';

const routes: Routes = [
    {
        path: '',
        component: GoodslistComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GoodslistRoutingModule {}
