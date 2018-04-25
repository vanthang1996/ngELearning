import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonHocComponent } from './mon-hoc/mon-hoc.component';
import { CongViecComponent } from './cong-viec/cong-viec.component';
import { SoanCauHoiComponent } from './soan-cau-hoi/soan-cau-hoi.component';


const routes: Routes = [
  {
    path: 'mon-hoc',
    component: MonHocComponent
  }, {
    path: 'cong-viec',
    component: CongViecComponent
  }, {
    path: 'soan-cau-hoi',
    component: SoanCauHoiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiangVienRoutingModule { }
