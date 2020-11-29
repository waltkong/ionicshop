import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartIndexComponent } from './index.component';

const routes: Routes = [
    {
        path: '',
        component: CartIndexComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartIndexRoutingModule {}