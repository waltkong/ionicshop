import { Injectable } from '@angular/core';
import { CartModel } from '../models/cart.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class CartService {
    getDataList(): Observable<CartModel[]> {
        return of([
            {
                id: 1,
                name: '红萝卜2斤装',
                src: 'assets/upload/goods002.jpg',
                old_price: '3.80',
                price: '2.80',
                count: 2
            },
            {
                id: 2,
                name: '红萝卜3斤装',
                src: 'assets/upload/goods002.jpg',
                old_price: '3.80',
                price: '2.80',
                count: 2
            },
            {
                id: 3,
                name: '红萝卜4斤装',
                src: 'assets/upload/goods002.jpg',
                old_price: '3.80',
                price: '2.80',
                count: 2
            },
            {
                id: 1,
                name: '红萝卜2斤装',
                src: 'assets/upload/goods002.jpg',
                old_price: '3.80',
                price: '2.80',
                count: 2
            },
            {
                id: 2,
                name: '红萝卜3斤装',
                src: 'assets/upload/goods002.jpg',
                old_price: '3.80',
                price: '2.80',
                count: 2
            },
            {
                id: 3,
                name: '红萝卜4斤装',
                src: 'assets/upload/goods002.jpg',
                old_price: '3.80',
                price: '2.80',
                count: 2
            },
            {
                id: 1,
                name: '红萝卜2斤装',
                src: 'assets/upload/goods002.jpg',
                old_price: '3.80',
                price: '2.80',
                count: 2
            },
            {
                id: 2,
                name: '红萝卜3斤装',
                src: 'assets/upload/goods002.jpg',
                old_price: '3.80',
                price: '2.80',
                count: 2
            },
            {
                id: 3,
                name: '红萝卜4斤装',
                src: 'assets/upload/goods002.jpg',
                old_price: '3.80',
                price: '2.80',
                count: 2
            },
        ]);
    }
}
