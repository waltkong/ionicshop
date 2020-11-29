import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryIndexComponent } from './index.component';

const routes: Routes = [
    {
        path: '',
        component: CategoryIndexComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryIndexRoutingModule {}
