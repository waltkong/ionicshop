import {Component, OnInit, ViewChild} from '@angular/core';
import { BannerModel } from '../../models/banner.model';
import {BannerService} from '../../services/banner.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {

  slideOpts = {
      initialSlide: 1,
      speed: 500,
      effect: 'flip',
      loop: true,
      autoplay: {
          delay: 2000
      }
  };

  datalist: BannerModel[];

  constructor(private bannerService: BannerService) { }

  ngOnInit() {
    this.getDataList();
  }

  getDataList(): void {
    this.bannerService.getDataList().subscribe(data => this.datalist = data);
    console.log(this.datalist);
  }

}
