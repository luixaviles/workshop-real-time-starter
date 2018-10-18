import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    MatListModule
  ],
  declarations: []
})
export class MaterialModule { }
