import { Component, OnInit , ViewChild , Input} from '@angular/core';
import {GoodsModel} from '../../../../models/goods.model';
import {GoodsService} from '../../../../services/goods.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss'],
})
export class GoodsListComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  @Input() categoryId: any;
  @Input() sortField: string;
  @Input() sortWay: string;  // asc desc

  datalist: GoodsModel[] = [];
  pageIndex = 1;
  isEnd = false;

  constructor(private goodsService: GoodsService, private router: Router) { }

  ngOnInit() {
    this.pageIndex = 1;
    this.isEnd = false;
    this.loadData(false);
  }

  loadData(event: any): void {
    if (this.isEnd){
      return;
    }
    this.goodsService.getGoodsList(this.pageIndex).subscribe(data => {
      if (event){
          event.target.complete();
      }

      data.map((item) => {
        this.datalist.push(item);
      });
      if (data.length === 0){
          this.isEnd = true;
          if (event){
              event.target.disabled = true;
          }

      }else{
          this.pageIndex ++;
      }
    });
  }

  goToDetailPage(item: GoodsModel): void {
      this.router.navigate(['/goodsdetail'], { queryParams: { id: item.id }});
  }

  addToCart(item: object): void {

  }

}
