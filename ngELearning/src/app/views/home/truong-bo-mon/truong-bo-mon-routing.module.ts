import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoMonComponent } from './bo-mon/bo-mon.component';
import { PhanCongComponent } from './phan-cong/phan-cong.component';
import { DuyetComponent } from './duyet/duyet.component';
import { ChiTietPhanCongComponent } from './chi-tiet-phan-cong/chi-tiet-phan-cong.component';
import { TaoDeThiComponent } from './tao-de-thi/tao-de-thi.component';


const routes: Routes = [
  {
    path: 'bo-mon',
    component: BoMonComponent
  }, {
    path: 'phan-cong',
    component: PhanCongComponent
  }, {
    path: 'duyet',
    component: DuyetComponent
  }, {
    path: 'chi-tiet-phan-cong',
    component: ChiTietPhanCongComponent
  }, {
    path: 'tao-de-thi',
    component: TaoDeThiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TruongBoMonRoutingModule { }

