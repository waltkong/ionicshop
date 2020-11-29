import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyIndexComponent} from './index.component';

const routes: Routes = [
    {
        path: '',
        component: MyIndexComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyIndexRoutingModule {}
