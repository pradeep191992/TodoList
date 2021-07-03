import { TeaCupModule } from './../../modules/tea-cup/tea-cup.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    TeaCupModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
