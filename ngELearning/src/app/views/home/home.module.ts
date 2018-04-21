import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { MainComponent } from './home-main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { fakeBackendProvider } from '../../_helpers';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  exports: [],
  declarations: [
    MainComponent
  ],
  providers: [fakeBackendProvider],
})
export class HomeModule { }
