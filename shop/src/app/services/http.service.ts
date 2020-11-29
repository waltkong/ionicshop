import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConfig} from '../configs/app.config';

@Injectable({
    providedIn: 'root',
})

export class HttpService {

    public token = '';
    public httpHeader: any = '';
    public baseUrl = '';

    constructor(public http: HttpClient) {
        this.baseUrl = AppConfig.baseUrl;
    }

    async httpGet(url, params) {
        const httpOption = {};
        // await this.storage.get('authentication').then(val => {
        //     if (val) {
        //         httpOption = {
        //             headers: new HttpHeaders({
        //                 authentication: val
        //             }),
        //             params
        //         };
        //     } else {
        //         httpOption = {
        //             params
        //         };
        //     }
        // });
        return await new Promise((resolve, reject) => {
            this.http.get(this.baseUrl + url, httpOption).subscribe((res) => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }

    // POTS请求 需要三个参数
    async httpPost(url, params) {
        const httpOption = {};
        // await this.storage.get('authentication').then(val => {
        //     httpOption = {
        //         headers: new HttpHeaders({
        //             authentication: val
        //         })
        //     };
        // });
        return await new Promise((resolve, reject) => {
            this.http.post(this.baseUrl + url, params, httpOption).subscribe((res) => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
}

