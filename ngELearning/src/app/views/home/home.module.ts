import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { MainComponent } from './home-main/main.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../../_helpers/JwtInterceptor';
import { CauTrucComponent } from './cau-truc/cau-truc.component';
import { CongViecComponent } from './cong-viec/cong-viec.component';
import { ThemGiangVienComponent } from './them-giang-vien/them-giang-vien.component';
import { ThemBoMonComponent } from './them-bo-mon/them-bo-mon.component';
import { ThemMonHocComponent } from './them-mon-hoc/them-mon-hoc.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  exports: [],
  declarations: [
    MainComponent,
    CauTrucComponent,
    CongViecComponent,
    ThemGiangVienComponent,
    ThemBoMonComponent,
    ThemMonHocComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
})
export class HomeModule { }
