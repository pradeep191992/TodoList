import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreativePageRoutingModule } from './creative-page-routing.module';
import { CreativePageComponent } from './creative-page.component';


@NgModule({
  declarations: [CreativePageComponent],
  imports: [
    CommonModule,
    CreativePageRoutingModule
  ]
})
export class CreativePageModule { }
