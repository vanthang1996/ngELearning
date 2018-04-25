import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiangVienRoutingModule } from './giang-vien-routing.module';
import { MonHocComponent } from './mon-hoc/mon-hoc.component';
import { CongViecComponent } from './cong-viec/cong-viec.component';
import { SoanCauHoiComponent } from './soan-cau-hoi/soan-cau-hoi.component';


@NgModule({
  imports: [
    CommonModule,
    GiangVienRoutingModule
  ],
  exports: [],
  declarations: [
    MonHocComponent,
    CongViecComponent,
    SoanCauHoiComponent
  ],
  providers: [],
})
export class GiangVienModule { }
