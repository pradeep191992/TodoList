import { TeaCupModule } from './../../modules/tea-cup/tea-cup.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreativePageRoutingModule } from './creative-page-routing.module';
import { CreativePageComponent } from './creative-page.component';


@NgModule({
  declarations: [CreativePageComponent],
  imports: [
    CommonModule,
    CreativePageRoutingModule,
    TeaCupModule
  ]
})
export class CreativePageModule { }
