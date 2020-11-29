import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartIndexComponent } from './index.component';
import { CartIndexRoutingModule } from './index-routing.module';


@NgModule({
  declarations: [
      CartIndexComponent
  ],
  imports: [
    CommonModule,
    CartIndexRoutingModule
  ],
  providers: [

  ],
})
export class CartIndexModule { }
