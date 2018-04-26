import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhanCongCongViecComponent } from './phan-cong-cong-viec/phan-cong-cong-viec.component';
import { PhanCongDeCuongComponent } from './phan-cong-de-cuong/phan-cong-de-cuong.component';
import { PhanCongCauTrucComponent } from './phan-cong-cau-truc/phan-cong-cau-truc.component';
import { PhanCongCauHoiComponent } from './phan-cong-cau-hoi/phan-cong-cau-hoi.component';

const routes: Routes = [
  {
    path: '',
    component: PhanCongCongViecComponent
  }, {
    path: 'de-cuong',
    component: PhanCongDeCuongComponent
  }, {
    path: 'cau-truc',
    component: PhanCongCauTrucComponent
  }, {
    path: 'cau-hoi',
    component: PhanCongCauHoiComponent
  }, {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PhanCongRoutingModule { }
