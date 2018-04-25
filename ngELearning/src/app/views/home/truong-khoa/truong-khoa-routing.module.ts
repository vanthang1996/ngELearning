import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemGiangVienComponent } from './them-giang-vien/them-giang-vien.component';
import { PhanCongDayComponent } from './phan-cong-day/phan-cong-day.component';


const routes: Routes = [
  {
    path: 'them-giang-vien',
    component: ThemGiangVienComponent
   }, {
     path: 'phan-cong-day',
     component: PhanCongDayComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TruongKhoaRoutingModule { }
