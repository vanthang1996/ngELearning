import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruongBoMonRoutingModule } from './truong-bo-mon-routing.module';
import { BoMonComponent } from './bo-mon/bo-mon.component';
import { PhanCongComponent } from './phan-cong/phan-cong.component';
import { DuyetComponent } from './duyet/duyet.component';
import { ChiTietPhanCongComponent } from './chi-tiet-phan-cong/chi-tiet-phan-cong.component';
import { TaoDeThiComponent } from './tao-de-thi/tao-de-thi.component';


@NgModule({
  imports: [
    CommonModule,
    TruongBoMonRoutingModule
  ],
  exports: [],
  declarations: [
    BoMonComponent,
    PhanCongComponent,
    DuyetComponent,
    ChiTietPhanCongComponent,
    TaoDeThiComponent
  ],
  providers: [],
})
export class TruongBoMonodule { }
