import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyIndexRoutingModule} from './index-routing.module';
import { MyIndexComponent } from './index.component';


@NgModule({
  declarations: [
    MyIndexComponent
  ],
  imports: [
    CommonModule,
    MyIndexRoutingModule
  ]
})
export class MyIndexModule { }
