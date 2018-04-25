import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './home-main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }, {
    path: 'tk',
    loadChildren: './truong-khoa/truong-khoa.module#TruongKhoaModule'
  }, {
    path: 'tbm',
    loadChildren: './truong-bo-mon/truong-bo-mon.module#TruongBoMonodule'
  }, {
    path: 'gv',
    loadChildren: './giang-vien/giang-vien.module#GiangVienModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
