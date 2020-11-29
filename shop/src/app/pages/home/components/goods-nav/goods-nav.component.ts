import { Component, OnInit } from '@angular/core';
import {GoodsService} from '../../../../services/goods.service';
import {GoodsCategoryModel} from '../../../../models/goods-category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goods-nav',
  templateUrl: './goods-nav.component.html',
  styleUrls: ['./goods-nav.component.scss'],
})
export class GoodsNavComponent implements OnInit {

  datalist: GoodsCategoryModel[];

  constructor(private goodsService: GoodsService, private router: Router) { }

  ngOnInit() {
    this.getGoodsNavs();
  }

  getGoodsNavs(): void {
      this.goodsService.getCategoryNavList().subscribe(data => this.datalist = data);
  }

  goToGoodsListPage(id): void{
      this.router.navigate(['/goodslist'], { queryParams: { category_id: id }});
  }

}
