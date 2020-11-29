import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.scss'],
})
export class GoodslistComponent implements OnInit {

  public categoryId;
  public sortField = 'price';
  public sortWay = 'desc';

  static arrowUp = 'assets/upload/arrow_up.png';
  static arrowDown = 'assets/upload/arrow_down.png';

  public priceSortIcon = GoodslistComponent.arrowDown;
  public salesSortIcon = GoodslistComponent.arrowDown;

  constructor(public activated: ActivatedRoute) {
      this.activated.queryParams.subscribe((params: Params) => {
        console.log(params);
        this.categoryId = params.category_id;
      });
  }

  ngOnInit() {}



}
