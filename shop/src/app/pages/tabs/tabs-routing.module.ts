import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
        {
            path: 'home',
            loadChildren: () => import('../home/index/index.module').then(m => m.HomeIndexModule)
        },
        {
            path: 'category',
            loadChildren: () => import('../category/index/index.module').then(m => m.CategoryIndexModule)
        },
        {
            path: 'cart',
            loadChildren: () => import('../cart/index/index.module').then(m => m.CartIndexModule)
        },
        {
            path: 'my',
            loadChildren: () => import('../my/index/index.module').then(m => m.MyIndexModule)
        },
        {
            path: '',
            redirectTo: '/tabs/home',
            pathMatch: 'full'
        }
    ]
  },
  {
      path: 'goodslist',
      loadChildren: () => import('../home/goodslist/goodslist.module').then(m => m.GoodslistModule),
  },
  {
      path: 'goodsdetail',
      loadChildren: () => import('../home/goodsdetail/goodsdetail.module').then(m => m.GoodsdetailModule),
  },
  {
    path: '',
    redirectTo: '/tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
