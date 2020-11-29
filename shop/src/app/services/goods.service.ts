import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {GoodsModel} from '../models/goods.model';
import {GoodsCategoryModel} from '../models/goods-category.model';
import {goodsList} from '../mock/goods';
import {goodsCategoryList} from '../mock/goods-category';

@Injectable({
    providedIn: 'root',
})

export class GoodsService {

    public eachPage = 5;

    getCategoryNavList(): Observable<GoodsCategoryModel[]> {
        return of(goodsCategoryList.filter((item, index, array) => {
            return item.parent_id === 0;
        }));
    }

    getGoodsList(pageIndex: number = 1): Observable<GoodsModel[]> {
        const start: number = (pageIndex - 1 ) * this.eachPage ;
        const end: number = start + this.eachPage;
        const  result: GoodsModel[] = [];
        console.log(goodsList.length);
        goodsList.forEach((item, index, array) => {
            if (index >= start && index < end){
                result.push(item);
            }
        });
        console.log(result.length);
        return of(result);
    }

    getBigCategoryList(): Observable<GoodsCategoryModel[]>{
        return of(goodsCategoryList.filter((item, index, array) => {
            return item.parent_id === 0;
        }));
    }

    getSubCategoryList(parentId): Observable<GoodsCategoryModel[]>{
        return of(goodsCategoryList.filter((item, index, array) => {
            return item.parent_id === parentId;
        }));
    }

    getGoodsInfo(goodsId: any): Observable<GoodsModel> {
        let res: GoodsModel = {};
        goodsList.forEach((item, index, array) => {
            if (item.id.toString() === goodsId.toString()){
                res = item;
            }
        });
        console.log(goodsList);
        console.log(goodsId);
        return of(res);
    }




}
