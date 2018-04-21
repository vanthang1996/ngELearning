import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachBoMonComponent } from './danh-sach-bo-mon/danh-sach-bo-mon.component';
import { TruongKhoaRoutingModule } from './truong-khoa-routing.module';
import { DanhSachMonHocComponent } from './danh-sach-mon-hoc/danh-sach-mon-hoc.component';
import { DanhSachGiangVienComponent } from './danh-sach-giang-vien/danh-sach-giang-vien.component';

@NgModule({
  imports: [
    CommonModule,
    TruongKhoaRoutingModule
  ],
  exports: [],
  declarations: [
    DanhSachBoMonComponent,
    DanhSachMonHocComponent,
    DanhSachGiangVienComponent
  ],
  providers: [],
})
export class TruongKhoaModule { }
