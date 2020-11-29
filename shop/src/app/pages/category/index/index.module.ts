import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryIndexRoutingModule} from './index-routing.module';
import { CategoryIndexComponent} from './index.component';
import { CategoryListComponent} from '../components/category-list/category-list.component';

@NgModule({
  declarations: [
      CategoryIndexComponent,
      CategoryListComponent,
  ],
  imports: [
    CommonModule,
    CategoryIndexRoutingModule
  ],
  providers: [

  ],
  bootstrap:[
  ],
})
export class CategoryIndexModule { }
