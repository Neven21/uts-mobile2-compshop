import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'add',
    loadChildren: () => import('./add-product/add-product.module').then( m => m.AddProductPageModule)
  },
  {
    path: 'edit/:productType/:productId',
    loadChildren: () => import('./update-product/update-product.module').then( m => m.UpdateProductPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
