import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {GoodsModel} from '../../../models/goods.model';
import {GoodsService} from '../../../services/goods.service';

@Component({
  selector: 'app-goodsdetail',
  templateUrl: './goodsdetail.component.html',
  styleUrls: ['./goodsdetail.component.scss'],
})
export class GoodsdetailComponent implements OnInit {

  public goodsItem: GoodsModel;

  public attributeList = [
      '上市时间: 2015年9月',
      '产品规格: 1斤装',
      '产品重量: 0.5kg',
      '包装方式: 散装',
      '保质期: 6个月',
      '所属品牌: 三星',
  ];

  constructor(public goodsService: GoodsService, public activated: ActivatedRoute) {
      this.activated.queryParams.subscribe((params: Params) => {
          const goodsId = params.id;
          this.getGoodsInfo(goodsId);
      });
  }

  ngOnInit() {}

  getGoodsInfo(id: number): void{
      this.goodsService.getGoodsInfo(id).subscribe(data => {
        this.goodsItem = data ;
        console.log(data);
      });
  }


}
