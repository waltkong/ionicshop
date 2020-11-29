import { Injectable } from '@angular/core';
import { BannerModel } from '../models/banner.model';
import { bannerList } from '../mock/banner';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class BannerService {
    getDataList(): Observable<BannerModel[]> {
        return of(bannerList);
    }
}
