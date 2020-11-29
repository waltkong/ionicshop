import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class MyIndexComponent implements OnInit {

  public toolList = [
      {
        icon: 'list-circle-outline',
        name: '我的订单',
        route: '/orderlist',
      },
      {
          icon: 'heart-outline',
          name: '常购清单',
          route: '/latestOrderlist',
      },
      {
          icon: 'person-outline',
          name: '我的资料',
          route: '/profile',
      },
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  gotoPage(route): void{
      this.router.navigate([route], { queryParams: { }});
  }

}
