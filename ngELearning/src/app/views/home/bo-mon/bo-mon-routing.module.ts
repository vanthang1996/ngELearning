import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachBoMonComponent } from './danh-sach-bo-mon/danh-sach-bo-mon.component';


const routes: Routes = [
  {
    path: '**',
    redirectTo: '/'
  }, {
    path: 'danh-sach-bo-mon',
    component: DanhSachBoMonComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoMonRoutingModule { }
