import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaCupComponent } from './tea-cup.component';



@NgModule({
  declarations: [TeaCupComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TeaCupComponent
  ]
})
export class TeaCupModule { }
