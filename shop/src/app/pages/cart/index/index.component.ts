import { Component, OnInit } from '@angular/core';
import {CartModel} from '../../../models/cart.model';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class CartIndexComponent implements OnInit {

  totalPrice: any = '10.00';
  headText = '编辑';
  isEdit = false;
  datalist: CartModel[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCartList();
  }

  doEditOrFinish(){
    this.isEdit = !this.isEdit;
    if (this.isEdit){
      this.headText = '完成';
    }else{
      this.headText = '编辑';
    }
  }

  getCartList(): void{
      this.cartService.getDataList().subscribe(data => {
          this.datalist = data;
      });
  }

}

