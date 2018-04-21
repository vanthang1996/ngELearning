import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachBoMonComponent } from './danh-sach-bo-mon/danh-sach-bo-mon.component';
import { DanhSachMonHocComponent } from './danh-sach-mon-hoc/danh-sach-mon-hoc.component';
import { DanhSachGiangVienComponent } from './danh-sach-giang-vien/danh-sach-giang-vien.component';


const routes: Routes = [
  {
    path: 'danh-sach-bo-mon',
    component: DanhSachBoMonComponent
   }, {
     path: 'danh-sach-mon-hoc',
     component: DanhSachMonHocComponent
   }, {
     path: 'danh-sach-giang-vien',
     component: DanhSachGiangVienComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TruongKhoaRoutingModule { }
