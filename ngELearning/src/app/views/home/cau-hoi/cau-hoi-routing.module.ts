import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachCauHoiComponent } from './danh-sach-cau-hoi/danh-sach-cau-hoi.component';

const routes: Routes = [
  {
    path: '**',
    redirectTo: '/'
  }, {
    path: 'danh-sach-cau-hoi',
    component: DanhSachCauHoiComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CauHoiRoutingModule { }
