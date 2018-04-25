import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruongKhoaRoutingModule } from './truong-khoa-routing.module';
import { ThemGiangVienComponent } from './them-giang-vien/them-giang-vien.component';
import { PhanCongDayComponent } from './phan-cong-day/phan-cong-day.component';

@NgModule({
  imports: [
    CommonModule,
    TruongKhoaRoutingModule
  ],
  exports: [],
  declarations: [
    ThemGiangVienComponent,
    PhanCongDayComponent
  ],
  providers: [],
})
export class TruongKhoaModule { }
