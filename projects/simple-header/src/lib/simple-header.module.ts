import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleHeaderComponent } from './simple-header.component';

@NgModule({
  declarations: [
    SimpleHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SimpleHeaderComponent
  ]
})
export class SimpleHeaderModule { }