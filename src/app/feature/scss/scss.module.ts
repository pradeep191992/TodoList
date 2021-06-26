import { ScssComponent } from './scss.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScssRoutingModule } from './scss-routing.module';


@NgModule({
  declarations: [ScssComponent],
  imports: [
    CommonModule,
    ScssRoutingModule
  ],
  exports: [
    ScssComponent
  ]
})
export class ScssModule { }
