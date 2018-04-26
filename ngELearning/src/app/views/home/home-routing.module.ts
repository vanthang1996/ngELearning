import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './home-main/main.component';
import { CauTrucComponent } from './cau-truc/cau-truc.component';
import { CongViecComponent } from './cong-viec/cong-viec.component';
import { ThemGiangVienComponent } from './them-giang-vien/them-giang-vien.component';
import { ThemBoMonComponent } from './them-bo-mon/them-bo-mon.component';
import { ThemMonHocComponent } from './them-mon-hoc/them-mon-hoc.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }, {
    path: 'bo-mon',
    loadChildren: './bo-mon/bo-mon.module#BoMonModule'
  }, {
    path: 'mon-hoc',
    loadChildren: './mon-hoc/mon-hoc.module#MonHocModule'
  }, {
    path: 'chuong-muc',
    loadChildren: './chuong-muc/chuong-muc.module#ChuongMucModule'
  }, {
    path: 'cau-truc',
    component: CauTrucComponent
  }, {
    path: 'cau-hoi',
    loadChildren: './cau-hoi/cau-hoi.module#CauHoiModule'
  }, {
    path: 'cong-viec',
    component: CongViecComponent
  }, {
    path: 'phan-cong-day',
    loadChildren: './phan-cong-day/phan-cong-day.module#PhanCongDayModule'
  }, {
    path: 'them-giang-vien',
    component: ThemGiangVienComponent
  }, {
    path: 'them-bo-mon',
    component: ThemBoMonComponent
  }, {
    path: 'them-mon-hoc',
    component: ThemMonHocComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
