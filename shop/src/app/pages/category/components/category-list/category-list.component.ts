import { Component, OnInit } from '@angular/core';
import {GoodsCategoryModel} from '../../../../models/goods-category.model';
import {GoodsService} from '../../../../services/goods.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {

  bigCategoryList: GoodsCategoryModel[] = [];

  subCategoryList: GoodsCategoryModel[] = [];

  categoryId: number;

  constructor(private goodsService: GoodsService) { }

  ngOnInit() {
      this.goodsService.getBigCategoryList().subscribe(data => {
        this.bigCategoryList = data;
        data.map((item, index, array) => {
          if (index === 0){
            this.categoryId = item.id;
            this.changeBigCategory(item.id);
          }
        });
      });
  }

  changeBigCategory(id): void{
    this.categoryId = id;
    this.goodsService.getSubCategoryList(id).subscribe(data => {
        this.subCategoryList = data;
    });
  }

  clickSubCategory(id): void{

  }

}
