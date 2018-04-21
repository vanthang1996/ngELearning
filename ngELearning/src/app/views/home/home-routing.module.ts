import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './home-main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }, {
    path: 'truong-khoa',
    loadChildren: './truong-khoa/truong-khoa.module#TruongKhoaModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
